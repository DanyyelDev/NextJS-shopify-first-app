import { getAllCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'
import { Collection } from "../../../types"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections: Collection[] = await getAllCollections()

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections.map((collection) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                {collection.title}
              </Link>
            ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}