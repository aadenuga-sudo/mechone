import { Card } from "@/components/ui/card";
import { Cpu, Zap, Shield, Users, Settings } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Engine",
      description: "Leveraging advanced AI to transform natural language into detailed engineering specifications",
    },
    {
      icon: Zap,
      title: "Instant Generation",
      description: "Get comprehensive component specifications in seconds, not hours",
    },
    {
      icon: Shield,
      title: "Reliable & Accurate",
      description: "Built on proven engineering principles and validated specifications",
    },
    {
      icon: Users,
      title: "Made for Engineers",
      description: "Designed by engineers, for engineers, to streamline the design process",
    },
  ];

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Settings className="h-24 w-24 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl font-bold mb-4">About MechOne</h1>
          <p className="text-xl text-muted-foreground">
            Powered by OBASI TECH
          </p>
        </div>

        <Card className="p-8 mb-8 shadow-card">
          <h2 className="text-2xl font-bold mb-4">What is MechOne?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              MechOne is an advanced AI-powered mechanical component simulator with 3D visualization,
              multi-angle views, and technical documentation. Simply describe any mechanical component in
              natural language, and MechOne generates comprehensive engineering specifications instantly.
            </p>
            <p>
              Whether you're designing robot arms, gear systems, actuators, or complex mechanical
              assemblies, MechOne provides detailed technical specifications including dimensions,
              materials, mechanical properties, and assembly requirements.
            </p>
            <p>
              Our platform combines the power of advanced AI models with engineering expertise to
              deliver accurate, practical specifications that engineers can immediately use in their
              design workflow. Powered by OBASI TECH.
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 shadow-card">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 shadow-card gradient-card">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Natural language component description input</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Comprehensive engineering specifications generation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Basic 3D visualization of components</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Component library for saving and managing designs</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>JSON export for integration with CAD tools</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Pre-configured example components for quick start</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span>Responsive design for desktop and mobile devices</span>
            </li>
          </ul>
        </Card>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MechOne | Powered by OBASI TECH</p>
        </div>
      </div>
    </div>
  );
};

export default About;