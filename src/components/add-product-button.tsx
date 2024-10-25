'use client'

import { useCartStore } from "@/store/cart-store"

export const AddProductButton = () => {
  const { addProduct } = useCartStore()

  return (
    <button onClick={() => addProduct({ name: 'Capoeira' })}>Adicionar produto</button>
  )
}
