import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { MarginArt, MarginArtRight } from "./components/MarginArt";
import { Navbar } from "./components/Navbar";
import { PaperIntro } from "./components/PaperIntro";
import { ReservationDialog } from "./components/ReservationDialog";
import { AppUIProvider } from "./context/AppUI";

const Home = lazy(() => import("./pages/Home"));
const MenuPage = lazy(() => import("./pages/MenuPage"));
const About = lazy(() => import("./pages/About"));
const LocationPage = lazy(() => import("./pages/LocationPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const reduce = useReducedMotion() === true;
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={<div className="page-fallback" role="status">Si apre la pagina</div>}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/chi-siamo" element={<About />} />
            <Route path="/dove-siamo" element={<LocationPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookie" element={<CookiesPage />} />
            <Route path="/termini" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppUIProvider>
        <div className="desk">
          <MarginArt />
          <div className="sheet" id="sheet">
            <a className="skip-link" href="#contenuto">
              Vai al contenuto
            </a>
            <Navbar />
            <main id="contenuto">
              <ScrollManager />
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
          <MarginArtRight />
        </div>
        <PaperIntro />
        <CookieConsent />
        <ReservationDialog />
      </AppUIProvider>
    </BrowserRouter>
  );
}
