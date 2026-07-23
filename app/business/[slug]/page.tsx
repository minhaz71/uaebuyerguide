import type { Metadata } from "next";
import Link from "next/link";
import { businesses, getBusinessBySlug, resourceCategorySlug } from "../../data";

type BusinessPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({ params }: BusinessPageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return {
      title: "Business not found | UAE Buyer Guide",
    };
  }

  return {
    title: `${business.name} | UAE Buyer Guide`,
    description: business.description,
  };
}

export default async function BusinessPage({ params }: BusinessPageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return (
      <main className="detail-shell">
        <Link href="/" className="back-link">Back to guide</Link>
        <section className="detail-hero">
          <span className="eyebrow">Not found</span>
          <h1>This business page is not available.</h1>
          <p>Return to the UAE Buyer Guide and choose another local resource.</p>
        </section>
      </main>
    );
  }

  const related = businesses
    .filter((item) => item.category === business.category && item.slug !== business.slug)
    .slice(0, 3);

  return (
    <main className="detail-shell">
      <Link href="/#resource-hub" className="back-link">Back to resource hub</Link>

      <section className="detail-hero">
        <span className="eyebrow">{business.category} city guide in {business.emirate}</span>
        <h1>{business.articleTitle}</h1>
        <p>{business.description}</p>
        <div className="detail-actions">
          <a href={business.url} target="_blank" rel="noreferrer">Visit website</a>
          <Link href={`/resources/${resourceCategorySlug(business.category)}`}>Browse {business.category}</Link>
          <Link href="/#reviews">See featured stores</Link>
        </div>
      </section>

      <section className="article-panel">
        {business.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="detail-grid">
        <article className="detail-panel">
          <h2>Quick review</h2>
          <dl className="fact-list">
            <div>
              <dt>Rating</dt>
              <dd>{business.rating} / 5</dd>
            </div>
            <div>
              <dt>Area</dt>
              <dd>{business.area}</dd>
            </div>
            <div>
              <dt>Best for</dt>
              <dd>{business.bestFor}</dd>
            </div>
          </dl>
        </article>

        <article className="detail-panel">
          <h2>Highlights</h2>
          <ul className="check-list">
            {business.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <h2>Things to check</h2>
          <ul className="check-list">
            {business.checks.map((check) => (
              <li key={check}>{check}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="related">
        <div className="section-head">
          <span className="eyebrow">More to compare</span>
          <div>
            <h2>Similar {business.category.toLowerCase()} resources</h2>
            <p>Each resource has its own guide page, review fields, and outbound visit link.</p>
          </div>
        </div>
        <div className="business-grid compact">
          {related.map((item) => (
            <article className="business-card" key={item.slug}>
              <div className="business-topline">
                <span>{item.emirate}</span>
                <strong>{item.rating}</strong>
              </div>
              <h3>{item.name}</h3>
              <p>{item.area}</p>
              <div className="card-actions">
                <Link href={`/business/${item.slug}`}>Read guide</Link>
                <a href={item.url} target="_blank" rel="noreferrer">Visit</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
