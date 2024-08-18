import { getUser } from '@/actions/user'
import styles from '@styles/page.module.scss'

export default async function ProfilePage() {
  const user = await getUser()

  return (
    <main className={styles.main}>
      <p>Hello {user.email}</p>
    </main>
  )
}
