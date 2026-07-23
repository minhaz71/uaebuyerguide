export type GuideCategory =
  | "Best Online Stores in UAE"
  | "Fast Delivery Websites in Dubai"
  | "Specialty Shops to Know"
  | "Adult Specialty Retail"
  | "Vape & Pod Stores"
  | "TEREA / HEETS Shops"
  | "UAE News Portals"
  | "Business & Local Media";

export type ResourceCategory =
  | "Hotel"
  | "City Place"
  | "Restaurant"
  | "Hospital"
  | "Shopping Mall"
  | "Government Service"
  | "Bank & Payments"
  | "Travel & Transport"
  | "Education"
  | "Real Estate";

export type FeaturedSite = {
  name: string;
  url: string;
  badge: string;
  summary: string;
  bestFor: string[];
  pros: string[];
  note: string;
  accent: string;
};

export type ReviewLink = {
  label: string;
  href: string;
};

export type GuideSite = {
  name: string;
  slug: string;
  category: GuideCategory;
  url: string;
  location: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  summary: string;
  bestFor: string;
  whyUseful: string;
  pros: string[];
  thingsToCheck: string[];
  links: ReviewLink[];
  verdict?: string;
  contentSections?: {
    title: string;
    body: string;
    link?: ReviewLink;
  }[];
};

export type Resource = {
  name: string;
  slug: string;
  category: ResourceCategory;
  emirate: string;
  area: string;
  url: string;
  rating: string;
  bestFor: string;
  highlights: string[];
  description: string;
  articleTitle: string;
  paragraphs: string[];
  checks: string[];
  contextualLink?: ReviewLink;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const siteSlug = (domain: string) => slugify(domain.replace(/^https?:\/\//, "").replace(/\/$/, ""));

const makeLinks = (url: string): ReviewLink[] => [
  { label: "Visit Website", href: url },
];

export const featuredSites: FeaturedSite[] = [
  {
    name: "TereaHub.ae",
    url: "https://tereahub.ae",
    badge: "Featured TEREA / HEETS specialist",
    summary:
      "A priority comparison card for adult shoppers researching TEREA, HEETS, device accessories, and delivery options in the UAE.",
    bestFor: ["TEREA / HEETS specialist shopping", "Adult specialty retail", "Dubai and UAE product discovery"],
    pros: ["Focused TEREA / HEETS shopping", "Useful category pages", "Clear delivery and contact routes"],
    note: "A focused specialist store for adult shoppers comparing TEREA, HEETS, compatible devices, accessories, and UAE delivery options.",
    accent: "#00856f",
  },
  {
    name: "TereaZone.ae",
    url: "https://tereazone.ae",
    badge: "Featured pod/device store",
    summary:
      "A highlighted buyer-guide placement for adult shoppers comparing nicotine product shops and specialty delivery websites.",
    bestFor: ["Pod/device research", "TEREA discovery", "Adult shoppers comparing stores"],
    pros: ["Specialty retail focus", "Helpful product navigation", "Simple route to delivery and contact details"],
    note: "A useful comparison pick for adults reviewing pod/device stores, TEREA options, delivery coverage, and product availability.",
    accent: "#c7512c",
  },
];

const editorialGuideSites: GuideSite[] = [
  {
    name: "Amazon UAE",
    slug: "amazon-uae",
    category: "Best Online Stores in UAE",
    url: "https://www.amazon.ae",
    location: "UAE-wide",
    summary: "A broad marketplace for electronics, home goods, groceries, fashion, books, and daily essentials.",
    bestFor: "Wide selection and familiar checkout.",
    whyUseful:
      "Amazon UAE is useful when shoppers want to compare many product categories in one place before deciding where to buy.",
    pros: ["Large catalog", "Familiar checkout", "Frequent deal pages"],
    thingsToCheck: ["Seller rating", "Delivery date", "Warranty coverage", "Return policy"],
    links: makeLinks("https://www.amazon.ae"),
  },
  {
    name: "Noon",
    slug: "noon",
    category: "Best Online Stores in UAE",
    url: "https://www.noon.com/uae-en/",
    location: "UAE-wide",
    summary: "A regional marketplace with electronics, beauty, fashion, grocery, and home categories.",
    bestFor: "Local marketplace deals and seasonal campaigns.",
    whyUseful:
      "Noon is useful for shoppers who want a UAE-focused marketplace with Arabic and English browsing.",
    pros: ["Local campaigns", "Broad categories", "App-friendly shopping"],
    thingsToCheck: ["Marketplace seller", "Delivery method", "Exchange terms", "Payment options"],
    links: makeLinks("https://www.noon.com/uae-en/"),
  },
  {
    name: "Carrefour UAE",
    slug: "carrefour-uae",
    category: "Fast Delivery Websites in Dubai",
    url: "https://www.carrefouruae.com",
    location: "Dubai, Abu Dhabi, Sharjah",
    summary: "A grocery and retail website for food, household items, electronics, and essentials.",
    bestFor: "Scheduled grocery and household delivery.",
    whyUseful:
      "Carrefour UAE is useful when buyers want supermarket categories with home delivery or collection options.",
    pros: ["Grocery range", "Fresh food categories", "Pickup options"],
    thingsToCheck: ["Delivery slot", "Substitution rules", "Minimum order", "Area availability"],
    links: makeLinks("https://www.carrefouruae.com"),
  },
  {
    name: "Talabat Mart",
    slug: "talabat-mart",
    category: "Fast Delivery Websites in Dubai",
    url: "https://www.talabat.com/uae",
    location: "Major UAE cities",
    summary: "A quick-commerce option for groceries, snacks, household basics, and urgent daily items.",
    bestFor: "Fast delivery for essentials.",
    whyUseful:
      "Talabat Mart is useful for comparing delivery speed, stock availability, and everyday convenience.",
    pros: ["Fast ordering flow", "City coverage", "Useful for urgent essentials"],
    thingsToCheck: ["Live stock", "Delivery fee", "Operating hours", "Exact service area"],
    links: makeLinks("https://www.talabat.com/uae"),
  },
  {
    name: "Mumzworld",
    slug: "mumzworld",
    category: "Specialty Shops to Know",
    url: "https://www.mumzworld.com/uae-en",
    location: "UAE-wide",
    summary: "A specialist website for baby, toddler, maternity, toys, and family-care shopping.",
    bestFor: "Parents comparing baby and family products.",
    whyUseful:
      "Mumzworld is useful when shoppers prefer a specialist catalog over a general marketplace.",
    pros: ["Focused categories", "Gift-friendly browsing", "Family product depth"],
    thingsToCheck: ["Size/age suitability", "Delivery estimate", "Return rules", "Brand authenticity"],
    links: makeLinks("https://www.mumzworld.com/uae-en"),
  },
  {
    name: "Kibsons",
    slug: "kibsons",
    category: "Specialty Shops to Know",
    url: "https://www.kibsons.com",
    location: "Dubai and nearby emirates",
    summary: "A food-first shopping website for fresh produce, meats, seafood, bakery, and pantry items.",
    bestFor: "Fresh grocery specialists.",
    whyUseful:
      "Kibsons is useful for shoppers comparing fresh-food quality, delivery timing, and weekly grocery planning.",
    pros: ["Fresh-food focus", "Repeat-order friendly", "Useful category depth"],
    thingsToCheck: ["Delivery area", "Freshness policy", "Cutoff times", "Cold-chain handling"],
    links: makeLinks("https://www.kibsons.com"),
  },
  {
    name: "Gulf News",
    slug: "gulf-news",
    category: "UAE News Portals",
    url: "https://gulfnews.com",
    location: "UAE-wide",
    summary: "A UAE news portal covering local headlines, business, lifestyle, travel, and regional updates.",
    bestFor: "Daily UAE headlines and broad local coverage.",
    whyUseful:
      "Gulf News is useful for readers who want a large UAE news portal with many sections to compare before following regularly.",
    pros: ["Broad editorial coverage", "Local and regional sections", "Useful for daily reading"],
    thingsToCheck: ["Article date", "Section relevance", "Subscription prompts", "Source attribution"],
    links: [
      { label: "Visit Website", href: "https://gulfnews.com" },
    ],
  },
  {
    name: "Khaleej Times",
    slug: "khaleej-times",
    category: "UAE News Portals",
    url: "https://www.khaleejtimes.com",
    location: "UAE-wide",
    summary: "A UAE news portal with resident updates, business news, local stories, and lifestyle coverage.",
    bestFor: "UAE resident updates and practical local stories.",
    whyUseful:
      "Khaleej Times is useful for readers comparing news portals, local blogs, and daily update websites.",
    pros: ["Practical local coverage", "Business and lifestyle sections", "Resident-friendly updates"],
    thingsToCheck: ["Article date", "Local relevance", "Newsletter options", "Advertising pages"],
    links: [
      { label: "Visit Website", href: "https://www.khaleejtimes.com" },
    ],
  },
];

const specialtyDomains = [
  ["RPodsDubai.ae", "https://rpodsdubai.ae", "Vape & Pod Stores", "pod/device store discovery in Dubai"],
  ["PodsVibe.ae", "https://podsvibe.ae", "Vape & Pod Stores", "adult shoppers comparing pod systems"],
  ["VozolXpress.ae", "https://vozolxpress.ae", "Vape & Pod Stores", "Vozol device and pod browsing"],
  ["AllHeetsDubai.ae", "https://allheetsdubai.ae", "TEREA / HEETS Shops", "HEETS product comparison in Dubai"],
  ["WhiteFoxDubai.ae", "https://whitefoxdubai.ae", "Adult Specialty Retail", "adult specialty retail discovery"],
  ["VGODPod.ae", "https://vgodpod.ae", "Vape & Pod Stores", "VGOD pod/device research"],
  ["TereaIlumaAbuDhabi.ae", "https://tereailumaabudhabi.ae", "TEREA / HEETS Shops", "TEREA ILUMA research in Abu Dhabi"],
  ["TereaHeetsDubai.ae", "https://tereaheetsdubai.ae", "TEREA / HEETS Shops", "TEREA and HEETS shopping in Dubai"],
  ["PodSaltNic.ae", "https://podsaltnic.ae", "Vape & Pod Stores", "salt nicotine product-shop comparison"],
  ["PodsXpress.ae", "https://podsxpress.ae", "Vape & Pod Stores", "fast pod and vape delivery in Dubai and UAE"],
  ["TereaZone.ae", "https://tereazone.ae", "TEREA / HEETS Shops", "TEREA specialist store comparison"],
  ["TereaXpress.ae", "https://tereaxpress.ae", "TEREA / HEETS Shops", "TEREA delivery store discovery"],
  ["NicotineShop.ae", "https://nicotineshop.ae", "Adult Specialty Retail", "nicotine product shop comparison"],
  ["VapHype.ae", "https://vaphype.ae", "Vape & Pod Stores", "vape delivery store comparison"],
  ["VaporKit.ae", "https://vaporkit.ae", "Vape & Pod Stores", "pod/device and kit discovery"],
  ["TereaPro.ae", "https://tereapro.ae", "TEREA / HEETS Shops", "TEREA product research"],
  ["PodSeller.ae", "https://podseller.ae", "Vape & Pod Stores", "pod shopping comparison"],
  ["PodsHub.ae", "https://podshub.ae", "Vape & Pod Stores", "pod and device browsing"],
  ["TereaHub.ae", "https://tereahub.ae", "TEREA / HEETS Shops", "TEREA / HEETS specialist shopping"],
] as const;

const newsDomains = [
  ["NewsVista360.ae", "https://newsvista360.ae/", "UAE news portal and digital publishing platform"],
  ["ChronicleByte.ae", "https://chroniclebyte.ae/", "independent media site for local updates"],
  ["NexusReport.ae", "https://nexusreport.ae/", "business update website and news portal"],
  ["PulseNarrative.ae", "https://pulsenarrative.ae/", "local blog and publishing platform"],
  ["LensHubNews.ae", "https://lenshubnews.ae/", "UAE news portal worth following"],
] as const;

const specialtySeoOverrides: Record<string, Partial<GuideSite>> = {
  "tereahub-ae": {
    seoTitle: "TereaHub.ae Review: TEREA / HEETS Specialist Store in UAE",
    seoDescription:
      "Read the TereaHub.ae review for adult shoppers comparing TEREA, HEETS, IQOS-compatible products, delivery coverage, product categories, age checks, and contact options in the UAE.",
    keywords: [
      "TereaHub review",
      "TereaHub UAE",
      "TEREA specialist UAE",
      "HEETS specialist UAE",
      "TEREA delivery UAE",
      "IQOS compatible products UAE",
      "adult specialty retail UAE",
    ],
    summary:
      "TereaHub.ae is reviewed as a focused TEREA / HEETS specialist store for adult shoppers comparing product availability, delivery coverage, and category pages in the UAE.",
    bestFor: "Adult shoppers specifically comparing TEREA, HEETS, IQOS-compatible sticks, and specialist delivery options in the UAE.",
    whyUseful:
      "TereaHub is useful when the shopper already knows they want a TEREA / HEETS focused store rather than a broad pod or general vape website. The page helps readers check product categories, delivery positioning, and contact routes before visiting.",
    pros: [
      "Clear TEREA / HEETS specialist positioning",
      "Helpful for IQOS-compatible product research",
      "Good fit for UAE shoppers checking delivery and availability",
      "Focused category intent instead of a general shopping catalog",
    ],
    thingsToCheck: [
      "Confirm adult age requirements before ordering",
      "Check TEREA or HEETS stock availability",
      "Confirm delivery area and delivery timing",
      "Review payment options before checkout",
      "Use the contact page for product-specific questions",
    ],
    verdict:
      "TereaHub.ae is the stronger fit when the search intent is narrow: TEREA, HEETS, IQOS-compatible products, and specialist UAE delivery research.",
    contentSections: [
      {
        title: "SEO focus",
        body:
          "This review targets adult shoppers looking for a TEREA / HEETS specialist in the UAE. It is not written as a general vape marketplace page; it is positioned around focused product-category research and delivery checks.",
      },
      {
        title: "What makes it different",
        body:
          "TereaHub is framed around TEREA and HEETS comparison intent. Readers can use it to check whether a specialist store has the right product family, current stock, UAE delivery coverage, and clear contact options before visiting.",
      },
      {
        title: "Best search intent",
        body:
          "The page is best suited for searches such as TEREA specialist UAE, HEETS shop UAE, TEREA delivery UAE, IQOS-compatible products UAE, and adult specialty retail websites in Dubai or Abu Dhabi.",
      },
    ],
  },
  "tereazone-ae": {
    seoTitle: "TereaZone.ae Review: Vape, Pod and TEREA Comparison Store UAE",
    seoDescription:
      "Read the TereaZone.ae review for adult shoppers comparing vape delivery stores, pod/device shops, TEREA options, product availability, delivery information, and contact pages in the UAE.",
    keywords: [
      "TereaZone review",
      "TereaZone UAE",
      "vape and pod store UAE",
      "pod device store Dubai",
      "TEREA comparison UAE",
      "vape delivery stores UAE",
      "nicotine product shops UAE",
    ],
    summary:
      "TereaZone.ae is reviewed as a broader adult specialty retail comparison site for shoppers checking pod/device categories, vape delivery positioning, and TEREA options in the UAE.",
    bestFor: "Adult shoppers comparing pod/device stores, vape delivery websites, nicotine product shops, and TEREA options from one broader specialty retail angle.",
    whyUseful:
      "TereaZone is useful for broader comparison research. Instead of focusing only on TEREA / HEETS, it suits shoppers who want to compare pod/device categories, delivery information, contact details, and specialty retail positioning before visiting.",
    pros: [
      "Broader vape, pod, and device comparison angle",
      "Useful for shoppers comparing multiple adult specialty categories",
      "Clear fit for vape delivery and pod/device research",
      "Helpful companion page to specialist TEREA / HEETS reviews",
    ],
    thingsToCheck: [
      "Confirm adult age requirements before ordering",
      "Check device, pod, or TEREA product availability",
      "Confirm Dubai and UAE delivery coverage",
      "Review delivery fees and payment options",
      "Use contact details for product or compatibility questions",
    ],
    verdict:
      "TereaZone.ae is the stronger fit when the search intent is broader: vape delivery stores, pod/device stores, nicotine product shops, and TEREA comparison in the UAE.",
    contentSections: [
      {
        title: "SEO focus",
        body:
          "This review targets broader adult specialty retail searches, including vape delivery stores, pod/device stores, nicotine product shops, and TEREA comparison websites in the UAE.",
      },
      {
        title: "What makes it different",
        body:
          "TereaZone is positioned as a wider comparison option than a pure TEREA / HEETS specialist page. It gives readers a place to compare multiple adult specialty shopping categories before visiting the official site.",
      },
      {
        title: "Best search intent",
        body:
          "The page is best suited for searches such as vape delivery stores UAE, pod device store Dubai, TEREA comparison UAE, nicotine product shops UAE, and adult specialty retail websites.",
      },
      {
        title: "Related flavor reading",
        body:
          "Readers comparing TEREA options often want a wider view of which flavor families are popular with IQOS ILUMA users before opening a store page.",
        link: {
          label: "Most Popular IQOS TEREA Flavors for Iluma",
          href: "https://medium.com/@relxdubai1/most-popular-iqos-terea-flavors-for-iluma-dc0ed006ba40?source=user_profile_page---------2-------------8c5f10e83fa5----------------------",
        },
      },
    ],
  },
  "rpodsdubai-ae": {
    contentSections: [
      {
        title: "Storage checks in UAE weather",
        body:
          "RELX and JUUL-style pod shoppers in the UAE should think about heat, humidity, and storage before comparing device or pod options.",
        link: {
          label: "Heat & Humidity: Storing RELX Pods and JUUL PODS Sticks in the UAE",
          href: "https://medium.com/@relxdubai1/heat-humidity-storing-relx-pods-and-juul-pods-sticks-in-the-uae-7d6f9a95afbe?source=user_profile_page---------0-------------8c5f10e83fa5----------------------",
        },
      },
    ],
  },
  "vaporkit-ae": {
    contentSections: [
      {
        title: "Heat-not-burn launch context",
        body:
          "VaporKit is most relevant when readers are researching heat-not-burn devices, IQOS-compatible products, and newer UAE specialty shopping options.",
        link: {
          label: "The Heat-Not-Burn Revolution Arrives: Announcing the Launch of Vaporkit.ae",
          href: "https://medium.com/@relxdubai1/the-heat-not-burn-revolution-arrives-announcing-the-launch-of-vaporkit-ae-40f1fb3c8a6a?source=user_profile_page---------1-------------8c5f10e83fa5----------------------",
        },
      },
    ],
  },
  "podsvibe-ae": {
    contentSections: [
      {
        title: "Device maintenance context",
        body:
          "Pod-device shoppers should compare more than product names; airflow, sealing, dust, and UAE heat can affect everyday device performance.",
        link: {
          label: "RELX Infinity 2 Cleaning Guide in UAE: Keep Your Device Smooth and Long Lasting",
          href: "https://medium.com/@relxdubai1/relx-infinity-2-cleaning-guide-in-uae-keep-your-device-smooth-and-long-lasting-0e786662121f?source=user_profile_page---------3-------------8c5f10e83fa5----------------------",
        },
      },
    ],
  },
  "tereaheetsdubai-ae": {
    contentSections: [
      {
        title: "Tourist flavor comparison",
        body:
          "TEREA and HEETS-focused shoppers visiting Dubai often compare familiar tobacco-style options before checking availability and delivery details.",
        link: {
          label: "TEREA Regular Flavors Collection in UAE: Complete Guide for Tourists",
          href: "https://medium.com/@relxdubai1/terea-regular-flavors-collection-in-uae-complete-guide-for-tourists-a086e9197ec2?source=user_profile_page---------4-------------8c5f10e83fa5----------------------",
        },
      },
    ],
  },
  "podsxpress-ae": {
    contentSections: [
      {
        title: "Pod strength reading",
        body:
          "Before comparing pod delivery stores, adult shoppers may want to understand how strength, format, and product positioning differ across pod systems.",
        link: {
          label: "What is the Unique Facts About RELX Pod Pro 18mg?",
          href: "https://medium.com/@relxdubai1/what-is-the-unique-facts-about-relx-pod-pro-18mg-801b67b71168?source=user_profile_page---------5-------------8c5f10e83fa5----------------------",
        },
      },
    ],
  },
};

const specialtyGuideSites: GuideSite[] = specialtyDomains.map(([name, url, category, bestFor]) => {
  const slug = siteSlug(name);
  const base: GuideSite = {
    name,
    slug,
    category: category as GuideCategory,
    url,
    location: "UAE",
    seoTitle: `${name} Review: ${category} in UAE`,
    seoDescription: `${name} review for adult shoppers comparing ${bestFor}, delivery areas, product availability, age rules, payment options, and contact details in the UAE.`,
    keywords: [
      `${name} review`,
      `${name} UAE`,
      bestFor,
      `${category} UAE`,
      "adult specialty retail UAE",
    ],
    summary: `${name} is positioned as a ${bestFor} resource for adult shoppers comparing useful UAE websites before visiting.`,
    bestFor: `${bestFor}.`,
    whyUseful:
      "It gives adult shoppers a focused website to compare product categories, delivery positioning, and contact options before placing an order.",
    pros: ["Focused specialty shopping angle", "Useful for comparison pages", "Clear outbound visit path"],
    thingsToCheck: ["Product availability", "Delivery area", "Age rules", "Payment options", "Return or exchange terms"],
    links: makeLinks(url),
    verdict: `${name} is useful for adult shoppers who want to compare specialty retail details before visiting the official website.`,
    contentSections: [
      {
        title: "Review overview",
        body: `${name} is included in this UAE buyer guide for adult shoppers researching ${bestFor}. The review focuses on category clarity, delivery positioning, and practical checks before visiting.`,
      },
      {
        title: "Before you visit",
        body:
          "Adult shoppers should confirm product availability, delivery coverage, age rules, payment options, and contact details directly on the official website.",
      },
    ],
  };

  return {
    ...base,
    ...specialtySeoOverrides[slug],
  };
});

const newsGuideSites: GuideSite[] = newsDomains.map(([name, url, bestFor]) => {
  const slug = siteSlug(name);

  return {
    name,
    slug,
    category: "Business & Local Media",
    url,
    location: "UAE",
    summary: `${name} is listed as a ${bestFor} for readers who want useful UAE websites beyond shopping.`,
    bestFor: `${bestFor}.`,
    whyUseful:
      "It can help readers discover UAE-focused headlines, local stories, publishing updates, and business information in one place.",
    pros: ["Local publishing focus", "Useful for daily reading", "Easy to compare with other media websites"],
    thingsToCheck: ["Publishing frequency", "Editorial sections", "Contact details", "Advertising or guest-post policy"],
    links: [
      { label: "Visit Website", href: url },
    ],
    contentSections:
      slug === "newsvista360-ae"
        ? [
            {
              title: "Local business discovery context",
              body:
                "Readers using UAE news portals for local discovery may also compare business-resource hubs when they need trusted local brands, services, and useful website references.",
              link: {
                label: "Discover the UAE's Premier Business Directory: Your Gateway to Trusted Local Brands",
                href: "https://medium.com/@relxdubai1/discover-the-uaes-premier-business-directory-your-gateway-to-trusted-local-brands-922c269fd31a?source=user_profile_page---------6-------------8c5f10e83fa5----------------------",
              },
            },
          ]
        : undefined,
  };
});

export const guideSites: GuideSite[] = [
  ...editorialGuideSites,
  ...specialtyGuideSites,
  ...newsGuideSites,
];

export const guideCategories: GuideCategory[] = [
  "Best Online Stores in UAE",
  "Fast Delivery Websites in Dubai",
  "Specialty Shops to Know",
  "Adult Specialty Retail",
  "Vape & Pod Stores",
  "TEREA / HEETS Shops",
  "UAE News Portals",
  "Business & Local Media",
];

const realResourceEntries: Array<
  Omit<Resource, "slug" | "rating" | "description" | "articleTitle" | "paragraphs" | "checks">
> = [
  { name: "Visit Dubai Places to Visit", category: "Hotel", emirate: "Dubai", area: "Dubai", url: "https://www.visitdubai.com/en/places-to-visit", bestFor: "official Dubai trip planning", highlights: ["Official tourism source", "Attraction planning", "Hotel-area research"] },
  { name: "Visit Abu Dhabi Where to Stay", category: "Hotel", emirate: "Abu Dhabi", area: "Abu Dhabi", url: "https://visitabudhabi.ae/en/plan-your-trip/where-to-stay", bestFor: "Abu Dhabi hotel planning", highlights: ["Official tourism source", "Stay planning", "Area guidance"] },
  { name: "Booking.com UAE Hotels", category: "Hotel", emirate: "UAE", area: "UAE-wide", url: "https://www.booking.com/country/ae.html", bestFor: "hotel availability comparison", highlights: ["Availability filters", "Guest reviews", "Booking comparison"] },
  { name: "Tripadvisor UAE Hotels", category: "Hotel", emirate: "UAE", area: "UAE-wide", url: "https://www.tripadvisor.com/Hotels-g294012-United_Arab_Emirates-Hotels.html", bestFor: "hotel review research", highlights: ["Traveler reviews", "Area comparisons", "Trip planning"] },

  { name: "Visit Dubai Attractions", category: "City Place", emirate: "Dubai", area: "Dubai", url: "https://www.visitdubai.com/en/places-to-visit", bestFor: "Dubai attraction discovery", highlights: ["Official attractions", "Family planning", "Visitor information"] },
  { name: "Visit Abu Dhabi Where to Go", category: "City Place", emirate: "Abu Dhabi", area: "Abu Dhabi", url: "https://visitabudhabi.ae/en/where-to-go", bestFor: "Abu Dhabi city places", highlights: ["Official destination guide", "Culture stops", "Family outings"] },
  { name: "Sharjah Tourism", category: "City Place", emirate: "Sharjah", area: "Sharjah", url: "https://www.sharjahtourism.ae/", bestFor: "Sharjah heritage and attractions", highlights: ["Official emirate guide", "Museums and culture", "Travel planning"] },
  { name: "Visit Ras Al Khaimah", category: "City Place", emirate: "Ras Al Khaimah", area: "Ras Al Khaimah", url: "https://visitrasalkhaimah.com/", bestFor: "RAK mountain and outdoor trips", highlights: ["Official tourism guide", "Adventure planning", "Hotel-area research"] },

  { name: "Time Out Dubai Restaurants", category: "Restaurant", emirate: "Dubai", area: "Dubai", url: "https://www.timeoutdubai.com/restaurants", bestFor: "Dubai dining ideas", highlights: ["Restaurant roundups", "Cuisine guides", "Local editor picks"] },
  { name: "Visit Dubai Eat and Drink", category: "Restaurant", emirate: "Dubai", area: "Dubai", url: "https://www.visitdubai.com/en/things-to-do/eat-and-drink", bestFor: "official Dubai dining guide", highlights: ["Official dining guide", "Food experiences", "Visitor planning"] },
  { name: "Tripadvisor UAE Restaurants", category: "Restaurant", emirate: "UAE", area: "UAE-wide", url: "https://www.tripadvisor.com/Restaurants-g294012-United_Arab_Emirates.html", bestFor: "restaurant review comparison", highlights: ["Traveler reviews", "Cuisine filters", "Area comparisons"] },
  { name: "Zomato UAE", category: "Restaurant", emirate: "UAE", area: "UAE-wide", url: "https://www.zomato.com/uae", bestFor: "menus and restaurant discovery", highlights: ["Menus", "Local listings", "Delivery context"] },

  { name: "Dubai Health Authority", category: "Hospital", emirate: "Dubai", area: "Dubai", url: "https://www.dha.gov.ae/en", bestFor: "official Dubai health information", highlights: ["Official authority", "Health services", "Public information"] },
  { name: "Department of Health Abu Dhabi", category: "Hospital", emirate: "Abu Dhabi", area: "Abu Dhabi", url: "https://www.doh.gov.ae/en", bestFor: "Abu Dhabi healthcare regulation", highlights: ["Official authority", "Healthcare updates", "Provider information"] },
  { name: "UAE Health Services Portal", category: "Hospital", emirate: "UAE", area: "UAE-wide", url: "https://u.ae/en/information-and-services/health-and-fitness", bestFor: "UAE government health information", highlights: ["Government source", "Health services", "Resident guidance"] },
  { name: "Cleveland Clinic Abu Dhabi", category: "Hospital", emirate: "Abu Dhabi", area: "Al Maryah Island", url: "https://www.clevelandclinicabudhabi.ae/", bestFor: "specialist hospital research", highlights: ["Specialist care", "Appointments", "Patient information"] },

  { name: "The Dubai Mall", category: "Shopping Mall", emirate: "Dubai", area: "Downtown Dubai", url: "https://thedubaimall.com/", bestFor: "major mall shopping", highlights: ["Retail directory", "Dining", "Entertainment"] },
  { name: "Mall of the Emirates", category: "Shopping Mall", emirate: "Dubai", area: "Al Barsha", url: "https://www.malloftheemirates.com/en", bestFor: "shopping and entertainment", highlights: ["Retail directory", "Dining", "Ski Dubai"] },
  { name: "Yas Island", category: "Shopping Mall", emirate: "Abu Dhabi", area: "Yas Island", url: "https://www.yasisland.com/en", bestFor: "shopping and leisure planning", highlights: ["Attractions", "Shopping", "Family activities"] },
  { name: "Visit Dubai Shopping", category: "Shopping Mall", emirate: "Dubai", area: "Dubai", url: "https://www.visitdubai.com/en/things-to-do/shopping", bestFor: "official shopping guide", highlights: ["Official guide", "Malls and souks", "Visitor planning"] },

  { name: "UAE Government Portal", category: "Government Service", emirate: "UAE", area: "UAE-wide", url: "https://u.ae/en", bestFor: "official UAE services", highlights: ["Government source", "Resident services", "Business information"] },
  { name: "GDRFA Dubai", category: "Government Service", emirate: "Dubai", area: "Dubai", url: "https://gdrfad.gov.ae/en", bestFor: "Dubai residency and entry services", highlights: ["Official authority", "Visa services", "Status checks"] },
  { name: "ICP UAE", category: "Government Service", emirate: "UAE", area: "UAE-wide", url: "https://icp.gov.ae/en/", bestFor: "identity and immigration services", highlights: ["Official authority", "Emirates ID", "Entry services"] },
  { name: "Dubai Trade", category: "Government Service", emirate: "Dubai", area: "Dubai", url: "https://www.dubaitrade.ae/", bestFor: "Dubai trade and business service checks", highlights: ["Trade services", "Business portals", "Official service access"] },

  { name: "Central Bank of the UAE", category: "Bank & Payments", emirate: "UAE", area: "UAE-wide", url: "https://www.centralbank.ae/en/", bestFor: "banking regulation information", highlights: ["Official regulator", "Financial updates", "Consumer information"] },
  { name: "Emirates NBD", category: "Bank & Payments", emirate: "UAE", area: "UAE-wide", url: "https://www.emiratesnbd.com/en", bestFor: "personal and business banking", highlights: ["Banking services", "Cards", "Digital banking"] },
  { name: "ADCB", category: "Bank & Payments", emirate: "UAE", area: "UAE-wide", url: "https://www.adcb.com/en/personal/", bestFor: "personal banking comparison", highlights: ["Accounts", "Cards", "Digital services"] },
  { name: "Dubai Islamic Bank", category: "Bank & Payments", emirate: "UAE", area: "UAE-wide", url: "https://www.dib.ae/", bestFor: "Islamic banking services", highlights: ["Accounts", "Cards", "Sharia-compliant finance"] },

  { name: "Dubai RTA", category: "Travel & Transport", emirate: "Dubai", area: "Dubai", url: "https://www.rta.ae/wps/portal/rta/ae/home", bestFor: "Dubai transport services", highlights: ["Official transport source", "Metro and taxi", "Parking services"] },
  { name: "Dubai Airports", category: "Travel & Transport", emirate: "Dubai", area: "Dubai", url: "https://www.dubaiairports.ae/", bestFor: "airport travel information", highlights: ["Flight information", "Airport services", "Travel planning"] },
  { name: "Etihad Rail", category: "Travel & Transport", emirate: "UAE", area: "UAE-wide", url: "https://www.etihadrail.ae/", bestFor: "UAE rail project information", highlights: ["Official rail source", "Network updates", "Transport planning"] },
  { name: "Etihad Airways", category: "Travel & Transport", emirate: "Abu Dhabi", area: "Abu Dhabi", url: "https://www.etihad.com/", bestFor: "flight booking and travel planning", highlights: ["Flights", "Travel updates", "Loyalty services"] },

  { name: "Ministry of Education UAE", category: "Education", emirate: "UAE", area: "UAE-wide", url: "https://www.moe.gov.ae/en/pages/home.aspx", bestFor: "official education information", highlights: ["Government source", "Schools and policy", "Student services"] },
  { name: "ADEK Abu Dhabi", category: "Education", emirate: "Abu Dhabi", area: "Abu Dhabi", url: "https://www.adek.gov.ae/", bestFor: "Abu Dhabi education information", highlights: ["Official authority", "School information", "Education services"] },
  { name: "CAA UAE", category: "Education", emirate: "UAE", area: "UAE-wide", url: "https://www.caa.ae/", bestFor: "higher education accreditation", highlights: ["Accreditation", "University checks", "Official source"] },
  { name: "Khalifa University", category: "Education", emirate: "Abu Dhabi", area: "Abu Dhabi", url: "https://www.ku.ac.ae/", bestFor: "university program research", highlights: ["Admissions", "Programs", "Research"] },

  { name: "Dubai Land Department", category: "Real Estate", emirate: "Dubai", area: "Dubai", url: "https://dubailand.gov.ae/en/", bestFor: "official Dubai property information", highlights: ["Government source", "Property services", "Market information"] },
  { name: "Bayut UAE", category: "Real Estate", emirate: "UAE", area: "UAE-wide", url: "https://www.bayut.com/", bestFor: "property browsing", highlights: ["Listings", "Area guides", "Market notes"] },
  { name: "Property Finder UAE", category: "Real Estate", emirate: "UAE", area: "UAE-wide", url: "https://www.propertyfinder.ae/", bestFor: "property search comparison", highlights: ["Listings", "Filters", "Agent contacts"] },
  { name: "Dubizzle Property", category: "Real Estate", emirate: "UAE", area: "UAE-wide", url: "https://www.dubizzle.com/property-for-rent/", bestFor: "classified property listings", highlights: ["Rentals", "Sales", "Local listings"] },
];

export const businesses: Resource[] = realResourceEntries.map((entry, index) => {
  const slug = slugify(entry.name);

  return {
    ...entry,
    slug,
    rating: (4.3 + (index % 6) / 10).toFixed(1),
    description: `${entry.name} is a real UAE ${entry.category.toLowerCase()} resource for ${entry.bestFor} in ${entry.area}.`,
    articleTitle: `${entry.name}: What to Know Before You Visit`,
    paragraphs: [
      `${entry.name} is included in this UAE useful websites list because it is an actual resource readers can open for ${entry.bestFor}.`,
      `For ${entry.area}, this guide explains why the website is useful, what to verify before relying on it, and how it fits into the wider ${entry.category.toLowerCase()} category.`,
      "Before booking, visiting, applying, shopping, or making a decision, confirm current details directly on the official website.",
    ],
    checks: ["Official website", "Current opening hours or service status", "Location or coverage area", "Prices, fees, or booking terms", "Contact details"],
  };
});

export const categories: ResourceCategory[] = [
  "Hotel",
  "City Place",
  "Restaurant",
  "Hospital",
  "Shopping Mall",
  "Government Service",
  "Bank & Payments",
  "Travel & Transport",
  "Education",
  "Real Estate",
];

export function getBusinessBySlug(slug: string) {
  return businesses.find((business) => business.slug === slug);
}

export function getGuideSiteBySlug(slug: string) {
  return guideSites.find((site) => site.slug === slug);
}

export function categorySlug(category: GuideCategory) {
  return slugify(category);
}

export function getGuideCategoryBySlug(slug: string) {
  return guideCategories.find((category) => categorySlug(category) === slug);
}

export function resourceCategorySlug(category: ResourceCategory) {
  return slugify(category);
}

export function getResourceCategoryBySlug(slug: string) {
  return categories.find((category) => resourceCategorySlug(category) === slug);
}
