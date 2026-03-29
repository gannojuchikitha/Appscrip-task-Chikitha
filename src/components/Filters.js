"use client";

export default function Filters({ selected, setSelected }) {
  const categories = ["all", "electronics", "jewelery", "men's clothing", "women's clothing"];

  return (
    <aside className="filters">
      <h2>Categories</h2>

      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={selected === cat ? "active" : ""}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

