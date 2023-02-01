import type { CartProduct } from "@lib/store";
import useStore from "@lib/store";
import { useState } from "react";
import Header from "@components/layout/Header";
import { Link } from "react-router-dom";
import RemoveFromCartButton from "@components/button/RemoveFromCartButton";
import SelectQuantityCart from "@components/form/SelectQuantityCart";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Modal from "@components/util/Modal";

const CartPage = () => {
  const cart = useStore((state) => state.cart);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Header title="Cart" backArrow={true} cartPage={true} />

      {cart.length === 0 && <p className="text-xl">Cart is empty</p>}

      {cart.length > 0 && (
        <section>
          {cart.map((product: CartProduct) => (
            <div
              key={product.productId}
              className="grid grid-cols-1 lg:gap-x-6 lg:grid-cols-2 border-b border-zinc-300 py-6"
            >
              <img
                className="rounded-md w-full col-span-1"
                src={product.productImageURL}
                alt={product.productName}
              />
              <div className="col-span-1">
                <p className="text-xl">{product.productName}</p>
                <SelectQuantityCart
                  defaultQuantity={product.productQuantity}
                  productId={product.productId}
                  showModal={setShowModal}
                />
                <RemoveFromCartButton productId={product.productId} />
              </div>
            </div>
          ))}
        </section>
      )}

      {showModal && (
        <Modal clickClose={setShowModal}>
          <div className="flex flex-row items-center py-4 mb-6">
            <BsFillCheckCircleFill color="#16a34a" className="mr-2" />
            <p className="m-0 text-xl font-bold">Item's quantity updated</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-6">
            <Link to="/checkout" className="btn">
              Proceed to checkout
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CartPage;
