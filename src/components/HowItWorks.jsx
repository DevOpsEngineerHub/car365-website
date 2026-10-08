import Reveal from './Reveal.jsx';

const STEPS = [
  ['Share', 'Tell us what you want to buy, or what you want to sell. A short form or a WhatsApp message is enough.'],
  ['Connect', 'We help real buyers and real sellers in Raipur find each other.'],
  ['Talk directly', 'You speak to each other, see the car, agree on the deal. No one in the middle.'],
];

export default function HowItWorks() {
  return (
    <section className="section how" id="how" aria-labelledby="how-title">
      <div className="wrap">
        <Reveal>
          <p className="kicker">HOW IT WORKS</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="how-title" className="h2">Three steps. Zero brokers.</h2>
        </Reveal>
        <ol className="steps">
          {STEPS.map(([title, text], i) => (
            <Reveal as="li" key={title} delay={i * 0.1} className="step">
              <span className="step__n">{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
