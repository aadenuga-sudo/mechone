import { useEffect, useState } from "react";
// ...existing code...
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Eye, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import ComponentResult from "@/components/ComponentResult";

const Library = () => {
  const [components, setComponents] = useState<any[]>([]);
  const [filteredComponents, setFilteredComponents] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedComponent, setSelectedComponent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchComponents();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = components.filter(
        (comp) =>
          comp.component_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          comp.component_type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredComponents(filtered);
    } else {
      setFilteredComponents(components);
    }
  }, [searchQuery, components]);

  const fetchComponents = async () => {
    try {
    // ...existing code...
        .from("components")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setComponents(data || []);
      setFilteredComponents(data || []);
    } catch (error: any) {
      toast({
        title: "Error Loading Library",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
    // ...existing code...

      if (error) throw error;

      toast({
        title: "Deleted",
        description: "Component removed from library",
      });

      fetchComponents();
    } catch (error: any) {
      toast({
        title: "Delete Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="text-center">Loading library...</div>
      </div>
    );
  }

  if (selectedComponent) {
    return (
      <div className="container py-8">
        <Button
          variant="outline"
          onClick={() => setSelectedComponent(null)}
          className="mb-6"
        >
          ← Back to Library
        </Button>
        <ComponentResult data={selectedComponent.specifications} />
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">OBASI AI Component Library</h1>
        <p className="text-muted-foreground">
          Your saved mechanical components
        </p>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {filteredComponents.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-4">
            {searchQuery ? "No components match your search" : "No components saved yet"}
          </p>
          {!searchQuery && (
            <Button asChild>
              <a href="/generator">Generate Your First Component</a>
            </Button>
          )}
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <Card
              key={component.id}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">
                    {component.component_name}
                  </h3>
                  <Badge variant="secondary">{component.component_type}</Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {new Date(component.created_at).toLocaleDateString()}
              </p>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => setSelectedComponent(component)}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>

                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Component?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete "{component.component_name}" from your library.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleDelete(component.id)}>
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>

              <div className="mt-4 pt-4 border-t text-xs text-center text-muted-foreground">
                Generated by OBASI AI
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
