'use client'

import { useState } from 'react'
import Button from '@components/Button/Button'
import { signOut } from '@utils/auth'

const SignOutButton: React.FC = () => {
  const [loggingOut, setLoggingOut] = useState(false)

  return (
    <Button
      isSubmitting={loggingOut}
      onClick={() => {
        setLoggingOut(true)
        signOut()
      }}>
      Sign Out
    </Button>
  )
}

export default SignOutButton
