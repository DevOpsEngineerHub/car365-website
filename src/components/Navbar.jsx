import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { PHONE_TEL } from '../constants.js';
import { trackCall } from '../analytics.js';

const LINKS = [
  ['About', '#about'],
  ['Car Mela', '#car-mela'],
  ['Contact', '#contact'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <nav className="nav__inner" aria-label="Primary">
        <a href="#top" className="nav__logo" aria-label="CAR365 home">
          CAR<span>365</span>
        </a>

        <ul className="nav__links">
          {LINKS.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <a
          href={PHONE_TEL}
          className="nav__call"
          onClick={() => trackCall('navbar')}
        >
          <Phone size={15} aria-hidden="true" /> Call
        </a>

        <button
          type="button"
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="nav__sheet">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href={PHONE_TEL}
            className="nav__sheet-call"
            onClick={() => {
              trackCall('mobile_menu');
              setOpen(false);
            }}
          >
            Call {`+91 9302725929`}
          </a>
        </div>
      )}
    </header>
  );
}
