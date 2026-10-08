import { motion } from 'framer-motion';

/**
 * Front-on premium coupe rendered as layered SVG: dark lacquered body with rim light,
 * glass reflections, mesh grille, angular LED headlights, bloom and a floor reflection.
 *
 * `lights*` props drive the headlight group, `body*` props drive the car body.
 * Both accept framer-motion `animate` / `transition` values so the intro can
 * choreograph a double blink and a slow reveal.
 */
export default function CarVisual({
  lightsAnimate = { opacity: 1 },
  lightsInitial = false,
  lightsTransition = { duration: 1 },
  bodyAnimate = { opacity: 1 },
  bodyInitial = false,
  bodyTransition = { duration: 1.4 },
  className = '',
  idPrefix = 'cv',
}) {
  const id = (n) => `${idPrefix}-${n}`;

  const Headlight = ({ flip = false }) => (
    <g transform={flip ? 'translate(1000 0) scale(-1 1)' : undefined}>
     <g transform="rotate(17 255 360)">
      {/* lens housing */}
      <path
        d="M168 356 C 210 336, 285 326, 338 322 L 350 352 C 300 360, 235 376, 196 398 C 176 394, 164 376, 168 356 Z"
        fill={`url(#${id('lens')})`}
        stroke="rgba(154,216,255,0.35)"
        strokeWidth="1.2"
      />
      {/* main LED blade */}
      <path
        d="M186 360 C 235 342, 290 334, 334 331 L 338 341 C 292 346, 240 358, 200 376 Z"
        fill="#ffffff"
      />
      {/* secondary lower DRL */}
      <path
        d="M205 384 C 245 368, 295 358, 340 352 L 342 358 C 298 365, 252 376, 214 392 Z"
        fill="#bfe8ff"
      />
      {/* projector dots */}
      <circle cx="262" cy="352" r="9" fill="#ffffff" />
      <circle cx="296" cy="346" r="7" fill="#eaf8ff" />
     </g>
    </g>
  );

  return (
    <svg
      className={className}
      viewBox="0 0 1000 600"
      role="img"
      aria-label="Dark premium car, front view, headlights on"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={id('body')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2631" />
          <stop offset="0.35" stopColor="#0d1319" />
          <stop offset="1" stopColor="#06090c" />
        </linearGradient>
        <linearGradient id={id('glass')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1c2d3d" />
          <stop offset="0.5" stopColor="#070b10" />
          <stop offset="1" stopColor="#101c28" />
        </linearGradient>
        <linearGradient id={id('rim')} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#9AD8FF" stopOpacity="0" />
          <stop offset="0.25" stopColor="#9AD8FF" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.75" stopColor="#9AD8FF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#9AD8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id('lens')} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14202b" />
          <stop offset="1" stopColor="#05080b" />
        </linearGradient>
        <radialGradient id={id('bloom')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.25" stopColor="#9AD8FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#9AD8FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id('floorglow')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#9AD8FF" stopOpacity="0.45" />
          <stop offset="1" stopColor="#9AD8FF" stopOpacity="0" />
        </radialGradient>
        <pattern id={id('mesh')} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="12" height="12" fill="#04070a" />
          <path d="M0 0H12M0 0V12" stroke="#16222d" strokeWidth="1.6" />
        </pattern>
        <linearGradient id={id('fade')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.38" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={id('reflmask')}>
          <rect x="0" y="500" width="1000" height="100" fill={`url(#${id('fade')})`} />
        </mask>
        <filter id={id('blur')} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id={id('soft')}>
          <feGaussianBlur stdDeviation="3" />
        </filter>

        {/* Whole body as a reusable symbol so it can be mirrored for the floor reflection */}
        <g id={id('shape')}>
          {/* tyres */}
          <rect x="146" y="408" width="70" height="104" rx="22" fill="#030405" />
          <rect x="784" y="408" width="70" height="104" rx="22" fill="#030405" />
          {/* mirrors */}
          <path d="M318 246 L348 240 L354 268 L330 272 Z" fill="#0b1118" stroke="rgba(154,216,255,0.3)" />
          <path d="M682 246 L652 240 L646 268 L670 272 Z" fill="#0b1118" stroke="rgba(154,216,255,0.3)" />
          {/* lower body + hood */}
          <path
            d="M118 450 C112 396 138 352 198 326 L348 286 L652 286 L802 326 C862 352 888 396 882 450 L866 496 L134 496 Z"
            fill={`url(#${id('body')})`}
          />
          {/* greenhouse */}
          <path
            d="M352 288 L396 178 C406 156, 440 148, 500 148 C560 148, 594 156, 604 178 L648 288 Z"
            fill={`url(#${id('glass')})`}
            stroke="rgba(154,216,255,0.22)"
            strokeWidth="1.2"
          />
          {/* windscreen reflections */}
          <path d="M420 288 L452 170 L478 170 L452 288 Z" fill="#9AD8FF" opacity="0.07" />
          <path d="M520 288 L536 170 L548 170 L548 288 Z" fill="#ffffff" opacity="0.04" />
          {/* hood power lines */}
          <path d="M392 288 C 410 318, 430 332, 452 340" stroke="rgba(154,216,255,0.28)" strokeWidth="1.6" fill="none" />
          <path d="M608 288 C 590 318, 570 332, 548 340" stroke="rgba(154,216,255,0.28)" strokeWidth="1.6" fill="none" />
          <path d="M470 290 L470 342 M530 290 L530 342" stroke="rgba(255,255,255,0.06)" strokeWidth="1.4" />
          {/* shoulder highlight */}
          <path
            d="M136 400 C 136 364, 160 340, 204 328 L350 288"
            stroke={`url(#${id('rim')})`}
            strokeWidth="2.4"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M864 400 C 864 364, 840 340, 796 328 L650 288"
            stroke={`url(#${id('rim')})`}
            strokeWidth="2.4"
            fill="none"
            opacity="0.8"
          />
          {/* roofline rim light */}
          <path d="M396 178 C 406 156, 440 148, 500 148 C 560 148, 594 156, 604 178" stroke={`url(#${id('rim')})`} strokeWidth="2.6" fill="none" />
          {/* nose / lip */}
          <path d="M150 398 C 150 392, 160 388, 176 392 L 824 392 C 840 388, 850 392, 850 398 L 850 440 L 150 440 Z" fill="#070b0f" opacity="0.55" />
          {/* side intakes */}
          <path d="M176 418 L 306 410 L 292 466 L 192 462 Z" fill={`url(#${id('mesh')})`} stroke="rgba(154,216,255,0.2)" />
          <path d="M824 418 L 694 410 L 708 466 L 808 462 Z" fill={`url(#${id('mesh')})`} stroke="rgba(154,216,255,0.2)" />
          {/* main grille */}
          <path d="M338 392 L 662 392 L 700 462 L 300 462 Z" fill={`url(#${id('mesh')})`} stroke="rgba(154,216,255,0.28)" strokeWidth="1.4" />
          <path d="M338 392 L 662 392" stroke="#9AD8FF" strokeOpacity="0.55" strokeWidth="2" />
          {/* badge */}
          <circle cx="500" cy="372" r="13" fill="#0a1016" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" />
          <circle cx="500" cy="372" r="5" fill="#9AD8FF" opacity="0.8" />
          {/* splitter */}
          <path d="M150 484 L 850 484" stroke="#9AD8FF" strokeOpacity="0.5" strokeWidth="2.4" />
          <path d="M134 496 L 866 496" stroke="#000" strokeOpacity="0.6" strokeWidth="6" />
        </g>
      </defs>

      {/* floor reflection of the body */}
      <motion.g
        initial={bodyInitial}
        animate={bodyAnimate}
        transition={bodyTransition}
        mask={`url(#${id('reflmask')})`}
      >
        <g transform="translate(0 992) scale(1 -1)" opacity="0.9" filter={`url(#${id('soft')})`}>
          <use href={`#${id('shape')}`} />
        </g>
      </motion.g>

      {/* ground contact shadow */}
      <ellipse cx="500" cy="500" rx="420" ry="16" fill="#000" opacity="0.85" />

      {/* car body */}
      <motion.g initial={bodyInitial} animate={bodyAnimate} transition={bodyTransition}>
        <use href={`#${id('shape')}`} />
      </motion.g>

      {/* headlights: glow + lenses */}
      <motion.g initial={lightsInitial} animate={lightsAnimate} transition={lightsTransition}>
        {/* floor wash */}
        <ellipse cx="300" cy="520" rx="260" ry="46" fill={`url(#${id('floorglow')})`} />
        <ellipse cx="700" cy="520" rx="260" ry="46" fill={`url(#${id('floorglow')})`} />
        {/* big bloom */}
        <g filter={`url(#${id('blur')})`}>
          <ellipse cx="265" cy="355" rx="170" ry="80" fill={`url(#${id('bloom')})`} />
          <ellipse cx="735" cy="355" rx="170" ry="80" fill={`url(#${id('bloom')})`} />
        </g>
        <Headlight />
        <Headlight flip />
        {/* hot cores */}
        <g filter={`url(#${id('soft')})`}>
          <ellipse cx="262" cy="352" rx="40" ry="14" fill="#fff" opacity="0.95" />
          <ellipse cx="738" cy="352" rx="40" ry="14" fill="#fff" opacity="0.95" />
        </g>
      </motion.g>
    </svg>
  );
}
