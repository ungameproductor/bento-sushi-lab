import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const CONSENT_KEY = "bento-consent-v1";
const INTRO_KEY = "bento-intro";

export type Consent = {
  necessary: true;
  maps: boolean;
  version: 1;
};

type IntroPhase = "intro" | "done";

type AppUIValue = {
  introPhase: IntroPhase;
  heroDelay: number;
  skipIntro: () => void;
  consent: Consent | null;
  acceptAll: () => void;
  rejectAll: () => void;
  setMaps: (maps: boolean) => void;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  reservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
};

const AppUIContext = createContext<AppUIValue | null>(null);

function readIntro(): IntroPhase {
  if (typeof window === "undefined") return "done";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "done";
  try {
    if (sessionStorage.getItem(INTRO_KEY) === "1") return "done";
  } catch {
    return "done";
  }
  return "intro";
}

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    if (parsed.version !== 1 || typeof parsed.maps !== "boolean") return null;
    return { necessary: true, maps: parsed.maps, version: 1 };
  } catch {
    return null;
  }
}

export function AppUIProvider({ children }: { children: ReactNode }) {
  const [introPhase, setIntroPhase] = useState<IntroPhase>(readIntro);
  const [heroDelay, setHeroDelay] = useState(() => (readIntro() === "intro" ? 820 : 0));
  const [consent, setConsent] = useState<Consent | null>(readConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  useEffect(() => {
    const sheet = document.getElementById("sheet");
    if (introPhase !== "intro") {
      sheet?.removeAttribute("inert");
      return;
    }
    sheet?.setAttribute("inert", "");
    const timeout = window.setTimeout(() => {
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        /* sessione non disponibile */
      }
      setIntroPhase("done");
    }, 1480);
    return () => {
      window.clearTimeout(timeout);
      sheet?.removeAttribute("inert");
    };
  }, [introPhase]);

  const writeConsent = useCallback((maps: boolean) => {
    const next: Consent = { necessary: true, maps, version: 1 };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    setConsent(next);
    setPreferencesOpen(false);
  }, []);

  const skipIntro = useCallback(() => {
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* sessione non disponibile */
    }
    setHeroDelay(0);
    setIntroPhase("done");
  }, []);

  const value = useMemo<AppUIValue>(
    () => ({
      introPhase,
      heroDelay,
      skipIntro,
      consent,
      acceptAll: () => writeConsent(true),
      rejectAll: () => writeConsent(false),
      setMaps: writeConsent,
      preferencesOpen,
      openPreferences: () => {
        setReservationOpen(false);
        setPreferencesOpen(true);
      },
      closePreferences: () => setPreferencesOpen(false),
      reservationOpen,
      openReservation: () => {
        setPreferencesOpen(false);
        setReservationOpen(true);
      },
      closeReservation: () => setReservationOpen(false),
    }),
    [consent, heroDelay, introPhase, preferencesOpen, reservationOpen, skipIntro, writeConsent],
  );

  return <AppUIContext.Provider value={value}>{children}</AppUIContext.Provider>;
}

export function useAppUI() {
  const value = useContext(AppUIContext);
  if (!value) throw new Error("useAppUI va usato dentro AppUIProvider");
  return value;
}
