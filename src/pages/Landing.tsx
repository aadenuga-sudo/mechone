import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Eye, Share2, Settings, Cpu, Printer, Camera, Network, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Landing = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Specifications",
      description: "Generate detailed technical specs from natural language descriptions",
    },
    {
      icon: Eye,
      title: "3D Visualization",
      description: "View basic 3D representations of your mechanical components",
    },
    {
      icon: Camera,
      title: "Multi-View Analysis",
      description: "Inspect components from multiple angles with dedicated camera controls",
    },
    {
      icon: Printer,
      title: "Print Functionality",
      description: "Generate and print professional specification sheets instantly",
    },
    {
      icon: Network,
      title: "Wireframe Mode",
      description: "Toggle wireframe view to analyze structural topology",
    },
    {
      icon: Share2,
      title: "Export & Share",
      description: "Download specifications as JSON or share with your team",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.9), rgba(37, 99, 235, 0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-background" />

        <div className="container relative z-10 text-center text-white">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
            <Settings className="h-5 w-5 animate-spin-slow" />
            <span className="text-sm font-medium">AI-Powered Mechanical Design</span>
          </div>

          <h1 className="mb-4 text-5xl md:text-7xl font-bold tracking-tight animate-fade-in flex items-center justify-center gap-4">
            MechOne
            <span className="text-2xl md:text-3xl text-primary bg-white/10 px-3 py-1 rounded-lg border border-white/20">v2.0</span>
          </h1>
          <p className="mb-6 text-lg md:text-xl text-white/80 font-medium animate-fade-in">
            Powered by OBASI TECH
          </p>

          <p className="mb-8 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Describe any mechanical component and get instant engineering specifications and 3D models
          </p>

          <Button
            size="lg"
            asChild
            className="animate-fade-in shadow-glow text-lg px-8 py-6 bg-accent hover:bg-accent/90"
          >
            <Link to="/generator">
              <Zap className="mr-2 h-5 w-5" />
              Start Creating
            </Link>
          </Button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container text-center text-white">
          <h2 className="mb-6 text-3xl md:text-4xl font-bold">
            Ready to Design Your Next Component?
          </h2>
          <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto">
            Join engineers using MechOne to accelerate their mechanical design workflow
          </p>
          <Button
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-white/90"
          >
            <Link to="/generator">Get Started Now</Link>
          </Button>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/80 text-sm mb-2">Have questions or need support?</p>
            <div className="inline-flex items-center gap-2 text-white font-medium bg-white/10 px-4 py-2 rounded-full cursor-pointer hover:bg-white/20 transition-colors">
              <Mail className="h-4 w-4" />
              <a href="mailto:chimfyofficial@gmail.com">chimfyofficial@gmail.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
