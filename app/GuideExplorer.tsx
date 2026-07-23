"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { businesses, categories, type ResourceCategory } from "./data";

export function GuideExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ResourceCategory | "All">("All");
  const [emirate, setEmirate] = useState("All");

  const emirates = useMemo(
    () => ["All", ...Array.from(new Set(businesses.map((business) => business.emirate)))],
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return businesses.filter((business) => {
      const matchesCategory = category === "All" || business.category === category;
      const matchesEmirate = emirate === "All" || business.emirate === emirate;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [business.name, business.area, business.bestFor, business.category, business.emirate]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesCategory && matchesEmirate && matchesQuery;
    });
  }, [category, emirate, query]);

  const visible = filtered.slice(0, 36);

  return (
    <section className="resource-hub" id="resource-hub">
      <div className="section-head">
        <span className="eyebrow">300 non-vape resource pages</span>
        <div>
          <h2>City guide pages for hotels, places, restaurants, hospitals, malls, services, travel, and more</h2>
          <p>
            Each resource page is written like a useful local guide article with best-for notes,
            visit checks, highlights, and a website button.
          </p>
        </div>
      </div>

      <div className="controls" aria-label="Resource hub filters">
        <label>
          <span>Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Dubai hotel, hospital, mall..."
          />
        </label>
        <label>
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as ResourceCategory | "All")}
          >
            <option>All</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Emirate</span>
          <select value={emirate} onChange={(event) => setEmirate(event.target.value)}>
            {emirates.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="result-line">
        Showing {visible.length} of {filtered.length} matching resources
      </div>

      <div className="business-grid">
        {visible.map((business) => (
          <article className="business-card" key={business.slug}>
            <div className="business-topline">
              <span>{business.category}</span>
              <strong>{business.rating}</strong>
            </div>
            <h3>{business.name}</h3>
            <p>{business.area}, {business.emirate}</p>
            <ul>
              {business.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="card-actions">
                <Link href={`/business/${business.slug}`}>Read guide</Link>
                <a href={business.url} target="_blank" rel="noreferrer">
                  Visit
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
