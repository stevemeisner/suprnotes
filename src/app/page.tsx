import LinkButton from '@components/LinkButton/LinkButton'
import styles from '@styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.title}>Welcome to SupaNotes</h1>
        <p className={styles.description}>
          An anonymous note-taking and sharing app
        </p>

        <p>
          <LinkButton href="/login">Log In</LinkButton>
        </p>
      </div>
    </main>
  )
}
