import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { simpleProducts } from "./data";

export type CartProduct = {
  productId: number,
  productName: string,
  productImageURL: string,
  productQuantity: number
}

interface AppStore {
  cart: CartProduct[],
  addProduct: (product: CartProduct) => void,
  removeProduct: (productId: number) => void,
  updateProductQuantity: (productId: number, quantity: number) => void,
}


const useStore = create<AppStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addProduct: (product: CartProduct) => set( (state) => ({cart: [...state.cart, product]}) ),
      removeProduct: (productId: number) => set( (state) => ({cart: state.cart.filter((product) => product.productId !== productId)}) ),
      updateProductQuantity: (productId: number, quantity: number) => {
        const currentCart = get().cart;
        const index = currentCart.findIndex( (item: CartProduct) => item.productId === productId)
        currentCart[index].productQuantity = quantity;
        set( (state) => ({cart: currentCart}) )
      }
    }),
    {
      name: "chimoney_store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
