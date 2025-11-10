import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iiexdvngfwdsxipybmdn.supabase.co'
const supabaseAnonKey = 'iiexdvngfwdsxipybmdn'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)