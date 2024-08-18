'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { ROUTES } from '@utils/appRoutes'
import { createClient } from '@utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect(ROUTES.ERROR)
  }

  revalidatePath(ROUTES.HOME, 'layout')
  redirect(ROUTES.HOME)
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect(ROUTES.ERROR)
  }

  revalidatePath(ROUTES.HOME, 'layout')
  redirect(ROUTES.HOME)
}
