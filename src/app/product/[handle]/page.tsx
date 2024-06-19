import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";
import { title } from "process";

interface ProductPageProps{
    searchParams:{
        id: string
    }
}

/* Ejemplo para generar la metadata para products */
export async function generateMetadata({searchParams}: ProductPageProps){
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    return {
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph:{
            title: product.title,
            images: [product.image]
        }
    }
}

export default async function ProductPage({searchParams}: ProductPageProps){
    const id = searchParams.id
    const products = await getProducts(id)
    const product = products[0]

    if (!product){
        redirect('/store')
    }
    
    return(
        <ProductView product={product}/>
    )
}