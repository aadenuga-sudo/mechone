import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface ScaleControlProps {
  scale: number;
  onScaleChange: (scale: number) => void;
}

function ScaleControl({ scale, onScaleChange }: ScaleControlProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleReset = () => {
    onScaleChange(1.0);
  };

  return (
    <div className="absolute top-4 right-4 z-10">
      {/* Mobile Toggle */}
      <div className="md:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="shadow-lg backdrop-blur-sm bg-white/90 text-slate-900 border-slate-200 hover:bg-slate-100"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          {isExpanded ? 'Hide Size' : 'Adjust Size'}
        </Button>
      </div>

      {/* Control Panel: Hidden on mobile (unless expanded), Visible on Desktop */}
      <div className={`
        mt-2 md:mt-0 
        bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border 
        min-w-[220px] transition-all duration-200
        ${isExpanded ? 'block' : 'hidden md:block'}
      `}>
        <div className="flex items-center justify-between mb-2">
          <Label className="text-sm font-medium">
            Model Size: {scale.toFixed(1)}x
          </Label>
          <Button
            onClick={handleReset}
            size="sm"
            variant="ghost"
            className="h-6 px-2 hover:bg-muted"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>
        <Slider
          min={0.1}
          max={5.0}
          step={0.1}
          value={[scale]}
          onValueChange={(values) => onScaleChange(values[0])}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0.1x</span>
          <span>5.0x</span>
        </div>
        <div className="text-xs text-muted-foreground mt-2 text-center hidden md:block">
          Tip: Use +/- keys or 0 to reset
        </div>
      </div>
    </div>
  );
}

export default ScaleControl;
