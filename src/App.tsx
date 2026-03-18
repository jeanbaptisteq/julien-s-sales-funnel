import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import OptinPage from "./pages/OptinPage";
import OffrePage from "./pages/OffrePage";
import PaiementPage from "./pages/PaiementPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const QueryPathRedirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const path = searchParams.get("path");
    if (path && path !== window.location.pathname.replace(import.meta.env.BASE_URL, "/")) {
      navigate(path, { replace: true });
    }
  }, [navigate, searchParams]);

  return <OptinPage />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<QueryPathRedirect />} />
          <Route path="/offre" element={<OffrePage />} />
          <Route path="/paiement" element={<PaiementPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
