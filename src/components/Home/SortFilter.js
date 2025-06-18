import React from 'react';

function SortFilter({ sortOption, setSortOption }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="sort" style={{ marginRight: '0.5rem' }}>Sort Product by:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        style={{ padding: '0.3rem' }}
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
