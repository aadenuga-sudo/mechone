
// src/data/components.ts

export type Component = {
  id: number;
  glb_filename: string;
  component_name: string;
  component_type: string;
  general_information: string;
  description: string;
  dimensions: Record<string, string | Record<string, string>>;
  materials: string[];
  physical_properties: Record<string, string>;
  mechanical_properties: Record<string, any>;
  applications: string[];
  glb_url?: string;
  power_requirements: string;
  estimated_cost: string;
  assembly_complexity: string;
  degree_of_freedom: string;
  speed: string;
  range_of_motion: string;
  force_output: string;
};

export const components: Component[] = [
  {
    "id": 1,
    "glb_filename": "actuator.glb",
    "component_name": "Linear Pneumatic Actuator",
    "component_type": "actuator",
    "general_information": "A linear actuator is a device that creates motion in a straight line, commonly used in automation and machinery. It converts energy into mechanical movement for positioning or controlling components.",
    "description": "This model features a double-acting cylinder with a piston rod that extends and retracts under pneumatic pressure. It includes mounting brackets for easy integration into systems and seals for efficient operation. The design highlights robustness with corrosion-resistant materials and precise stroke control.",
    "dimensions": {
      "length": "300 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "40 mm",
      "stroke": "200 mm",
      "other": {}
    },
    "materials": [
      "Aluminum 6061-T6",
      "Stainless Steel 304"
    ],
    "physical_properties": {
      "weight": "1.5 kg",
      "density": "2.70 g/cm³",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "500 N",
      "max_speed": "500 mm/s",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Operating pressure: 10 bar"
    },
    "applications": [
      "Industrial automation",
      "Robotics",
      "Material handling"
    ],
    "power_requirements": "Pneumatic: 4-10 bar compressed air",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (linear)",
    "speed": "Up to 500 mm/s",
    "range_of_motion": "200 mm stroke",
    "force_output": "Up to 500 N"
  },
  {
    "id": 2,
    "glb_filename": "aeroplane.glb",
    "component_name": "Single-Engine Propeller Aircraft",
    "component_type": "aeroplane",
    "general_information": "An aeroplane is a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces. It is used for transportation, recreation, and military purposes.",
    "description": "This model represents a light aircraft with a high-wing design, featuring a single propeller engine and tricycle landing gear. It includes detailed fuselage, wings with ailerons, and empennage for stability. The design emphasizes aerodynamics with streamlined shapes and lightweight construction.",
    "dimensions": {
      "length": "7000 mm",
      "width": "10000 mm",
      "height": "2500 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wingspan": "10000 mm"}
    },
    "materials": [
      "Aluminum Alloy",
      "Composite Materials"
    ],
    "physical_properties": {
      "weight": "800 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "250 km/h",
      "torque": "N/A",
      "power_rating": "100 HP",
      "other": "Cruise speed: 200 km/h"
    },
    "applications": [
      "General aviation",
      "Flight training",
      "Aerial surveying"
    ],
    "power_requirements": "100 HP aviation fuel engine",
    "estimated_cost": "$100,000-$300,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "6 (3 translational, 3 rotational)",
    "speed": "Cruise: 200 km/h, Max: 250 km/h",
    "range_of_motion": "Unlimited in flight path",
    "force_output": "Thrust: ~500-1000 N"
  },
  {
    "id": 3,
    "glb_filename": "air_compressor.glb",
    "component_name": "Portable Reciprocating Air Compressor",
    "component_type": "air_compressor",
    "general_information": "An air compressor is a device that converts power into potential energy stored in pressurized air. It is essential in various industries for powering tools and equipment.",
    "description": "This model is a single-stage reciprocating compressor with an electric motor drive and a horizontal tank. It features a pressure switch for automatic operation and safety valves. The design includes robust cast iron components for durability and efficient cooling fins.",
    "dimensions": {
      "length": "800 mm",
      "width": "400 mm",
      "height": "600 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"tank capacity": "50 liters"}
    },
    "materials": [
      "Cast Iron",
      "Steel"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "7.87 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "1500 rpm",
      "torque": "N/A",
      "power_rating": "2 HP",
      "other": "Max pressure: 8 bar"
    },
    "applications": [
      "Pneumatic tools",
      "Painting",
      "Tire inflation"
    ],
    "power_requirements": "Electric: 2 HP, 110-220V",
    "estimated_cost": "$200-$500",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "1500 rpm motor",
    "range_of_motion": "N/A",
    "force_output": "Compressed air at 8 bar"
  },
  {
    "id": 4,
    "glb_filename": "articulated_coupling.glb",
    "component_name": "Articulated Shaft Coupling",
    "component_type": "articulated_coupling",
    "general_information": "An articulated coupling is a flexible joint that connects two shafts while allowing for misalignment and transmitting torque. It is commonly used in machinery to reduce vibration and wear.",
    "description": "This model features multiple pivoting links for angular and parallel misalignment compensation. It includes precision bearings and seals for smooth operation. The design highlights high torque capacity with compact size and easy assembly.",
    "dimensions": {
      "length": "150 mm",
      "width": "100 mm",
      "height": "100 mm",
      "diameter": "80 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel Alloy",
      "Rubber"
    ],
    "physical_properties": {
      "weight": "2.0 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "5000 rpm",
      "torque": "200 Nm",
      "power_rating": "N/A",
      "other": "Misalignment: 5 degrees"
    },
    "applications": [
      "Power transmission",
      "Pumps",
      "Compressors"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Low",
    "degree_of_freedom": "3 (angular misalignment)",
    "speed": "Up to 5000 rpm",
    "range_of_motion": "5 degrees misalignment",
    "force_output": "Torque: 200 Nm"
  },
  {
    "id": 5,
    "glb_filename": "axle.glb",
    "component_name": "Solid Drive Axle",
    "component_type": "axle",
    "general_information": "An axle is a central shaft for a rotating wheel or gear, supporting the weight of the vehicle and transmitting power. It is crucial in automotive and machinery applications.",
    "description": "This model is a straight solid axle with splined ends for torque transmission and bearing surfaces. It features high-strength steel construction for durability under load. The design includes flanges for wheel mounting and precise machining for balance.",
    "dimensions": {
      "length": "1000 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "50 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Alloy Steel 4340",
      "None"
    ],
    "physical_properties": {
      "weight": "15 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "2000 kg",
      "max_speed": "3000 rpm",
      "torque": "1000 Nm",
      "power_rating": "N/A",
      "other": "Yield strength: 800 MPa"
    },
    "applications": [
      "Automotive drivetrains",
      "Heavy machinery",
      "Agricultural equipment"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$100-$300",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Torque: 1000 Nm, Load: 2000 kg"
  },
  {
    "id": 6,
    "glb_filename": "ball_bearing.glb",
    "component_name": "Deep Groove Ball Bearing",
    "component_type": "ball_bearing",
    "general_information": "A ball bearing is a type of rolling-element bearing that uses balls to maintain separation between bearing races. It reduces friction and supports radial and axial loads in rotating machinery.",
    "description": "This model is a single-row deep groove ball bearing with steel balls and races. It includes shields or seals for contamination protection and lubrication retention. The design emphasizes low noise and high-speed capability with precise tolerances.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "50 mm",
      "stroke": "N/A",
      "other": {"inner diameter": "20 mm", "outer diameter": "50 mm", "width": "15 mm"}
    },
    "materials": [
      "Chrome Steel SAE 52100",
      "None"
    ],
    "physical_properties": {
      "weight": "0.2 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "5000 N",
      "max_speed": "10000 rpm",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Dynamic load rating: 8000 N"
    },
    "applications": [
      "Electric motors",
      "Automotive wheels",
      "Conveyors"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$5-$20",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 10000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Load: 5000 N"
  },
  {
    "id": 7,
    "glb_filename": "ball_joint.glb",
    "component_name": "Automotive Ball Joint",
    "component_type": "ball_joint",
    "general_information": "A ball joint is a spherical bearing that allows for multi-axis rotation and pivoting. It is widely used in vehicle suspensions to connect control arms to steering knuckles.",
    "description": "This model features a steel ball stud encased in a housing with a polymer liner for smooth movement. It includes a grease fitting for lubrication and a dust boot for protection. The design highlights high load capacity and durability in harsh environments.",
    "dimensions": {
      "length": "100 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "40 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel",
      "Polymer"
    ],
    "physical_properties": {
      "weight": "0.5 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Zinc Plated"
    },
    "mechanical_properties": {
      "max_load": "1000 N",
      "max_speed": "N/A",
      "torque": "50 Nm",
      "power_rating": "N/A",
      "other": "Angular deflection: 30 degrees"
    },
    "applications": [
      "Vehicle suspension",
      "Steering systems",
      "Robotics"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$10-$30",
    "assembly_complexity": "Low",
    "degree_of_freedom": "3 (rotational)",
    "speed": "N/A",
    "range_of_motion": "30 degrees angular",
    "force_output": "1000 N"
  },
  {
    "id": 8,
    "glb_filename": "brake_caliper.glb",
    "component_name": "Floating Disc Brake Caliper",
    "component_type": "brake_caliper",
    "general_information": "A brake caliper is a device that houses the brake pads and pistons, squeezing them against the rotor to slow or stop a vehicle. It is a key component in disc brake systems.",
    "description": "This model is a single-piston floating caliper with aluminum housing for lightweight performance. It features hydraulic actuation and mounting brackets for easy installation. The design includes vented pistons for heat dissipation and corrosion-resistant finishes.",
    "dimensions": {
      "length": "200 mm",
      "width": "100 mm",
      "height": "80 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"piston diameter": "50 mm"}
    },
    "materials": [
      "Aluminum Alloy",
      "Steel"
    ],
    "physical_properties": {
      "weight": "2.5 kg",
      "density": "2.70 g/cm³",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "300 Nm",
      "power_rating": "N/A",
      "other": "Clamping force: 5000 N"
    },
    "applications": [
      "Automotive braking",
      "Motorcycle brakes",
      "Industrial machinery"
    ],
    "power_requirements": "Hydraulic pressure: 50-100 bar",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (linear piston)",
    "speed": "N/A",
    "range_of_motion": "10-20 mm piston stroke",
    "force_output": "5000 N clamping"
  },
  {
    "id": 9,
    "glb_filename": "car.glb",
    "component_name": "Compact Sedan Automobile",
    "component_type": "car",
    "general_information": "A car is a wheeled motor vehicle used for transportation, typically powered by an internal combustion engine or electric motor. It serves as a primary mode of personal and commercial transport.",
    "description": "This model depicts a four-door sedan with front-wheel drive and aerodynamic bodywork. It includes detailed interior, suspension system, and engine compartment. The design focuses on fuel efficiency, safety features like crumple zones, and modern styling.",
    "dimensions": {
      "length": "4500 mm",
      "width": "1800 mm",
      "height": "1500 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wheelbase": "2600 mm"}
    },
    "materials": [
      "Steel Body",
      "Aluminum Components"
    ],
    "physical_properties": {
      "weight": "1200 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "200 km/h",
      "torque": "200 Nm",
      "power_rating": "150 HP",
      "other": "Fuel efficiency: 15 km/l"
    },
    "applications": [
      "Personal transportation",
      "Taxi services",
      "Rental fleets"
    ],
    "power_requirements": "150 HP gasoline or electric equivalent",
    "estimated_cost": "$15,000-$30,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "6 (vehicle dynamics)",
    "speed": "Max: 200 km/h",
    "range_of_motion": "Unlimited on roads",
    "force_output": "Torque: 200 Nm"
  },
  {
    "id": 10,
    "glb_filename": "chain_and_sprocket.glb",
    "component_name": "Roller Chain and Sprocket Assembly",
    "component_type": "chain_and_sprocket",
    "general_information": "A chain and sprocket system is a mechanical power transmission method using a looped chain and toothed wheels. It is used to transfer rotational motion and torque efficiently.",
    "description": "This model includes a standard roller chain with two sprockets of different sizes for speed reduction. It features precision links and pins for smooth engagement. The design highlights durability with heat-treated components and lubrication points.",
    "dimensions": {
      "length": "1000 mm",
      "width": "20 mm",
      "height": "10 mm",
      "diameter": "200 mm",
      "stroke": "N/A",
      "other": {"chain pitch": "12.7 mm"}
    },
    "materials": [
      "Carbon Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "2.0 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Oiled"
    },
    "mechanical_properties": {
      "max_load": "5000 N",
      "max_speed": "1000 rpm",
      "torque": "100 Nm",
      "power_rating": "N/A",
      "other": "Ratio: 2:1"
    },
    "applications": [
      "Bicycles",
      "Conveyors",
      "Motorcycles"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$20-$100",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 1000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "5000 N tension, 100 Nm torque"
  },
  {
    "id": 11,
    "glb_filename": "clutch.glb",
    "component_name": "Friction Plate Clutch",
    "component_type": "clutch",
    "general_information": "A clutch is a mechanical device that engages and disengages power transmission between driving and driven shafts. It is essential in vehicles for smooth gear changes.",
    "description": "This model is a multi-plate dry clutch with friction discs and pressure plates. It includes a release bearing and flywheel mounting. The design emphasizes quick engagement and high torque capacity with heat-resistant materials.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "250 mm",
      "stroke": "N/A",
      "other": {"thickness": "50 mm"}
    },
    "materials": [
      "Steel",
      "Friction Material"
    ],
    "physical_properties": {
      "weight": "5.0 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "6000 rpm",
      "torque": "300 Nm",
      "power_rating": "N/A",
      "other": "Engagement force: 2000 N"
    },
    "applications": [
      "Automotive transmissions",
      "Motorcycles",
      "Industrial machinery"
    ],
    "power_requirements": "N/A (mechanical actuation)",
    "estimated_cost": "$100-$300",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (engagement)",
    "speed": "Up to 6000 rpm",
    "range_of_motion": "5-10 mm actuation",
    "force_output": "2000 N engagement, 300 Nm torque"
  },
  {
    "id": 12,
    "glb_filename": "cnc_spindle.glb",
    "component_name": "High-Speed CNC Machine Spindle",
    "component_type": "cnc_spindle",
    "general_information": "A CNC spindle is the rotating axis of a computer numerical control machine that holds and drives the cutting tool. It is critical for precision machining operations.",
    "description": "This model features a belt-driven spindle with tapered tool holder and cooling channels. It includes precision bearings for high-speed operation and minimal runout. The design highlights vibration damping and thermal stability for accurate cuts.",
    "dimensions": {
      "length": "400 mm",
      "width": "150 mm",
      "height": "150 mm",
      "diameter": "100 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel Alloy",
      "Ceramic Bearings"
    ],
    "physical_properties": {
      "weight": "10 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "20000 rpm",
      "torque": "50 Nm",
      "power_rating": "5 kW",
      "other": "Runout: 0.005 mm"
    },
    "applications": [
      "Milling machines",
      "Lathes",
      "Engraving"
    ],
    "power_requirements": "Electric: 5 kW, 380V",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "High",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 20000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "50 Nm torque"
  },
  {
    "id": 13,
    "glb_filename": "crankshaft.glb",
    "component_name": "Four-Cylinder Engine Crankshaft",
    "component_type": "crankshaft",
    "general_information": "A crankshaft is a rotating shaft that converts reciprocating motion of pistons into rotational motion in engines. It is a vital component in internal combustion engines.",
    "description": "This model is a forged crankshaft with counterweights for balance and multiple main journals. It features oil passages for lubrication and fillet radii for strength. The design optimizes weight reduction while maintaining rigidity.",
    "dimensions": {
      "length": "500 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "60 mm",
      "stroke": "80 mm",
      "other": {}
    },
    "materials": [
      "Forged Steel 4340",
      "None"
    ],
    "physical_properties": {
      "weight": "15 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Nitrided"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "7000 rpm",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Tensile strength: 1000 MPa"
    },
    "applications": [
      "Automotive engines",
      "Marine engines",
      "Generators"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$200-$500",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 7000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Handles high torque loads"
  },
  {
    "id": 14,
    "glb_filename": "dc_motor.glb",
    "component_name": "Brushed DC Electric Motor",
    "component_type": "dc_motor",
    "general_information": "A DC motor is an electrical machine that converts direct current electrical energy into mechanical energy. It is widely used in applications requiring variable speed control.",
    "description": "This model features a permanent magnet stator and armature with commutator and brushes. It includes shaft couplings and mounting feet. The design emphasizes efficiency with low-friction bearings and thermal protection.",
    "dimensions": {
      "length": "150 mm",
      "width": "80 mm",
      "height": "80 mm",
      "diameter": "70 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel Housing",
      "Copper Windings"
    ],
    "physical_properties": {
      "weight": "1.0 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "3000 rpm",
      "torque": "1 Nm",
      "power_rating": "100 W",
      "other": "Voltage: 12 V"
    },
    "applications": [
      "Robotics",
      "Electric vehicles",
      "Appliances"
    ],
    "power_requirements": "Electric: 12V DC, 100 W",
    "estimated_cost": "$20-$100",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "1 Nm torque"
  },
  {
    "id": 15,
    "glb_filename": "drone.glb",
    "component_name": "Quadcopter Unmanned Aerial Vehicle",
    "component_type": "drone",
    "general_information": "A drone is an unmanned aircraft that can be remotely controlled or fly autonomously. It is used for aerial photography, surveillance, and delivery.",
    "description": "This model is a quadcopter with four propellers, carbon fiber frame, and integrated camera mount. It features GPS navigation and battery compartment. The design highlights lightweight construction for extended flight time and stability controls.",
    "dimensions": {
      "length": "500 mm",
      "width": "500 mm",
      "height": "200 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"propeller diameter": "250 mm"}
    },
    "materials": [
      "Carbon Fiber",
      "Plastic"
    ],
    "physical_properties": {
      "weight": "1.2 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "0.5 kg",
      "max_speed": "50 km/h",
      "torque": "N/A",
      "power_rating": "200 W",
      "other": "Flight time: 20 minutes"
    },
    "applications": [
      "Aerial photography",
      "Surveillance",
      "Agriculture monitoring"
    ],
    "power_requirements": "Battery: 200 W, LiPo 3S-4S",
    "estimated_cost": "$200-$1000",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "6 (3 translational, 3 rotational)",
    "speed": "Max: 50 km/h",
    "range_of_motion": "Unlimited in flight",
    "force_output": "Thrust per motor: ~5 N"
  },
  {
    "id": 16,
    "glb_filename": "electric_train.glb",
    "component_name": "High-Speed Electric Locomotive",
    "component_type": "electric_train",
    "general_information": "An electric train is a railway vehicle powered by electricity from overhead lines or third rails. It is efficient for mass transit and freight transport.",
    "description": "This model represents a modern electric locomotive with pantograph for power collection and bogies for stability. It includes detailed cab and underframe components. The design focuses on aerodynamic shape and regenerative braking.",
    "dimensions": {
      "length": "20000 mm",
      "width": "3000 mm",
      "height": "4000 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wheelbase": "10000 mm"}
    },
    "materials": [
      "Steel",
      "Aluminum"
    ],
    "physical_properties": {
      "weight": "80000 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "300 km/h",
      "torque": "10000 Nm",
      "power_rating": "5000 kW",
      "other": "Traction force: 300 kN"
    },
    "applications": [
      "Passenger rail",
      "Freight transport",
      "Urban transit"
    ],
    "power_requirements": "Electric: 5000 kW, 25kV AC",
    "estimated_cost": "$2,000,000-$5,000,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A (tracked vehicle)",
    "speed": "Max: 300 km/h",
    "range_of_motion": "Rail-dependent",
    "force_output": "300 kN traction"
  },
  {
    "id": 17,
    "glb_filename": "flywheel.glb",
    "component_name": "Cast Iron Engine Flywheel",
    "component_type": "flywheel",
    "general_information": "A flywheel is a mechanical device that stores rotational energy to smooth out power delivery in engines. It helps maintain consistent speed during operation.",
    "description": "This model is a disc-shaped flywheel with ring gear for starter engagement and clutch mounting surface. It features balanced design to minimize vibrations. The design includes ventilation holes for heat dissipation.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "300 mm",
      "stroke": "N/A",
      "other": {"thickness": "30 mm"}
    },
    "materials": [
      "Cast Iron",
      "None"
    ],
    "physical_properties": {
      "weight": "20 kg",
      "density": "7.20 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "6000 rpm",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Moment of inertia: 0.5 kg·m²"
    },
    "applications": [
      "Automotive engines",
      "Punching machines",
      "Energy storage"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 6000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Stores rotational energy"
  },
  {
    "id": 18,
    "glb_filename": "grinder.glb",
    "component_name": "Bench Grinder Tool",
    "component_type": "grinder",
    "general_information": "A grinder is a power tool used for grinding, cutting, and polishing materials. It is common in workshops for sharpening and shaping.",
    "description": "This model is a bench-mounted grinder with two abrasive wheels and adjustable tool rests. It features an electric motor drive and safety guards. The design emphasizes stability with a cast base and easy wheel replacement.",
    "dimensions": {
      "length": "400 mm",
      "width": "200 mm",
      "height": "300 mm",
      "diameter": "150 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Cast Iron Base",
      "Aluminum Housing"
    ],
    "physical_properties": {
      "weight": "15 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "3000 rpm",
      "torque": "N/A",
      "power_rating": "500 W",
      "other": "Wheel grit: 60"
    },
    "applications": [
      "Tool sharpening",
      "Metal deburring",
      "Woodworking"
    ],
    "power_requirements": "Electric: 500 W, 110-220V",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Grinding force dependent on user"
  },
  {
    "id": 19,
    "glb_filename": "heat_exchanger.glb",
    "component_name": "Shell and Tube Heat Exchanger",
    "component_type": "heat_exchanger",
    "general_information": "A heat exchanger is a device that transfers heat between two or more fluids without mixing them. It is used in heating, cooling, and energy recovery systems.",
    "description": "This model features a cylindrical shell with multiple tubes for fluid passage and baffles for flow direction. It includes inlet and outlet nozzles. The design highlights corrosion resistance and efficient heat transfer coefficients.",
    "dimensions": {
      "length": "1000 mm",
      "width": "300 mm",
      "height": "300 mm",
      "diameter": "250 mm",
      "stroke": "N/A",
      "other": {"tube length": "800 mm"}
    },
    "materials": [
      "Stainless Steel 316",
      "Copper Tubes"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "8.00 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Heat transfer rate: 10 kW"
    },
    "applications": [
      "HVAC systems",
      "Chemical processing",
      "Power plants"
    ],
    "power_requirements": "N/A (passive, fluid flow dependent)",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "Fluid flow: 1-5 m/s",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 20,
    "glb_filename": "knuckle_joint.glb",
    "component_name": "Mechanical Knuckle Joint",
    "component_type": "knuckle_joint",
    "general_information": "A knuckle joint is a pivoting joint that connects two rods allowing for angular movement. It is used in linkages where flexibility is needed.",
    "description": "This model consists of a forked end, eye end, and pin with retaining clips. It features forged construction for strength. The design allows for easy disassembly and lubrication.",
    "dimensions": {
      "length": "150 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "20 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Mild Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "1.0 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Galvanized"
    },
    "mechanical_properties": {
      "max_load": "5000 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Angular range: 45 degrees"
    },
    "applications": [
      "Steering linkages",
      "Railway couplings",
      "Construction equipment"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$10-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (pivoting)",
    "speed": "N/A",
    "range_of_motion": "45 degrees",
    "force_output": "5000 N"
  },
  {
    "id": 21,
    "glb_filename": "leaf_spring.glb",
    "component_name": "Multi-Leaf Suspension Spring",
    "component_type": "leaf_spring",
    "general_information": "A leaf spring is a simple form of spring made from layers of steel, used in vehicle suspensions to absorb shocks. It provides support and damping.",
    "description": "This model is a semi-elliptical leaf spring with multiple leaves clamped together. It includes eyes for mounting and rebound clips. The design optimizes load distribution and fatigue resistance.",
    "dimensions": {
      "length": "1200 mm",
      "width": "60 mm",
      "height": "100 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"number of leaves": "5"}
    },
    "materials": [
      "Spring Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "20 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "1000 kg",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Deflection: 150 mm"
    },
    "applications": [
      "Truck suspensions",
      "Trailer axles",
      "Agricultural vehicles"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (flexural)",
    "speed": "N/A",
    "range_of_motion": "150 mm deflection",
    "force_output": "1000 kg load"
  },
  {
    "id": 22,
    "glb_filename": "linkage.glb",
    "component_name": "Four-Bar Linkage Mechanism",
    "component_type": "linkage",
    "general_information": "A linkage is a mechanical system of connected rods or bars that transmit motion. It is used in machines to create specific movement patterns.",
    "description": "This model is a planar four-bar linkage with pivoting joints and adjustable lengths. It features precision machined links. The design allows for various motion outputs like oscillation or rotation.",
    "dimensions": {
      "length": "300 mm",
      "width": "200 mm",
      "height": "50 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "Steel Pins"
    ],
    "physical_properties": {
      "weight": "1.5 kg",
      "density": "2.70 g/cm³",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "200 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Motion ratio: 1:2"
    },
    "applications": [
      "Robotic arms",
      "Door mechanisms",
      "Conveyors"
    ],
    "power_requirements": "N/A (passive, driven by actuator)",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (planar motion)",
    "speed": "Dependent on drive",
    "range_of_motion": "Varies by configuration",
    "force_output": "200 N"
  },
  {
    "id": 23,
    "glb_filename": "metal_bolt.glb",
    "component_name": "Hex Head Metal Bolt",
    "component_type": "metal_bolt",
    "general_information": "A metal bolt is a threaded fastener used with a nut to join materials together. It provides strong, removable connections in structures and machines.",
    "description": "This model is a high-strength hex head bolt with full threading and chamfered end. It features metric threading for standard compatibility. The design includes a washer face for better load distribution.",
    "dimensions": {
      "length": "100 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "12 mm",
      "stroke": "N/A",
      "other": {"thread pitch": "1.75 mm"}
    },
    "materials": [
      "Alloy Steel Grade 8.8",
      "None"
    ],
    "physical_properties": {
      "weight": "0.05 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Zinc Plated"
    },
    "mechanical_properties": {
      "max_load": "8000 N",
      "max_speed": "N/A",
      "torque": "50 Nm",
      "power_rating": "N/A",
      "other": "Tensile strength: 800 MPa"
    },
    "applications": [
      "Construction",
      "Machinery assembly",
      "Automotive"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$0.50-$2",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "8000 N tensile"
  },
  {
    "id": 24,
    "glb_filename": "motorcycle.glb",
    "component_name": "Sport Motorcycle",
    "component_type": "motorcycle",
    "general_information": "A motorcycle is a two-wheeled motor vehicle designed for speed and maneuverability. It is used for transportation, recreation, and racing.",
    "description": "This model features a liquid-cooled inline-four engine, aluminum frame, and disc brakes. It includes aerodynamic fairing and suspension forks. The design emphasizes performance with low center of gravity and ergonomic seating.",
    "dimensions": {
      "length": "2100 mm",
      "width": "800 mm",
      "height": "1100 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wheelbase": "1400 mm"}
    },
    "materials": [
      "Aluminum Frame",
      "Steel Components"
    ],
    "physical_properties": {
      "weight": "200 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "250 km/h",
      "torque": "100 Nm",
      "power_rating": "150 HP",
      "other": "Acceleration: 0-100 km/h in 3 sec"
    },
    "applications": [
      "Personal transport",
      "Racing",
      "Touring"
    ],
    "power_requirements": "150 HP gasoline engine",
    "estimated_cost": "$10,000-$20,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "6 (vehicle dynamics)",
    "speed": "Max: 250 km/h",
    "range_of_motion": "Unlimited on roads",
    "force_output": "100 Nm torque"
  },
  {
    "id": 25,
    "glb_filename": "nut.glb",
    "component_name": "Hexagonal Nut Fastener",
    "component_type": "nut",
    "general_information": "A nut is a fastener with a threaded hole used in conjunction with a bolt to secure parts. It provides a secure, adjustable connection.",
    "description": "This model is a standard hex nut with internal threading and chamfered edges. It features metric sizing for compatibility. The design includes a locking feature option.",
    "dimensions": {
      "length": "N/A",
      "width": "20 mm",
      "height": "10 mm",
      "diameter": "12 mm",
      "stroke": "N/A",
      "other": {"thread pitch": "1.75 mm"}
    },
    "materials": [
      "Steel Grade 8",
      "None"
    ],
    "physical_properties": {
      "weight": "0.01 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Zinc Plated"
    },
    "mechanical_properties": {
      "max_load": "8000 N",
      "max_speed": "N/A",
      "torque": "50 Nm",
      "power_rating": "N/A",
      "other": "Proof load: 600 MPa"
    },
    "applications": [
      "Bolted joints",
      "Machinery",
      "Construction"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$0.10-$0.50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "8000 N"
  },
  {
    "id": 26,
    "glb_filename": "phone.glb",
    "component_name": "Smartphone Device",
    "component_type": "phone",
    "general_information": "A phone is a portable electronic device used for communication, internet access, and multimedia. Modern smartphones integrate computing capabilities.",
    "description": "This model features a touchscreen display, camera modules, and slim aluminum frame. It includes internal battery and circuit boards. The design emphasizes portability with wireless charging and water resistance.",
    "dimensions": {
      "length": "150 mm",
      "width": "70 mm",
      "height": "8 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "Glass"
    ],
    "physical_properties": {
      "weight": "0.2 kg",
      "density": "N/A",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Battery capacity: 4000 mAh"
    },
    "applications": [
      "Communication",
      "Entertainment",
      "Navigation"
    ],
    "power_requirements": "Battery: 4000 mAh, 5-20V charging",
    "estimated_cost": "$500-$1500",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 27,
    "glb_filename": "piezo_prototype.glb",
    "component_name": "Piezoelectric Sensor Prototype",
    "component_type": "piezo_prototype",
    "general_information": "A piezoelectric prototype is an experimental device using materials that generate voltage under mechanical stress. It is used in sensors and actuators.",
    "description": "This model features a ceramic piezo element mounted in a housing with electrodes. It includes wiring for signal output. The design highlights sensitivity and compact size for integration.",
    "dimensions": {
      "length": "50 mm",
      "width": "30 mm",
      "height": "10 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "PZT Ceramic",
      "Plastic Housing"
    ],
    "physical_properties": {
      "weight": "0.05 kg",
      "density": "7.50 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "100 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Voltage output: 10 V/g"
    },
    "applications": [
      "Vibration sensing",
      "Energy harvesting",
      "Medical devices"
    ],
    "power_requirements": "N/A (generates power from stress)",
    "estimated_cost": "$10-$50",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "Micron-level deflection",
    "force_output": "100 N max load"
  },
  {
    "id": 28,
    "glb_filename": "piston.glb",
    "component_name": "Engine Piston Assembly",
    "component_type": "piston",
    "general_information": "A piston is a component of reciprocating engines that moves within a cylinder to compress or expand gases. It transfers force from expanding gas to the crankshaft.",
    "description": "This model includes a domed piston head, rings, and wrist pin. It features lightweight aluminum construction with skirt for stability. The design optimizes combustion efficiency and heat dissipation.",
    "dimensions": {
      "length": "100 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "80 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum Alloy",
      "Steel Rings"
    ],
    "physical_properties": {
      "weight": "0.4 kg",
      "density": "2.70 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Compression ratio: 10:1"
    },
    "applications": [
      "Internal combustion engines",
      "Compressors",
      "Pumps"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$20-$100",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (linear)",
    "speed": "Dependent on engine rpm",
    "range_of_motion": "Stroke length variable",
    "force_output": "High compression forces"
  },
  {
    "id": 29,
    "glb_filename": "pulley.glb",
    "component_name": "V-Belt Pulley",
    "component_type": "pulley",
    "general_information": "A pulley is a wheel with a grooved rim used to change the direction or magnitude of a force with a belt or rope. It is used in power transmission systems.",
    "description": "This model is a cast iron V-groove pulley with keyway for shaft mounting. It features balanced design for smooth operation. The design allows for variable speed ratios.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "200 mm",
      "stroke": "N/A",
      "other": {"groove width": "20 mm"}
    },
    "materials": [
      "Cast Iron",
      "None"
    ],
    "physical_properties": {
      "weight": "3.0 kg",
      "density": "7.20 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "3000 rpm",
      "torque": "50 Nm",
      "power_rating": "N/A",
      "other": "Belt type: V"
    },
    "applications": [
      "Belt drives",
      "Elevators",
      "Conveyors"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$10-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "50 Nm torque"
  },
  {
    "id": 30,
    "glb_filename": "rack_pinion.glb",
    "component_name": "Rack and Pinion Gear System",
    "component_type": "rack_pinion",
    "general_information": "A rack and pinion is a gear system that converts rotational motion into linear motion. It is commonly used in steering systems.",
    "description": "This model includes a straight rack and spur pinion with mounting brackets. It features precision teeth for minimal backlash. The design optimizes efficiency and load capacity.",
    "dimensions": {
      "length": "500 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "100 mm",
      "stroke": "N/A",
      "other": {"module": "2"}
    },
    "materials": [
      "Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "2.5 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Hardened"
    },
    "mechanical_properties": {
      "max_load": "1000 N",
      "max_speed": "500 mm/s",
      "torque": "20 Nm",
      "power_rating": "N/A",
      "other": "Ratio: 1:20"
    },
    "applications": [
      "Steering mechanisms",
      "Linear actuators",
      "CNC machines"
    ],
    "power_requirements": "N/A (passive, driven by motor)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (linear/rotational conversion)",
    "speed": "500 mm/s linear",
    "range_of_motion": "Rack length dependent",
    "force_output": "1000 N"
  },
  {
    "id": 31,
    "glb_filename": "radio.glb",
    "component_name": "Portable AM/FM Radio",
    "component_type": "radio",
    "general_information": "A radio is an electronic device that receives and plays audio broadcasts. It is used for entertainment, news, and emergency communications.",
    "description": "This model features analog tuning, speaker, and antenna. It includes battery compartment and handle. The design emphasizes portability and clear reception.",
    "dimensions": {
      "length": "200 mm",
      "width": "100 mm",
      "height": "150 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Plastic",
      "Metal Components"
    ],
    "physical_properties": {
      "weight": "0.8 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "5 W",
      "other": "Frequency range: 530-1600 kHz AM"
    },
    "applications": [
      "Broadcast listening",
      "Emergency alerts",
      "Music playback"
    ],
    "power_requirements": "Battery or AC: 5 W",
    "estimated_cost": "$20-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 32,
    "glb_filename": "refrigerator.glb",
    "component_name": "Household Refrigerator Appliance",
    "component_type": "refrigerator",
    "general_information": "A refrigerator is an appliance that cools its interior to preserve food by removing heat. It uses a vapor-compression cycle for cooling.",
    "description": "This model is a top-freezer refrigerator with adjustable shelves and door bins. It includes compressor and evaporator coils. The design focuses on energy efficiency and quiet operation.",
    "dimensions": {
      "length": "600 mm",
      "width": "600 mm",
      "height": "1700 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"capacity": "300 liters"}
    },
    "materials": [
      "Steel Cabinet",
      "Plastic Interior"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "N/A",
      "surface_finish": "Enamel Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "150 W",
      "other": "Cooling capacity: 200 W"
    },
    "applications": [
      "Food preservation",
      "Beverage cooling",
      "Medical storage"
    ],
    "power_requirements": "Electric: 150 W, 110-220V",
    "estimated_cost": "$300-$800",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 33,
    "glb_filename": "rivet.glb",
    "component_name": "Solid Rivet Fastener",
    "component_type": "rivet",
    "general_information": "A rivet is a permanent mechanical fastener used to join materials by deforming its end. It provides strong joints in structures.",
    "description": "This model is a round head solid rivet with shank. It features aluminum construction for lightweight. The design allows for easy installation with riveting tools.",
    "dimensions": {
      "length": "20 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "5 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "None"
    ],
    "physical_properties": {
      "weight": "0.005 kg",
      "density": "2.70 g/cm³",
      "surface_finish": "Plain"
    },
    "mechanical_properties": {
      "max_load": "1000 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Shear strength: 200 MPa"
    },
    "applications": [
      "Aircraft assembly",
      "Bridge construction",
      "Sheet metal joining"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$0.05-$0.20",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "1000 N shear"
  },
  {
    "id": 34,
    "glb_filename": "robot.glb",
    "component_name": "Humanoid Robot",
    "component_type": "robot",
    "general_information": "A robot is a programmable machine capable of carrying out complex actions automatically. It is used in automation and research.",
    "description": "This model features articulated limbs, sensors, and control unit. It includes battery pack and actuators. The design emphasizes balance and mobility.",
    "dimensions": {
      "length": "N/A",
      "width": "400 mm",
      "height": "1200 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "Plastic"
    ],
    "physical_properties": {
      "weight": "20 kg",
      "density": "N/A",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "5 kg",
      "max_speed": "1 m/s",
      "torque": "10 Nm",
      "power_rating": "200 W",
      "other": "Degrees of freedom: 20"
    },
    "applications": [
      "Manufacturing",
      "Healthcare assistance",
      "Research"
    ],
    "power_requirements": "Battery: 200 W",
    "estimated_cost": "$10,000-$50,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "20",
    "speed": "1 m/s walking",
    "range_of_motion": "Joint-dependent, e.g., 180 degrees arm",
    "force_output": "10 Nm per joint, 5 kg lift"
  },
  {
    "id": 35,
    "glb_filename": "robot_arm.glb",
    "component_name": "6-Axis Industrial Robot Arm",
    "component_type": "robot_arm",
    "general_information": "A robot arm is a mechanical arm programmable in multiple axes for tasks like welding or assembly. It enhances precision and efficiency in industry.",
    "description": "This model has six degrees of freedom with servo motors and end effector mount. It features cable management and base plate. The design highlights payload capacity and reach.",
    "dimensions": {
      "length": "1000 mm",
      "width": "N/A",
      "height": "1500 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"reach": "800 mm"}
    },
    "materials": [
      "Aluminum Alloy",
      "Steel Joints"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "2.70 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "10 kg",
      "max_speed": "200 mm/s",
      "torque": "50 Nm",
      "power_rating": "1000 W",
      "other": "Repeatability: 0.1 mm"
    },
    "applications": [
      "Assembly lines",
      "Welding",
      "Pick and place"
    ],
    "power_requirements": "Electric: 1000 W, 220-380V",
    "estimated_cost": "$5,000-$20,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "6",
    "speed": "200 mm/s end effector",
    "range_of_motion": "Reach: 800 mm, joint angles vary 90-360 degrees",
    "force_output": "10 kg payload, 50 Nm torque"
  },
  {
    "id": 36,
    "glb_filename": "rocket.glb",
    "component_name": "Model Rocket Vehicle",
    "component_type": "rocket",
    "general_information": "A rocket is a vehicle that propels itself by expelling exhaust from a rocket engine. It is used for space exploration and missiles.",
    "description": "This model features a multi-stage design with fins for stability and nose cone. It includes engine mount and parachute recovery. The design optimizes aerodynamics and thrust.",
    "dimensions": {
      "length": "2000 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "100 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Composite Body",
      "Aluminum Fins"
    ],
    "physical_properties": {
      "weight": "5 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "1000 km/h",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Thrust: 500 N"
    },
    "applications": [
      "Space launch",
      "Hobby rocketry",
      "Scientific payloads"
    ],
    "power_requirements": "Solid or liquid propellant",
    "estimated_cost": "$100-$500 (model), millions for full-scale",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "6 in flight",
    "speed": "Up to 1000 km/h",
    "range_of_motion": "Vertical ascent, parabolic trajectory",
    "force_output": "500 N thrust"
  },
  {
    "id": 37,
    "glb_filename": "screw.glb",
    "component_name": "Wood Screw Fastener",
    "component_type": "screw",
    "general_information": "A screw is a threaded fastener that converts rotational force into linear motion or clamping force. It is used for joining materials.",
    "description": "This model is a tapered wood screw with Phillips head and sharp point. It features coarse threading for grip. The design allows for self-tapping.",
    "dimensions": {
      "length": "50 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "4 mm",
      "stroke": "N/A",
      "other": {"thread pitch": "2 mm"}
    },
    "materials": [
      "Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.005 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Zinc Plated"
    },
    "mechanical_properties": {
      "max_load": "500 N",
      "max_speed": "N/A",
      "torque": "2 Nm",
      "power_rating": "N/A",
      "other": "Shear strength: 400 MPa"
    },
    "applications": [
      "Woodworking",
      "Furniture assembly",
      "Construction"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$0.05-$0.20",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "500 N"
  },
  {
    "id": 38,
    "glb_filename": "threaded_rod.glb",
    "component_name": "All-Thread Rod",
    "component_type": "threaded_rod",
    "general_information": "A threaded rod is a long rod with continuous threading used for fastening or support. It can be cut to length as needed.",
    "description": "This model is a straight threaded rod with uniform pitch. It features steel construction for strength. The design allows for use with nuts and washers.",
    "dimensions": {
      "length": "1000 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "10 mm",
      "stroke": "N/A",
      "other": {"thread pitch": "1.5 mm"}
    },
    "materials": [
      "Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.6 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Plain"
    },
    "mechanical_properties": {
      "max_load": "5000 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Tensile strength: 600 MPa"
    },
    "applications": [
      "Hanging supports",
      "Bracing",
      "Mechanical assemblies"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$5-$20",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "5000 N tensile"
  },
  {
    "id": 39,
    "glb_filename": "tricycle.glb",
    "component_name": "Children's Tricycle",
    "component_type": "tricycle",
    "general_information": "A tricycle is a three-wheeled vehicle powered by human effort or motor. It provides stability for young riders or cargo transport.",
    "description": "This model features a steel frame, pedal drive, and plastic wheels. It includes handlebars and seat. The design emphasizes safety with low center of gravity.",
    "dimensions": {
      "length": "800 mm",
      "width": "500 mm",
      "height": "600 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wheel diameter": "300 mm"}
    },
    "materials": [
      "Steel",
      "Plastic"
    ],
    "physical_properties": {
      "weight": "10 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "30 kg",
      "max_speed": "10 km/h",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Gear ratio: 1:1"
    },
    "applications": [
      "Child recreation",
      "Cargo transport",
      "Rehabilitation"
    ],
    "power_requirements": "Human pedal power",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "Up to 10 km/h",
    "range_of_motion": "Unlimited on flat surfaces",
    "force_output": "Pedal force dependent"
  },
  {
    "id": 40,
    "glb_filename": "turbine_jet_engine.glb",
    "component_name": "Turbofan Jet Engine",
    "component_type": "turbine_jet_engine",
    "general_information": "A turbine jet engine is a type of internal combustion engine that produces thrust by expelling hot gases. It powers aircraft efficiently at high speeds.",
    "description": "This model features compressor stages, combustion chamber, and turbine. It includes bypass fan for efficiency. The design highlights high-temperature materials and aerodynamic blades.",
    "dimensions": {
      "length": "3000 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "1500 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Titanium Alloys",
      "Nickel Superalloys"
    ],
    "physical_properties": {
      "weight": "1000 kg",
      "density": "N/A",
      "surface_finish": "Coated"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "10000 rpm",
      "torque": "N/A",
      "power_rating": "20000 lb thrust",
      "other": "Bypass ratio: 5:1"
    },
    "applications": [
      "Commercial aviation",
      "Military aircraft",
      "Power generation"
    ],
    "power_requirements": "Jet fuel, high energy",
    "estimated_cost": "$1,000,000-$5,000,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "1 (rotational core)",
    "speed": "10000 rpm turbine",
    "range_of_motion": "Unlimited rotation",
    "force_output": "20000 lb (89 kN) thrust"
  },
  {
    "id": 41,
    "glb_filename": "universal_joint.glb",
    "component_name": "Cardan Universal Joint",
    "component_type": "universal_joint",
    "general_information": "A universal joint is a coupling that allows for transmission of rotary motion between shafts at an angle. It accommodates misalignment in drivelines.",
    "description": "This model features two yokes connected by a cross with needle bearings. It includes grease fittings. The design allows for smooth power transfer at angles.",
    "dimensions": {
      "length": "100 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.8 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "4000 rpm",
      "torque": "100 Nm",
      "power_rating": "N/A",
      "other": "Max angle: 30 degrees"
    },
    "applications": [
      "Driveshafts",
      "Steering columns",
      "Industrial machinery"
    ],
    "power_requirements": "N/A (passive component)",
    "estimated_cost": "$20-$100",
    "assembly_complexity": "Low",
    "degree_of_freedom": "2 (angular)",
    "speed": "Up to 4000 rpm",
    "range_of_motion": "30 degrees angle",
    "force_output": "100 Nm torque"
  },
  {
    "id": 42,
    "glb_filename": "v8_engine.glb",
    "component_name": "V8 Internal Combustion Engine",
    "component_type": "v8_engine",
    "general_information": "A V8 engine is an eight-cylinder piston engine with cylinders arranged in a V configuration. It provides high power for vehicles.",
    "description": "This model features overhead camshafts, fuel injection, and exhaust manifolds. It includes block and heads. The design optimizes balance and performance.",
    "dimensions": {
      "length": "700 mm",
      "width": "600 mm",
      "height": "600 mm",
      "diameter": "N/A",
      "stroke": "90 mm",
      "other": {"bore": "100 mm"}
    },
    "materials": [
      "Cast Iron Block",
      "Aluminum Heads"
    ],
    "physical_properties": {
      "weight": "200 kg",
      "density": "N/A",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "6000 rpm",
      "torque": "500 Nm",
      "power_rating": "400 HP",
      "other": "Displacement: 5.0 L"
    },
    "applications": [
      "High-performance cars",
      "Trucks",
      "Marine propulsion"
    ],
    "power_requirements": "Gasoline, 400 HP output",
    "estimated_cost": "$5,000-$15,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "Up to 6000 rpm",
    "range_of_motion": "N/A",
    "force_output": "500 Nm torque"
  },
  {
    "id": 43,
    "glb_filename": "vacuum_cleaner.glb",
    "component_name": "Upright Vacuum Cleaner",
    "component_type": "vacuum_cleaner",
    "general_information": "A vacuum cleaner is an appliance that uses suction to remove dirt from surfaces. It is essential for household cleaning.",
    "description": "This model features a motor-driven brush roll, dust bag, and hose attachments. It includes wheels for mobility. The design emphasizes powerful suction and filtration.",
    "dimensions": {
      "length": "300 mm",
      "width": "300 mm",
      "height": "1100 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Plastic",
      "Metal Components"
    ],
    "physical_properties": {
      "weight": "8 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "1200 W",
      "other": "Suction power: 200 AW"
    },
    "applications": [
      "Home cleaning",
      "Carpet maintenance",
      "Office cleaning"
    ],
    "power_requirements": "Electric: 1200 W, 110-220V",
    "estimated_cost": "$100-$300",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "Brush roll: 3000-5000 rpm",
    "range_of_motion": "N/A",
    "force_output": "200 AW suction"
  },
  {
    "id": 44,
    "glb_filename": "water_pump.glb",
    "component_name": "Centrifugal Water Pump",
    "component_type": "water_pump",
    "general_information": "A water pump is a device that moves water by mechanical action. It is used in irrigation, plumbing, and cooling systems.",
    "description": "This model is a single-stage centrifugal pump with impeller and volute casing. It includes inlet and outlet ports. The design highlights efficiency and corrosion resistance.",
    "dimensions": {
      "length": "300 mm",
      "width": "200 mm",
      "height": "250 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"impeller diameter": "150 mm"}
    },
    "materials": [
      "Cast Iron",
      "Bronze Impeller"
    ],
    "physical_properties": {
      "weight": "15 kg",
      "density": "7.20 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "3000 rpm",
      "torque": "N/A",
      "power_rating": "1 HP",
      "other": "Flow rate: 50 L/min"
    },
    "applications": [
      "Irrigation",
      "Water supply",
      "Cooling systems"
    ],
    "power_requirements": "Electric: 1 HP, 110-220V",
    "estimated_cost": "$100-$300",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Flow: 50 L/min at pressure"
  },
  {
    "id": 45,
    "glb_filename": "worm_gear_box.glb",
    "component_name": "Worm Gear Reducer Box",
    "component_type": "worm_gear_box",
    "general_information": "A worm gear box is a compact gear system using a worm screw and wheel for high reduction ratios. It provides self-locking in some configurations.",
    "description": "This model features a bronze worm wheel and steel worm in a cast housing. It includes input and output shafts. The design optimizes torque multiplication and quiet operation.",
    "dimensions": {
      "length": "200 mm",
      "width": "150 mm",
      "height": "150 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Cast Iron Housing",
      "Bronze Gear"
    ],
    "physical_properties": {
      "weight": "10 kg",
      "density": "7.20 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "1500 rpm",
      "torque": "200 Nm",
      "power_rating": "N/A",
      "other": "Reduction ratio: 20:1"
    },
    "applications": [
      "Conveyors",
      "Elevators",
      "Machine tools"
    ],
    "power_requirements": "N/A (passive, driven by motor)",
    "estimated_cost": "$100-$500",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Input: 1500 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "200 Nm output torque"
  },// Add these new components to the components array (after the last existing one)

  {
    "id": 46,
    "glb_filename": "propeller.glb",
    "component_name": "Aircraft Propeller",
    "component_type": "propeller",
    "general_information": "A propeller is a device with blades that converts rotational power into thrust for aircraft or marine vessels. It is essential for propulsion in many vehicles.",
    "description": "This model features a three-bladed variable-pitch propeller with a polished aluminum finish. It includes a hub for mounting and aerodynamic blade shaping. The design emphasizes efficiency and balance for smooth operation.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "1800 mm",
      "stroke": "N/A",
      "other": {"blade pitch": "Variable"}
    },
    "materials": [
      "Aluminum Alloy",
      "Composite"
    ],
    "physical_properties": {
      "weight": "25 kg",
      "density": "N/A",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "2500 rpm",
      "torque": "N/A",
      "power_rating": "200 HP",
      "other": "Thrust: variable"
    },
    "applications": [
      "Aircraft propulsion",
      "Marine vessels",
      "Drones"
    ],
    "power_requirements": "Driven by engine: up to 200 HP",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 2500 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Thrust dependent on power"
  },
  {
    "id": 47,
    "glb_filename": "television.glb",
    "component_name": "Smart LED Television",
    "component_type": "television",
    "general_information": "A television is an electronic device for receiving and displaying broadcast signals or streaming content. Modern smart TVs integrate internet connectivity.",
    "description": "This model is a 55-inch flat-screen LED TV with slim bezels and integrated stand. It features smart OS for apps and voice control. The design highlights thin profile and high-resolution display.",
    "dimensions": {
      "length": "1230 mm",
      "width": "710 mm",
      "height": "80 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"screen diagonal": "55 inches"}
    },
    "materials": [
      "Plastic Housing",
      "Glass Screen"
    ],
    "physical_properties": {
      "weight": "15 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "100 W",
      "other": "Resolution: 4K"
    },
    "applications": [
      "Home entertainment",
      "Office displays",
      "Information screens"
    ],
    "power_requirements": "Electric: 100 W, 110-220V",
    "estimated_cost": "$300-$800",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 48,
    "glb_filename": "fishing_boat.glb",
    "component_name": "Small Fishing Boat",
    "component_type": "fishing_boat",
    "general_information": "A fishing boat is a vessel designed for catching fish, ranging from small recreational boats to larger commercial ones.",
    "description": "This model is an aluminum hull fishing boat with outboard motor mount and seating. It includes rod holders and live well. The design focuses on stability and shallow water access.",
    "dimensions": {
      "length": "5000 mm",
      "width": "2000 mm",
      "height": "1500 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "Fiberglass"
    ],
    "physical_properties": {
      "weight": "400 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "500 kg",
      "max_speed": "40 km/h",
      "torque": "N/A",
      "power_rating": "50 HP",
      "other": "Hull type: V-bottom"
    },
    "applications": [
      "Recreational fishing",
      "Commercial small-scale",
      "Lake/river use"
    ],
    "power_requirements": "Outboard engine: up to 50 HP",
    "estimated_cost": "$5000-$15000",
    "assembly_complexity": "High",
    "degree_of_freedom": "6 (vessel dynamics)",
    "speed": "Max: 40 km/h",
    "range_of_motion": "Water-dependent",
    "force_output": "Thrust from engine"
  },
  {
    "id": 49,
    "glb_filename": "steam_engine.glb",
    "component_name": "Steam Locomotive Engine",
    "component_type": "steam_engine",
    "general_information": "A steam engine uses steam pressure to generate mechanical work, historically powering locomotives and machinery.",
    "description": "This model represents a classic steam locomotive with boiler, pistons, and driving wheels. It includes tender for coal/water. The design highlights historical engineering with reciprocating motion.",
    "dimensions": {
      "length": "15000 mm",
      "width": "3000 mm",
      "height": "4000 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wheel diameter": "1500 mm"}
    },
    "materials": [
      "Steel",
      "Cast Iron"
    ],
    "physical_properties": {
      "weight": "100000 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "100 km/h",
      "torque": "High tractive",
      "power_rating": "2000 HP",
      "other": "Boiler pressure: 15 bar"
    },
    "applications": [
      "Historical railways",
      "Museums",
      "Heritage lines"
    ],
    "power_requirements": "Coal-fired steam",
    "estimated_cost": "Historical: millions",
    "assembly_complexity": "High",
    "degree_of_freedom": "Tracked",
    "speed": "Up to 100 km/h",
    "range_of_motion": "Rail-dependent",
    "force_output": "High traction"
  },
  {
    "id": 50,
    "glb_filename": "air_conditioning.glb",
    "component_name": "Outdoor Air Conditioning Unit",
    "component_type": "air_conditioning",
    "general_information": "An air conditioning unit cools indoor spaces by removing heat and humidity using refrigerant cycles.",
    "description": "This model is a split-system outdoor condenser with fan and compressor. It features weather-resistant housing. The design optimizes heat dissipation and quiet operation.",
    "dimensions": {
      "length": "800 mm",
      "width": "600 mm",
      "height": "700 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel Housing",
      "Copper Coils"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "3 kW",
      "other": "Cooling capacity: 12000 BTU"
    },
    "applications": [
      "Residential cooling",
      "Commercial HVAC",
      "Climate control"
    ],
    "power_requirements": "Electric: 3 kW, 220V",
    "estimated_cost": "$500-$1500",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "Fan variable",
    "range_of_motion": "N/A",
    "force_output": "Heat transfer"
  },
  {
    "id": 51,
    "glb_filename": "drill_machine.glb",
    "component_name": "Corded Power Drill",
    "component_type": "drill_machine",
    "general_information": "A power drill is a tool for making holes or driving fasteners, essential in construction and DIY.",
    "description": "This model features a pistol-grip handle, variable speed trigger, and keyed chuck. It includes auxiliary handle for control. The design emphasizes power and durability.",
    "dimensions": {
      "length": "300 mm",
      "width": "80 mm",
      "height": "250 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"chuck size": "13 mm"}
    },
    "materials": [
      "Plastic Housing",
      "Steel Gears"
    ],
    "physical_properties": {
      "weight": "2 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "3000 rpm",
      "torque": "50 Nm",
      "power_rating": "700 W",
      "other": "Hammer function optional"
    },
    "applications": [
      "Drilling",
      "Fastening",
      "Construction"
    ],
    "power_requirements": "Electric: 700 W, 110-220V",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Up to 3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "50 Nm torque"
  },
  {
    "id": 52,
    "glb_filename": "lathe.glb",
    "component_name": "Benchtop Metal Lathe",
    "component_type": "lathe",
    "general_information": "A lathe is a machine tool that rotates a workpiece for cutting, drilling, or turning operations.",
    "description": "This model features a variable speed spindle, tool post, and tailstock. It includes bed ways and gear train. The design allows precise metalworking.",
    "dimensions": {
      "length": "800 mm",
      "width": "400 mm",
      "height": "400 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"swing over bed": "200 mm"}
    },
    "materials": [
      "Cast Iron Bed",
      "Steel Components"
    ],
    "physical_properties": {
      "weight": "80 kg",
      "density": "N/A",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "2500 rpm",
      "torque": "High",
      "power_rating": "750 W",
      "other": "Spindle bore: 20 mm"
    },
    "applications": [
      "Metal turning",
      "Threading",
      "Model making"
    ],
    "power_requirements": "Electric: 750 W, 220V",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "High",
    "degree_of_freedom": "1 (rotational primary)",
    "speed": "Variable up to 2500 rpm",
    "range_of_motion": "Workpiece dependent",
    "force_output": "Cutting force variable"
  },
  {
    "id": 53,
    "glb_filename": "conveyor_belt.glb",
    "component_name": "Industrial Belt Conveyor Assembly",
    "component_type": "conveyor_belt_assembly",
    "general_information": "A conveyor belt system transports materials automatically, used in manufacturing and logistics.",
    "description": "This model includes rollers, belt, motor drive, and frame. It features adjustable height and speed control. The design supports continuous operation.",
    "dimensions": {
      "length": "3000 mm",
      "width": "600 mm",
      "height": "800 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"belt width": "500 mm"}
    },
    "materials": [
      "Steel Frame",
      "Rubber Belt"
    ],
    "physical_properties": {
      "weight": "200 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "100 kg/m",
      "max_speed": "1 m/s",
      "torque": "N/A",
      "power_rating": "1 kW",
      "other": "Incline optional"
    },
    "applications": [
      "Assembly lines",
      "Material handling",
      "Packaging"
    ],
    "power_requirements": "Electric: 1 kW, 220-380V",
    "estimated_cost": "$1000-$5000",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "Linear transport",
    "speed": "Variable up to 1 m/s",
    "range_of_motion": "Belt length",
    "force_output": "Conveying capacity"
  },
  {
    "id": 54,
    "glb_filename": "ceiling_fan.glb",
    "component_name": "Ceiling Mounted Fan",
    "component_type": "ceiling_fan",
    "general_information": "A ceiling fan circulates air for cooling and ventilation in rooms.",
    "description": "This model features five blades, reversible motor, and light kit option. It includes downrod for mounting. The design provides efficient airflow.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "400 mm",
      "diameter": "1320 mm",
      "stroke": "N/A",
      "other": {"blade span": "52 inches"}
    },
    "materials": [
      "Metal Blades",
      "Plastic Housing"
    ],
    "physical_properties": {
      "weight": "8 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "200 rpm",
      "torque": "N/A",
      "power_rating": "75 W",
      "other": "Airflow: 5000 CFM"
    },
    "applications": [
      "Room cooling",
      "Ventilation",
      "Decorative"
    ],
    "power_requirements": "Electric: 75 W, 220V",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Variable 3-5 speeds",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Air circulation"
  },{
    "id": 55,
    "glb_filename": "microwave_oven.glb",
    "component_name": "Microwave Oven",
    "component_type": "microwave_oven",
    "general_information": "A microwave oven is a kitchen appliance that heats food using microwave radiation. It is commonly used for quick cooking and reheating.",
    "description": "This model features a digital control panel, turntable, and interior light. It includes a door with safety interlock. The design emphasizes compact size and energy efficiency.",
    "dimensions": {
      "length": "500 mm",
      "width": "400 mm",
      "height": "300 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {
        "capacity": "20 liters"
      }
    },
    "materials": [
      "Stainless Steel",
      "Glass"
    ],
    "physical_properties": {
      "weight": "12 kg",
      "density": "N/A",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "800 W",
      "other": "Frequency: 2450 MHz"
    },
    "applications": [
      "Food heating",
      "Defrosting",
      "Cooking"
    ],
    "power_requirements": "Electric: 800 W, 110-220V",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 56,
    "glb_filename": "gas_oven.glb",
    "component_name": "Gas Oven",
    "component_type": "gas_oven",
    "general_information": "A gas oven is a cooking appliance that uses natural gas or propane for heating. It provides even heat for baking and roasting.",
    "description": "This model features multiple burners, convection fan, and self-cleaning option. It includes racks and broiler. The design focuses on safety with ignition system.",
    "dimensions": {
      "length": "600 mm",
      "width": "600 mm",
      "height": "900 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {
        "capacity": "70 liters"
      }
    },
    "materials": [
      "Stainless Steel",
      "Cast Iron Grates"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "N/A",
      "surface_finish": "Enamel"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "15000 BTU",
      "other": "Temperature range: 150-550°F"
    },
    "applications": [
      "Baking",
      "Roasting",
      "Cooking"
    ],
    "power_requirements": "Natural gas or propane",
    "estimated_cost": "$300-$800",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 57,
    "glb_filename": "light_bulb.glb",
    "component_name": "Light Bulb",
    "component_type": "light_bulb",
    "general_information": "A light bulb is an electric light source that produces light when current flows through a filament or LED.",
    "description": "This model is an incandescent bulb with E27 base and glass envelope. It features tungsten filament. The design is classic pear shape.",
    "dimensions": {
      "length": "110 mm",
      "width": "60 mm",
      "height": "60 mm",
      "diameter": "60 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Glass",
      "Tungsten Filament"
    ],
    "physical_properties": {
      "weight": "0.05 kg",
      "density": "N/A",
      "surface_finish": "Clear"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "60 W",
      "other": "Lumen: 800"
    },
    "applications": [
      "Lighting",
      "Decoration",
      "Signaling"
    ],
    "power_requirements": "Electric: 60 W, 110-220V",
    "estimated_cost": "$1-$5",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 58,
    "glb_filename": "calculator.glb",
    "component_name": "Calculator",
    "component_type": "calculator",
    "general_information": "A calculator is an electronic device used for performing mathematical calculations.",
    "description": "This model is a solar-powered scientific calculator with LCD display and multiple functions. It features rubber keys. The design is compact for portability.",
    "dimensions": {
      "length": "150 mm",
      "width": "80 mm",
      "height": "10 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Plastic",
      "LCD Screen"
    ],
    "physical_properties": {
      "weight": "0.1 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "Solar",
      "other": "Functions: 240"
    },
    "applications": [
      "Mathematics",
      "Engineering",
      "Finance"
    ],
    "power_requirements": "Solar or battery",
    "estimated_cost": "$10-$30",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 59,
    "glb_filename": "lawn_mower.glb",
    "component_name": "Lawn Mower",
    "component_type": "lawn_mower",
    "general_information": "A lawn mower is a machine for cutting grass to an even height.",
    "description": "This model is a push-type gas-powered mower with adjustable height and bag collector. It includes steel deck. The design focuses on ease of use.",
    "dimensions": {
      "length": "1500 mm",
      "width": "500 mm",
      "height": "1000 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"cutting width": "460 mm"}
    },
    "materials": [
      "Steel Deck",
      "Plastic Handles"
    ],
    "physical_properties": {
      "weight": "25 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "3 HP",
      "other": "Blade speed: 3000 rpm"
    },
    "applications": [
      "Lawn maintenance",
      "Gardening",
      "Landscaping"
    ],
    "power_requirements": "Gas engine: 3 HP",
    "estimated_cost": "$100-$300",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "Blade: 3000 rpm",
    "range_of_motion": "N/A",
    "force_output": "Cutting force"
  },
  {
    "id": 60,
    "glb_filename": "3d_printer.glb",
    "component_name": "3D Printer",
    "component_type": "3d_printer",
    "general_information": "A 3D printer is a device that creates three-dimensional objects from digital models using additive manufacturing.",
    "description": "This model is a FDM printer with heated bed and extruder. It includes frame and control panel. The design supports large build volume.",
    "dimensions": {
      "length": "500 mm",
      "width": "500 mm",
      "height": "600 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"build volume": "220x220x250 mm"}
    },
    "materials": [
      "Aluminum Frame",
      "Plastic Parts"
    ],
    "physical_properties": {
      "weight": "10 kg",
      "density": "N/A",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "100 mm/s",
      "torque": "N/A",
      "power_rating": "300 W",
      "other": "Resolution: 0.1 mm"
    },
    "applications": [
      "Prototyping",
      "Manufacturing",
      "Hobby"
    ],
    "power_requirements": "Electric: 300 W, 110-220V",
    "estimated_cost": "$200-$500",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "3 (X,Y,Z)",
    "speed": "Print: 100 mm/s",
    "range_of_motion": "Build volume",
    "force_output": "N/A"
  },
  {
    "id": 61,
    "glb_filename": "torch.glb",
    "component_name": "Torch",
    "component_type": "torch",
    "general_information": "A torch is a portable light source, often called a flashlight, using batteries to power a bulb or LED.",
    "description": "This model is an LED torch with adjustable focus and rubber grip. It includes battery compartment. The design is waterproof.",
    "dimensions": {
      "length": "150 mm",
      "width": "30 mm",
      "height": "30 mm",
      "diameter": "30 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "Rubber"
    ],
    "physical_properties": {
      "weight": "0.2 kg",
      "density": "N/A",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "5 W",
      "other": "Lumen: 500"
    },
    "applications": [
      "Illumination",
      "Emergency",
      "Outdoor"
    ],
    "power_requirements": "Battery: AA or rechargeable",
    "estimated_cost": "$10-$30",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 62,
    "glb_filename": "clock.glb",
    "component_name": "Clock",
    "component_type": "clock",
    "general_information": "A clock is a device for measuring and displaying time.",
    "description": "This model is a wall clock with analog face and quartz movement. It includes hour, minute, and second hands. The design is classic round shape.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "300 mm",
      "stroke": "N/A",
      "other": {"thickness": "40 mm"}
    },
    "materials": [
      "Plastic",
      "Glass Face"
    ],
    "physical_properties": {
      "weight": "1 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "Battery",
      "other": "Accuracy: ±20 sec/month"
    },
    "applications": [
      "Timekeeping",
      "Decoration",
      "Office"
    ],
    "power_requirements": "AA battery",
    "estimated_cost": "$10-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 63,
    "glb_filename": "suv.glb",
    "component_name": "SUV",
    "component_type": "suv",
    "general_information": "An SUV is a sport utility vehicle designed for off-road and on-road use, offering space and versatility.",
    "description": "This model is a mid-size SUV with all-wheel drive and roof rails. It includes detailed interior and wheels. The design emphasizes ruggedness and comfort.",
    "dimensions": {
      "length": "4700 mm",
      "width": "1900 mm",
      "height": "1700 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"wheelbase": "2700 mm"}
    },
    "materials": [
      "Steel Body",
      "Aluminum Components"
    ],
    "physical_properties": {
      "weight": "1800 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "180 km/h",
      "torque": "300 Nm",
      "power_rating": "200 HP",
      "other": "Fuel efficiency: 10 km/l"
    },
    "applications": [
      "Family transport",
      "Off-road",
      "Towing"
    ],
    "power_requirements": "200 HP gasoline or diesel",
    "estimated_cost": "$30,000-$50,000",
    "assembly_complexity": "High",
    "degree_of_freedom": "6 (vehicle dynamics)",
    "speed": "Max: 180 km/h",
    "range_of_motion": "Unlimited on roads",
    "force_output": "300 Nm torque"
  },
  {
    "id": 64,
    "glb_filename": "camera.glb",
    "component_name": "Camera",
    "component_type": "camera",
    "general_information": "A camera is a device for capturing images or video.",
    "description": "This model is a digital SLR camera with interchangeable lens and LCD screen. It includes viewfinder and controls. The design is ergonomic.",
    "dimensions": {
      "length": "140 mm",
      "width": "110 mm",
      "height": "80 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Magnesium Alloy",
      "Glass Lens"
    ],
    "physical_properties": {
      "weight": "0.6 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "Battery",
      "other": "Resolution: 24 MP"
    },
    "applications": [
      "Photography",
      "Videography",
      "Surveillance"
    ],
    "power_requirements": "Rechargeable battery",
    "estimated_cost": "$500-$1500",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "Shutter: 1/8000 s",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 65,
    "glb_filename": "atm_machine.glb",
    "component_name": "ATM Machine",
    "component_type": "atm_machine",
    "general_information": "An ATM is an automated teller machine for banking transactions like cash withdrawal.",
    "description": "This model features a screen, card reader, and keypad. It includes cash dispenser. The design is secure with camera.",
    "dimensions": {
      "length": "500 mm",
      "width": "400 mm",
      "height": "1500 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel Cabinet",
      "Plastic Keys"
    ],
    "physical_properties": {
      "weight": "200 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "500 W",
      "other": "Capacity: 2000 notes"
    },
    "applications": [
      "Banking",
      "Cash access",
      "Payments"
    ],
    "power_requirements": "Electric: 500 W, 110-220V",
    "estimated_cost": "$5000-$10000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 66,
    "glb_filename": "audio_speaker.glb",
    "component_name": "Audio Speaker",
    "component_type": "audio_speaker",
    "general_information": "An audio speaker is a device that converts electrical signals into sound.",
    "description": "This model is a bookshelf speaker with woofer and tweeter. It includes enclosure and terminals. The design optimizes sound quality.",
    "dimensions": {
      "length": "200 mm",
      "width": "200 mm",
      "height": "300 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Wood Enclosure",
      "Paper Cone"
    ],
    "physical_properties": {
      "weight": "5 kg",
      "density": "N/A",
      "surface_finish": "Veneer"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "100 W",
      "other": "Frequency: 50-20k Hz"
    },
    "applications": [
      "Audio playback",
      "Home theater",
      "Music systems"
    ],
    "power_requirements": "Amplifier input",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "Sound pressure"
  },
  {
    "id": 67,
    "glb_filename": "winch.glb",
    "component_name": "Winch",
    "component_type": "winch",
    "general_information": "A winch is a mechanical device used to wind up or let out rope or cable for pulling or lifting.",
    "description": "This model is an electric winch with drum and gear reduction. It includes remote control. The design is robust for off-road use.",
    "dimensions": {
      "length": "400 mm",
      "width": "150 mm",
      "height": "200 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"line capacity": "30 m"}
    },
    "materials": [
      "Steel",
      "Synthetic Rope"
    ],
    "physical_properties": {
      "weight": "15 kg",
      "density": "N/A",
      "surface_finish": "Powder Coated"
    },
    "mechanical_properties": {
      "max_load": "4000 kg",
      "max_speed": "2 m/min",
      "torque": "200 Nm",
      "power_rating": "3 kW",
      "other": "Gear ratio: 200:1"
    },
    "applications": [
      "Vehicle recovery",
      "Lifting",
      "Towing"
    ],
    "power_requirements": "Electric: 3 kW, 12V",
    "estimated_cost": "$200-$500",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "2 m/min line",
    "range_of_motion": "30 m line",
    "force_output": "4000 kg pull"
  },
  {
    "id": 68,
    "glb_filename": "air_filter.glb",
    "component_name": "Air Filter",
    "component_type": "air_filter",
    "general_information": "An air filter is a device that removes particles from air, used in engines or HVAC systems.",
    "description": "This model is a panel air filter with pleated paper media. It includes frame and seals. The design maximizes surface area.",
    "dimensions": {
      "length": "300 mm",
      "width": "200 mm",
      "height": "50 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Paper Media",
      "Plastic Frame"
    ],
    "physical_properties": {
      "weight": "0.5 kg",
      "density": "N/A",
      "surface_finish": "N/A"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Efficiency: 99%"
    },
    "applications": [
      "Engine intake",
      "HVAC",
      "Air purification"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$10-$30",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 69,
    "glb_filename": "rotor_disc_brake.glb",
    "component_name": "Rotor Disc Brake",
    "component_type": "rotor_disc_brake",
    "general_information": "A rotor disc brake is a component in disc brake systems that the caliper clamps to stop the vehicle.",
    "description": "This model is a vented disc rotor with slots for heat dissipation. It includes hub mounting holes. The design enhances braking performance.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "300 mm",
      "stroke": "N/A",
      "other": {"thickness": "25 mm"}
    },
    "materials": [
      "Cast Iron",
      "None"
    ],
    "physical_properties": {
      "weight": "8 kg",
      "density": "7.2 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "400 Nm",
      "power_rating": "N/A",
      "other": "Heat capacity high"
    },
    "applications": [
      "Automotive braking",
      "Motorcycles",
      "Bicycles"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$50-$100",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Vehicle speed",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Braking torque"
  },
  {
    "id": 70,
    "glb_filename": "radiator.glb",
    "component_name": "Radiator",
    "component_type": "radiator",
    "general_information": "A radiator is a heat exchanger used to cool engines or buildings by transferring heat to air or water.",
    "description": "This model is an automotive radiator with aluminum fins and plastic tanks. It includes inlet/outlet ports. The design is compact.",
    "dimensions": {
      "length": "600 mm",
      "width": "400 mm",
      "height": "30 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum",
      "Plastic"
    ],
    "physical_properties": {
      "weight": "5 kg",
      "density": "N/A",
      "surface_finish": "Bare"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Cooling rate: 50 kW"
    },
    "applications": [
      "Engine cooling",
      "HVAC",
      "Industrial"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 71,
    "glb_filename": "torsion_rod.glb",
    "component_name": "Torsion Rod",
    "component_type": "torsion_rod",
    "general_information": "A torsion rod is a type of suspension component that acts as a spring by twisting.",
    "description": "This model is a straight steel rod with splined ends for mounting. It features high-strength material. The design provides progressive rate.",
    "dimensions": {
      "length": "1000 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "30 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Alloy Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "5 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "2000 N",
      "max_speed": "N/A",
      "torque": "500 Nm",
      "power_rating": "N/A",
      "other": "Twist angle: 30 degrees"
    },
    "applications": [
      "Vehicle suspension",
      "Doors",
      "Machinery"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$20-$100",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (torsional)",
    "speed": "N/A",
    "range_of_motion": "30 degrees twist",
    "force_output": "500 Nm"
  },
  {
    "id": 72,
    "glb_filename": "torsion_bar.glb",
    "component_name": "Torsion Bar",
    "component_type": "torsion_bar",
    "general_information": "A torsion bar is a straight bar that twists to absorb shock in suspensions.",
    "description": "This model is a hexagonal cross-section bar with anchors. It features heat-treated steel. The design is for automotive use.",
    "dimensions": {
      "length": "1200 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "35 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Spring Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "6 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Coated"
    },
    "mechanical_properties": {
      "max_load": "2500 N",
      "max_speed": "N/A",
      "torque": "600 Nm",
      "power_rating": "N/A",
      "other": "Rate: 100 Nm/deg"
    },
    "applications": [
      "Truck suspension",
      "Military vehicles",
      "Industrial"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$30-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (torsional)",
    "speed": "N/A",
    "range_of_motion": "Twist variable",
    "force_output": "600 Nm"
  },
  {
    "id": 73,
    "glb_filename": "torsion_spring.glb",
    "component_name": "Torsion Spring",
    "component_type": "torsion_spring",
    "general_information": "A torsion spring is a helical spring that exerts torque when twisted.",
    "description": "This model is a coiled spring with legs for attachment. It features wire construction. The design provides rotational force.",
    "dimensions": {
      "length": "50 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "20 mm",
      "stroke": "N/A",
      "other": {"wire diameter": "2 mm"}
    },
    "materials": [
      "Spring Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.05 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Plain"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "5 Nm",
      "power_rating": "N/A",
      "other": "Wind: 5 turns"
    },
    "applications": [
      "Doors",
      "Clips",
      "Mechanisms"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$1-$10",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (torsional)",
    "speed": "N/A",
    "range_of_motion": "90-360 degrees",
    "force_output": "5 Nm"
  },
  {
    "id": 74,
    "glb_filename": "exhaust_manifold.glb",
    "component_name": "Exhaust Manifold",
    "component_type": "exhaust_manifold",
    "general_information": "An exhaust manifold collects exhaust gases from engine cylinders and directs them to the exhaust system.",
    "description": "This model is a cast manifold for 4-cylinder engine with flanges. It features smooth flow paths. The design reduces backpressure.",
    "dimensions": {
      "length": "400 mm",
      "width": "200 mm",
      "height": "100 mm",
      "diameter": "50 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Cast Iron",
      "None"
    ],
    "physical_properties": {
      "weight": "10 kg",
      "density": "7.2 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Temp max: 900°C"
    },
    "applications": [
      "Automotive exhaust",
      "Marine engines",
      "Generators"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 75,
    "glb_filename": "engine_block.glb",
    "component_name": "Engine Block",
    "component_type": "engine_block",
    "general_information": "An engine block is the main structure of an engine containing cylinders and coolant passages.",
    "description": "This model is a V6 engine block with cast construction and machined bores. It includes main caps. The design supports high pressure.",
    "dimensions": {
      "length": "500 mm",
      "width": "400 mm",
      "height": "300 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"bore": "90 mm"}
    },
    "materials": [
      "Cast Iron",
      "Aluminum Option"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "7.2 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Displacement: 3.0 L"
    },
    "applications": [
      "Automotive engines",
      "Industrial motors",
      "Marine"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 76,
    "glb_filename": "pinball_plunger_assembly.glb",
    "component_name": "Pinball Plunger Assembly",
    "component_type": "pinball_plunger_assembly",
    "general_information": "A pinball plunger is a mechanism to launch the ball into play.",
    "description": "This model includes spring-loaded plunger with handle and barrel. It features adjustable tension. The design is for arcade machines.",
    "dimensions": {
      "length": "300 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "20 mm",
      "stroke": "100 mm",
      "other": {}
    },
    "materials": [
      "Steel",
      "Plastic Handle"
    ],
    "physical_properties": {
      "weight": "1 kg",
      "density": "N/A",
      "surface_finish": "Chrome"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Spring force: 50 N"
    },
    "applications": [
      "Pinball machines",
      "Arcade games",
      "Amusement"
    ],
    "power_requirements": "N/A (manual)",
    "estimated_cost": "$20-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (linear)",
    "speed": "N/A",
    "range_of_motion": "100 mm stroke",
    "force_output": "50 N"
  },
  {
    "id": 77,
    "glb_filename": "wind_turbine.glb",
    "component_name": "Wind Turbine",
    "component_type": "wind_turbine",
    "general_information": "A wind turbine converts wind energy into electricity using rotating blades.",
    "description": "This model is a small-scale turbine with three blades and generator. It includes tower mount. The design is for renewable energy.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "5000 mm",
      "diameter": "2000 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Fiberglass Blades",
      "Steel Tower"
    ],
    "physical_properties": {
      "weight": "200 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "20 rpm",
      "torque": "High",
      "power_rating": "2 kW",
      "other": "Cut-in wind: 3 m/s"
    },
    "applications": [
      "Renewable energy",
      "Off-grid power",
      "Farms"
    ],
    "power_requirements": "Wind driven",
    "estimated_cost": "$1000-$5000",
    "assembly_complexity": "High",
    "degree_of_freedom": "1 (rotational)",
    "speed": "Variable with wind",
    "range_of_motion": "Unlimited rotation",
    "force_output": "2 kW power"
  },
  {
    "id": 78,
    "glb_filename": "turbine_engine_blade.glb",
    "component_name": "Turbine Engine Blade",
    "component_type": "turbine_engine_blade",
    "general_information": "A turbine engine blade is a component in jet engines that extracts energy from hot gases.",
    "description": "This model is a single blade with airfoil shape and cooling holes. It features superalloy material. The design withstands high temperatures.",
    "dimensions": {
      "length": "200 mm",
      "width": "50 mm",
      "height": "20 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Nickel Superalloy",
      "Ceramic Coating"
    ],
    "physical_properties": {
      "weight": "0.5 kg",
      "density": "8.2 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "10000 rpm",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Temp max: 1500°C"
    },
    "applications": [
      "Jet engines",
      "Power turbines",
      "Aerospace"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$100-$500",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "10000 rpm",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 79,
    "glb_filename": "impeller.glb",
    "component_name": "Impeller",
    "component_type": "impeller",
    "general_information": "An impeller is a rotating component in pumps or compressors that transfers energy to fluid.",
    "description": "This model is a centrifugal impeller with curved blades. It features balanced design. The design increases fluid velocity.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "200 mm",
      "stroke": "N/A",
      "other": {"blade height": "30 mm"}
    },
    "materials": [
      "Stainless Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "2 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "3000 rpm",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Flow rate: variable"
    },
    "applications": [
      "Pumps",
      "Compressors",
      "Fans"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "3000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Fluid acceleration"
  },
  {
    "id": 80,
    "glb_filename": "hydraulic_cylinder.glb",
    "component_name": "Hydraulic Cylinder",
    "component_type": "hydraulic_cylinder",
    "general_information": "A hydraulic cylinder is a linear actuator powered by pressurized hydraulic fluid.",
    "description": "This model is a double-acting cylinder with piston rod and mounting clevis. It features seals for leak prevention. The design is for heavy loads.",
    "dimensions": {
      "length": "500 mm",
      "width": "100 mm",
      "height": "100 mm",
      "diameter": "80 mm",
      "stroke": "300 mm",
      "other": {}
    },
    "materials": [
      "Steel Tube",
      "Chrome Rod"
    ],
    "physical_properties": {
      "weight": "20 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "10000 N",
      "max_speed": "500 mm/s",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Pressure: 250 bar"
    },
    "applications": [
      "Machinery",
      "Construction",
      "Vehicles"
    ],
    "power_requirements": "Hydraulic: 250 bar",
    "estimated_cost": "$100-$300",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (linear)",
    "speed": "500 mm/s",
    "range_of_motion": "300 mm stroke",
    "force_output": "10000 N"
  },
  {
    "id": 81,
    "glb_filename": "laser_engraver_cutting_machine.glb",
    "component_name": "Laser Engraver Cutting Machine",
    "component_type": "laser_engraver_cutting_machine",
    "general_information": "A laser engraver is a machine that uses a laser to etch or cut materials.",
    "description": "This model is a CO2 laser engraver with work area and exhaust fan. It includes control software. The design is for precision work.",
    "dimensions": {
      "length": "800 mm",
      "width": "500 mm",
      "height": "400 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"work area": "600x400 mm"}
    },
    "materials": [
      "Aluminum Frame",
      "Acrylic Cover"
    ],
    "physical_properties": {
      "weight": "50 kg",
      "density": "N/A",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "500 mm/s",
      "torque": "N/A",
      "power_rating": "60 W laser",
      "other": "Resolution: 0.025 mm"
    },
    "applications": [
      "Engraving",
      "Cutting",
      "Crafting"
    ],
    "power_requirements": "Electric: 60 W laser, 220V",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "2 (X,Y)",
    "speed": "500 mm/s",
    "range_of_motion": "Work area",
    "force_output": "Laser power"
  },
  {
    "id": 82,
    "glb_filename": "washing_machine.glb",
    "component_name": "Washing Machine",
    "component_type": "washing_machine",
    "general_information": "A washing machine is an appliance for cleaning laundry using water and detergent.",
    "description": "This model is a front-load washer with drum and control panel. It includes multiple cycles. The design is energy efficient.",
    "dimensions": {
      "length": "600 mm",
      "width": "600 mm",
      "height": "850 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {"capacity": "7 kg"}
    },
    "materials": [
      "Steel Drum",
      "Plastic Cabinet"
    ],
    "physical_properties": {
      "weight": "70 kg",
      "density": "N/A",
      "surface_finish": "Enamel"
    },
    "mechanical_properties": {
      "max_load": "7 kg",
      "max_speed": "1200 rpm spin",
      "torque": "N/A",
      "power_rating": "2000 W",
      "other": "Water use: 50 L"
    },
    "applications": [
      "Laundry",
      "Home use",
      "Commercial"
    ],
    "power_requirements": "Electric: 2000 W, 220V",
    "estimated_cost": "$300-$800",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "Spin: 1200 rpm",
    "range_of_motion": "N/A",
    "force_output": "N/A"
  },
  {
    "id": 83,
    "glb_filename": "washer.glb",
    "component_name": "Washer",
    "component_type": "washer",
    "general_information": "A washer is a thin plate with a hole used to distribute load of a fastener.",
    "description": "This model is a flat washer with central hole. It features steel construction. The design prevents loosening.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "2 mm",
      "diameter": "20 mm",
      "stroke": "N/A",
      "other": {"inner diameter": "10 mm"}
    },
    "materials": [
      "Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.01 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Zinc Plated"
    },
    "mechanical_properties": {
      "max_load": "5000 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Hardness: 200 HV"
    },
    "applications": [
      "Bolted joints",
      "Machinery",
      "Construction"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$0.10-$0.50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "Load distribution"
  },
  {
    "id": 84,
    "glb_filename": "hinge_pin.glb",
    "component_name": "Hinge Pin",
    "component_type": "hinge_pin",
    "general_information": "A hinge pin is a rod that holds hinge leaves together, allowing rotation.",
    "description": "This model is a cylindrical pin with head and groove for retaining. It features stainless steel. The design is for doors.",
    "dimensions": {
      "length": "100 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "10 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Stainless Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.1 kg",
      "density": "7.93 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "1000 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Shear strength: 500 MPa"
    },
    "applications": [
      "Doors",
      "Gates",
      "Furniture"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$1-$5",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "N/A",
    "range_of_motion": "180 degrees typical",
    "force_output": "1000 N"
  },
  {
    "id": 85,
    "glb_filename": "coil_spring_damper.glb",
    "component_name": "Coil Spring Damper",
    "component_type": "coil_spring_damper",
    "general_information": "A coil spring damper is a suspension component that absorbs shocks and vibrations.",
    "description": "This model is a coil-over damper with adjustable preload. It features gas-charged shock. The design is for automotive use.",
    "dimensions": {
      "length": "400 mm",
      "width": "N/A",
      "height": "N/A",
      "diameter": "50 mm",
      "stroke": "150 mm",
      "other": {}
    },
    "materials": [
      "Steel Spring",
      "Aluminum Body"
    ],
    "physical_properties": {
      "weight": "3 kg",
      "density": "N/A",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "1000 kg",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Damping rate: adjustable"
    },
    "applications": [
      "Vehicle suspension",
      "Machinery",
      "Bikes"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (linear)",
    "speed": "N/A",
    "range_of_motion": "150 mm stroke",
    "force_output": "1000 kg load"
  },
  {
    "id": 86,
    "glb_filename": "ball_valve.glb",
    "component_name": "Ball Valve",
    "component_type": "ball_valve",
    "general_information": "A ball valve is a quarter-turn valve that uses a ball to control flow.",
    "description": "This model is a full-port ball valve with lever handle. It features brass body. The design is for quick shut-off.",
    "dimensions": {
      "length": "100 mm",
      "width": "50 mm",
      "height": "80 mm",
      "diameter": "25 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Brass",
      "PTFE Seat"
    ],
    "physical_properties": {
      "weight": "0.5 kg",
      "density": "8.5 g/cm³",
      "surface_finish": "Polished"
    },
    "mechanical_properties": {
      "max_load": "40 bar",
      "max_speed": "N/A",
      "torque": "10 Nm",
      "power_rating": "N/A",
      "other": "Temp max: 150°C"
    },
    "applications": [
      "Plumbing",
      "Industrial flow control",
      "Gas lines"
    ],
    "power_requirements": "N/A (manual)",
    "estimated_cost": "$10-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational)",
    "speed": "N/A",
    "range_of_motion": "90 degrees",
    "force_output": "Pressure resistance"
  },
  {
    "id": 87,
    "glb_filename": "flange.glb",
    "component_name": "Flange",
    "component_type": "flange",
    "general_information": "A flange is a rim used for strength or attachment in pipes or machines.",
    "description": "This model is a welded neck flange with bolt holes. It features carbon steel. The design is for high-pressure connections.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "20 mm",
      "diameter": "200 mm",
      "stroke": "N/A",
      "other": {"bolt circle": "150 mm"}
    },
    "materials": [
      "Carbon Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "2 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "100 bar",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "ANSI 150 class"
    },
    "applications": [
      "Piping",
      "Machinery",
      "Valves"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$10-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "Connection strength"
  },
  {
    "id": 88,
    "glb_filename": "clamp.glb",
    "component_name": "Clamp",
    "component_type": "clamp",
    "general_information": "A clamp is a fastening device used to hold objects tightly.",
    "description": "This model is a hose clamp with screw adjustment. It features stainless steel band. The design is for secure sealing.",
    "dimensions": {
      "length": "50 mm",
      "width": "20 mm",
      "height": "20 mm",
      "diameter": "40 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Stainless Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.05 kg",
      "density": "7.93 g/cm³",
      "surface_finish": "Plain"
    },
    "mechanical_properties": {
      "max_load": "50 N",
      "max_speed": "N/A",
      "torque": "5 Nm",
      "power_rating": "N/A",
      "other": "Range: 20-40 mm"
    },
    "applications": [
      "Hoses",
      "Pipes",
      "Cables"
    ],
    "power_requirements": "N/A (manual)",
    "estimated_cost": "$1-$5",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "Adjustable",
    "force_output": "Clamping force"
  },
  {
    "id": 89,
    "glb_filename": "slider_crank_mechanism.glb",
    "component_name": "Slider Crank Mechanism",
    "component_type": "slider_crank_mechanism",
    "general_information": "A slider crank mechanism converts rotational motion to linear motion, used in engines.",
    "description": "This model includes crank, connecting rod, and slider. It features precision bearings. The design demonstrates kinematics.",
    "dimensions": {
      "length": "300 mm",
      "width": "100 mm",
      "height": "100 mm",
      "diameter": "N/A",
      "stroke": "150 mm",
      "other": {}
    },
    "materials": [
      "Steel",
      "Aluminum"
    ],
    "physical_properties": {
      "weight": "2 kg",
      "density": "N/A",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "500 N",
      "max_speed": "1000 rpm",
      "torque": "10 Nm",
      "power_rating": "N/A",
      "other": "Ratio: variable"
    },
    "applications": [
      "Engines",
      "Pumps",
      "Machines"
    ],
    "power_requirements": "N/A (driven)",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1",
    "speed": "1000 rpm crank",
    "range_of_motion": "150 mm stroke",
    "force_output": "500 N"
  },
  {
    "id": 90,
    "glb_filename": "car_frame.glb",
    "component_name": "Car Frame",
    "component_type": "car_frame",
    "general_information": "A car frame is the structural skeleton of a vehicle, supporting components and providing rigidity.",
    "description": "This model is a ladder frame for trucks with cross members. It features steel construction. The design is for load-bearing.",
    "dimensions": {
      "length": "4000 mm",
      "width": "1500 mm",
      "height": "200 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Steel Beams",
      "None"
    ],
    "physical_properties": {
      "weight": "300 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "2000 kg",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Torsional rigidity high"
    },
    "applications": [
      "Vehicles",
      "Trucks",
      "Off-road"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$500-$2000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "Structural support"
  },
  {
    "id": 91,
    "glb_filename": "mechanical_keyboard.glb",
    "component_name": "Mechanical Keyboard",
    "component_type": "mechanical_keyboard",
    "general_information": "A mechanical keyboard uses individual switches for each key, providing tactile feedback.",
    "description": "This model is a full-size keyboard with RGB lighting and cherry switches. It includes USB connection. The design is ergonomic.",
    "dimensions": {
      "length": "450 mm",
      "width": "150 mm",
      "height": "40 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum Plate",
      "Plastic Keys"
    ],
    "physical_properties": {
      "weight": "1 kg",
      "density": "N/A",
      "surface_finish": "Anodized"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "5 W",
      "other": "Actuation force: 45g"
    },
    "applications": [
      "Typing",
      "Gaming",
      "Computing"
    ],
    "power_requirements": "USB powered",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "Key travel 4 mm",
    "force_output": "N/A"
  },
  {
    "id": 92,
    "glb_filename": "connecting_rod.glb",
    "component_name": "Connecting Rod",
    "component_type": "connecting_rod",
    "general_information": "A connecting rod links the piston to the crankshaft in engines.",
    "description": "This model is a forged con rod with big and small ends. It features I-beam section. The design minimizes weight.",
    "dimensions": {
      "length": "150 mm",
      "width": "30 mm",
      "height": "20 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Forged Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "0.5 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Machined"
    },
    "mechanical_properties": {
      "max_load": "10000 N",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Fatigue strength high"
    },
    "applications": [
      "Engines",
      "Compressors",
      "Pumps"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$20-$100",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "N/A",
    "speed": "Engine rpm",
    "range_of_motion": "Oscillating",
    "force_output": "10000 N"
  },
  {
    "id": 93,
    "glb_filename": "vehicle_tire.glb",
    "component_name": "Vehicle Tire",
    "component_type": "vehicle_tire",
    "general_information": "A vehicle tire is a rubber covering for wheels providing traction and cushioning.",
    "description": "This model is a radial tire with tread pattern and sidewall. It features steel belts. The design is for all-season use.",
    "dimensions": {
      "length": "N/A",
      "width": "N/A",
      "height": "N/A",
      "diameter": "600 mm",
      "stroke": "N/A",
      "other": {"width": "205 mm"}
    },
    "materials": [
      "Rubber",
      "Steel Belts"
    ],
    "physical_properties": {
      "weight": "10 kg",
      "density": "N/A",
      "surface_finish": "Treaded"
    },
    "mechanical_properties": {
      "max_load": "600 kg",
      "max_speed": "240 km/h",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Pressure: 2.5 bar"
    },
    "applications": [
      "Cars",
      "Trucks",
      "Bikes"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$50-$150",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "Up to 240 km/h",
    "range_of_motion": "Unlimited rotation",
    "force_output": "Traction"
  },
  {
    "id": 94,
    "glb_filename": "alternator.glb",
    "component_name": "Alternator",
    "component_type": "alternator",
    "general_information": "An alternator is an electrical generator that converts mechanical energy to AC current in vehicles.",
    "description": "This model is an automotive alternator with pulley and regulator. It features copper windings. The design is compact.",
    "dimensions": {
      "length": "200 mm",
      "width": "150 mm",
      "height": "150 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Aluminum Housing",
      "Copper Windings"
    ],
    "physical_properties": {
      "weight": "5 kg",
      "density": "N/A",
      "surface_finish": "Cast"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "6000 rpm",
      "torque": "N/A",
      "power_rating": "100 A",
      "other": "Voltage: 14 V"
    },
    "applications": [
      "Vehicle charging",
      "Generators",
      "Marine"
    ],
    "power_requirements": "Driven by engine",
    "estimated_cost": "$50-$200",
    "assembly_complexity": "Medium",
    "degree_of_freedom": "1 (rotational)",
    "speed": "6000 rpm",
    "range_of_motion": "Unlimited rotation",
    "force_output": "100 A current"
  },
  {
    "id": 95,
    "glb_filename": "car_chassis.glb",
    "component_name": "Car Chassis",
    "component_type": "car_chassis",
    "general_information": "A car chassis is the framework that supports the body and components of a vehicle.",
    "description": "This model is a unibody chassis with integrated floor pan. It features steel construction. The design provides crash safety.",
    "dimensions": {
      "length": "4500 mm",
      "width": "1800 mm",
      "height": "300 mm",
      "diameter": "N/A",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "High-Strength Steel",
      "None"
    ],
    "physical_properties": {
      "weight": "400 kg",
      "density": "7.85 g/cm³",
      "surface_finish": "Painted"
    },
    "mechanical_properties": {
      "max_load": "1500 kg",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Rigidity: high"
    },
    "applications": [
      "Automobiles",
      "Electric vehicles",
      "Racing"
    ],
    "power_requirements": "N/A (passive)",
    "estimated_cost": "$1000-$5000",
    "assembly_complexity": "High",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "Structural"
  },
  {
    "id": 96,
    "glb_filename": "simple_standing_fan.glb",
    "component_name": "Simple Standing Fan",
    "component_type": "simple_standing_fan",
    "general_information": "A standing fan is a pedestal fan that circulates air for cooling.",
    "description": "This model is a 16-inch fan with oscillating head and height adjustment. It includes 3 speeds. The design is stable.",
    "dimensions": {
      "length": "400 mm",
      "width": "400 mm",
      "height": "1200 mm",
      "diameter": "400 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "Plastic Blades",
      "Metal Stand"
    ],
    "physical_properties": {
      "weight": "5 kg",
      "density": "N/A",
      "surface_finish": "Matte"
    },
    "mechanical_properties": {
      "max_load": "N/A",
      "max_speed": "1500 rpm",
      "torque": "N/A",
      "power_rating": "50 W",
      "other": "Airflow: 2000 CFM"
    },
    "applications": [
      "Cooling",
      "Ventilation",
      "Drying"
    ],
    "power_requirements": "Electric: 50 W, 220V",
    "estimated_cost": "$20-$50",
    "assembly_complexity": "Low",
    "degree_of_freedom": "1 (rotational) + oscillation",
    "speed": "3 levels",
    "range_of_motion": "Oscillation 90 degrees",
    "force_output": "Air flow"
  },
  {
    "id": 97,
    "glb_filename": "pipe_fitting.glb",
    "component_name": "Pipe Fitting",
    "component_type": "pipe_fitting",
    "general_information": "A pipe fitting is a component used to connect sections of pipe or tube, change direction, or regulate flow.",
    "description": "This model is an elbow fitting with threaded ends. It features PVC construction for corrosion resistance. The design allows for 90-degree turn.",
    "dimensions": {
      "length": "50 mm",
      "width": "50 mm",
      "height": "50 mm",
      "diameter": "25 mm",
      "stroke": "N/A",
      "other": {}
    },
    "materials": [
      "PVC",
      "None"
    ],
    "physical_properties": {
      "weight": "0.1 kg",
      "density": "1.4 g/cm³",
      "surface_finish": "Smooth"
    },
    "mechanical_properties": {
      "max_load": "10 bar",
      "max_speed": "N/A",
      "torque": "N/A",
      "power_rating": "N/A",
      "other": "Temperature max: 60°C"
    },
    "applications": [
      "Plumbing",
      "Irrigation",
      "Industrial piping"
    ],
    "power_requirements": "N/A",
    "estimated_cost": "$1-$5",
    "assembly_complexity": "Low",
    "degree_of_freedom": "N/A",
    "speed": "N/A",
    "range_of_motion": "N/A",
    "force_output": "Pressure resistance"
  },{
  "id": 98,
  "glb_filename": "welding_torch.glb",
  "component_name": "Welding Torch",
  "component_type": "welding_torch",
  "general_information": "A welding torch is a tool used in welding processes to deliver the welding current, shielding gas, and filler material to the weld area. It is essential for various welding techniques like TIG and MIG.",
  "description": "This model represents a TIG welding torch with a flexible neck for better maneuverability, ergonomic handle, and gas nozzle. It includes a trigger for control and is designed for precise welding on thin materials, featuring corrosion-resistant components.",
  "dimensions": {
    "length": "300 mm",
    "width": "50 mm",
    "height": "50 mm",
    "diameter": "20 mm",
    "stroke": "N/A",
    "other": {}
  },
  "materials": [
    "Copper",
    "Plastic",
    "Tungsten Electrode"
  ],
  "physical_properties": {
    "weight": "0.5 kg",
    "density": "N/A",
    "surface_finish": "Insulated"
  },
  "mechanical_properties": {
    "max_load": "N/A",
    "max_speed": "N/A",
    "torque": "N/A",
    "power_rating": "200 A",
    "other": "Amperage range: 10-200 A"
  },
  "applications": [
    "Metal fabrication",
    "Automotive repair",
    "Aerospace welding",
    "Pipe welding"
  ],
  "power_requirements": "Connected to welding machine: up to 200 A",
  "estimated_cost": "$50-$200",
  "assembly_complexity": "Low",
  "degree_of_freedom": "N/A",
  "speed": "N/A",
  "range_of_motion": "Flexible neck for angles",
  "force_output": "N/A"
},
{
  "id": 99,
  "glb_filename": "welding_machine.glb",
  "component_name": "Arc Welding Machine",
  "component_type": "welding_machine",
  "general_information": "A welding machine is a power source that provides the electrical current necessary for welding processes. It can be used for arc, MIG, TIG, and other welding types.",
  "description": "This model is a portable arc welding machine with digital display, adjustable amperage, and built-in cooling fan. It includes cables and clamps, designed for heavy-duty applications on thicker materials, with a sturdy steel housing for durability.",
  "dimensions": {
    "length": "500 mm",
    "width": "300 mm",
    "height": "400 mm",
    "diameter": "N/A",
    "stroke": "N/A",
    "other": {}
  },
  "materials": [
    "Steel Housing",
    "Copper Components"
  ],
  "physical_properties": {
    "weight": "20 kg",
    "density": "N/A",
    "surface_finish": "Painted"
  },
  "mechanical_properties": {
    "max_load": "N/A",
    "max_speed": "N/A",
    "torque": "N/A",
    "power_rating": "5 kW",
    "other": "Amperage: 140-250 A, Duty cycle: 60%"
  },
  "applications": [
    "Construction",
    "Metalworking",
    "Repair and maintenance",
    "Shipbuilding"
  ],
  "power_requirements": "Electric: 220-380V, 5 kW",
  "estimated_cost": "$200-$800",
  "assembly_complexity": "Medium",
  "degree_of_freedom": "N/A",
  "speed": "N/A",
  "range_of_motion": "N/A",
  "force_output": "N/A"
},
{
  "id": 100,
  "glb_filename": "crane.glb",
  "component_name": "Overhead Gantry Crane",
  "component_type": "crane",
  "general_information": "A crane is a machine used for lifting and moving heavy loads, typically equipped with a hoist rope, wire ropes, and sheaves. Overhead gantry cranes are common in industrial settings.",
  "description": "This model represents a single-girder overhead gantry crane with electric hoist, trolley, and bridge. It includes controls and safety features like limit switches. The design is for indoor use, emphasizing stability and precise load handling.",
  "dimensions": {
    "length": "10000 mm",
    "width": "5000 mm",
    "height": "6000 mm",
    "diameter": "N/A",
    "stroke": "N/A",
    "other": {"span": "8000 mm"}
  },
  "materials": [
    "Steel Beams",
    "Cast Iron Components"
  ],
  "physical_properties": {
    "weight": "5000 kg",
    "density": "7.85 g/cm³",
    "surface_finish": "Painted"
  },
  "mechanical_properties": {
    "max_load": "5000 kg",
    "max_speed": "20 m/min hoist",
    "torque": "High",
    "power_rating": "10 kW",
    "other": "Lift height: 6000 mm, Class: A5"
  },
  "applications": [
    "Material handling in factories",
    "Warehouses",
    "Construction sites",
    "Maintenance"
  ],
  "power_requirements": "Electric: 10 kW, 380V",
  "estimated_cost": "$5000-$20000",
  "assembly_complexity": "High",
  "degree_of_freedom": "3 (hoist, trolley, bridge)",
  "speed": "Hoist: 20 m/min, Travel: 30 m/min",
  "range_of_motion": "Span and height dependent",
  "force_output": "5000 kg lift"
}
];
