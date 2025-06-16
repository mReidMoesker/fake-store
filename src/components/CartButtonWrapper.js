function CartButtonWrapper() {
  return(
    <div className="flex">
      <button >
        <FaEye />
      </button>
      <button >
        <FaPlus/>
      </button>
      <button>
        <FaMinus/>
      </button>
      <button >
        <FaTrash />
      </button>
    </div>
  )
}
export default CartButtonWrapper;