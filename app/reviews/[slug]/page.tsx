import type { Metadata } from "next";
import Link from "next/link";
import { categorySlug, getGuideSiteBySlug, guideSites } from "../../data";

type ReviewPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return guideSites.map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const site = getGuideSiteBySlug(slug);

  if (!site) {
    return {
      title: "Review not found | UAE Buyer Guide",
    };
  }

  const title = site.seoTitle ?? `${site.name} Review | UAE Buyer Guide`;
  const description =
    site.seoDescription ??
    `${site.name}: ${site.bestFor} Compare pros, useful details, things to check, and visit links.`;
  const canonical = `/reviews/${site.slug}`;

  return {
    title,
    description,
    keywords: site.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      siteName: "UAE Buyer Guide",
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const site = getGuideSiteBySlug(slug);

  if (!site) {
    return (
      <main className="detail-shell">
        <Link href="/" className="back-link">Back to buyer guide</Link>
        <section className="detail-hero">
          <span className="eyebrow">Not found</span>
          <h1>This review page is not available.</h1>
          <p>Return to the UAE Buyer Guide and choose another website review.</p>
        </section>
      </main>
    );
  }

  const related = guideSites
    .filter((item) => item.category === site.category && item.slug !== site.slug)
    .slice(0, 3);
  const title = site.seoTitle ?? `${site.name} Review | UAE Buyer Guide`;
  const description =
    site.seoDescription ??
    `${site.name}: ${site.bestFor} Compare pros, useful details, things to check, and visit links.`;
  const canonicalPath = `/reviews/${site.slug}`;
  const siteOrigin = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://uae-buyer-guide.vercel.app";
  const canonicalUrl = `${siteOrigin}${canonicalPath}`;
  const categoryUrl = `${siteOrigin}/category/${categorySlug(site.category)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: {
          "@type": "WebSite",
          name: "UAE Buyer Guide",
          url: siteOrigin,
        },
        about: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: title,
        description,
        author: {
          "@type": "Organization",
          name: "UAE Buyer Guide",
        },
        publisher: {
          "@type": "Organization",
          name: "UAE Buyer Guide",
        },
        mainEntityOfPage: {
          "@id": `${canonicalUrl}#webpage`,
        },
        articleSection: site.category,
        keywords: site.keywords?.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "UAE Buyer Guide",
            item: siteOrigin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: site.category,
            item: categoryUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${site.name} Review`,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="detail-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/#guides" className="back-link">Back to comparison guides</Link>

      <section className="detail-hero review-detail">
        <span className="eyebrow">{site.category}</span>
        <h1>{title.replace(" | UAE Buyer Guide", "")}</h1>
        <p>{site.summary}</p>
        <div className="detail-actions">
          <a href={site.url} target="_blank" rel="noreferrer">Visit Website</a>
          <Link href="/#resource-hub">Explore local resources</Link>
        </div>
      </section>

      {site.verdict ? (
        <section className="article-panel seo-summary">
          <span className="eyebrow">Editor verdict</span>
          <p>{site.verdict}</p>
        </section>
      ) : null}

      <section className="detail-grid">
        <article className="detail-panel">
          <h2>Best for</h2>
          <p>{site.bestFor}</p>
          <h2>Why it is useful</h2>
          <p>{site.whyUseful}</p>
        </article>

        <article className="detail-panel">
          <h2>Pros</h2>
          <ul className="check-list">
            {site.pros.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Check before visiting</h2>
          <ul className="check-list">
            {site.thingsToCheck.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      {site.contentSections?.length ? (
        <section className="article-panel">
          {site.contentSections.map((section) => (
            <div className="content-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </section>
      ) : null}

      <section className="link-panel">
        <h2>Useful links</h2>
        <div className="link-grid">
          {site.links.map((link) => (
            <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="related">
        <div className="section-head">
          <span className="eyebrow">More to compare</span>
          <div>
            <h2>Similar websites in this guide</h2>
            <p>Compare related websites before visiting their official pages.</p>
          </div>
        </div>
        <div className="business-grid compact">
          {related.map((item) => (
            <article className="business-card" key={item.slug}>
              <div className="business-topline">
                <span>{item.category}</span>
              </div>
              <h3>{item.name}</h3>
              <p>{item.bestFor}</p>
              <div className="card-actions">
                <Link href={`/reviews/${item.slug}`}>Read review</Link>
                <a href={item.url} target="_blank" rel="noreferrer">Visit</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
