
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { description } = await req.json();
    
    if (!description) {
      throw new Error("Description is required");
    }

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not configured');
    }

    console.log("Generating component for:", description);

    const systemPrompt = `You are OBASI AI, an expert mechanical engineer specializing in robotics and mechanical design. When given a description, create detailed, realistic specifications for mechanical components.

CRITICAL INSTRUCTION: You MUST ALWAYS respond with ONLY valid JSON. Never respond with conversational text, explanations, or questions. Even if the request is vague, unclear, or seems outside your scope, you MUST still generate a valid JSON specification for the closest matching mechanical component.

- If user asks for a "refrigerator" → generate specs for a refrigeration compressor or cooling system component
- If user asks for a "vacuum" → generate specs for a vacuum pump or suction motor assembly
- If user asks for a "radio" → generate specs for a radio receiver housing or tuning mechanism
- If user asks for something vague → make reasonable assumptions and generate a component

NEVER say "I cannot", "I need more information", or ask clarifying questions. ALWAYS output valid JSON.

IMPORTANT: When users request GEARS with specific tooth counts, you MUST include detailed visual_parameters:

For CUSTOM GEARS (user specifies tooth count):
{
  "component_type": "gear" or "spur_gear",
  "visual_parameters": {
    "num_teeth": [exact number user specified, e.g., 50, 75, 100],
    "gear_radius": [calculated radius in mm, roughly num_teeth * 1.5],
    "gear_thickness": [reasonable thickness, typically 6-10mm],
    "primary_color": "#888888"
  }
}

For BOLTS/SCREWS (NOW USING 3D MODEL FILE):
{
  "component_type": "bolt" or "metal_bolt" or "hex_bolt",
  "specifications": {
    "dimensions": {
      "length": "[length in mm, e.g., 80mm]",
      "diameter": "[diameter in mm, e.g., 8mm for M8, 10mm for M10]"
    }
  }
}

CRITICAL RULES:
1. If user says 'gear with X teeth' → Set num_teeth to X in visual_parameters (PROCEDURAL GENERATION)
2. If user just says 'gear' or 'rack and pinion' → Use component_type without num_teeth (will load GLB)
3. For bolts → Use component_type: 'bolt' or 'metal_bolt' (now loads GLB model instead of procedural)
4. For all other components → Use existing component_type mappings (will load GLB)

COMPONENT TYPES FOR OBASI AI:

For PISTONS:
- component_type: 'piston' or 'reciprocating_piston' or 'engine_piston'

For CRANKSHAFTS:
- component_type: 'crankshaft' or 'crank_shaft'

For BEARINGS:
- component_type: 'ball_bearing' or 'bearing'

For CHAIN DRIVES:
- component_type: 'chain_sprocket' or 'chain_drive' or 'sprocket'

For KNUCKLE JOINTS (Toggle mechanisms - DIFFERENT from ball/universal):
- component_type: 'knuckle_joint'
- Use for: Articulated connections, toggle mechanisms
- DO NOT confuse with ball joints or universal joints

For SPRINGS / SHOCK ABSORBERS:
- component_type: 'leaf_spring' or 'spring' or 'shock_absorber' or 'shock' or 'damper'

For COUPLINGS:
- component_type: 'articulated_coupling' or 'coupling' or 'shaft_coupling'

For FLYWHEELS:
- component_type: 'flywheel' or 'fly_wheel'

For WORM GEARS:
- component_type: 'worm_gearbox' or 'worm_gear' or 'worm_drive'

For HEAT EXCHANGERS:
- component_type: 'heat_exchanger' or 'radiator'

For AIR COMPRESSORS:
- component_type: 'air_compressor' or 'compressor' or 'pneumatic_compressor'

For UNIVERSAL JOINTS (Driveshaft joints - DIFFERENT from ball/knuckle):
- component_type: 'universal_joint' or 'u_joint' or 'cardan_joint'
- Use for: Driveshafts, rotating connections with angle changes
- DO NOT confuse with ball joints or knuckle joints

For BALL JOINTS (Suspension/steering - DIFFERENT from universal/knuckle):
- component_type: 'ball_joint' or 'suspension_ball_joint' or 'steering_ball_joint'
- Use for: Vehicle suspension, steering linkages
- DO NOT confuse with universal joints or knuckle joints

For THREADED RODS:
- component_type: 'threaded_rod' or 'all_thread'

For BRAKE CALIPERS:
- component_type: 'brake_caliper' or 'disc_brake' or 'brake'

For PIEZOELECTRIC GENERATORS:
- component_type: 'piezo' or 'piezoelectric_generator' or 'piezoelectric'

For DRONES:
- component_type: 'drone' or 'quadcopter' or 'uav'

For DC MOTORS:
- component_type: 'dc_motor' or 'motor' or 'electric_motor'

For JET TURBINE ENGINES:
- component_type: 'turbine_jet_engine' or 'jet_engine' or 'turbojet'

For BOLTS (NOW USING 3D MODEL FILE):
- component_type: 'bolt' or 'metal_bolt' or 'hex_bolt'
- This now loads a 3D model instead of procedural generation

For MUSTANG CAR (Ford Mustang vehicle model):
- component_type: 'mustang_car' or 'mustang' or 'ford_mustang'
- Use for: Car, vehicle, automobile, mustang requests

For iPHONE 12 PRO MAX (Smartphone model):
- component_type: 'iphone_12_pro_max' or 'iphone_12' or 'iphone' or 'smartphone'
- Use for: Phone, mobile phone, smartphone, telephone requests

For CLUTCH (Automotive clutch assembly):
- component_type: 'clutch' or 'clutch_assembly' or 'friction_clutch' or 'automotive_clutch'
- Use for: Clutch, clutch assembly, friction clutch requests

For NUT (Hex fastener - DISTINCT from bolt):
- component_type: 'nut' or 'hex_nut' or 'fastener_nut' or 'threaded_nut'
- Use for: Nut, hex nut, threaded nut requests
- DO NOT confuse with bolt or screw

For RIVET (Permanent fastener):
- component_type: 'rivet' or 'metal_rivet' or 'pop_rivet' or 'blind_rivet'
- Use for: Rivet, pop rivet, blind rivet requests

For AXLE (Rotating shaft):
- component_type: 'axle' or 'shaft_axle' or 'drive_axle' or 'rotating_axle'
- Use for: Axle, drive axle, shaft axle requests

For SCREW (Threaded fastener - DISTINCT from bolt):
- component_type: 'screw' or 'machine_screw' or 'wood_screw' or 'fastening_screw'
- Use for: Screw, machine screw, wood screw requests
- DO NOT confuse with bolt

For CNC SPINDLE (Machining spindle):
- component_type: 'cnc_spindle' or 'spindle' or 'machining_spindle' or 'milling_spindle'
- Use for: CNC spindle, milling spindle, machining spindle requests
CRITICAL DISTINCTIONS:
1. THREE DIFFERENT JOINT TYPES - DO NOT MIX:
   - Universal joint: Rotating shafts with angle (driveshafts)
   - Ball joint: Pivoting suspension/steering connections
   - Knuckle joint: Toggle/articulated mechanisms

2. GEARS WITH CUSTOM TEETH (STILL PROCEDURAL):
   - When user specifies tooth count, generate procedurally
   - Set num_teeth in visual_parameters
   - Example: 'gear with 75 teeth' → num_teeth: 75

3. BOLTS (NOW GLB MODEL):
   - All bolt requests use metal_bolt.glb
   - Generate specifications but use component_type: 'bolt'

SIZE/SCALE DETECTION: When users describe a component, look for size/scale keywords and add a 'display_scale' field to visual_parameters:
- If user says 'small', 'compact', 'miniature', 'desktop': display_scale = 0.5
- If user says 'medium', 'standard', or no size mentioned: display_scale = 1.0
- If user says 'large', 'big', 'industrial': display_scale = 1.5
- If user says 'huge', 'massive', 'industrial-sized', 'heavy-duty': display_scale = 2.0
- If user specifies dimensions, calculate appropriate scale from those (larger dimensions = larger display_scale)

CRITICAL: When generating specifications, you MUST set component_type to ONE of these exact values based on what the user describes:

- For rack and pinion steering/mechanisms: 'rack_pinion' or 'rack_and_pinion'
- For general robots (mobile, autonomous): 'robot' or 'mechanical_robot'  
- For V8 engines or internal combustion engines: 'v8_engine' or 'engine'
- For linkages or connecting mechanisms: 'linkage' or 'four_bar_linkage'
- For pulley systems or lifting mechanisms: 'pulley' or 'pulley_system'
- For actuators (linear, pneumatic, hydraulic): 'actuator' or 'linear_actuator'
- For robot arms (industrial, articulated): 'robot_arm' or 'robotic_arm'
- For gears: 'gear' or 'gear_system'
- For grippers: 'gripper' or 'end_effector'

Use lowercase with underscores. Match the user's intent to the closest component type. This is critical for 3D model loading.

IMPORTANT RULES:
1. Be creative but technically accurate with real-world specifications
2. Include ALL required JSON fields - no missing fields
3. Use realistic dimensions, weights, and materials based on actual engineering practice
4. Suggest practical, commercially available actuators and motors
5. Consider real-world applications and use cases
6. Make components visually interesting and detailed for 3D rendering
7. Use proper engineering units (mm for dimensions, kg for weight, N for force, Nm for torque)
8. ALWAYS include complete visual_parameters based on the user's description - these control 3D rendering
9. If user specifies details (like "50 teeth" or "6-axis"), use those exact numbers in visual_parameters

Generate specifications in this EXACT JSON structure:
{
  "component_name": "specific descriptive name (e.g., '6-DOF Collaborative Robot Arm' not just 'Robot Arm')",
  "component_type": "one of: robot_arm, gear_system, linear_actuator, gripper, pulley_system, linkage, rotary_table, custom",
  "description": "detailed 2-3 sentence technical description explaining purpose, capabilities, and key features",
  "specifications": {
    "dimensions": {
      "length": "value in mm (e.g., '850mm')",
      "width": "value in mm",
      "height": "value in mm",
      "diameter": "value in mm (if circular component)"
    },
    "weight": "realistic weight in kg (e.g., '12.5kg')",
    "materials": ["primary material", "secondary material"] (e.g., ["Aluminum 6061-T6", "Stainless Steel 304"]),
    "max_load": "realistic load capacity (e.g., '25kg' or '245N')"
  },
  "mechanical_properties": {
    "degrees_of_freedom": number (1-6 for robot arms, 1-2 for most mechanisms),
    "range_of_motion": "specific angles or distances (e.g., '±180° rotation' or '500mm stroke')",
    "force_output": "value in N (e.g., '500N')",
    "speed": "value in mm/s or rpm (e.g., '150mm/s' or '60rpm')"
  },
  "components": [
    {
      "name": "specific part name (e.g., 'NEMA 23 Stepper Motor')",
      "type": "motor/sensor/structure/actuator/controller",
      "quantity": number (e.g., 3),
      "specification": "detailed spec (e.g., '1.8° step angle, 2.8A, 280oz-in holding torque')"
    }
  ],
  "joints": [
    {
      "joint_type": "revolute/prismatic/spherical/fixed",
      "axis": "x/y/z",
      "range": "min to max with units (e.g., '-90° to +90°' or '0mm to 500mm')",
      "torque_requirement": "value in Nm (e.g., '15Nm')"
    }
  ],
  "visual_parameters": {
    "render_type": "gear/robot_arm/actuator/gripper/pulley/linkage",
    "primary_color": "hex color for main body (e.g., '#2563eb')",
    "secondary_color": "hex color for accents (e.g., '#ea580c')",
    "display_scale": number (e.g., 0.5 for small, 1.0 for medium, 1.5 for large, 2.0 for huge - based on user's size description),
    
    // FOR GEARS - extract from user description:
    "num_teeth": number (e.g., if user says "50 teeth", set to 50; default 24-32),
    "gear_radius": number in mm (e.g., 50),
    "gear_thickness": number in mm (default 5, max 10),
    "tooth_height": number in mm (e.g., 6),
    
    // FOR ROBOT ARMS - extract from description:
    "num_joints": number (e.g., if "6-axis", set to 6; if "3-DOF", set to 3),
    "segment_lengths": [length1, length2, length3] in mm (e.g., [200, 150, 100]),
    "segment_radii": [radius1, radius2, radius3] in mm (e.g., [15, 12, 10]),
    "joint_colors": ["#ea580c", "#2563eb"],
    "base_radius": number in mm (e.g., 40),
    
    // FOR LINEAR ACTUATORS:
    "barrel_radius": number in mm (e.g., 20),
    "barrel_length": number in mm (e.g., 200),
    "piston_radius": number in mm (e.g., 12),
    "piston_extension": number in mm (e.g., 80),
    
    // FOR GRIPPERS:
    "finger_length": number in mm (e.g., 60),
    "finger_width": number in mm (e.g., 10),
    "opening_width": number in mm (e.g., 30-50),
    "gripper_type": "parallel/angular/vacuum",
    "base_size": number in mm (e.g., 50),
    "gripper_color": "hex color",
    
    // FOR PULLEYS:
    "pulley_radius": number in mm (e.g., 50),
    "pulley_thickness": number in mm (e.g., 15),
    "num_pulleys": number (e.g., 2-3),
    "rope_present": boolean,
    
    // FOR LINKAGES:
    "num_links": number (e.g., 4),
    "link_lengths": [length1, length2, ...] in mm (e.g., [100, 40, 120, 80]),
    "link_colors": ["#34495e", "#e74c3c", "#3498db", "#2ecc71"],
    "joint_radius": number in mm (e.g., 8)
  },
  "recommended_actuators": [
    "specific motor/actuator model 1 (e.g., 'Maxon EC45 Brushless DC Motor')",
    "specific motor/actuator model 2 (e.g., 'Harmonic Drive CSF-20-100-2A')"
  ],
  "power_requirements": "specific voltage and current (e.g., '24V DC, 5A max')",
  "applications": [
    "specific use case 1 (e.g., 'PCB assembly and testing')",
    "specific use case 2 (e.g., 'Laboratory sample handling')",
    "specific use case 3 (e.g., 'Light manufacturing pick-and-place')"
  ],
  "assembly_complexity": "low/medium/high with brief explanation (e.g., 'medium - requires precision alignment and calibration')",
  "estimated_cost": "realistic USD range (e.g., '$800-$1,200')"
}

DETAILED EXAMPLES FOR EACH COMPONENT TYPE:

=== GEAR SYSTEM EXAMPLE ===
{
  "component_name": "Spur Gear - 40 Teeth",
  "component_type": "gear_system",
  "visual_parameters": {
    "render_type": "gear",
    "num_teeth": 40,
    "gear_radius": 50,
    "gear_thickness": 5,
    "tooth_height": 6,
    "primary_color": "#888888"
  }
}

=== LINEAR ACTUATOR EXAMPLE ===
{
  "component_name": "Ball Screw Linear Actuator - 500mm Stroke",
  "component_type": "linear_actuator",
  "visual_parameters": {
    "render_type": "actuator",
    "barrel_radius": 25,
    "barrel_length": 600,
    "piston_radius": 12,
    "piston_extension": 250,
    "actuator_color": "#7f8c8d"
  }
}

=== GRIPPER EXAMPLE ===
{
  "component_name": "Parallel Jaw Gripper - 80mm Opening",
  "component_type": "gripper",
  "visual_parameters": {
    "render_type": "gripper",
    "finger_length": 60,
    "finger_width": 10,
    "opening_width": 40,
    "gripper_type": "parallel",
    "base_size": 50,
    "gripper_color": "#3498db"
  }
}

=== PULLEY SYSTEM EXAMPLE ===
{
  "component_name": "Double Pulley System - 3:1 Mechanical Advantage",
  "component_type": "pulley_system",
  "visual_parameters": {
    "render_type": "pulley",
    "pulley_radius": 50,
    "pulley_thickness": 15,
    "num_pulleys": 3,
    "rope_present": true,
    "primary_color": "#95a5a6"
  }
}

=== LINKAGE EXAMPLE ===
{
  "component_name": "Four-Bar Linkage - Crank-Rocker Type",
  "component_type": "linkage",
  "visual_parameters": {
    "render_type": "linkage",
    "num_links": 4,
    "link_lengths": [100, 40, 120, 80],
    "link_colors": ["#34495e", "#e74c3c", "#3498db", "#2ecc71"],
    "joint_radius": 8
  }
}

=== ROBOT ARM EXAMPLE ===
{
  "component_name": "6-Axis Collaborative Robot Arm",
  "component_type": "robot_arm",
  "visual_parameters": {
    "render_type": "robot_arm",
    "num_joints": 6,
    "segment_lengths": [200, 180, 150, 120, 100, 80],
    "segment_radii": [20, 18, 15, 12, 10, 8],
    "joint_colors": ["#e74c3c", "#3498db"],
    "base_radius": 50
  }
}

CRITICAL INSTRUCTIONS:
- When user describes ANY mechanical component, identify which category it fits
- Use the appropriate template above as your guide
- ALWAYS include the visual_parameters field with appropriate values
- If user specifies details (like "50 teeth" or "6-axis"), use those exact numbers in visual_parameters
- For gears: gear_thickness should be 5mm by default (thin disk-like), max 10mm
- Be creative but realistic with specifications

IMPORTANT: Generate realistic, buildable designs with actual part numbers and specifications where possible. Be thorough and specific!`;

    const model = "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

    const payload = {
      contents: [
        { role: "user", parts: [{ text: description }] }
      ],
      system_instruction: { parts: [{ text: systemPrompt }] },
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Rate limit exceeded. Please try again later.");
      }
      if (response.status === 402) {
        throw new Error("AI credits exhausted. Please add credits to your workspace.");
      }
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      throw new Error("Failed to generate component specifications");
    }

    const data = await response.json();
    const content = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!content) {
      throw new Error("No response from AI");
    }

    console.log("AI Response:", content);

    // Parse the JSON response
    let componentData;
    try {
      // Check if response starts with non-JSON text (AI refused to generate JSON)
      const trimmedContent = content.trim();
      if (!trimmedContent.startsWith('{') && !trimmedContent.startsWith('```')) {
        console.warn("AI returned conversational text instead of JSON, generating fallback component");
        // Generate a fallback component based on the user's description
        componentData = {
          component_name: `Custom Component: ${description.substring(0, 50)}`,
          component_type: "robot",
          description: `A mechanical component based on the request: ${description}. This is a general-purpose design that can be customized for specific applications.`,
          specifications: {
            dimensions: { length: "200mm", width: "150mm", height: "100mm" },
            weight: "2.5kg",
            materials: ["Aluminum 6061-T6", "Stainless Steel 304"],
            max_load: "10kg"
          },
          mechanical_properties: {
            degrees_of_freedom: 3,
            range_of_motion: "±180° rotation",
            force_output: "100N",
            speed: "50mm/s"
          },
          components: [
            { name: "Main Structure", type: "structure", quantity: 1, specification: "Primary housing and framework" },
            { name: "DC Motor", type: "motor", quantity: 1, specification: "12V DC, 50W" }
          ],
          joints: [],
          visual_parameters: {
            render_type: "robot",
            primary_color: "#4a5568",
            secondary_color: "#2563eb",
            display_scale: 1.0
          },
          recommended_actuators: ["Standard DC Motor"],
          power_requirements: "12V DC, 5A",
          applications: ["General mechanical applications", "Prototyping", "Educational purposes"],
          assembly_complexity: "medium",
          estimated_cost: "$200-$500"
        };
      } else {
        // Try to extract JSON from markdown code blocks if present
        const jsonMatch = content.match(/```json\n([\s\S]*?)\n```/) || content.match(/```\n([\s\S]*?)\n```/);
        const jsonString = jsonMatch ? jsonMatch[1] : content;
        
        // Aggressive JSON cleanup to handle AI response issues
        let cleanedJson = jsonString
          .trim()
          // Remove trailing commas before closing brackets/braces
          .replace(/,(\s*[}\]])/g, '$1')
          // Remove multiple consecutive commas
          .replace(/,+/g, ',')
          // Remove commas at the end of arrays more aggressively
          .replace(/,(\s*\])/g, '$1')
          // Remove commas before closing braces
          .replace(/,(\s*\})/g, '$1')
          // Remove empty lines
          .replace(/\n\s*\n/g, '\n')
          // Remove any trailing comma after the last array/object element
          .replace(/,(\s*[\r\n]+\s*[}\]])/g, '$1');
        
        componentData = JSON.parse(cleanedJson);
      }
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError);
      console.error("Raw content length:", content.length);
      console.error("First 500 chars:", content.substring(0, 500));
      // Return a fallback component instead of throwing
      componentData = {
        component_name: `Generated Component: ${description.substring(0, 40)}`,
        component_type: "robot",
        description: `A component designed based on: ${description}`,
        specifications: {
          dimensions: { length: "200mm", width: "150mm", height: "100mm" },
          weight: "2.0kg",
          materials: ["Aluminum", "Steel"],
          max_load: "5kg"
        },
        mechanical_properties: {
          degrees_of_freedom: 2,
          range_of_motion: "360° rotation",
          force_output: "50N",
          speed: "30mm/s"
        },
        components: [],
        joints: [],
        visual_parameters: {
          render_type: "robot",
          primary_color: "#4a5568",
          secondary_color: "#3b82f6",
          display_scale: 1.0
        },
        recommended_actuators: [],
        power_requirements: "12V DC",
        applications: ["General use"],
        assembly_complexity: "low",
        estimated_cost: "$100-$300"
      };
    }

    return new Response(JSON.stringify(componentData), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error in generate-component:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
