import { getUser } from '@/actions/user'
import LinkButton from '@components/LinkButton/LinkButton'
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
            <LinkButton href={ROUTES.LOGIN}>Login</LinkButton>
          </li>
        )}
      </ul>
    </nav>
  )
}
