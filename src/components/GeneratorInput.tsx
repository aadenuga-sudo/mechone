import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Zap, RotateCcw, Package, Lightbulb, Search, X } from "lucide-react";
import Fuse from "fuse.js";
import { components, type Component } from "../data/components";
import { preprocessQuery } from "@/lib/search";

interface GeneratorInputProps {
    onGenerate: (text: string) => void;
    onSuggestionSelect: (component: Component) => void;
    isLoading: boolean;
    initialValue?: string;
}

const examplePrompts = [
    "Create a spur gear with 45 teeth and 90mm diameter",
    "Design a gear with 100 teeth",
    "Build an M8 hex bolt with 70mm length",
    "Design a 6-axis industrial robot arm for welding",
    "Build a V8 engine with 5.0L displacement",
    "Create a rack and pinion steering mechanism",
    "Build a linear actuator with 500mm stroke length",
    "Design a piston for a 4-stroke engine"
];

const GeneratorInput = ({ onGenerate, onSuggestionSelect, isLoading, initialValue = "" }: GeneratorInputProps) => {
    const [description, setDescription] = useState(initialValue);
    const [suggestions, setSuggestions] = useState<Component[]>([]);

    useEffect(() => {
        if (initialValue) {
            setDescription(initialValue);
        }
    }, [initialValue]);

    // Fuse instance (memoized)
    const fuse = useMemo(() => new Fuse(components, {
        keys: ["component_name", "component_type", "description", "applications"],
        threshold: 0.4,
        includeScore: true,
        shouldSort: true,
        minMatchCharLength: 2
    }), []);

    // Live suggestions (Debounced)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!description.trim() || preprocessQuery(description).length < 2) {
                setSuggestions([]);
                return;
            }
            const results = fuse.search(preprocessQuery(description));
            setSuggestions(results.slice(0, 5).map(r => r.item));
        }, 150); // 150ms debounce

        return () => clearTimeout(timer);
    }, [description, fuse]);

    const handleReset = () => {
        setDescription("");
        setSuggestions([]);
    };

    const handleSuggestionClick = (comp: Component) => {
        setDescription(comp.component_name);
        setSuggestions([]);
        onSuggestionSelect(comp);
    };

    const handleExampleClick = (ex: string) => {
        setDescription(ex);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (description.trim()) {
                onGenerate(description);
            }
        }
    };

    return (
        <div className="space-y-6">
            {/* Input Area */}
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <Package className="h-6 w-6 text-primary" />
                    <h2 className="text-xl font-semibold">Component Description</h2>
                </div>

                <div className="relative">
                    <Textarea
                        placeholder="e.g., Spur gear with 45 teeth..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="min-h-[120px] text-base resize-none focus:border-primary"
                        disabled={isLoading}
                        onKeyDown={handleKeyDown}
                    />

                    {/* Suggestions Dropdown */}
                    {suggestions.length > 0 && (
                        <div className="absolute z-10 w-full mt-2 bg-card border rounded-lg shadow-xl">
                            <div className="p-2 border-b bg-muted/50 flex items-center justify-between text-xs font-medium">
                                <div className="flex items-center gap-2">
                                    <Search className="h-3 w-3" /> Suggestions
                                </div>
                                <Button variant="ghost" size="sm" onClick={() => setSuggestions([])} className="h-5 w-5 p-0">
                                    <X className="h-3 w-3" />
                                </Button>
                            </div>
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleSuggestionClick(s)}
                                    className="w-full px-4 py-2.5 text-left hover:bg-primary/5 text-sm transition-colors"
                                >
                                    <div className="font-medium">{s.component_name}</div>
                                    <div className="text-xs text-muted-foreground">{s.component_type}</div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Examples */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    Quick examples
                </div>
                <div className="flex flex-wrap gap-2">
                    {examplePrompts.map((ex, i) => (
                        <Button
                            key={i}
                            variant="secondary"
                            size="sm"
                            className={`text-xs h-8 hover:bg-primary/10 transition-colors ${i >= 2 ? "hidden md:inline-flex" : ""}`}
                            onClick={() => handleExampleClick(ex)}
                            disabled={isLoading}
                        >
                            {ex}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
                <Button
                    onClick={() => onGenerate(description)}
                    disabled={isLoading || !description.trim()}
                    className="flex-1 h-12 font-medium bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 transition-opacity"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        <>
                            <Zap className="mr-2 h-5 w-5" />
                            Generate
                        </>
                    )}
                </Button>

                {description && (
                    <Button onClick={handleReset} variant="outline" className="h-12 hover:bg-destructive/5 hover:text-destructive hover:border-destructive/30 transition-colors">
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Clear
                    </Button>
                )}
            </div>
        </div>
    );
};

export default GeneratorInput;
