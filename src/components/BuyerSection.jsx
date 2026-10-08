import LeadSection from './LeadSection.jsx';
import { BUYER_FIELDS, BUYER_FORM_URL, WHATSAPP_BUYER } from '../constants.js';
import { trackBuyer, trackWhatsApp } from '../analytics.js';

export default function BuyerSection() {
  return (
    <LeadSection
      id="buyer"
      kicker="FOR BUYERS"
      title="Looking for a car?"
      intro="Tell us what you want. We'll help you reach real sellers in Raipur directly."
      fields={BUYER_FIELDS}
      formUrl={BUYER_FORM_URL}
      formLabel="I'm a Buyer — fill the form"
      whatsappUrl={WHATSAPP_BUYER}
      onForm={() => trackBuyer('buyer_section')}
      onWhatsApp={() => trackWhatsApp('buyer_section')}
    />
  );
}
