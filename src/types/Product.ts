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

export type Product = {
  id: number
  code: string
  slug: string
  name: string
  link: string
  images: string[]
  description: string
  colors?: ProductColor[]
  manufacturer?: ProductManufacturer
  distributer?: ProductDistributer
  dimentions?: ProductDimentions
  remark?: string
}
