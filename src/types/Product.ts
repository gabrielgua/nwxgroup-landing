export type ProductColor = {
  label: string
  color: string
}

export type ProductManufacturer = {
  name: string
  country: string
  address: string
}

export type ProductDistributer = {
  name: string
  country: string
  address: string
}

export type ProductDimentions = {
  width: string
  height: string
  length: string
  weight: string
}

export type ProductBanner = {
  image: string
  alt: string
  title?: string
  subtitle?: string
}

export type ProductCard = {
  image: string
  alt: string
  title: string
  description: string
}

export type ProductCards = {
  title: string
  subtitle?: string
  cards: ProductCard[]
}

export type Product = {
  id: number
  code: string
  slug: string
  name: string
  link: string
  images: string[]
  banners?: ProductBanner[]
  cards?: ProductCards
  description: string
  colors?: ProductColor[]
  manufacturer?: ProductManufacturer
  distributer?: ProductDistributer
  dimentions?: ProductDimentions
  remark?: string
}
