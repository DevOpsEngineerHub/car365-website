import { Camera, FileText, Hash, IndianRupee } from 'lucide-react';
import Reveal from './Reveal.jsx';

const ITEMS = [
  [Hash, 'Car number', 'So buyers know exactly which car it is.'],
  [Camera, 'Clear car photos', 'Required. Front, back, sides and interior.'],
  [IndianRupee, 'Expected price', 'Your honest asking price.'],
  [FileText, 'RC photo', 'Optional, but it builds buyer trust.'],
];

export default function Requirements() {
  return (
    <section className="section reqs" id="requirements" aria-labelledby="reqs-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker">SELLER CHECKLIST</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="reqs-title" className="h2">Keep these ready.</h2>
        </Reveal>
        <ul className="reqs__grid">
          {ITEMS.map(([Icon, title, text], i) => (
            <Reveal as="li" key={title} delay={i * 0.08} className="req-card">
              <Icon size={28} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
