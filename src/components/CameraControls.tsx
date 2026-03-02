import { Button } from "@/components/ui/button";
import { 
  Square, 
  ArrowUp, 
  ArrowRight, 
  Rotate3D, 
  ArrowDown, 
  RotateCcw,
  Box
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export type CameraView = 'front' | 'side' | 'top' | 'isometric' | 'back' | 'bottom' | 'reset';

interface CameraControlsProps {
  onViewChange: (view: CameraView) => void;
  currentView: CameraView;
}

const views: { view: CameraView; label: string; icon: React.ReactNode }[] = [
  { view: 'front', label: 'Front View', icon: <Square className="h-4 w-4" /> },
  { view: 'side', label: 'Side View', icon: <ArrowRight className="h-4 w-4" /> },
  { view: 'top', label: 'Top View', icon: <ArrowUp className="h-4 w-4" /> },
  { view: 'isometric', label: 'Isometric View', icon: <Box className="h-4 w-4" /> },
  { view: 'back', label: 'Back View', icon: <Rotate3D className="h-4 w-4" /> },
  { view: 'bottom', label: 'Bottom View', icon: <ArrowDown className="h-4 w-4" /> },
  { view: 'reset', label: 'Reset View', icon: <RotateCcw className="h-4 w-4" /> },
];

function CameraControls({ onViewChange, currentView }: CameraControlsProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-1">
        {views.map(({ view, label, icon }) => (
          <Tooltip key={view}>
            <TooltipTrigger asChild>
              <Button
                variant={currentView === view ? "default" : "outline"}
                size="sm"
                onClick={() => onViewChange(view)}
                className="h-8 px-2"
              >
                {icon}
                <span className="ml-1 hidden sm:inline text-xs">{label.split(' ')[0]}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default CameraControls;
