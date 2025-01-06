import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jjbecamvpybywlxbbtln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqYmVjYW12cHlieXdseGJidGxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNzgxMDQsImV4cCI6MjA1MTc1NDEwNH0.M73RzzBN3fyTp239XGTsEgeLL3bdnn7MvAZBd2FrBbU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
