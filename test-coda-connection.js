// Test Coda API Connection
const fs = require('fs');
const path = require('path');

// Read .env.local file
const envPath = path.join(__dirname, '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');

// Parse environment variables
const envVars = {};
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length > 0) {
      envVars[key.trim()] = valueParts.join('=').trim();
    }
  }
});

const CODA_API_TOKEN = envVars.CODA_API_TOKEN;
const CODA_DOC_ID = envVars.CODA_DOC_ID;
const CODA_TABLE_ID = envVars.CODA_TABLE_ID;

console.log('🔍 Testing Coda API Connection...\n');
console.log('Environment Variables:');
console.log('- CODA_API_TOKEN:', CODA_API_TOKEN ? '✓ Found' : '✗ Missing');
console.log('- CODA_DOC_ID:', CODA_DOC_ID || '✗ Missing');
console.log('- CODA_TABLE_ID:', CODA_TABLE_ID || '✗ Missing');
console.log('');

if (!CODA_API_TOKEN || !CODA_DOC_ID || !CODA_TABLE_ID) {
  console.error('❌ Missing required credentials!');
  process.exit(1);
}

async function testConnection() {
  try {
    console.log('📡 Testing API connection...\n');
    
    // Test 1: Get document info
    console.log('Test 1: Fetching document info...');
    const docResponse = await fetch(
      `https://coda.io/apis/v1/docs/${CODA_DOC_ID}`,
      {
        headers: {
          'Authorization': `Bearer ${CODA_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (!docResponse.ok) {
      console.error(`❌ Failed to fetch document: ${docResponse.status} ${docResponse.statusText}`);
      const errorText = await docResponse.text();
      console.error('Response:', errorText);
      
      if (docResponse.status === 401) {
        console.error('\n💡 Your API token is invalid or expired.');
        console.error('   Get a new token from: https://coda.io/account');
      } else if (docResponse.status === 404) {
        console.error('\n💡 Document not found. Check your CODA_DOC_ID.');
        console.error('   The ID should come from the URL: https://coda.io/d/YourDoc_dABCDEF');
        console.error('   Extract the part after "_d": ABCDEF');
      }
      return;
    }
    
    const docData = await docResponse.json();
    console.log(`✓ Document found: "${docData.name}"`);
    console.log('');
    
    // Test 2: List all tables
    console.log('Test 2: Listing all tables in document...');
    const tablesResponse = await fetch(
      `https://coda.io/apis/v1/docs/${CODA_DOC_ID}/tables`,
      {
        headers: {
          'Authorization': `Bearer ${CODA_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (!tablesResponse.ok) {
      console.error(`❌ Failed to fetch tables: ${tablesResponse.status}`);
      return;
    }
    
    const tablesData = await tablesResponse.json();
    console.log(`✓ Found ${tablesData.items.length} table(s):\n`);
    
    tablesData.items.forEach((table, index) => {
      const isMatch = table.id === CODA_TABLE_ID || table.name === CODA_TABLE_ID;
      console.log(`   ${index + 1}. ${table.name}`);
      console.log(`      ID: ${table.id} ${isMatch ? '👈 THIS IS YOUR TABLE' : ''}`);
      console.log(`      Type: ${table.tableType}`);
      console.log('');
    });
    
    // Test 3: Fetch table data
    console.log(`Test 3: Fetching data from table "${CODA_TABLE_ID}"...`);
    const rowsResponse = await fetch(
      `https://coda.io/apis/v1/docs/${CODA_DOC_ID}/tables/${CODA_TABLE_ID}/rows?useColumnNames=true&limit=5`,
      {
        headers: {
          'Authorization': `Bearer ${CODA_API_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (!rowsResponse.ok) {
      console.error(`❌ Failed to fetch table rows: ${rowsResponse.status} ${rowsResponse.statusText}`);
      const errorText = await rowsResponse.text();
      console.error('Response:', errorText);
      
      if (rowsResponse.status === 404) {
        console.error('\n💡 Table not found! Your CODA_TABLE_ID might be incorrect.');
        console.error('   Please use one of the table IDs listed above.');
      }
      return;
    }
    
    const rowsData = await rowsResponse.json();
    console.log(`✓ Fetched ${rowsData.items.length} row(s)\n`);
    
    if (rowsData.items.length === 0) {
      console.warn('⚠️  Table is empty! Add some blog posts to your Coda table.');
      return;
    }
    
    // Show first row structure
    console.log('Sample row structure:');
    const firstRow = rowsData.items[0];
    console.log(JSON.stringify(firstRow, null, 2));
    console.log('');
    
    // Check for required columns
    console.log('Test 4: Checking required columns...');
    const requiredColumns = [
      'ID', 'Title', 'Slug', 'Description', 'Content',
      'Featured Image URL', 'Author Name', 'Status', 'Published Date'
    ];
    
    const values = firstRow.values;
    const foundColumns = Object.keys(values);
    const missingColumns = requiredColumns.filter(col => !foundColumns.includes(col));
    
    console.log('Found columns:', foundColumns.join(', '));
    console.log('');
    
    if (missingColumns.length > 0) {
      console.error('❌ Missing required columns:');
      missingColumns.forEach(col => console.error(`   - ${col}`));
      console.error('\n💡 Add these columns to your Coda table.');
      console.error('   See CODA_TABLE_TEMPLATE.md for the correct structure.');
    } else {
      console.log('✅ All required columns present!');
    }
    
    // Check status values
    console.log('');
    console.log('Test 5: Checking post status...');
    const statuses = rowsData.items.map(item => item.values.Status);
    const publishedCount = statuses.filter(s => s === 'Published' || s === 'published').length;
    
    console.log(`   ${statuses.length} total posts`);
    console.log(`   ${publishedCount} published posts`);
    
    if (publishedCount === 0) {
      console.warn('\n⚠️  No published posts found!');
      console.warn('   Make sure at least one post has Status = "Published"');
    }
    
    console.log('\n✅ All tests passed! Your Coda connection is working.');
    console.log('');
    console.log('📝 Next steps:');
    console.log('   1. Restart your dev server: npm run dev');
    console.log('   2. Visit http://localhost:3000/blog');
    console.log('   3. Your Coda posts should now appear!');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Stack:', error.stack);
  }
}

testConnection();
