import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ContactPage from "@/pages/Contact";
import BrandingIdentityDesignPage from "@/components/LandingPage/branding_identity_design";
import AboutPage from "@/components/LandingPage/main/aboutUsMainSection";
import OurTeamPage from "@/components/LandingPage/main/ourTeamMain";
import MediaProductionPage from "@/components/LandingPage/media_production";
import OutdoorAdvertisingPage from "@/components/LandingPage/outdoor_advertising";
import SocialMediaManagementPage from "@/components/LandingPage/socialMediaManagment";

const queryClient = new QueryClient();

// Modern Elegant Fade - Subtle, Quick, Premium Feel
const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
    scale: 0.996,
    filter: "blur(2px)"
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)"
  },
  out: {
    opacity: 0,
    y: -8,
    scale: 1.004,
    filter: "blur(2px)"
  }
};

const pageTransition = {
  type: "spring",
  stiffness: 500,
  damping: 50,
  mass: 0.4,
  duration: 0.3
} as const;

// Wrapper component for consistent page transitions
const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ 
      transformOrigin: 'center center',
      willChange: 'transform, opacity, filter'
    }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  useScrollToTop();
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Index />
            </PageWrapper>
          }
        />
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <ContactPage />
            </PageWrapper>
          }
        />
        <Route
          path="/branding_identity_design"
          element={
            <PageWrapper>
              <BrandingIdentityDesignPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <AboutPage />
            </PageWrapper>
          }
        />
        <Route
          path="/team"
          element={
            <PageWrapper>
              <OurTeamPage />
            </PageWrapper>
          }
        />
        <Route
          path="/media-production"
          element={
            <PageWrapper>
              <MediaProductionPage />
            </PageWrapper>
          }
        />
        <Route
          path="/outdoor-advertising"
          element={
            <PageWrapper>
              <OutdoorAdvertisingPage />
            </PageWrapper>
          }
        />
        <Route
          path="/social-media-management"
          element={
            <PageWrapper>
              <SocialMediaManagementPage />
            </PageWrapper>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
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