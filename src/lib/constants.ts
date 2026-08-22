export const SITE_NAME = "Game Plan Golf Performance";
export const SITE_TAGLINE = "We don't guess — we measure.";
export const SITE_DESCRIPTION =
  "Data-driven golf coaching, practice memberships, and athletic training in San Marcos, CA. Powered by GC Quad launch monitors and high-speed video.";

export const BOOKING_URL = "https://example.com/book"; // [REPLACE] Replace with actual booking system URL
export const MEMBERSHIP_URL = "https://example.com/memberships"; // [REPLACE] Replace with actual membership signup URL
export const MEMBER_LOGIN_URL = "https://clients.uschedule.com/gameplangolfperformance/account/login";

// Direct signup link for the practice membership.
export const BECOME_A_MEMBER_URL =
  "https://clients.uschedule.com/gameplangolfperformance/Product/MembershipDetail/11359";

// Limited-time promo: new members get their 2nd month free when they join by
// Aug 31, 2026. The memberships-page banner and callouts hide automatically
// after this deadline. Set to midnight PT on Sep 1 (UTC-7) so all of Aug 31
// local time still qualifies.
export const FLASH_SALE_END = new Date("2026-09-01T07:00:00Z");
export const isFlashSaleActive = () => Date.now() < FLASH_SALE_END.getTime();

export const ADDRESS = {
  street: "1621 S Rancho Santa Fe Rd Ste. H",
  city: "San Marcos",
  state: "CA",
  zip: "92078",
  full: "1621 S Rancho Santa Fe Rd Ste. H, San Marcos, CA 92078",
};

export const PHONE = ""; // [REPLACE] Add phone number
export const EMAIL = ""; // [REPLACE] Add email address

export const SOCIAL = {
  instagram: "https://instagram.com/gameplangolf", // [REPLACE] Verify/update social URLs
  facebook: "https://facebook.com/gameplangolf", // [REPLACE] Verify/update social URLs
};

export const HOURS = [
  { days: "Every Day", hours: "5:00 AM – 10:00 PM" },
];

export const CITIES_SERVED = [
  "San Marcos",
  "Carlsbad",
  "Encinitas",
  "Oceanside",
  "Vista",
  "Escondido",
  "Rancho Santa Fe",
  "Solana Beach",
  "San Diego",
  "Del Mar",
];

export const NAV_LINKS = [
  { label: "Memberships", href: "/memberships" },
  { label: "Lessons", href: "/lessons" },
  { label: "Training", href: "/training" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "How-To Videos", href: "/howto" },
  { label: "FAQs", href: "/faq" },
];
