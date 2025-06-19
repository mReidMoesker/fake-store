import React from 'react';
import '../../css/Home-Style/SortFilter.css'; 

function SortFilter({ sortOption, setSortOption }) {
  return (
    <div className="sort-filter-container">
      <label htmlFor="sort" className="sort-filter-label">Sort Product by:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="sort-filter-select"
      >
        <option value="name-asc">Name: A - Z</option>
        <option value="name-desc">Name: Z - A</option>
        <option value="price-asc">Price: Low - High</option>
        <option value="price-desc">Price: High - Low</option>
      </select>
    </div>
  );
}

export default SortFilter;

