import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getAllCollections, getCollectionProducts } from "app/services/shopify/collections";
import { getProducts } from "app/services/shopify/products";
import { Collection } from "../../../../types";


interface CategoryProps {
    params: {
        category: string[]
        searchParams?: string
    }
}

export default async function Category(props: CategoryProps) {
    const { category } = props.params
    let products = []
    const collections = await getAllCollections()
    console.log(props.params)

    if (category?.length > 0) {
      const selectedCollectionId = collections.find((collection: Collection) => collection.handle === category[0]).id
      products = await getCollectionProducts(selectedCollectionId)
    }else {
      products = await getProducts()
    }
  
    return (
      <ProductsWrapper products={products} />
    )
  }