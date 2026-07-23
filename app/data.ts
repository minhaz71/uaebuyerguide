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

const newsGuideSites: GuideSite[] = newsDomains.map(([name, url, bestFor]) => ({
  name,
  slug: siteSlug(name),
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
}));

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

const emirates = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"];

const resourceUrls: Record<ResourceCategory, string[]> = {
  Hotel: [
    "https://www.visitdubai.com/en/places-to-visit",
    "https://visitabudhabi.ae/en/plan-your-trip/where-to-stay",
    "https://www.booking.com/country/ae.html",
    "https://www.tripadvisor.com/Hotels-g294012-United_Arab_Emirates-Hotels.html",
  ],
  "City Place": [
    "https://www.visitdubai.com/en/places-to-visit",
    "https://visitabudhabi.ae/en/where-to-go",
    "https://www.sharjahtourism.ae/",
    "https://visitrasalkhaimah.com/",
  ],
  Restaurant: [
    "https://www.timeoutdubai.com/restaurants",
    "https://www.visitdubai.com/en/things-to-do/eat-and-drink",
    "https://www.tripadvisor.com/Restaurants-g294012-United_Arab_Emirates.html",
    "https://www.zomato.com/uae",
  ],
  Hospital: [
    "https://www.dha.gov.ae/en",
    "https://www.doh.gov.ae/en",
    "https://u.ae/en/information-and-services/health-and-fitness",
  ],
  "Shopping Mall": [
    "https://www.visitdubai.com/en/things-to-do/shopping",
    "https://thedubaimall.com/",
    "https://www.malloftheemirates.com/en",
    "https://www.yasisland.com/en",
  ],
  "Government Service": [
    "https://u.ae/en",
    "https://gdrfad.gov.ae/en",
    "https://icp.gov.ae/en/",
  ],
  "Bank & Payments": [
    "https://www.centralbank.ae/en/",
    "https://www.emiratesnbd.com/en",
    "https://www.adcb.com/en/personal/",
    "https://www.dib.ae/",
  ],
  "Travel & Transport": [
    "https://www.rta.ae/wps/portal/rta/ae/home",
    "https://www.dubaiairports.ae/",
    "https://www.etihadrail.ae/",
  ],
  Education: [
    "https://www.moe.gov.ae/en/pages/home.aspx",
    "https://www.adek.gov.ae/",
    "https://www.caa.ae/",
  ],
  "Real Estate": [
    "https://dubailand.gov.ae/en/",
    "https://www.bayut.com/",
    "https://www.propertyfinder.ae/",
    "https://www.dubizzle.com/property-for-rent/",
  ],
};

const resourceBlueprints: Record<
  ResourceCategory,
  {
    count: number;
    nouns: string[];
    areas: string[];
    bestFor: string[];
    highlights: string[];
  }
> = {
  Hotel: {
    count: 30,
    nouns: ["Harbour", "Palm", "Creek", "Marina", "Oasis", "Skyline", "Pearl", "Sands", "Crown", "Dunes"],
    areas: ["Downtown", "Business Bay", "Jumeirah", "Corniche", "Al Majaz", "City Centre"],
    bestFor: ["business stays", "family trips", "weekend breaks", "airport access", "beach holidays"],
    highlights: ["Concierge desk", "Breakfast options", "Family rooms", "Airport transfers", "Meeting space"],
  },
  "City Place": {
    count: 30,
    nouns: ["Heritage", "Waterfront", "Garden", "Museum", "Promenade", "Cultural", "Lagoon", "Fort", "Gallery", "Island"],
    areas: ["Old Town", "Waterfront", "Heritage District", "Arts Quarter", "Central Park", "Marina Walk"],
    bestFor: ["day trips", "family visits", "photos", "culture stops", "outdoor walks"],
    highlights: ["Visitor-friendly", "Photo spots", "Nearby cafes", "Weekend suitable", "Easy access"],
  },
  Restaurant: {
    count: 30,
    nouns: ["Spice", "Majlis", "Bistro", "Grill", "Kitchen", "Table", "Saffron", "Seafood", "Terrace", "Ember"],
    areas: ["JLT", "Al Barsha", "Khalidiya", "Al Nahda", "Muweilah", "Corniche Road"],
    bestFor: ["casual dining", "family meals", "business lunches", "late dinners", "group bookings"],
    highlights: ["Dine-in", "Takeaway", "Vegetarian choices", "Group tables", "Delivery nearby"],
  },
  Hospital: {
    count: 30,
    nouns: ["Care", "Prime", "Life", "Wellness", "Med", "Health", "Aster", "Emirates", "Family", "Specialist"],
    areas: ["Healthcare City", "Al Qusais", "Mussafah", "Al Khan", "Al Jurf", "Nakheel"],
    bestFor: ["family care", "specialist appointments", "urgent visits", "diagnostics", "wellness checks"],
    highlights: ["Multiple departments", "Appointment desk", "Diagnostics", "Insurance support", "Pharmacy nearby"],
  },
  "Shopping Mall": {
    count: 30,
    nouns: ["Galleria", "Centre", "Avenue", "Souk", "Plaza", "Festival", "Walk", "Bay", "Gate", "Market"],
    areas: ["Downtown", "City Centre", "Marina", "Al Wahda", "Al Zahia", "Al Hamra"],
    bestFor: ["brand shopping", "family outings", "dining", "cinema trips", "weekend errands"],
    highlights: ["Retail mix", "Food court", "Parking", "Entertainment", "Family facilities"],
  },
  "Government Service": {
    count: 30,
    nouns: ["Visa", "Municipality", "Identity", "Business", "Transport", "Housing", "Tax", "Labour", "Tourism", "Permit"],
    areas: ["Online Services", "Customer Centre", "Smart App", "Business Desk", "Resident Services", "Visitor Services"],
    bestFor: ["resident tasks", "document checks", "business setup", "official updates", "service comparisons"],
    highlights: ["Official-service style", "Document checklist", "Appointment planning", "Service fee checks", "Status tracking"],
  },
  "Bank & Payments": {
    count: 30,
    nouns: ["Savings", "Wallet", "Cards", "Remit", "Finance", "Pay", "Exchange", "Credit", "Business Banking", "Digital Bank"],
    areas: ["Online Banking", "Mobile App", "Branch Services", "SME Desk", "Remittance Hub", "Payment Gateway"],
    bestFor: ["account comparison", "remittances", "card research", "SME payments", "digital banking"],
    highlights: ["Fee comparison", "App access", "Support channels", "Security checks", "Branch network"],
  },
  "Travel & Transport": {
    count: 30,
    nouns: ["Metro", "Airport", "Taxi", "Rental", "Bus", "Intercity", "Parking", "Flight", "Tour", "Marina Transit"],
    areas: ["Airport Zone", "Metro Link", "City Terminal", "Travel Desk", "Transport Hub", "Waterfront"],
    bestFor: ["airport transfers", "city movement", "car rentals", "travel planning", "ticket booking"],
    highlights: ["Route planning", "Booking links", "Timing checks", "Price comparison", "Mobile access"],
  },
  Education: {
    count: 30,
    nouns: ["Academy", "Institute", "Learning", "Language", "Coding", "Training", "Campus", "Tutors", "Skills", "Business School"],
    areas: ["Knowledge Park", "University City", "Training Centre", "Online Classes", "School Zone", "Learning Hub"],
    bestFor: ["course research", "school comparisons", "professional training", "language classes", "online learning"],
    highlights: ["Program overview", "Admissions checks", "Fee review", "Schedule options", "Certification details"],
  },
  "Real Estate": {
    count: 30,
    nouns: ["Homes", "Rentals", "Villas", "Apartments", "Property", "Mortgage", "Communities", "Offplan", "Brokerage", "Listings"],
    areas: ["Marina", "Downtown", "JVC", "Al Reem", "Mirdif", "Saadiyat"],
    bestFor: ["rental research", "community comparison", "property browsing", "agent discovery", "mortgage planning"],
    highlights: ["Area comparison", "Budget filters", "Agent contact", "Viewing checks", "Market notes"],
  },
};

export const businesses: Resource[] = Object.entries(resourceBlueprints).flatMap(
  ([category, blueprint]) =>
    Array.from({ length: blueprint.count }, (_, index) => {
      const emirate = emirates[index % emirates.length];
      const noun = blueprint.nouns[index % blueprint.nouns.length];
      const area = blueprint.areas[index % blueprint.areas.length];
      const categoryLabel = category as ResourceCategory;
      const sequence = index + 1;
      const name = `${emirate} ${noun} ${categoryLabel} ${sequence}`;
      const bestFor = blueprint.bestFor[index % blueprint.bestFor.length];
      const highlights = [
        blueprint.highlights[index % blueprint.highlights.length],
        blueprint.highlights[(index + 2) % blueprint.highlights.length],
        blueprint.highlights[(index + 4) % blueprint.highlights.length],
      ];
      const slug = slugify(name);

      return {
        name,
        slug,
        category: categoryLabel,
        emirate,
        area,
        url: resourceUrls[categoryLabel][index % resourceUrls[categoryLabel].length],
        rating: (4.1 + (index % 8) / 10).toFixed(1),
        bestFor,
        highlights,
        description: `${name} is a non-vape UAE city-guide article for ${bestFor} in ${area}, ${emirate}.`,
        articleTitle: `${name}: What to Know Before You Visit`,
        paragraphs: [
          `${name} is part of the UAE useful websites list for readers comparing ${categoryLabel.toLowerCase()} options before they visit, book, call, or make a decision.`,
          `For ${area}, ${emirate}, this guide highlights what the resource is best for, which details deserve a quick check, and where readers can continue their research on a relevant UAE website.`,
          `Use this page as a quick planning stop before opening maps, checking prices, confirming service areas, reading current reviews, or contacting the provider directly.`,
        ],
        checks: ["Official website", "Current opening hours", "Service area", "Prices or fees", "Contact details"],
      };
    }),
);

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
