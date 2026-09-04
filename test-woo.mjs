import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const WOO_URL = process.env.WOOCOMMERCE_URL;
const CONSUMER_KEY = process.env.WOOCOMMERCE_KEY;
const CONSUMER_SECRET = process.env.WOOCOMMERCE_SECRET;

const authHeader = 'Basic ' + Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');

async function testWooCommerce() {
  console.log(`Fetching from: ${WOO_URL}/wp-json/wc/v3/products`);
  
  try {
    const res = await fetch(`${WOO_URL}/wp-json/wc/v3/products?per_page=1`, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      console.error('Failed!', await res.text());
    } else {
      const data = await res.json();
      console.log('Success! Found', data.length, 'products.');
      if (data.length > 0) {
        console.log('Sample product:', data[0].name);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

testWooCommerce();
