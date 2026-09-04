import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const WOO_URL = process.env.WOOCOMMERCE_URL;
const CONSUMER_KEY = process.env.WOOCOMMERCE_KEY;
const CONSUMER_SECRET = process.env.WOOCOMMERCE_SECRET;

const authHeader = 'Basic ' + Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');

async function fetchData() {
  try {
    const res = await fetch(`${WOO_URL}/wp-json/wc/v3/products?per_page=100`, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }
    });
    const products = await res.json();
    console.log(`Found ${products.length} products.`);
    
    const catsRes = await fetch(`${WOO_URL}/wp-json/wc/v3/products/categories?per_page=100`, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }
    });
    const categories = await catsRes.json();
    console.log(`Found ${categories.length} categories.`);
    console.log('Categories:', categories.map((c) => c.name).join(', '));
  } catch (err) {
    console.error('Error:', err);
  }
}

fetchData();
