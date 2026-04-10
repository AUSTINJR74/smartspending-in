import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Insurance from "./pages/Insurance";
import CRM from "./pages/CRM";
import CreditCardsForBeginners from "./pages/blog/CreditCardsForBeginners";
import InsuranceMyths from "./pages/blog/InsuranceMyths";
import NoCostEmi from "./pages/blog/NoCostEmi";
import MaximizeCreditCardRewards from "./pages/blog/MaximizeCreditCardRewards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/blog/best-credit-cards-beginners-2025" element={<CreditCardsForBeginners />} />
          <Route path="/blog/insurance-myths" element={<InsuranceMyths />} />
          <Route path="/blog/truth-about-no-cost-emi" element={<NoCostEmi />} />
          <Route path="/blog/maximize-credit-card-rewards" element={<MaximizeCreditCardRewards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
