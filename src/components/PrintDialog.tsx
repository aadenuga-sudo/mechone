import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Printer, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
interface PrintDialogProps {
  specifications: any;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  showDimensions: boolean;
  onCaptureView?: (view: string) => Promise<void>;
}
interface MultiViewCapture {
  view: string;
  label: string;
  dataUrl: string | null;
}
const MULTI_VIEW_ANGLES = [
  { view: 'front', label: 'Front View' },
  { view: 'side', label: 'Side View' },
  { view: 'top', label: 'Top View' },
  { view: 'isometric', label: 'Isometric View' },
  { view: 'back', label: 'Back View' },
];
function PrintDialog({ specifications, canvasRef, showDimensions, onCaptureView }: PrintDialogProps) {
  const [open, setOpen] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [captureProgress, setCaptureProgress] = useState(0);
  const [captureStatus, setCaptureStatus] = useState('');
  const [includeSpecs, setIncludeSpecs] = useState(true);
  const [includeCurrentView, setIncludeCurrentView] = useState(true);
  const [includeMultiView, setIncludeMultiView] = useState(false);
  const [includeDimensions, setIncludeDimensions] = useState(showDimensions);
  const { toast } = useToast();
  const printFrameRef = useRef<HTMLIFrameElement | null>(null);
  const captureCanvas = useCallback((): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!canvasRef.current) {
        console.warn('Canvas ref not available');
        resolve(null);
        return;
      }
     
      try {
        // Force a render frame before capturing to ensure dimensions are visible
        requestAnimationFrame(() => {
          try {
            const dataUrl = canvasRef.current?.toDataURL('image/png', 1.0);
            resolve(dataUrl || null);
          } catch (error) {
            console.error('Error capturing canvas:', error);
            resolve(null);
          }
        });
      } catch (error) {
        console.error('Error initiating canvas capture:', error);
        resolve(null);
      }
    });
  }, [canvasRef]);
  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const captureMultipleViews = useCallback(async (): Promise<MultiViewCapture[]> => {
    const captures: MultiViewCapture[] = [];
   
    if (!onCaptureView) {
      console.warn('onCaptureView callback not provided');
      return captures;
    }
    for (let i = 0; i < MULTI_VIEW_ANGLES.length; i++) {
      const { view, label } = MULTI_VIEW_ANGLES[i];
      setCaptureStatus(`Capturing ${label}...`);
      setCaptureProgress(((i + 1) / MULTI_VIEW_ANGLES.length) * 100);
      try {
        // Trigger camera animation to this view
        await onCaptureView(view);
       
        // Wait for camera to settle (animation is ~400ms)
        await delay(500);
       
        // Capture the canvas
        const dataUrl = await captureCanvas();
        captures.push({ view, label, dataUrl });
      } catch (error) {
        console.error(`Error capturing ${label}:`, error);
        captures.push({ view, label, dataUrl: null });
      }
    }
    return captures;
  }, [onCaptureView, captureCanvas]);
  const handlePrint = async () => {
    setIsPrinting(true);
    setCaptureProgress(0);
    setCaptureStatus('');
   
    try {
      let currentViewImage: string | null = null;
      let multiViewImages: MultiViewCapture[] = [];
     
      // Capture current view first (if selected and not capturing multi-view)
      if (includeCurrentView && !includeMultiView) {
        setCaptureStatus('Capturing current view...');
        currentViewImage = await captureCanvas();
      }
      // Capture multi-view images
      if (includeMultiView) {
        setCaptureStatus('Starting multi-view capture...');
        multiViewImages = await captureMultipleViews();
       
        // Return camera to isometric view after capturing
        if (onCaptureView) {
          await onCaptureView('isometric');
          await delay(300);
        }
      }
      setCaptureStatus('Generating print document...');
      const printContent = generatePrintContent(
        specifications,
        currentViewImage,
        multiViewImages,
        includeSpecs,
        includeCurrentView && !includeMultiView,
        includeMultiView,
        includeDimensions
      );
      // Create a hidden iframe for printing
      if (printFrameRef.current) {
        document.body.removeChild(printFrameRef.current);
      }
     
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      iframe.style.left = '-9999px';
      printFrameRef.current = iframe;
      document.body.appendChild(iframe);
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(printContent);
        iframeDoc.close();
        // Wait for images to load
        setTimeout(() => {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
          setIsPrinting(false);
          setCaptureProgress(0);
          setCaptureStatus('');
          setOpen(false);
         
          toast({
            title: "Print Ready",
            description: includeMultiView
              ? `Print dialog opened with ${multiViewImages.length} angle views`
              : "Print dialog opened",
          });
        }, 800);
      }
    } catch (error) {
      console.error('Print error:', error);
      setIsPrinting(false);
      setCaptureProgress(0);
      setCaptureStatus('');
      toast({
        title: "Print Error",
        description: "Failed to generate print preview",
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          <Printer className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Print</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Print Component Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-sm text-muted-foreground">
            Select what to include in your print:
          </p>
         
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="specs"
                checked={includeSpecs}
                onCheckedChange={(checked) => setIncludeSpecs(checked === true)}
                disabled={isPrinting}
              />
              <Label htmlFor="specs" className="text-sm font-medium cursor-pointer">
                Component Specifications
              </Label>
            </div>
           
            <div className="flex items-center space-x-2">
              <Checkbox
                id="currentView"
                checked={includeCurrentView}
                onCheckedChange={(checked) => setIncludeCurrentView(checked === true)}
                disabled={isPrinting || includeMultiView}
              />
              <Label
                htmlFor="currentView"
                className={`text-sm font-medium cursor-pointer ${includeMultiView ? 'text-muted-foreground' : ''}`}
              >
                Current 3D View Image
                {includeMultiView && ' (included in multi-view)'}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="multiView"
                checked={includeMultiView}
                onCheckedChange={(checked) => {
                  setIncludeMultiView(checked === true);
                  if (checked) {
                    setIncludeCurrentView(false);
                  }
                }}
                disabled={isPrinting || !onCaptureView}
              />
              <Label
                htmlFor="multiView"
                className={`text-sm font-medium cursor-pointer ${!onCaptureView ? 'text-muted-foreground' : ''}`}
              >
                All Multi-Angle Views (5 views)
                {!onCaptureView && ' (Not available)'}
              </Label>
            </div>
            {includeMultiView && (
              <div className="ml-6 text-xs text-muted-foreground bg-muted p-2 rounded">
                Captures: Front, Side, Top, Isometric, and Back views
              </div>
            )}
           
            <div className="flex items-center space-x-2">
              <Checkbox
                id="dimensions"
                checked={includeDimensions}
                onCheckedChange={(checked) => setIncludeDimensions(checked === true)}
                disabled={isPrinting || !showDimensions}
              />
              <Label
                htmlFor="dimensions"
                className={`text-sm font-medium cursor-pointer ${!showDimensions ? 'text-muted-foreground' : ''}`}
              >
                Include Dimensions Table
                {!showDimensions && ' (Toggle in viewer for visual overlay)'}
              </Label>
            </div>
          </div>
         
          {showDimensions && (includeCurrentView || includeMultiView) && (
            <p className="text-xs text-muted-foreground bg-muted p-2 rounded">
              Note: Dimension lines visible in the 3D viewer will be captured in the images automatically.
            </p>
          )}
          {isPrinting && (
            <div className="space-y-2">
              <Progress value={captureProgress} className="h-2" />
              <p className="text-xs text-center text-muted-foreground">
                {captureStatus}
              </p>
            </div>
          )}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)} disabled={isPrinting}>
              Cancel
            </Button>
            <Button onClick={handlePrint} disabled={isPrinting}>
              {isPrinting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {includeMultiView ? 'Capturing Views...' : 'Preparing...'}
                </>
              ) : (
                <>
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
function generatePrintContent(
  specifications: any,
  currentViewImage: string | null,
  multiViewImages: MultiViewCapture[],
  includeSpecs: boolean,
  includeCurrentView: boolean,
  includeMultiView: boolean,
  includeDimensions: boolean
): string {
  const now = new Date().toLocaleString();
  const dimensions = specifications?.dimensions || {};
  const physicalProperties = specifications?.physical_properties || {};
  const mechanicalProperties = specifications?.mechanical_properties || {};
  const materials = specifications?.materials || [];
  const applications = specifications?.applications || [];

  // Helper to generate key-value HTML for objects (handles nested)
  const generateKeyValueHTML = (obj: Record<string, any>, isGrid: boolean = false) => {
    let html = '';
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.entries(value).forEach(([subKey, subVal]) => {
          html += `
            <div class="spec-row">
              <span class="spec-label">${subKey.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
              <span class="spec-value">${String(subVal) || 'N/A'}</span>
            </div>
          `;
        });
      } else {
        html += `
          <div class="spec-row">
            <span class="spec-label">${key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
            <span class="spec-value">${String(value) || 'N/A'}</span>
          </div>
        `;
      }
    });
    return isGrid ? `<div class="grid">${html}</div>` : html;
  };

  // Generate dimensions table dynamically
  const dimensionsHTML = Object.keys(dimensions).length > 0 ? `
    <table class="dimensions-table">
      <tr>
        <th>Measurement</th>
        <th>Value</th>
      </tr>
      ${Object.entries(dimensions).map(([key, value]) => `
        <tr>
          <td>${key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</td>
          <td>${String(value)}</td>
        </tr>
      `).join('')}
    </table>
  ` : '<p>No dimensions available</p>';

  // Generate materials badges
  const materialsHTML = materials.length > 0 ? materials.map((m: string) => `
    <span class="material-badge">${m}</span>
  `).join('') : '<p>No materials specified</p>';

  // Generate applications list
  const applicationsHTML = applications.length > 0 ? `
    <ul style="padding-left: 20px;">
      ${applications.map((app: string) => `<li style="margin-bottom: 4px;">${app}</li>`).join('')}
    </ul>
  ` : '<p>No specific applications listed</p>';

  // Generate motion characteristics
  const motionHTML = `
    <div class="spec-row">
      <span class="spec-label">Degree of Freedom</span>
      <span class="spec-value">${specifications?.degree_of_freedom || 'N/A'}</span>
    </div>
    <div class="spec-row">
      <span class="spec-label">Speed</span>
      <span class="spec-value">${specifications?.speed || 'N/A'}</span>
    </div>
    <div class="spec-row">
      <span class="spec-label">Range of Motion</span>
      <span class="spec-value">${specifications?.range_of_motion || 'N/A'}</span>
    </div>
    <div class="spec-row">
      <span class="spec-label">Force/Torque Output</span>
      <span class="spec-value">${specifications?.force_output || 'N/A'}</span>
    </div>
  `;

  // Generate full-page view for each multi-angle view
  const multiViewHTML = multiViewImages.length > 0 ? multiViewImages.map(({ label, dataUrl }, index) => `
    <div class="full-page-view">
      <div class="page-header">
        <div class="logo">Mech<span>One</span></div>
        <div class="page-title">${specifications?.component_name || 'Component'}</div>
        <div class="view-name">${label}</div>
      </div>
      <div class="full-view-image">
        ${dataUrl ? `<img src="${dataUrl}" alt="${label}" />` : '<div class="no-image">Failed to capture</div>'}
      </div>
      <div class="page-footer">
        <span>Generated by MechOne | Powered by OBASI TECH</span>
        <span>View ${index + 1} of ${multiViewImages.length}</span>
      </div>
    </div>
  `).join('') : '';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${specifications?.component_name || 'Component'} - MechOne</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          line-height: 1.5;
        }
       
        /* Page styling for specifications and current view */
        .content-page {
          padding: 20px;
          min-height: 100vh;
        }
       
        .header {
          border-bottom: 3px solid #3498db;
          padding-bottom: 15px;
          margin-bottom: 20px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #3498db;
        }
        .logo span {
          color: #2ecc71;
        }
        .title {
          font-size: 28px;
          margin-top: 10px;
          color: #2c3e50;
        }
        .type-badge {
          display: inline-block;
          background: #3498db;
          color: white;
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 12px;
          margin-top: 8px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #2c3e50;
          border-bottom: 1px solid #ddd;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
          border-bottom: 1px dotted #eee;
        }
        .spec-label {
          color: #7f8c8d;
          font-size: 13px;
        }
        .spec-value {
          font-weight: 600;
          font-size: 13px;
        }
        .description {
          background: #f8f9fa;
          padding: 12px;
          border-radius: 6px;
          font-size: 14px;
        }
        .image-container {
          text-align: center;
          margin: 20px 0;
          page-break-inside: avoid;
        }
        .image-container img {
          max-width: 100%;
          max-height: 400px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
       
        /* Full-page view styling for multi-angle views */
        .full-page-view {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          page-break-after: always;
          page-break-inside: avoid;
          padding: 20px;
          box-sizing: border-box;
        }
        .full-page-view:last-child {
          page-break-after: auto;
        }
        .page-header {
          border-bottom: 3px solid #3498db;
          padding-bottom: 12px;
          margin-bottom: 15px;
          flex-shrink: 0;
        }
        .page-title {
          font-size: 22px;
          color: #2c3e50;
          margin-top: 8px;
          font-weight: 600;
        }
        .view-name {
          font-size: 18px;
          color: #3498db;
          margin-top: 6px;
          font-weight: 500;
        }
        .full-view-image {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 0;
          padding: 10px;
        }
        .full-view-image img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: #f8f9fa;
        }
        .page-footer {
          display: flex;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid #ddd;
          font-size: 11px;
          color: #95a5a6;
          flex-shrink: 0;
        }
       
        .no-image {
          width: 100%;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          border: 1px dashed #ddd;
          border-radius: 6px;
          color: #95a5a6;
          font-size: 14px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 15px;
          border-top: 1px solid #ddd;
          font-size: 11px;
          color: #95a5a6;
          text-align: center;
        }
        .materials {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .material-badge {
          background: #e8f4f8;
          color: #2c3e50;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 12px;
        }
        .dimensions-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        .dimensions-table th,
        .dimensions-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .dimensions-table th {
          background: #f8f9fa;
          font-weight: 600;
        }
       
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .content-page {
            padding: 15px;
          }
          .image-container img {
            max-height: 350px;
          }
          .full-page-view {
            height: 100vh;
            page-break-after: always;
            page-break-inside: avoid;
          }
          .full-page-view:last-child {
            page-break-after: auto;
          }
          .full-view-image img {
            max-height: calc(100vh - 180px);
          }
        }
      </style>
    </head>
    <body>
      ${(includeSpecs || (includeCurrentView && currentViewImage)) ? `
      <div class="content-page">
        <div class="header">
          <div class="logo">Mech<span>One</span></div>
          <div class="title">${specifications?.component_name || 'Component'}</div>
          <span class="type-badge">${specifications?.component_type || 'Mechanical Component'}</span>
        </div>
        ${includeCurrentView && currentViewImage ? `
          <div class="image-container">
            <img src="${currentViewImage}" alt="3D View" />
            <p style="font-size: 12px; color: #7f8c8d; margin-top: 8px;">Current 3D View</p>
          </div>
        ` : ''}
      ` : ''}
      ${includeSpecs ? `
        <div class="section">
          <div class="section-title">Description</div>
          <div class="description">${specifications?.description || specifications?.general_information || 'No description available'}</div>
        </div>
        ${specifications?.general_information && specifications?.general_information !== specifications?.description ? `
          <div class="section">
            <div class="section-title">General Information</div>
            <div class="description">${specifications.general_information}</div>
          </div>
        ` : ''}
        <div class="grid">
          <div class="section">
            <div class="section-title">General Information</div>
            <div class="spec-row">
              <span class="spec-label">Assembly Complexity</span>
              <span class="spec-value">${specifications?.assembly_complexity || 'N/A'}</span>
            </div>
            <div class="spec-row">
              <span class="spec-label">Estimated Cost</span>
              <span class="spec-value">${specifications?.estimated_cost || 'N/A'}</span>
            </div>
          </div>
        </div>
        ${includeDimensions ? `
          <div class="section">
            <div class="section-title">Dimensions</div>
            ${dimensionsHTML}
          </div>
        ` : ''}
        <div class="section">
          <div class="section-title">Materials</div>
          <div class="materials">
            ${materialsHTML}
          </div>
        </div>
        <div class="section">
          <div class="section-title">Physical Properties</div>
          ${generateKeyValueHTML(physicalProperties)}
        </div>
        <div class="section">
          <div class="section-title">Mechanical Properties</div>
          ${generateKeyValueHTML(mechanicalProperties, true)}
        </div>
        <div class="section">
          <div class="section-title">Power Requirements</div>
          <div class="description">${specifications?.power_requirements || 'N/A (passive component)'}</div>
        </div>
        <div class="section">
          <div class="section-title">Motion Characteristics</div>
          ${motionHTML}
        </div>
        ${applications.length ? `
          <div class="section">
            <div class="section-title">Applications</div>
            ${applicationsHTML}
          </div>
        ` : ''}
      ` : ''}
      ${(includeSpecs || (includeCurrentView && currentViewImage)) ? `
        <div class="footer">
          Generated by MechOne | Powered by OBASI TECH | Printed on ${now}
        </div>
      </div>
      ` : ''}
      ${includeMultiView ? multiViewHTML : ''}
    </body>
    </html>
  `;
}
export default PrintDialog;
