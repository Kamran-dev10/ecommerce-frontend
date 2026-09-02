import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(
    process.env.STRIPE_SECRET_KEY!
);
export async function POST(request: Request) {
    try {
        const { items } = await request.json();
        if (!items || !Array.isArray(items) || items.length === 0) {
            return NextResponse.json(
                {
                    error: "Cart is empty",
                },
                {
                    status: 400,
                }
            );
        }

        const lineItems = items.map((item: any) => ({
            price_data: {
                currency: "pkr",

                product_data: {
                    name: item.name,
                },

                unit_amount: Math.round(
                    Number(item.price) * 100
                ),
            },

            quantity: Number(item.quantity || 1),
        }));

        const session =
            await stripe.checkout.sessions.create({

                payment_method_types: ["card"],

                line_items: lineItems,

                mode: "payment",

                success_url:
                    "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",

                cancel_url:
                    "http://localhost:3000/checkout",

            });

        return NextResponse.json({
            url: session.url,
        });

    } catch (error) {

        console.error(
            "STRIPE CHECKOUT ERROR:",
            error
        );

        return NextResponse.json(
            {
                error:
                    error instanceof Error
                        ? error.message
                        : "Unable to create checkout session",
            },
            {
                status: 500,
            }
        );
    }
}