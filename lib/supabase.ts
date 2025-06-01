import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please check your environment variables.')
}

// Create client with error handling
export const supabase = createClient(
  supabaseUrl || 'https://xusxvtkuktyuznqenjyw.supabase.co', 
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1c3h2dGt1a3R5dXpucWVuanl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1NTc2NjEsImV4cCI6MjA2MzEzMzY2MX0.SD9A-mAvUFB8ITDnPivKAN-n3kmzNqkRD8B-pcu6GOg',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      fetch: (...args) => {
        return fetch(...args).catch(err => {
          console.error('Network error during fetch:', err)
          throw new Error('Internetga ulanishda xatolik yuz berdi. Iltimos, internet aloqangizni tekshiring.')
        })
      }
    }
  }
)
