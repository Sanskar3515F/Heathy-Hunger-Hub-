import { business } from "@/data/business";

export const hasPhone = Boolean(business.contact.phone);
export const hasWhatsapp = Boolean(business.contact.whatsapp);

export const telLink = hasPhone ? `tel:${business.contact.phone}` : "";

export function waLink(message?: string) {
  if (!hasWhatsapp) return "";
  const text = encodeURIComponent(message ?? business.contact.whatsappMessage);
  return `https://wa.me/${business.contact.whatsapp}?text=${text}`;
}
