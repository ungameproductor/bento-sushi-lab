import { Link } from "react-router-dom";
import { legalLinks, navLinks, restaurant } from "../data/restaurant";
import { useAppUI } from "../context/AppUI";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();
  const { openPreferences } = useAppUI();

  return (
    <footer className="footer">
      <div className="hanko" aria-hidden="true">
        弁当
      </div>
      <p className="footer-name">Bento · Japanese Sushi Lab</p>
      <nav aria-label="Nel sito">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
      <address>
        {restaurant.street}
        <br />
        {restaurant.postalCode} {restaurant.city} ({restaurant.province})
        <br />
        <a href={restaurant.phoneHref}>{restaurant.phoneDisplay}</a>
      </address>
      <nav aria-label="Social">
        <a href={restaurant.socials.instagram} target="_blank" rel="noreferrer noopener">
          <InstagramIcon /> Instagram
        </a>
        <a href={restaurant.socials.facebook} target="_blank" rel="noreferrer noopener">
          <FacebookIcon /> Facebook
        </a>
        <a href={restaurant.socials.tripadvisor} target="_blank" rel="noreferrer noopener">
          Tripadvisor
        </a>
      </nav>
      <nav aria-label="Note legali">
        {legalLinks.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
        <button type="button" className="linkish" onClick={openPreferences}>
          Preferenze cookie
        </button>
      </nav>
      <p className="footer-copy">© {year} Bento Sushi Lab · Brindisi</p>
    </footer>
  );
}
