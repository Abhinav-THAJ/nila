import { NextResponse } from "next/server";
import { createOrder } from "@/lib/woocommerce";

export async function POST(request: Request) {
  try {
    const { customer, cart } = await request.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const orderData = {
      payment_method: "cod",
      payment_method_title: "Cash on delivery",
      set_paid: false,
      billing: {
        first_name: customer.firstName,
        last_name: customer.lastName,
        address_1: customer.address,
        city: customer.city,
        state: customer.state,
        postcode: customer.zip,
        email: customer.email,
        phone: customer.phone
      },
      shipping: {
        first_name: customer.firstName,
        last_name: customer.lastName,
        address_1: customer.address,
        city: customer.city,
        state: customer.state,
        postcode: customer.zip,
      },
      line_items: cart.map((item: any) => ({
        product_id: item.id,
        quantity: item.quantity
      }))
    };

    // If WooCommerce keys are not configured, simulate success.
    if (!process.env.WOOCOMMERCE_URL || !process.env.WOOCOMMERCE_KEY) {
      console.log("Mock Order Created (WooCommerce API keys missing):", orderData);
      return NextResponse.json({ success: true, orderId: "MOCK-" + Math.floor(Math.random() * 10000) });
    }

    const result = await createOrder(orderData);
    return NextResponse.json({ success: true, orderId: result.id });
    
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
