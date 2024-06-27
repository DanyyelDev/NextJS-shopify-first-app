import Link from "next/link"
import { cookies } from "next/headers"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import styles from './Header.module.sass'
import dynamic from "next/dynamic"

const NoSSRShoppingCard = dynamic(() => import('../ShoppingCart'), {ssr: false})

export const Header = async () => {
  const customer = await validateAccessToken()
  
  const cookiesStore = cookies()
  const token = cookiesStore.get('accessToken')

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName ? (<p>Hola! {customer.firstName}</p>) : (<Link href="/login">Login</Link>)}
        <NoSSRShoppingCard />
      </div>
    </header>)
}