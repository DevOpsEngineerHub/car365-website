import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import CarVisual from './CarVisual.jsx';
import {
  HERO_IMAGE,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_GENERAL,
} from '../constants.js';
import { trackBuyer, trackCall, trackSeller, trackWhatsApp } from '../analytics.js';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 60, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 1, delay, ease: [0.2, 0.7, 0.2, 1] },
});

export default function Hero({ ready }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <motion.div
          className="hero__car"
          initial={{ opacity: 0, x: 120, scale: 1.04 }}
          animate={ready ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 2.4, ease: [0.16, 0.7, 0.2, 1] }}
        >
          {HERO_IMAGE ? (
            <img src={HERO_IMAGE} alt="" />
          ) : (
            <CarVisual idPrefix="hero" />
          )}
        </motion.div>
        <div className="hero__glow" />
        <div className="hero__shade" />
        <div className="hero__grain" />
      </div>

      <div className="hero__content">
        <motion.p className="kicker" {...(ready ? reveal(0.1) : { initial: reveal().initial })}>
          RAIPUR · CHHATTISGARH
        </motion.p>

        <h1 id="hero-title" className="hero__title">
          <motion.span
            className="hero__line hero__line--brand"
            {...(ready ? reveal(0.25) : { initial: reveal().initial })}
          >
            CAR<em>365</em>
          </motion.span>
          <motion.span
            className="hero__line hero__line--edition"
            {...(ready ? reveal(0.45) : { initial: reveal().initial })}
          >
            Raipur Edition
          </motion.span>
        </h1>

        <motion.p className="hero__sub" {...(ready ? reveal(0.75) : { initial: reveal().initial })}>
          A local place to discover cars, find buyers, find sellers — and start a real
          conversation.
        </motion.p>

        <motion.div className="hero__cta" {...(ready ? reveal(0.9) : { initial: reveal().initial })}>
          <a href="#buyer" className="btn btn--primary" onClick={() => trackBuyer('hero')}>
            I&apos;m a Buyer
          </a>
          <a href="#seller" className="btn btn--ghost" onClick={() => trackSeller('hero')}>
            I&apos;m a Seller
          </a>
        </motion.div>

        <motion.div className="hero__contact" {...(ready ? reveal(1.05) : { initial: reveal().initial })}>
          <a href={PHONE_TEL} onClick={() => trackCall('hero')}>
            <Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsApp('hero')}
          >
            <MessageCircle size={16} aria-hidden="true" /> WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
