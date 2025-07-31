import type { Product } from '@/types/Product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

import productsData from '../data/products.json'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])

  const loadProducts = async () => {
    products.value = productsData as Product[]
  }

  const findProductBySlug = (slug: string) => {
    if (!products.value.length) {
      loadProducts()
      console.log('load products')
    }

    const product = products.value.find((p) => p.slug === slug)
    if (!product) {
      return
    }

    return product
  }

  return { products, loadProducts, findProductBySlug }
})
