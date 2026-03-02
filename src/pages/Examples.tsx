import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Zap, Cog, Grip, Move, Wrench, CircleDot, Link2, RotateCw, Gauge, Wind } from "lucide-react";

const Examples = () => {
  const navigate = useNavigate();

  const examples = [
    {
      name: "Custom Spur Gear - 45 Teeth",
      type: "Procedural Gear",
      icon: <Cog className="h-6 w-6" />,
      description: "Procedurally generated gear with 45 teeth and 90mm diameter for custom gear trains",
      prompt: "Create a spur gear with 45 teeth and 90mm diameter",
    },
    {
      name: "Engine Piston",
      type: "Piston",
      icon: <Move className="h-6 w-6" />,
      description: "Reciprocating piston for 4-stroke engine with rings and pin",
      prompt: "Design a piston for a 4-stroke engine",
    },
    {
      name: "V8 Crankshaft",
      type: "Crankshaft",
      icon: <RotateCw className="h-6 w-6" />,
      description: "V8 engine crankshaft with balanced counterweights",
      prompt: "Create a crankshaft for V8 engine",
    },
    {
      name: "Deep Groove Ball Bearing",
      type: "Bearing",
      icon: <CircleDot className="h-6 w-6" />,
      description: "Ball bearing with visible balls for radial and axial loads",
      prompt: "Build a deep groove ball bearing",
    },
    {
      name: "Chain and Sprocket Drive",
      type: "Chain Drive",
      icon: <Link2 className="h-6 w-6" />,
      description: "Chain and sprocket system for power transmission",
      prompt: "Design a chain and sprocket drive system",
    },
    {
      name: "Knuckle Joint",
      type: "Joint",
      icon: <Link2 className="h-6 w-6" />,
      description: "Articulated knuckle joint for flexible connections",
      prompt: "Create a knuckle joint",
    },
    {
      name: "Leaf Spring Suspension",
      type: "Spring",
      icon: <Move className="h-6 w-6" />,
      description: "Multi-leaf spring for vehicle suspension systems",
      prompt: "Build a leaf spring for suspension",
    },
    {
      name: "Flexible Shaft Coupling",
      type: "Coupling",
      icon: <RotateCw className="h-6 w-6" />,
      description: "Articulated coupling for shaft misalignment compensation",
      prompt: "Design a flexible shaft coupling",
    },
    {
      name: "Engine Flywheel",
      type: "Flywheel",
      icon: <CircleDot className="h-6 w-6" />,
      description: "Heavy flywheel for rotational inertia and energy storage",
      prompt: "Create a flywheel for engine",
    },
    {
      name: "Worm Gear Reducer",
      type: "Worm Gear",
      icon: <Cog className="h-6 w-6" />,
      description: "Worm gear reducer with high torque multiplication",
      prompt: "Build a worm gear reducer",
    },
    {
      name: "Heat Exchanger",
      type: "Heat Transfer",
      icon: <Wind className="h-6 w-6" />,
      description: "Shell and tube heat exchanger for thermal management",
      prompt: "Design a heat exchanger",
    },
    {
      name: "Large Custom Gear - 100 Teeth",
      type: "Procedural Gear",
      icon: <Cog className="h-6 w-6" />,
      description: "Large procedurally generated gear with 100 visible teeth for high reduction ratios",
      prompt: "Design a gear with 100 teeth",
    },
    {
      name: "M8 Hex Bolt - 70mm",
      type: "Procedural Fastener",
      icon: <Wrench className="h-6 w-6" />,
      description: "Standard M8 hex bolt with threads, procedurally generated for custom assemblies",
      prompt: "Build an M8 hex bolt with 70mm length",
    },
    {
      name: "M10 Hex Bolt - 100mm",
      type: "Procedural Fastener",
      icon: <Wrench className="h-6 w-6" />,
      description: "Heavy-duty M10 hex bolt with visible thread detail",
      prompt: "Create an M10 bolt with 100mm length",
    },
    {
      name: "Small Desktop Robot Arm",
      type: "Robot Arm",
      icon: <Wrench className="h-6 w-6" />,
      description: "Compact robot arm for desktop applications and education with 3 degrees of freedom",
      prompt: "Create a small robot arm for desktop use with 3 axes, 300mm reach, compact design for educational purposes",
    },
    {
      name: "Large Industrial Robot Arm",
      type: "Robot Arm",
      icon: <Wrench className="h-6 w-6" />,
      description: "Large industrial robot arm with 6 degrees of freedom for heavy-duty applications",
      prompt: "Design a large industrial 6-axis robot arm for heavy manufacturing with 2000mm reach, 50kg payload, suitable for welding and material handling",
    },
    {
      name: "Planetary Gear Reducer",
      type: "Gear System",
      icon: <Cog className="h-6 w-6" />,
      description: "Compact planetary gear system with high reduction ratio for robotic joints and high-torque applications",
      prompt: "Create a planetary gear system with 5:1 reduction ratio, compact design for integration with NEMA 23 motors, capable of handling 15Nm continuous torque",
    },
    {
      name: "Compact Linear Actuator",
      type: "Linear Actuator",
      icon: <Move className="h-6 w-6" />,
      description: "Small linear actuator for precision applications and tight spaces",
      prompt: "Build a compact linear actuator with 200mm stroke, suitable for small automation projects",
    },
    {
      name: "Huge Industrial Pulley System",
      type: "Pulley Mechanism",
      icon: <CircleDot className="h-6 w-6" />,
      description: "Massive pulley system for heavy lifting applications in industrial settings",
      prompt: "Create a huge pulley system for heavy lifting with 5:1 mechanical advantage, rated for 2000kg loads",
    },
    {
      name: "Parallel Jaw Gripper",
      type: "End Effector",
      icon: <Grip className="h-6 w-6" />,
      description: "Pneumatic parallel jaw gripper with adjustable force for versatile object manipulation",
      prompt: "Design a parallel jaw gripper for 50mm objects with adjustable gripping force 10-100N, pneumatic actuation at 6 bar, aluminum construction with soft jaw pads",
    },
    {
      name: "Medium V8 Engine",
      type: "Engine",
      icon: <Gauge className="h-6 w-6" />,
      description: "Standard-sized V8 engine for automotive applications",
      prompt: "Design a medium V8 engine with 5.0L displacement for automotive use",
    },
    {
      name: "Four-Bar Linkage Mechanism",
      type: "Linkage",
      icon: <Link2 className="h-6 w-6" />,
      description: "Four-bar linkage for oscillating motion with optimized geometry for smooth operation",
      prompt: "Design a four-bar linkage for oscillating motion with 90-degree output swing, driven by servo motor, aluminum links with ball bearing joints",
    },
    {
      name: "8-Position Rotary Table",
      type: "Indexing System",
      icon: <RotateCw className="h-6 w-6" />,
      description: "Precision rotary indexing table with 8 discrete positions for automated assembly processes",
      prompt: "Build a rotary indexing table with 8 positions (45° increments), 0.02° positioning accuracy, stepper motor driven with optical encoder feedback, 25kg load capacity",
    },
    {
      name: "Rack and Pinion Steering",
      type: "Linear Motion",
      icon: <Gauge className="h-6 w-6" />,
      description: "Rack and pinion mechanism for converting rotary motion to linear displacement",
      prompt: "Create a rack and pinion steering mechanism with 300mm travel distance, 1.5:1 ratio, suitable for mobile robot steering with 200N lateral force capacity",
    },
    {
      name: "Worm Gear High-Torque Reducer",
      type: "Gear System",
      icon: <Cog className="h-6 w-6" />,
      description: "Self-locking worm gear reducer providing high torque multiplication and back-drive prevention",
      prompt: "Design a worm gear reducer with 40:1 reduction ratio, high torque output for robotic joints, self-locking capability, bronze worm wheel with hardened steel worm",
    },
    {
      name: "Pneumatic Cylinder with Sensing",
      type: "Actuator",
      icon: <Wind className="h-6 w-6" />,
      description: "Double-acting pneumatic cylinder with integrated position sensors for automated control",
      prompt: "Build a pneumatic cylinder with 200mm stroke, 50mm bore diameter, double-acting at 6 bar pressure, with magnetic piston and reed switch position sensors at both ends",
    },
  ];

  const handleUseExample = (prompt: string) => {
    // Store the prompt and navigate to generator
    sessionStorage.setItem("obasi-ai-prompt", prompt);
    navigate("/generator");
  };

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">OBASI AI Examples</h1>
        <p className="text-muted-foreground text-lg">
          Explore detailed mechanical component examples - click to generate
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <Card
            key={index}
            className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            onClick={() => handleUseExample(example.prompt)}
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {example.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 leading-tight">{example.name}</h3>
                <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                  {example.type}
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
              {example.description}
            </p>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleUseExample(example.prompt);
              }}
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
              size="sm"
            >
              <Zap className="mr-2 h-4 w-4" />
              Generate This Component
            </Button>

            <div className="mt-4 pt-4 border-t text-xs text-center text-muted-foreground">
              OBASI AI Example
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Examples;