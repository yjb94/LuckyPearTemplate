// eslint-disable-next-line import/no-internal-modules
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// FIXME: store keys in .env file
const supabaseUrl = 'https://byjbescksctzekxmfryk.supabase.co';
const supabaseApiKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5amJlc2Nrc2N0emVreG1mcnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MTE0MDIsImV4cCI6MjAzNzM4NzQwMn0.5xCSsTPFbGb9HgLrm0LPG8xkLEFsaLFqOoMkR510O6c';

export const supabase = createClient(supabaseUrl, supabaseApiKey);
