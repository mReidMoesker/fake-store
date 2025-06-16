import '../css/product.css'

function ProductDisplay({ products }) {
  console.log('Rendering ProductDisplay with:', products);

  if (!Array.isArray(products)) {
    return <p>Invalid data format (not an array)</p>;
  }

  if (products.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <div>
      <h2>🛍️ Product List ({products.length} items)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id} className="product-list">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} className="product-image" />
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDisplay;