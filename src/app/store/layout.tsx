import { getAllCollections } from "app/services/shopify/collections"
import Link from "next/link"
import { Collection } from "../../../types"
import styles from './StoreLayout.module.sass'

export default async function Layout({ children}: {children: React.ReactNode}){
    const collections: Collection[] = await getAllCollections()

    return(
        <main>
            <nav className={styles.Nav}>
                {
                    collections.map(collection => (
                        <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                            {collection.title}
                        </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}