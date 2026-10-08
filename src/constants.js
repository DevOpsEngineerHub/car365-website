// Central place for contact details and lead-capture links.
// Replace the Google Form URLs below with your real forms.

export const PHONE_DISPLAY = '+91 9302725929';
export const PHONE_TEL = 'tel:+919302725929';
export const WHATSAPP_NUMBER = '919302725929';

const wa = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_BUYER = wa(
  "Hi CAR365, I'm interested in buying a car. I'd like to know more about available cars."
);
export const WHATSAPP_SELLER = wa(
  'Hi CAR365, I want to sell my car. I\'d like to know how I can list it.'
);

export const INSTAGRAM_URL = 'https://instagram.com/';

// TODO: paste the real Google Form links (the "Send" -> link URL).
export const BUYER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd6ibtszAZw2MzuprEyZ0UNcF1j5uk6oyzED2EdmgA_cUOCUA/viewform?usp=publish-editor';
export const SELLER_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScy4wBWa8D-FvVhVyDvSagb5s_IfK4w5EsNqVoD4qGzlw1eDw/viewform?usp=publish-editor';

// Optional: drop a real photo at /public/hero-car.jpg and set this to '/hero-car.jpg'
// to replace the built-in illustrated car in the hero and Car Mela sections.
export const HERO_IMAGE = null;

export const BUYER_FIELDS = [
  ['Name', true],
  ['Mobile', true],
  ['What car are you looking for?', true],
  ['Budget', true],
  ['New / Used', true],
  ['Preferred location', false],
  ['When are you planning to buy?', false],
  ['Specific requirement', false],
];

export const SELLER_FIELDS = [
  ['Name', true],
  ['Mobile', true],
  ['Car Number', true],
  ['Make / Model', true],
  ['Year', true],
  ['KM Driven', true],
  ['Expected Selling Price', true],
  ['Location', true],
  ['Car Photos', true],
  ['RC Photo', false],
  ['Fuel', false],
  ['Transmission', false],
  ['Additional Notes', false],
];
