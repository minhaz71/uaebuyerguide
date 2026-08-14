export const referenceUrls = [
  "https://tereahub.ae",
  "https://businesshub.pages.dev/",
  "https://uaeshopping.pages.dev/",
  "https://uaedirectory.pages.dev/",
  "https://uaebuyerguide.vercel.app/",
  "https://uaeshoppingguide.netlify.app/",
  "https://uaeshopping.onrender.com/",
  "https://shoppingguideuae.web.app/",
];

export function normalizeReferenceUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}
