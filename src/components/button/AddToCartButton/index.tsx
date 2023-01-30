type Props = {
  clickToCart: React.MouseEventHandler<HTMLButtonElement>;
}

const AddToCartButton = ({clickToCart}: Props) => {
  return (
    <button 
      type="button" 
      onClick={clickToCart}
      className="btn my-4"
    >
        Add to cart
      </button>
  )
}
export default AddToCartButton;