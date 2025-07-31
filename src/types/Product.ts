export type ProductColor = {
  label: string
  color: string
}

export type ProductSize = {
  label: string
}

export type Product = {
  id: number
  code: string
  slug: string
  name: string
  link: string
  images: string[]
  description: string
  colors?: ProductColor[]
  sizes?: ProductSize[]
}
