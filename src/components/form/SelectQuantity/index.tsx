type Props = {
  changeQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const SelectQuantity = ({changeQuantity}: Props) => {
  return(
    <div>
      <label htmlFor="quantitySelectId">Quantity:</label>
      <select 
        id="quantitySelectId" 
        name="quantitySelect" 
        className="px-4 py-1 ml-2 border border-zinc-400 rounded-md outline-none"
        onChange={(e) => changeQuantity(Number(e.target.value))}
        defaultValue="1"
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
export default SelectQuantity;