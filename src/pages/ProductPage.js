import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductDetail from '../components/Product/ProductDetail';
import FetchSingleProduct from '../components/Product/FetchSingleProduct';
import SuggestedItems from '../components/SuggestedItems';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <FetchSingleProduct productId={id} onProductLoaded={setProduct} />
      <ProductDetail product={product} />
      <SuggestedItems />
    </div>
  );
}

export default ProductPage;