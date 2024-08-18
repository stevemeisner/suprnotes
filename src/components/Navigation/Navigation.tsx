import Link from 'next/link'
import { getUser } from '@/actions/user'
import SignOutButton from '@components/SignOutButton/SignOutButton'
import { ROUTES } from '@utils/appRoutes'
import styles from './Navigation.module.scss'

export default async function Navigation() {
  const user = await getUser().catch(() => null)

  return (
    <nav className={styles.primary}>
      <ul>
        {user ? (
          <li>
            <SignOutButton />
          </li>
        ) : (
          <li>
            <Link href={ROUTES.LOGIN}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
