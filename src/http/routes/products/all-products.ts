import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";

export async function getAllProducts(app: FastifyInstance) {
app.get("/products", async (request, reply) => {

    try {
        const products = await prisma.product.findMany()
        reply.send(products)
    } catch (error) {
        reply.code(400).send({message: "Algo deu errado ao buscar os produtos"})
    }
})
}