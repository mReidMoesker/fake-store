import { FaPlus, FaEye, FaMinus, FaTrash } from 'react-icons/fa';

function CartButtonWrapper({onView, onIncrease, onDecrease, onRemove}) {
  return (
    <div>
      <button className="button-small" onClick={onView} title="View Product">
        <FaEye />
      </button>
      <button className="button-small" onClick={onIncrease} title="Increase Quantity">
        <FaPlus />
      </button>
      <button className="button-small" onClick={onDecrease} title="Decrease Quantity">
        <FaMinus />
      </button>
      <button className="button-small" onClick={onRemove} title="Remove from Cart">
        <FaTrash />
      </button>
    </div>
  );
}

export default CartButtonWrapper;
