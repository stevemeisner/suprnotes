import LinkButton from '@components/LinkButton/LinkButton'
import styles from '@styles/page.module.scss'

export default function NotesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.title}>My Notes</h1>

        <p>
          <LinkButton href="/notes/new">New Note</LinkButton>
        </p>
      </div>
    </main>
  )
}
