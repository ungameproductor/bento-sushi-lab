import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, restaurant } from "../data/restaurant";
import { useAppUI } from "../context/AppUI";
import { useFocusTrap } from "../hooks/useFocusTrap";
import { useScrollLock } from "../hooks/useScrollLock";
import { Button } from "./Buttons";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() === true;
  const { openReservation } = useAppUI();
  const location = useLocation();

  useScrollLock(open);
  useFocusTrap(open, panelRef);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={`nav ${solid || open ? "solid" : ""}`}>
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Bento, torna alla homepage">
            <strong>Bento</strong>
            <span>Sushi Lab</span>
          </Link>
          <nav className="nav-links" aria-label="Principale">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            ))}
            <Button variant="vermilion" onClick={openReservation}>
              Prenota
            </Button>
          </nav>
          <button
            type="button"
            className="nav-burger"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Chiudi menu" : "Apri menu"}</span>
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            ref={panelRef}
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav aria-label="Mobile">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} className="menu-link" onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <div className="mobile-actions">
              <Button
                variant="vermilion"
                className="btn-block"
                onClick={() => {
                  setOpen(false);
                  openReservation();
                }}
              >
                Prenota un tavolo
              </Button>
              <Button href={restaurant.phoneHref} className="btn-block">
                Chiama {restaurant.phoneDisplay}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
