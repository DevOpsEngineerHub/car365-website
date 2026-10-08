import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CarVisual from './CarVisual.jsx';

/**
 * Cinematic intro, ~5.2s:
 * 0.0s black -> 0.5s headlights appear -> blink twice -> 2.0s body emerges
 * 2.3s CAR365 -> 3.0s CAR MELA in Raipur. -> 3.8s COMING SOON!!!!! -> 5.2s hand off
 */
const TOTAL_MS = 5200;

export default function Intro({ onDone }) {
  const doneRef = useRef(false);
  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    onDone();
  };

  useEffect(() => {
    const t = setTimeout(finish, TOTAL_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Double blink: on -> off -> on -> off -> settle on (steady)
  const lightsAnimate = { opacity: [0, 1, 0, 1, 0, 1] };
  const lightsTransition = {
    duration: 1.5,
    delay: 0.45,
    times: [0, 0.14, 0.3, 0.46, 0.62, 0.72],
    ease: 'linear',
  };

  return (
    <motion.div
      className="intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      aria-label="CAR365 Car Mela intro"
    >
      <div className="intro__stage">
        <motion.div
          className="intro__haze intro__haze--a"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.55, 0.4], x: [-30, 20, 40] }}
          transition={{ duration: 5, delay: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="intro__haze intro__haze--b"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.45, 0.3], x: [30, -10, -40] }}
          transition={{ duration: 5, delay: 0.8, ease: 'easeOut' }}
        />

        <div className="intro__car">
          <motion.div
            initial={{ scale: 1.06, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 5, ease: 'easeOut' }}
          >
            <CarVisual
              idPrefix="intro"
              lightsInitial={{ opacity: 0 }}
              lightsAnimate={lightsAnimate}
              lightsTransition={lightsTransition}
              bodyInitial={{ opacity: 0 }}
              bodyAnimate={{ opacity: 1 }}
              bodyTransition={{ duration: 1.4, delay: 2.0, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        <motion.div
          className="intro__dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.9 }}
        />

        <div className="intro__copy">
          <motion.p
            className="intro__brand"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 2.3, ease: [0.2, 0.7, 0.2, 1] }}
          >
            CAR<span>365</span>
          </motion.p>
          <motion.h2
            className="intro__mela"
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 3.0, ease: [0.2, 0.7, 0.2, 1] }}
          >
            CAR MELA
            <small>in Raipur.</small>
          </motion.h2>
          <motion.p
            className="intro__soon"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 3.8, ease: 'easeOut' }}
          >
            COMING SOON!!!!!
          </motion.p>
        </div>
      </div>

      <button type="button" className="intro__skip" onClick={finish}>
        SKIP INTRO
      </button>
    </motion.div>
  );
}
