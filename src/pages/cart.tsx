import useStore from "@lib/store";

const CartPage = () => {
  const store = useStore( (state) => state.cart );

  return(
    <>
      <h1>Cart page</h1>
    </>
  );
}

export default CartPage;