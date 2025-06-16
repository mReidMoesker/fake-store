import {CartButtonWrapper} from './CartButtonWrapper';
function ShoppingCartList() {
  const item1 = {
    name: 'product one',
    id: 1
  };
    const item2 = {
    name: 'product two',
    id: 2
  };
  const itemsInCart = [item];
  return(
    <ul className="shopping-list">
      {itemsInCart.map(item => (
        <li key={item.id}>
          {itemsInCart.name}
          <CartButtonWrapper/>
        </li>
      ))}
    </ul>
  )
}
export default ShoppingCartList;