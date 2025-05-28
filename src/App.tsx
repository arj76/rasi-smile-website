
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesDetail from "./pages/ServicesDetail";
import DentalCheckupsPost from "./pages/DentalCheckupsPost";
import ModernTechPost from "./pages/ModernTechPost";
import WhatCausesCavitiesPost from "./pages/WhatCausesCavitiesPost";
import LittleSmilesPost from "./pages/LittleSmilesPost";
import TeenTalkPost from "./pages/TeenTalkPost";
import DentalKnowHowPost from "./pages/DentalKnowHowPost";
import DidYouKnowPost from "./pages/DidYouKnowPost";
import TreatmentGuidePost from "./pages/TreatmentGuidePost";
import FamilyTipsPost from "./pages/FamilyTipsPost";
import FoodsLoveTeethPost from "./pages/FoodsLoveTeethPost";
import ToothbrushTipsPost from "./pages/ToothbrushTipsPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/:serviceType" element={<ServicesDetail />} />
          <Route path="/blog/importance-of-regular-dental-checkups" element={<DentalCheckupsPost />} />
          <Route path="/blog/modern-dental-technology-whats-new" element={<ModernTechPost />} />
          <Route path="/blog/what-causes-cavities" element={<WhatCausesCavitiesPost />} />
          <Route path="/blog/little-smiles" element={<LittleSmilesPost />} />
          <Route path="/blog/teen-talk" element={<TeenTalkPost />} />
          <Route path="/blog/dental-know-how" element={<DentalKnowHowPost />} />
          <Route path="/blog/did-you-know" element={<DidYouKnowPost />} />
          <Route path="/blog/treatment-guide" element={<TreatmentGuidePost />} />
          <Route path="/blog/family-tips" element={<FamilyTipsPost />} />
          <Route path="/blog/foods-love-teeth" element={<FoodsLoveTeethPost />} />
          <Route path="/blog/toothbrush-tips" element={<ToothbrushTipsPost />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
