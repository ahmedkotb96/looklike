import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "@/pages/Contact";
import AdminDashboard from "@/pages/Admin";
import AdminPortfolio from "@/pages/AdminPortfolio";
import AdminTeam from "./pages/AdminTeam";
import BrandingIdentityDesignPage from "@/components/LandingPage/branding_identity_design";
import AboutPage from "@/components/LandingPage/main/aboutUsMainSection";
import OurTeamPage from "@/components/LandingPage/main/ourTeamMain";
import MediaProductionPage from "@/components/LandingPage/media_production";
import OutdoorAdvertisingPage from "@/components/LandingPage/outdoor_advertising";
import SocialMediaManagementPage from "@/components/LandingPage/socialMediaManagment";
import AdminBranding from "@/pages/AdminBranding";
import AdminSocialMediaManagement from "@/pages/AdminSocialMediaManagement";
import AdminMediaProduction from "@/pages/AdminMediaProduction";
import AdminOutdoorAdvertising from "@/pages/AdminOutdoorAdvertising";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/team" element={<AdminTeam />} />
      <Route path="/admin/portfolio" element={<AdminPortfolio />} />
      <Route path="/admin/branding" element={<AdminBranding />} />
      <Route path="/admin/social-media" element={<AdminSocialMediaManagement />} />
      <Route path="/admin/media-production" element={<AdminMediaProduction />} />
      <Route path="/admin/outdoor-ads" element={<AdminOutdoorAdvertising />} />
      <Route path="/branding_identity_design" element={<BrandingIdentityDesignPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<OurTeamPage />} />
      <Route path="/media-production" element={<MediaProductionPage />} />
      <Route path="/outdoor-advertising" element={<OutdoorAdvertisingPage />} />
      <Route path="/social-media-management" element={<SocialMediaManagementPage />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/looklike">
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;