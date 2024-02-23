import { createClient } from "@supabase/supabase-js";
import { Database } from "./schema";

export const supabaseClient = async (supabaseToken: string) => {
    const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY, {
        global: {headers: {Authorization: `Bearer ${supabaseToken}`}}
    })

    return supabase
}