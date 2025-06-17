import { useState } from 'react';
import ProductDetail from '../components/Product/ProductDetail.js';
import FetchSingleProduct from '../components/Product/FetchSingleProduct.js';

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