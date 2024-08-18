import { getUser } from '@actions/user'
import LinkButton from '@components/LinkButton/LinkButton'
import styles from '@styles/page.module.scss'
import { ROUTES } from '@utils/appRoutes'

export default async function Home() {
  const user = await getUser().catch(() => null)

  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Welcome to SupaNotes</h1>
        <p className={styles.description}>
          An anonymous note-taking and sharing app
        </p>

        {user ? (
          <p>
            <LinkButton href={ROUTES.NOTES}>Notes</LinkButton>
          </p>
        ) : (
          <p>
            <LinkButton href={ROUTES.LOGIN}>Log In</LinkButton>
          </p>
        )}
      </div>
    </main>
  )
}
