import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import {
  businesses,
  categories,
  categorySlug,
  featuredSites,
  guideCategories,
  guideSites,
  resourceCategorySlug,
} from "./data";
import { GuideExplorer } from "./GuideExplorer";
import { siteUrl } from "./site";

export const metadata: Metadata = {
  title: "UAE Buyer Guide | Comparison Guide and Useful Websites List",
  description:
    "Compare useful UAE websites before you visit, including stores, fast delivery, specialty shopping, adult specialty retail, vape and pod stores, TEREA / HEETS shops, news portals, and 300 non-vape local resource pages.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "UAE buyer guide",
    "UAE useful websites",
    "Dubai online store reviews",
    "UAE website comparison",
    "best UAE websites guide",
    "UAE local resource hub",
  ],
  openGraph: {
    title: "UAE Buyer Guide | Comparison Guide and Useful Websites List",
    description:
      "Compare useful UAE websites before you visit, including shopping, delivery, specialty retail, news portals, and local resource pages.",
    url: "/",
    type: "website",
    siteName: "UAE Buyer Guide",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Buyer Guide | Comparison Guide and Useful Websites List",
    description:
      "Compare useful UAE websites before you visit, including shopping, delivery, specialty retail, news portals, and local resource pages.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  const featuredReviewSlugs: Record<string, string> = {
    "TereaHub.ae": "tereahub-ae",
    "TereaZone.ae": "tereazone-ae",
  };
  const navigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Featured Reviews",
      "Buyer Guides",
      "Resource Categories",
      ...guideCategories,
      ...categories,
    ],
    url: [
      `${siteUrl}/#reviews`,
      `${siteUrl}/#guides`,
      `${siteUrl}/#resource-categories`,
      ...guideCategories.map((category) => `${siteUrl}/category/${categorySlug(category)}`),
      ...categories.map((category) => `${siteUrl}/resources/${resourceCategorySlug(category)}`),
    ],
  };
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "UAE Buyer Guide",
        description:
          "A UAE buyer guide and comparison site for useful websites, shopping, delivery, news, specialty retail, and local resources.",
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "UAE Buyer Guide",
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl,
        name: "UAE Buyer Guide | Comparison Guide and Useful Websites List",
        description:
          "Compare useful UAE websites before you visit, including shopping, delivery, specialty retail, news portals, and local resource pages.",
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        about: {
          "@id": `${siteUrl}#organization`,
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <section className="hero">
        <nav className="topbar" aria-label="Main navigation">
          <Link href="/" className="brand">UAE Buyer Guide</Link>
          <div>
            <a href="#reviews">Reviews</a>
            <a href="#guides">Guides</a>
            <a href="#resource-categories">Categories</a>
          </div>
        </nav>

        <nav className="category-menu" aria-label="Browse UAE guide categories">
          {guideCategories.slice(0, 4).map((category) => (
            <Link href={`/category/${categorySlug(category)}`} key={category}>
              {category}
            </Link>
          ))}
          {categories.slice(0, 6).map((category) => (
            <Link href={`/resources/${resourceCategorySlug(category)}`} key={category}>
              {category}
            </Link>
          ))}
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Shopping and local discovery in the UAE</span>
            <h1>Compare useful UAE websites before you visit.</h1>
            <p>
              A modern buyer guide for online stores, fast delivery websites, specialty shopping,
              adult specialty retail, UAE news portals, business media, and practical city resources.
            </p>
            <div className="hero-actions">
              <a href="#reviews">See featured sites</a>
              <a href="#resource-hub">Browse 300 resources</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="UAE buyer guide categories">
            <div className="visual-panel primary-panel">
              <span>Featured</span>
              <strong>TereaHub.ae</strong>
              <small>Highlighted review placement</small>
            </div>
            <div className="visual-panel">
              <span>Resource hub</span>
              <strong>300</strong>
              <small>Non-vape guide articles</small>
            </div>
            <div className="visual-panel">
              <span>Coverage</span>
              <strong>8</strong>
              <small>Buyer-guide categories</small>
            </div>
          </div>
        </div>
      </section>

      <section className="resource-categories" id="resource-categories">
        <div className="section-head">
          <span className="eyebrow">Browse by category</span>
          <div>
            <h2>All 300 local resource pages are divided into category guides</h2>
            <p>
              Open a category to browse every page inside it. This gives visitors and search engines
              a clean path through the full UAE local resource hub.
            </p>
          </div>
        </div>

        <div className="category-card-grid">
          {categories.map((category) => {
            const count = businesses.filter((business) => business.category === category).length;
            const sample = businesses.find((business) => business.category === category);

            return (
              <Link
                className="category-card"
                href={`/resources/${resourceCategorySlug(category)}`}
                key={category}
              >
                <span>{count} guides</span>
                <h3>{category}</h3>
                <p>
                  Browse {category.toLowerCase()} resources across UAE emirates with best-for notes,
                  checks, and website links.
                </p>
                {sample ? <small>Example: {sample.name}</small> : null}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="featured" id="reviews">
        <div className="section-head">
          <span className="eyebrow">Featured highlight</span>
          <div>
            <h2>Featured UAE website reviews</h2>
            <p>Compare specialist shopping websites by best use, strengths, delivery focus, and key checks before visiting.</p>
          </div>
        </div>

        <div className="featured-grid">
          {featuredSites.map((site) => (
            <article className="feature-card" key={site.name} style={{ "--accent": site.accent } as CSSProperties}>
              <span className="badge">{site.badge}</span>
              <h3>{site.name}</h3>
              <p>{site.summary}</p>
              <div className="feature-columns">
                <div>
                  <h4>Best for</h4>
                  <ul>
                    {site.bestFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Pros</h4>
                  <ul>
                    {site.pros.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="note">{site.note}</p>
              <div className="review-actions">
                <Link href={`/reviews/${featuredReviewSlugs[site.name]}`}>Read full review</Link>
                <a href={site.url} target="_blank" rel="noreferrer">Visit website</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="guides" id="guides">
        <div className="section-head">
          <span className="eyebrow">Buyer guides</span>
          <div>
            <h2>Best-of guides and comparison sections readers can scan quickly</h2>
            <p>Explore online stores, fast delivery, specialty shopping, adult specialty retail, vape delivery stores, TEREA / HEETS shops, UAE news portals, and business media.</p>
          </div>
        </div>

        <div className="guide-groups">
          {guideCategories.map((group) => (
            <div className="guide-column" key={group}>
              <Link href={`/category/${categorySlug(group)}`}>
                <h3>{group}</h3>
              </Link>
              {guideSites
                .filter((site) => site.category === group)
                .filter((site) => site.slug !== "tereaheetsdubai-ae")
                .slice(0, 4)
                .map((site) => (
                  <article className="review-card" key={site.name}>
                    <div>
                      <span>{site.location}</span>
                      <h4>{site.name}</h4>
                      <p>{site.summary}</p>
                    </div>
                    <dl>
                      <dt>Best for</dt>
                      <dd>{site.bestFor}</dd>
                      <dt>Why useful</dt>
                      <dd>{site.whyUseful}</dd>
                      <dt>Pros</dt>
                      <dd>{site.pros.join(", ")}</dd>
                      <dt>Things to check</dt>
                      <dd>{site.thingsToCheck.slice(0, 3).join(", ")}</dd>
                    </dl>
                    <div className="review-actions">
                      <Link href={`/reviews/${site.slug}`}>Read review</Link>
                      <a href={site.url} target="_blank" rel="noreferrer">Visit website</a>
                    </div>
                  </article>
                ))}
              <Link className="category-more" href={`/category/${categorySlug(group)}`}>
                View full guide
              </Link>
            </div>
          ))}
        </div>
      </section>

      <GuideExplorer />

    </main>
  );
}
