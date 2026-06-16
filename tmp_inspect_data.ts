import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

async function main() {
  const { data, error } = await supabase.from('puestas_a_punto_detalle').select('*').limit(5);
  if (error) {
    console.error('Error:', error);
  } else if (data && data.length > 0) {
    console.log('Sample Row Data:');
    console.log(JSON.stringify(data[0], null, 2));
  } else {
    console.log('No data found');
  }
}
main();
