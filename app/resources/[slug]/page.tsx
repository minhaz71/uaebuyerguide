import type { Metadata } from "next";
import Link from "next/link";
import {
  businesses,
  categories,
  getResourceCategoryBySlug,
  resourceCategorySlug,
} from "../../data";

type ResourceCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteOrigin = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://uae-buyer-guide.vercel.app";

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: resourceCategorySlug(category) }));
}

export async function generateMetadata({ params }: ResourceCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getResourceCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Resource category not found | UAE Buyer Guide",
    };
  }

  const title = `${category} UAE City Guide | UAE Buyer Guide`;
  const description = `Browse UAE ${category.toLowerCase()} resources by emirate, area, best-for notes, checks, and useful website links.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/resources/${slug}`,
    },
    keywords: [
      `${category} UAE`,
      `${category} Dubai`,
      `${category} Abu Dhabi`,
      "UAE city guide",
      "UAE local resource hub",
      "useful UAE websites",
    ],
    openGraph: {
      title,
      description,
      url: `/resources/${slug}`,
      type: "website",
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

export default async function ResourceCategoryPage({ params }: ResourceCategoryPageProps) {
  const { slug } = await params;
  const category = getResourceCategoryBySlug(slug);

  if (!category) {
    return (
      <main className="detail-shell">
        <Link href="/" className="back-link">Back to UAE Buyer Guide</Link>
        <section className="detail-hero">
          <span className="eyebrow">Not found</span>
          <h1>This resource category is not available.</h1>
          <p>Return to the local resource hub and choose another category.</p>
        </section>
      </main>
    );
  }

  const resources = businesses.filter((business) => business.category === category);
  const canonicalUrl = `${siteOrigin}/resources/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        url: canonicalUrl,
        name: `${category} UAE City Guide`,
        description: `Browse UAE ${category.toLowerCase()} resources with guide pages and useful website links.`,
        isPartOf: {
          "@type": "WebSite",
          name: "UAE Buyer Guide",
          url: siteOrigin,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: resources.length,
          itemListElement: resources.map((resource, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: resource.name,
            url: `${siteOrigin}/business/${resource.slug}`,
          })),
        },
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
            name: "Local Resource Hub",
            item: `${siteOrigin}/#resource-hub`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: category,
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
      <Link href="/#resource-categories" className="back-link">Back to all resource categories</Link>

      <section className="detail-hero">
        <span className="eyebrow">UAE city guide category</span>
        <h1>{category} UAE City Guide</h1>
        <p>
          Browse every {category.toLowerCase()} resource page in this UAE local resource hub.
          Each guide includes best-for notes, area context, checks before visiting, and a useful website link.
        </p>
      </section>

      <section className="article-panel seo-summary">
        <span className="eyebrow">Category overview</span>
        <p>
          This category includes {resources.length} crawlable guide pages across Dubai, Abu Dhabi,
          Sharjah, Ajman, Ras Al Khaimah, and Fujairah.
        </p>
      </section>

      <section className="related">
        <div className="business-grid">
          {resources.map((resource) => (
            <article className="business-card" key={resource.slug}>
              <div className="business-topline">
                <span>{resource.emirate}</span>
                <strong>{resource.rating}</strong>
              </div>
              <h3>{resource.name}</h3>
              <p>{resource.area} · Best for {resource.bestFor}</p>
              <ul>
                {resource.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="card-actions">
                <Link href={`/business/${resource.slug}`}>Read guide</Link>
                <a href={resource.url} target="_blank" rel="noreferrer">Visit</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
