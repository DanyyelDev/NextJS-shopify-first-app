import { getAllProducts } from "app/services/shopify/products"

export async function GET(){
    const products = await getAllProducts()

    return Response.json({ products })
}