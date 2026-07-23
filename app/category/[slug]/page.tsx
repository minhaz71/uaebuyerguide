import type { Metadata } from "next";
import Link from "next/link";
import { categorySlug, getGuideCategoryBySlug, guideCategories, guideSites } from "../../data";
import { siteUrl } from "../../site";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return guideCategories.map((category) => ({ slug: categorySlug(category) }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getGuideCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Guide not found | UAE Buyer Guide",
    };
  }

  const title = `${category} | UAE Buyer Guide`;
  const description = `Compare useful UAE websites in ${category}. Read pros, best-for notes, things to check, and visit links.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/category/${slug}`,
    },
    keywords: [
      category,
      `${category} UAE`,
      `${category} Dubai`,
      "UAE buyer guide",
      "UAE website comparison",
      "useful UAE websites",
    ],
    openGraph: {
      title,
      description,
      url: `/category/${slug}`,
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

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getGuideCategoryBySlug(slug);

  if (!category) {
    return (
      <main className="detail-shell">
        <Link href="/" className="back-link">Back to buyer guide</Link>
        <section className="detail-hero">
          <span className="eyebrow">Not found</span>
          <h1>This comparison guide is not available.</h1>
          <p>Return to the homepage and choose another guide category.</p>
        </section>
      </main>
    );
  }

  const sites = guideSites.filter((site) => site.category === category);
  const canonicalUrl = `${siteUrl}/category/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}#collection`,
        url: canonicalUrl,
        name: `${category} | UAE Buyer Guide`,
        description: `Compare useful UAE websites in ${category}.`,
        isPartOf: {
          "@type": "WebSite",
          name: "UAE Buyer Guide",
          url: siteUrl,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: sites.length,
          itemListElement: sites.map((site, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: site.name,
            url: `${siteUrl}/reviews/${site.slug}`,
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
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
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
      <Link href="/#guides" className="back-link">Back to all guides</Link>

      <section className="detail-hero">
        <span className="eyebrow">Comparison guide</span>
        <h1>{category}</h1>
        <p>
          Compare useful UAE websites before you visit. Each card includes best-for notes,
          a short review, pros, things to check, and visit links.
        </p>
      </section>

      <section className="related">
        <div className="business-grid">
          {sites.map((site) => (
            <article className="business-card review-resource-card" key={site.slug}>
              <div className="business-topline">
                <span>{site.location}</span>
              </div>
              <h3>{site.name}</h3>
              <p>{site.summary}</p>
              <dl>
                <dt>Best for</dt>
                <dd>{site.bestFor}</dd>
                <dt>Check before visiting</dt>
                <dd>{site.thingsToCheck.slice(0, 4).join(", ")}</dd>
              </dl>
              <div className="card-actions">
                <Link href={`/reviews/${site.slug}`}>Read review</Link>
                <a href={site.url} target="_blank" rel="noreferrer">Visit</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
