import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import Landing from "./pages/Landing";
import Generator from "./pages/Generator";
import Library from "./pages/Library";
import Examples from "./pages/Examples";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { Analytics } from "@vercel/analytics/react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/generator" element={<Generator />} />
          <Route path="/library" element={<Library />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Vercel Analytics */}
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
