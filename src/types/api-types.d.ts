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
    createdAt: string
    updatedAt: string
  }[]
}

export type ProductReadOneResponse = {
  data: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
  }
}

export type ProductCreateRequest = {
  name: string
}

export type ProductCreateResponse = {
  data: {
    id: number
    name: string
    createdAt: string
  }
}

export type ProductUpdateRequest = {
  name: string
}

export type ProductUpdateResponse = {
  data: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
  }
}
