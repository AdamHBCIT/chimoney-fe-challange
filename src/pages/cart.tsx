import type { CartProduct } from "@lib/store";
import useStore from "@lib/store";
import { useEffect, useState } from "react";
import Header from "@components/layout/Header";
import { Link, useLocation } from "react-router-dom";
import RemoveFromCartButton from "@components/button/RemoveFromCartButton";
import SelectQuantityCart from "@components/form/SelectQuantityCart";

const CartPage = () => {
  const cart = useStore( (state) => state.cart );

  const removeProductFromCart = (productId: number) => {
    console.log("product id", productId);

  }

  const updateProductQuantity = (productId: number) => {
    console.log("updated quantity");
  }

  // Confirm the order and proceed to checkout page
  const handleCheckout = (formData: any) => {

  }

  useEffect( () => {
    // maybe something here?
  }, [])


  return(
    <>
      <Header title="Cart" backArrow={true} cartPage={true} />
      {cart.length > 0 && 
        <form>
          {
            cart.map( (product: CartProduct) => (
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
                  <SelectQuantityCart defaultQuantity={product.productQuantity} productId={product.productId}/>
                  <RemoveFromCartButton productId={product.productId}/>
                </div>
              </div>
            )) 
          }
        </form>
      }

      {cart.length === 0 &&
        <p className="text-xl">Cart is empty</p>
      }
    </>
  );
}

export default CartPage;