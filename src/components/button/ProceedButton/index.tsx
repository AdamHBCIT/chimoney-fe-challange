import { Link } from "react-router-dom";
import useStore from "@lib/store";

const ProceedButton = () => {
  const cart = useStore((state) => state.cart);

  return (
    <>
      {cart.length === 0 && (
        <Link to={`/`} className="btn">
          Visit products
        </Link>
      )}
      {cart.length > 0 && (
        <Link to={`/checkout`} className="btn">
          Ready to checkout {`(${cart.length} items)`}
        </Link>
      )}
    </>
  );
};
export default ProceedButton;
