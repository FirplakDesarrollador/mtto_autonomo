import { supabaseTH } from './lib/supabaseTH';

async function listTables() {
    console.log('--- Checking for "personal" or "empleados" tables ---');
    
    const { data: d1, error: e1 } = await supabaseTH.from('personal').select('id, nombreCompleto').limit(1);
    if (!e1) {
        console.log('Table "personal" found and accessible.');
    } else {
        console.log('Table "personal" not found or error:', e1.message);
    }

    const { data: d2, error: e2 } = await supabaseTH.from('empleados').select('id, nombreCompleto').limit(1);
    if (!e2) {
        console.log('Table "empleados" found and accessible.');
    } else {
        console.log('Table "empleados" not found or error:', e2.message);
    }
}

listTables();
