import { prisma } from '@config/prisma'
import { PrismaClient, Products as ProductsEntity } from '@prisma/client'

export type CreateProductDTO = { name: string }

export type ReadProductDTO = { name?: string }

export type UpdateProductDTO = { name: string }

export class Products implements Repository {
  private readonly prisma: PrismaClient

  constructor() {
    this.prisma = prisma
  }

  async create(data: CreateProductDTO): Promise<ProductsEntity> {
    return this.prisma.products.create({
      data: { ...data, createdAt: new Date() },
    })
  }

  async read(filter?: ReadProductDTO): Promise<ProductsEntity[]> {
    return this.prisma.products.findMany({
      where: { name: filter?.name ?? undefined },
    })
  }

  async readOne(id: string | number): Promise<ProductsEntity> {
    return this.prisma.products.findFirst({ where: { id: Number(id) } })
  }

  async update(id: string | number, data: any): Promise<ProductsEntity> {
    return this.prisma.products.update({
      where: { id: Number(id) },
      data: { ...data, updatedAt: new Date() },
    })
  }

  async delete(id: string | number): Promise<void> {
    await this.prisma.products.delete({ where: { id: Number(id) } })
  }
}
