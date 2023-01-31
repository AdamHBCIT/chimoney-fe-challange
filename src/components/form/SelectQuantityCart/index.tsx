import useStore from "@lib/store";

type Props = {
  defaultQuantity: number,
  productId: number,
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectQuantityCart = ({defaultQuantity, productId, showModal}: Props) => {
  const updateProductQuantity = useStore( (state) => state.updateProductQuantity );

  const handleUpdateProductQuantity = (quantity: number) => {
    updateProductQuantity(productId, quantity);
    showModal(true);
  }

  return(
    <div>
      <label htmlFor="quantitySelectId">Quantity:</label>
      <select 
        id="quantitySelectId" 
        name="quantitySelect" 
        className="px-4 py-1 ml-2 my-4 border border-zinc-400 rounded-md outline-none"
        onChange={(e) => handleUpdateProductQuantity(Number(e.target.value))}
        defaultValue={defaultQuantity}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  )
}
export default SelectQuantityCart;