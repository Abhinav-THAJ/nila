export const WOO_URL = process.env.WOOCOMMERCE_URL;
export const CONSUMER_KEY = process.env.WOOCOMMERCE_KEY;
export const CONSUMER_SECRET = process.env.WOOCOMMERCE_SECRET;

export function getAuthHeader() {
  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    return null;
  }
  return 'Basic ' + Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
}

export async function getProducts(params: Record<string, string> = {}) {
  const authHeader = getAuthHeader();
  if (!WOO_URL || !authHeader) {
    console.warn("WooCommerce credentials missing. Returning mock products.");
    return null;
  }

  const url = new URL(`${WOO_URL}/wp-json/wc/v3/products`);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

  try {
    const res = await fetch(url.toString(), {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!res.ok) {
      console.error('Failed to fetch products from WooCommerce', await res.text());
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching WooCommerce products:", error);
    return null;
  }
}

export async function getProduct(id: string | number) {
  const authHeader = getAuthHeader();
  if (!WOO_URL || !authHeader) {
    return null;
  }

  try {
    const res = await fetch(`${WOO_URL}/wp-json/wc/v3/products/${id}`, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error(`Failed to fetch product ${id} from WooCommerce`, await res.text());
      return null;
    }

    return res.json();
  } catch (error) {
    console.error(`Error fetching WooCommerce product ${id}:`, error);
    return null;
  }
}

export async function getCategories() {
  const authHeader = getAuthHeader();
  if (!WOO_URL || !authHeader) {
    return null;
  }

  try {
    const res = await fetch(`${WOO_URL}/wp-json/wc/v3/products/categories?per_page=100`, {
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) {
      console.error('Failed to fetch categories from WooCommerce', await res.text());
      return null;
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching WooCommerce categories:', error);
    return null;
  }
}

export async function createOrder(orderData: any) {
  const authHeader = getAuthHeader();
  if (!WOO_URL || !authHeader) {
    throw new Error('WooCommerce API keys are missing. Cannot create order.');
  }

  const res = await fetch(`${WOO_URL}/wp-json/wc/v3/orders`, {
    method: 'POST',
    headers: {
      'Authorization': authHeader,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  });

  if (!res.ok) {
    console.error('Failed to create order', await res.text());
    throw new Error('Failed to create order in WooCommerce');
  }

  return res.json();
}
