import useStore from "@lib/store";
import { useEffect } from "react";

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
      <h1>Cart page</h1>
      {cart.length > 0 && 
        <form>
          {
            cart.map( (product: any) => (
              <div key={product.productId}>
                <p>{product.productName}</p>
                <select onChange={() => updateProductQuantity(product.productId)}>
                  <option>1</option>
                  <option>2</option>
                </select>
                <button type="button" onClick={ () => removeProductFromCart(product.productId) }>Delete</button>
              </div>
            )) 
          }
          <button type="submit">Proceed to checkout</button>
        </form>
      }

      {cart.length === 0 &&
        <p>Cart is empty</p>
      }
    </>
  );
}

export default CartPage;