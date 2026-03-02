import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Settings, Home, Zap, Lightbulb, Info, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/generator", label: "Generator", icon: Zap },
    { path: "/examples", label: "Examples", icon: Lightbulb },
    { path: "/about", label: "About", icon: Info },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Settings className="h-10 w-10 text-primary" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              MechOne
            </span>
            <span className="text-[10px] text-muted-foreground font-medium hidden sm:block">
              Powered by OBASI TECH
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden md:flex items-center space-x-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.path}
                variant={isActive(link.path) ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={link.path} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{link.label}</span>
                </Link>
              </Button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="ml-auto md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t p-4 bg-background">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.path}
                  variant={isActive(link.path) ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="justify-start w-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={link.path} className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};