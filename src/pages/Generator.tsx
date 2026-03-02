
// Compact & Page-Fitting Generator.tsx (Optimized)
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Package } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { components, type Component } from "../data/components";
import ComponentResult from "@/components/ComponentResult";
import GeneratorInput from "@/components/GeneratorInput";
import Fuse from "fuse.js";
import { PATTERNS, STOP_WORDS, preprocessQuery } from "@/lib/search";
import { preloadPriorityModels } from "@/components/ModelLoader";

const Generator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialPrompt, setInitialPrompt] = useState("");

  // Preload common models on mount for faster subsequent generation
  useEffect(() => {
    preloadPriorityModels();
  }, []);
  const [result, setResult] = useState<Component | null>(null);
  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result && resultRef.current) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [result]);

  const fuse = useMemo(() => new Fuse(components, {
    keys: [
      { name: "component_name", weight: 2 },
      { name: "component_type", weight: 2 },
      { name: "description", weight: 1 },
      { name: "applications", weight: 1 }
    ],
    threshold: 0.3, // Stricter threshold to avoid gibberish matches
    includeScore: true,
    shouldSort: true,
    minMatchCharLength: 3, // Increased from 2 to reduce noise
    ignoreLocation: true, // Search everywhere, but require good match
  }), []);

  const findBestMatch = useCallback((query: string): Component | null => {
    if (!query.trim()) return null;
    const lowerQuery = query.toLowerCase().trim();

    // === 1. SPUR GEAR ===
    // Regex: Match digits OR words followed by "teeth" (e.g., "10 teeth", "ten teeth")
    const GEAR_REGEX = /((\d+)|([a-z]+))\s*teeth/i;
    const gearMatch = lowerQuery.match(GEAR_REGEX);

    if (gearMatch) {
      const WORD_TO_NUMBER: Record<string, number> = {
        "one": 1, "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10,
        "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15,
        "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20,
        "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90,
        "hundred": 100
      };

      let numTeeth = parseInt(gearMatch[1], 10);
      if (isNaN(numTeeth)) {
        // Try looking up the word
        numTeeth = WORD_TO_NUMBER[gearMatch[1]] || 0;
      }
      if (numTeeth >= 4 && numTeeth <= 300) {
        const module = 2;
        const pitchDiameter = numTeeth * module;
        return {
          id: -1,
          glb_filename: "",
          component_name: `Custom Spur Gear – ${numTeeth} Teeth`,
          component_type: "gear",
          general_information: "A precision spur gear with involute tooth profile.",
          description: `Procedurally generated spur gear with ${numTeeth} teeth.`,
          dimensions: {
            number_of_teeth: numTeeth.toString(),
            module: `${module} mm`,
            pitch_diameter: `${pitchDiameter.toFixed(1)} mm`,
          },
          visual_parameters: {
            num_teeth: numTeeth,
            gear_radius: (pitchDiameter + 5) / 2,
            gear_thickness: 15,
            primary_color: "#666677"
          },
          is_procedural: true,
          assembly_complexity: "Low",
          estimated_cost: "$50",
          applications: ["General"],
        } as any;
      }
    }

    // === 2. HEX BOLT ===
    const boltMatch = lowerQuery.match(PATTERNS.BOLT);
    if (boltMatch) {
      const threadSize = boltMatch[1].toUpperCase();
      const length = parseFloat(boltMatch[4]);
      return {
        id: -1,
        glb_filename: "",
        component_name: `${threadSize} Hex Bolt – ${length}mm Length`,
        component_type: "fastener",
        description: `ISO 4014 compliant hex bolt.`,
        general_information: "High-tensile steel fastener.",
        dimensions: { thread_diameter: threadSize, shank_length: `${length} mm` },
        visual_parameters: {
          bolt_diameter: parseFloat(boltMatch[2]),
          bolt_length: length,
          head_size: 13,
          primary_color: "#a0a0a0"
        },
        is_procedural: true,
        assembly_complexity: "Low",
        estimated_cost: "$5",
        applications: ["Fastening"],
      } as any;
    }

    // === 3. LINEAR ACTUATOR ===
    const actuatorMatch = lowerQuery.match(PATTERNS.ACTUATOR);
    if (actuatorMatch) {
      const stroke = parseFloat(actuatorMatch[1]);
      return {
        id: -1,
        glb_filename: "",
        component_name: `Linear Actuator – ${stroke}mm Stroke`,
        component_type: "actuator",
        description: `Electric linear actuator with ${stroke}mm stroke.`,
        general_information: "12V/24V DC motor driven.",
        visual_parameters: {
          stroke,
          retracted: stroke + 200,
          primary_color: "#444444"
        },
        is_procedural: true,
        assembly_complexity: "Medium",
        estimated_cost: "$150",
        applications: ["Automation"],
      } as any;
    }

    // === 4. SMART KEYWORD SEARCH (Scored) ===
    const queryWords = lowerQuery.split(/[\s,]+/).filter(w => w.length >= 2 && !STOP_WORDS.has(w));

    // If matches are only stop words (e.g. "hello", "please"), return null immediately to avoid random fuzzy matches
    if (queryWords.length === 0) return null;

    // Helper: Strict match for short words, partial for long words
    const isMatch = (text: string, word: string) => {
      if (word.length <= 3) {
        // Strict whole word check for short terms (prevents "hi" -> "high", "man" -> "manifold")
        const regex = new RegExp(`\\b${word}\\b`, 'i');
        return regex.test(text);
      }
      return text.includes(word);
    };

    // Helper: Calculate what % of query tokens are found in the component
    const getCoverage = (comp: Component, tokens: string[]) => {
      if (tokens.length === 0) return 0;
      const text = (comp.component_type + " " + comp.component_name + " " + comp.description).toLowerCase();
      let matches = 0;
      for (const token of tokens) {
        if (isMatch(text, token)) matches++;
      }
      return matches / tokens.length;
    };

    if (queryWords.length > 0) {
      let bestMatch: Component | null = null;
      let maxScore = 0;

      for (const component of components) {
        let score = 0;
        const type = component.component_type.toLowerCase();
        const name = component.component_name.toLowerCase();

        // Calculate score based on word matches
        for (const word of queryWords) {
          if (isMatch(type, word)) score += 2;
          else if (isMatch(name, word)) score += 1;
        }

        // Bonus for exact matches
        if (type === lowerQuery) score += 5;
        if (name === lowerQuery) score += 5;

        // Contextual Bonus: Matching the last word (Head Noun Heuristic)
        const lastWord = queryWords[queryWords.length - 1];
        if (lastWord && (isMatch(type, lastWord) || isMatch(name, lastWord))) {
          score += 3;
        }

        // Update best match if this component has a higher score
        if (score > maxScore) {
          maxScore = score;
          bestMatch = component;
        }
      }

      // If we found a good match, VALIDATE with Token Coverage
      if (bestMatch && maxScore >= 2) {
        const coverage = getCoverage(bestMatch, queryWords);
        // Require at least 50% of tokens to match (e.g. "cnc lathe" -> "lathe" is 50%, accepted)
        if (coverage >= 0.5) {
          return { ...bestMatch, glb_url: `/models/${bestMatch.glb_filename}` };
        }
      }
    }

    // === 5. FUZZY SEARCH (Fallback) ===
    const cleanedQuery = preprocessQuery(lowerQuery);
    const results = fuse.search(cleanedQuery);
    if (results.length > 0) {
      const bestResult = results[0];
      // Double check score (lower is better)
      if (bestResult.score !== undefined && bestResult.score > 0.3) {
        return null; // Too fuzzy
      }

      const best = bestResult.item;
      // VALIDATE FUSE RESULT WITH COVERAGE
      // Even if Fuse thinks it's a match, ensure we actually have the keywords
      if (queryWords.length > 0) {
        const coverage = getCoverage(best, queryWords);
        if (coverage < 0.5) return null; // Reject if low coverage
      }

      return { ...best, glb_url: `/models/${best.glb_filename}` };
    }
    return null;
  }, [fuse]);

  const handleGenerate = useCallback(async (description: string) => {
    if (!description.trim()) return toast({ title: "Empty Input", description: "Describe a component", variant: "destructive" });
    setIsLoading(true);
    setResult(null);
    await new Promise(r => setTimeout(r, 600));
    const match = findBestMatch(description);
    if (match) {
      setResult(match);
      toast({ title: "Success!", description: `${match.component_name} ` });
    } else {
      toast({ title: "Could not generate this component", description: "Try being more specific!", variant: "destructive" });
    }
    setIsLoading(false);
  }, [findBestMatch, toast]);

  useEffect(() => {
    const prompt = sessionStorage.getItem("obasi-ai-prompt");
    if (prompt) {
      setInitialPrompt(prompt);
      handleGenerate(prompt);
      sessionStorage.removeItem("obasi-ai-prompt");
    }
  }, [handleGenerate]);

  const handleSuggestionSelect = (comp: Component) => {
    setResult({ ...comp, glb_url: `/models/${comp.glb_filename}` });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto"> {/* Constrained width for better fit */}

        {/* Compact Hero */}
        <div className="text-center mb-10 space-y-4">
          <Badge variant="secondary" className="px-4 py-1 text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Design
          </Badge>

          {/* Mobile Recommendation */}
          <div className="md:hidden">
            <span className="text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-3 py-1">
              For best 3D performance, use Desktop
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
            MechOne
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe a mechanical component — get instant specs and 3D model
          </p>
          <p className="text-sm text-muted-foreground">Powered by OBASI TECH</p>
        </div>

        {/* Compact Input Card */}
        <Card className="p-6 md:p-8 shadow-xl border bg-white md:bg-white/90 md:backdrop-blur">
          <GeneratorInput
            onGenerate={handleGenerate}
            onSuggestionSelect={handleSuggestionSelect}
            isLoading={isLoading}
            initialValue={initialPrompt}
          />
        </Card>


        {/* Result */}
        {result && (
          <div ref={resultRef} className="mt-10 scroll-mt-6">
            <ComponentResult data={result} />
          </div>
        )}

        {/* Empty State */}
        {!result && !isLoading && (
          <div className="mt-12 text-center text-muted-foreground">
            <Package className="h-12 w-12 mx-auto mb-3 opacity-30" />
            <p>Result will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;