export type HelloRequest = {
  name: string
}

export type HelloResponse = {
  message: string
}

export type ProductsListResponse = {
  data: {
    id: number
    name: string
  }[]
}
