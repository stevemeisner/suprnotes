import Link from 'next/link'
import styles from './LinkButton.module.scss'

type LinkButtonProps = {
  children: React.ReactNode
  href: string
}

export default function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link className={styles.linkButton} href={href}>
      {children}
    </Link>
  )
}
