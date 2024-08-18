'use client'

import { useCallback, useState } from 'react'
import Button from '@components/Button/Button'
import { signOut } from '@utils/auth'

const SignOutButton: React.FC = () => {
  const [loggingOut, setLoggingOut] = useState(false)

  const handleSignOut = useCallback(async () => {
    setLoggingOut(true)
    try {
      await signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    } finally {
      setLoggingOut(false)
    }
  }, [])

  return (
    <Button isSubmitting={loggingOut} onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
