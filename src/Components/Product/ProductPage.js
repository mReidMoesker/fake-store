import { useState } from 'react';
import ProductDetail from './ProductDetail';
import FetchSingleProduct from './FetchSingleProduct.js';

function ProductPage() {
  const [product, setProduct] = useState(null);

  const productId = 5;

  return (
    <div>
      <FetchSingleProduct productId={productId} onProductLoaded={setProduct} />
      <ProductDetail product={product} />
    </div>
  );
}

export default ProductPage;