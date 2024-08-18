import cx from 'classnames'
import styles from './Button.module.scss'

type SubmitButtonProps = {
  children: React.ReactNode
  isSubmitting?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<SubmitButtonProps> = ({
  children,
  isSubmitting = false,
  onClick,
  type = 'submit',
}) => {
  const buttonStyles = cx(styles.button, {
    [styles['button--disabled']]: isSubmitting,
  })
  return (
    <button
      className={buttonStyles}
      disabled={isSubmitting}
      type={type}
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
