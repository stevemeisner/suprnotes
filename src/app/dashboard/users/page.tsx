import Link from 'next/link'
import styles from '@styles/page.module.scss'

export default async function UsersPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Users</h1>

      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/users">Users</Link>
      </nav>

      <p>List of all users that I have permission to see and manage...</p>
    </main>
  )
}
