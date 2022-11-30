import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database

const supabase_url = process.env.SUPABASE_URL
const supabase_anon_key = process.env.SUPABASE_ANON_KEY
export const supabase = createClient("https://rhgwlefcrgrtsmgrkodb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZ3dsZWZjcmdydHNtZ3Jrb2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3Njc0MTUsImV4cCI6MTk4NTM0MzQxNX0.0FheB400SeIuremTEfFf-kmmfLMW2yRbt0p6p0WxhlQ")