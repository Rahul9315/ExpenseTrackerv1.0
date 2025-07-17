//import { SupabaseClient } from "@supabase/supabase-js";
import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";

dotenv.config();
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey);