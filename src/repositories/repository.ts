interface Repository {
  create: (data: any) => Promise<any>
  read: (filter?: any) => Promise<any[]>
  readOne: (id: string | number) => Promise<any>
  update: (id: string | number, data: any) => Promise<any>
  delete: (id: string | number) => Promise<void>
}
