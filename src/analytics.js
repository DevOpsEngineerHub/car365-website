// GA4 event helper. Safe no-op until gtag is added in index.html.
// Events: buyer_button_clicked, seller_button_clicked, whatsapp_clicked, call_clicked

export function track(eventName, params = {}) {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  } catch {
    /* analytics must never break the UI */
  }
}

export const trackBuyer = (location = '') => track('buyer_button_clicked', { location });
export const trackSeller = (location = '') => track('seller_button_clicked', { location });
export const trackWhatsApp = (location = '') => track('whatsapp_clicked', { location });
export const trackCall = (location = '') => track('call_clicked', { location });
export const trackInstagram = (location = '') => track('instagram_clicked', { location });
