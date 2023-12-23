import { prisma } from '@config/prisma'

async function main() {
    console.log('<< Executing seed >>')
    
    await prisma.products.upsert({
        where: { id: 1 },
        update: { updatedAt: new Date() },
        create: { name: 'Product Example', createdAt: new Date() }
    })

    console.log('<< Finished execution >>')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })