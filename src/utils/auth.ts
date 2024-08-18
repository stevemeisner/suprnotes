'use server'

import { redirect } from 'next/navigation'
import { ROUTES } from './appRoutes'
import { createClient } from './supabase/server'

export const signOut = async () => {
  const supabase = createClient()

  await supabase.auth.signOut()

  return redirect(ROUTES.HOME)
}
