import { FaPlus, FaEye, FaMinus, FaTrash } from 'react-icons/fa';

function CartButtonWrapper() {
  return (
    <div>
      <button>
        <FaEye />
      </button>
      <button>
        <FaPlus />
      </button>
      <button>
        <FaMinus />
      </button>
      <button>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartButtonWrapper;
