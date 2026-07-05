export const ENVIRONMENT = {
    get supabaseUrl() {
        return process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    },
    get supabaseKey() {
        return process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";
    },
    get googleGenAIKey() {
        return process.env.GOOGLE_GEN_AI_API_KEY || "";
    }
};