import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient("https://rhgwlefcrgrtsmgrkodb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZ3dsZWZjcmdydHNtZ3Jrb2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3ODU3NTIsImV4cCI6MTk4NTM2MTc1Mn0.R1AxBZ4viggfHzt3e_PuwXiDQOfl359x2jDxdur2Ero")