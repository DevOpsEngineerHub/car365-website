import { ArrowUpRight, MessageCircle } from 'lucide-react';
import Reveal from './Reveal.jsx';

/** Shared layout for the buyer and seller lead flows (Google Form + WhatsApp). */
export default function LeadSection({
  id,
  kicker,
  title,
  intro,
  fields,
  formUrl,
  formLabel,
  whatsappUrl,
  onForm,
  onWhatsApp,
  note,
}) {
  return (
    <section className="section lead" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap lead__grid">
        <div>
          <Reveal>
            <p className="kicker">{kicker}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id={`${id}-title`} className="h2 lead__title">{title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead__intro">{intro}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="lead__actions">
              <a
                className="btn btn--primary"
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onForm}
              >
                {formLabel} <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onWhatsApp}
              >
                <MessageCircle size={18} aria-hidden="true" /> WhatsApp us
              </a>
            </div>
            {note && <p className="lead__note">{note}</p>}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lead__card">
          <h3 className="lead__card-title">What the form asks</h3>
          <ul className="fields">
            {fields.map(([label, required]) => (
              <li key={label}>
                <span>{label}</span>
                <b className={required ? 'req' : 'opt'}>{required ? 'Required' : 'Optional'}</b>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
