import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import useStore from "@lib/store";

const CartButton = () => {
  const cart = useStore((state) => state.cart);

  return (
    <Link to="/cart" className="btn">
      {cart.length > 0 && <span className="btn-cart">{cart.length}</span>}
      Cart
      <HiShoppingCart className="ml-2" />
    </Link>
  );
};
export default CartButton;
