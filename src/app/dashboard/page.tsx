import Link from 'next/link'
import styles from '@styles/page.module.scss'

export default async function DashboardPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Dashboard</h1>

      <nav>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/users">Users</Link>
      </nav>

      <p>Some other cool stuff here. What we see should depend on our role.</p>
    </main>
  )
}
