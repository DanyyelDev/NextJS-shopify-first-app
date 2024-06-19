import { getMainProducts } from "app/services/shopify/products"

export async function GET(){
    const products = await getMainProducts()

    return Response.json({ products })
}