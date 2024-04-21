import fastify from "fastify";
import { getAllProducts } from "./routes/products/all-products";

const app = fastify()

app.get("/", async () => {
    return "ola mundo"
})

//product
app.register(getAllProducts)

app.listen({ port: 3333}).then(() => {
    console.log("Server started on http://localhost:3333")
})