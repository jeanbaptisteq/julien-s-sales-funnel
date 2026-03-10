import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://ucdywtbycmdqnkbzxxlt.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_mKYkw5tPqbbW6G0wfu8xsA_NESIQLgw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
