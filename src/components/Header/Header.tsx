import LogoLink from '@components/LogoLink/LogoLink'
import Navigation from '@components/Navigation/Navigation'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.primary}>
      <LogoLink />
      <Navigation />
    </header>
  )
}
