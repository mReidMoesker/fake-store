import { FaPlus, FaEye, FaMinus, FaTrash } from 'react-icons/fa';

function CartButtonWrapper() {
  return (
    <div>
      <button className="button-small">
        <FaEye />
      </button>
      <button className="button-small">
        <FaPlus />
      </button>
      <button className="button-small">
        <FaMinus />
      </button>
      <button className="button-small">
        <FaTrash />
      </button>
    </div>
  );
}

export default CartButtonWrapper;
