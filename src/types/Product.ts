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

export type ProductMediaSection<T> = {
  title?: string
  subtitle?: string
  content: T[]
}

export type ProductMedia = {
  images: string[]
  banners?: ProductMediaSection<ProductBanner>
  cards?: ProductMediaSection<ProductCard>
}

export type Product = {
  id: number
  code: string
  slug: string
  name: string
  link: string
  media: ProductMedia
  description: string
  colors?: ProductColor[]
  manufacturer?: ProductManufacturer
  distributer?: ProductDistributer
  dimentions?: ProductDimentions
  remark?: string
}
