import Header from "@components/layout/Header";
import useStore from "@lib/store";

const CheckoutPage = () => {
  const cart = useStore( (state) => state.cart );

  return(
    <>
      <Header title="Checkout" checkoutPage={true} backArrow={true} />
      
    </>
  )
}
export default CheckoutPage;