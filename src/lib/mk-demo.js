export const MK_HOME = 'https://www.mk-digitalsystems.com/tr';
const MK_WHATSAPP = '905456597551';

/** WhatsApp link to MK Digital Systems with a prefilled message that names this demo. */
export function mkWhatsAppUrl() {
  const text = 'Merhaba MK Digital Systems, Adalet Hukuk demo sitesini inceledim. İşletmem için benzer bir web sitesi hakkında görüşmek istiyorum.';
  return `https://wa.me/${MK_WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function openMkWhatsApp() {
  window.open(mkWhatsAppUrl(), '_blank', 'noopener,noreferrer');
}
