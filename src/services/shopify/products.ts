import { ProductType } from "../../../types"
import { shopifyUrls } from "./urls"
import { env } from "app/config/env"

export const getProducts = async (id?: string): Promise <ProductType[]> => {
    try {
      const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all

      const response = await fetch(apiUrl, {
        headers: new Headers({
          'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || ""
        }),
        next: {
          revalidate: 60
        }
      })
      const { products } = await response.json()

      const transformedProducts: ProductType[] = products.map((product:any) =>{
        return {
          id: product.id,
          gql_id: product.variants[0].admin_graphql_api_id,
          title: product.title,
          description: product.body_html,
          price: product.variants[0].price,
          image: product.images[0].src,
          quantity: product.variants[0].inventory_quantity,
          handle: product.handle,
          tags: product.tags,
        }
      })
      return transformedProducts as ProductType[]
    } catch (error) {
      throw error
    }
  }

  export const getMainProducts = async () => {
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
      }),
      next: {
        revalidate: 10
      }
     /* next: {
      tags: ['main-products']
     } */
    })
  
    const {products} = await response.json()
  
    return products
  }