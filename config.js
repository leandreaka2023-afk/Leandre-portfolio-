const SUPABASE_URL = "https://ajmwjbdihpjxjegmevhi.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_aSKXgq6HByAFcryyoKVrKA_PeR_G827";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

window.supabaseClient = supabaseClient;
