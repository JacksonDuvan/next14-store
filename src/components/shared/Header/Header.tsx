import Link from 'next/link'
import styles from './Header.module.css'
import { validateAccessToken, ICustomerName } from 'app/utils/auth/validateAccessToken'

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
      {customer?.firstName ? (<p>Hola! {customer?.firstName}</p>) : (<Link href="/login">Login</Link>)}
    </header>
  )
}