'use server'
import { User } from '@supabase/supabase-js'
import { createClient } from '@utils/supabase/server'

export async function getUser(): Promise<User> {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (!data.user || error) {
    throw new Error('User not found')
  }

  return data.user
}
