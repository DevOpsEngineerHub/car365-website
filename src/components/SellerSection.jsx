import LeadSection from './LeadSection.jsx';
import { SELLER_FIELDS, SELLER_FORM_URL, WHATSAPP_SELLER } from '../constants.js';
import { trackSeller, trackWhatsApp } from '../analytics.js';

export default function SellerSection() {
  return (
    <LeadSection
      id="seller"
      kicker="FOR SELLERS"
      title="Selling your car?"
      intro="List it with CAR365 and speak straight to serious buyers. No broker commissions in between."
      fields={SELLER_FIELDS}
      formUrl={SELLER_FORM_URL}
      formLabel="I'm a Seller — fill the form"
      whatsappUrl={WHATSAPP_SELLER}
      onForm={() => trackSeller('seller_section')}
      onWhatsApp={() => trackWhatsApp('seller_section')}
      note="Clear car photos are required so buyers can see what they are enquiring about."
    />
  );
}
