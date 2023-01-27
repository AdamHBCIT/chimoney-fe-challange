import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { products } from "./data";

interface AppStore {
  cart: [] | {},
  addProduct: () => void,
  removeProduct: () => void,
}

const useStore = create<AppStore>()(
  persist(
    (set) => ({
      cart: products,
      addProduct: () => set({
        //do something
      }),
      removeProduct: () => set({
        // do something
      })
    }),
    {
      name: "chimoney_store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
