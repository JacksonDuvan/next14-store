import Link from 'next/link'
import styles from './Header.module.css'
import { cookies } from 'next/headers'

export const Header = () => {
  const cookiesStore = cookies()
  const token = cookiesStore.get('accessToken')?.value

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
      {token ? (<p>Hola!</p>) : (<Link href="/login">Login</Link>)}
    </header>
  )
}