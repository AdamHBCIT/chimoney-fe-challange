import useStore from "@lib/store";
import { BsFillTrashFill } from "react-icons/bs";

type Props = {
  productId: number;
};

const RemoveFromCartButton = ({ productId }: Props) => {
  const removeProduct = useStore((state) => state.removeProduct);

  return (
    <button
      type="button"
      className="btn"
      onClick={() => removeProduct(productId)}
    >
      <BsFillTrashFill className="mr-2" />
      Remove from cart
    </button>
  );
};
export default RemoveFromCartButton;
