import { motion } from 'framer-motion';
import CarVisual from './CarVisual.jsx';
import Reveal from './Reveal.jsx';
import { HERO_IMAGE, WHATSAPP_GENERAL } from '../constants.js';
import { trackWhatsApp } from '../analytics.js';

export default function CarMela() {
  return (
    <section className="section mela" id="car-mela" aria-labelledby="mela-title">
      <div className="mela__bg" aria-hidden="true">
        <motion.div
          className="mela__car"
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          {HERO_IMAGE ? <img src={HERO_IMAGE} alt="" /> : <CarVisual idPrefix="mela" />}
        </motion.div>
        <div className="mela__shade" />
      </div>

      <div className="wrap mela__content">
        <Reveal>
          <p className="kicker kicker--gold">THE EVENT</p>
        </Reveal>
        <h2 id="mela-title" className="mela__title">
          <Reveal as="span" className="block">CAR MELA</Reveal>
        </h2>
        <Reveal delay={0.15}>
          <p className="mela__sub">Coming Soon in Raipur</p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mela__text">
            CAR365 is planning a local car mela — one place, one day, where buyers and
            sellers can meet, see cars in person and connect directly. No brokers. No
            middlemen. Just real people and real cars.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mela__row">
            <span className="mela__badge">COMING SOON!!!!!</span>
            <a
              className="btn btn--gold"
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('car_mela')}
            >
              Get notified on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
