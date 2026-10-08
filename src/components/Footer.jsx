import { Instagram, MessageCircle, Phone } from 'lucide-react';
import { INSTAGRAM_URL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_GENERAL } from '../constants.js';
import { trackCall, trackInstagram, trackWhatsApp } from '../analytics.js';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <p className="kicker">CONTACT</p>
        <p className="footer__big">
          Let&apos;s talk <span>cars.</span>
        </p>
        <div className="footer__links">
          <a href={PHONE_TEL} onClick={() => trackCall('footer')}>
            <Phone size={20} aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('footer')}
          >
            <MessageCircle size={20} aria-hidden="true" /> WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackInstagram('footer')}
          >
            <Instagram size={20} aria-hidden="true" /> Instagram
          </a>
        </div>
        <div className="footer__bar">
          <span>
            CAR<b>365</b> — Raipur Edition
          </span>
          <span>Raipur, Chhattisgarh, India</span>
          <span>© {new Date().getFullYear()} CAR365. Real buyers. Real sellers.</span>
        </div>
      </div>
    </footer>
  );
}
