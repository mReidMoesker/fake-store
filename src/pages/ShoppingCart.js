import {ShoppingCartList} from  '../components/ShoppingCartList';
import {CreditCardForm} from '../components/CreditCardForm';

function ProductFetcher({ onProductsLoaded }) {
useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      onProductsLoaded(res.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
      onProductsLoaded([]);
    }
  };

  fetchProducts();
}, [onProductsLoaded]);
 return null;
}

function ShoppingCart() {
  return(
    <main>
      <h2>Shopping</h2>
      <section>
        <ShoppingCartList/>
        <CreditCardForm/>
      </section>
    </main>
  )
}