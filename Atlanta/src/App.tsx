import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Locations from "./pages/Locations";
import DeckRepairs from "./pages/DeckRepairs";
import NewBuild from "./pages/NewBuild";
import CommonRepairs from "./pages/CommonRepairs";  // ← Add this import
import NotFound from "./pages/NotFound";
import DeckMaintenancePage from "./pages/DeckMaintenance";
import DeckUpgradesPage from "./pages/DeckUpgradesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/deck-repairs" element={<DeckRepairs />} />
          <Route path="/new-decks" element={<NewBuild />} />
          <Route path="/common-repairs" element={<CommonRepairs />} />  {/* ← Add this route */}
          <Route path="/deck-maintenance" element={<DeckMaintenancePage />} />
          <Route path="/deck-upgrades" element={<DeckUpgradesPAge />} /> 
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
