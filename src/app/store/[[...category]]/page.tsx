import { log } from "console";

interface CategoryProps {
    params: {
        categories: string[]
        searchParams?: string
    }
}

export default function Category(props: CategoryProps){
    
    const { categories } = props.params

    return (
        <h1>Categoria dinamica: { categories }</h1>
    )
}