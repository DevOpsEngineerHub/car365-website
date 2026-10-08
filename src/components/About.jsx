import Reveal from './Reveal.jsx';

const POINTS = [
  ['01', 'Strictly No Brokers', 'Every conversation is with the actual owner or the actual buyer.'],
  ['02', 'Buyer ↔ Seller Direct', 'No one standing in between. You talk, you decide.'],
  ['03', 'Raipur Focused', 'Built for Raipur and nearby areas — people and cars you can actually meet.'],
  ['04', 'On-Spot Registration', 'Register your interest on the spot at our events.'],
  [
    '05',
    'Vehicle Transfer Assistance',
    'Helping buyers and sellers initiate the vehicle transfer process.',
  ],
  ['06', 'Direct Communication', 'Call or WhatsApp straight away. Simple, fast, personal.'],
];

export default function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker">ABOUT CAR365</p>
        </Reveal>
        <h2 id="about-title" className="about__title">
          <Reveal as="span" className="block">NO BROKERS.</Reveal>
          <Reveal as="span" className="block" delay={0.12}>NO MIDDLEMEN.</Reveal>
          <Reveal as="span" className="block accent" delay={0.24}>JUST REAL PEOPLE.</Reveal>
        </h2>
        <Reveal delay={0.1}>
          <p className="about__lead">Real buyers. Real sellers. Direct conversations.</p>
        </Reveal>

        <ul className="points">
          {POINTS.map(([n, title, text], i) => (
            <Reveal as="li" key={n} delay={(i % 3) * 0.08} className="point">
              <span className="point__n">{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
