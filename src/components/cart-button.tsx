'use client'

import { useCartStore } from "@/store/cart-store"

export const CartButton = () => {
  const { products } = useCartStore()

  return (
    <span>Carrinho: {products.length}</span>
  )
}
