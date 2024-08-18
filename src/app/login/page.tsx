import LoginForm from '@components/LoginForm/LoginForm'
import styles from '@styles/page.module.scss'

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  )
}
