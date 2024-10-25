import { create } from "zustand"
import { createJSONStorage, persist } from 'zustand/middleware'

type CartStore = {
  products: any[]
  addProduct(product: any): void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product: any) =>
        set((state) => ({
          products: [...state.products, product],
        })),
    }),
    {
      name: 'cart_store',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        products: state.products,
      }),
    }
  )
)
