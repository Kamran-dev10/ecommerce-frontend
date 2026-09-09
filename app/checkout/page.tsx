"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {

    const router = useRouter();

    const [error, setError] = useState("");

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");

    const placeOrder = () => {

        if (!name || !phone || !address || !city) {

            setError("Please fill all fields");

            return;
        }

        setError("");

        const order = {
            name,
            phone,
            address,
            city,
            date: new Date(),
        };

        localStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );

        localStorage.removeItem("cart");

        router.push("/success");
    };
    const handleStripeCheckout = async () => {

        try {

            const cartItems = JSON.parse(
                localStorage.getItem("cart") || "[]"
            );

            if (!cartItems.length) {
                setError("Your cart is empty");
                return;
            }

            const items = cartItems.map((item: any) => ({
                price_data: {
                    currency: "pkr",
                    product_data: {
                        name: item.name,
                        images: item.image ? [item.image] : [],
                    },
                    unit_amount: Math.round(Number(item.price) * 100),
                },
                quantity: Number(item.quantity || 1),
            }));
            const response = await fetch(
                "https://ecommerce-backend-ecommerse.up.railway.app/api/create-checkout-session",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        items,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {

                console.error(
                    "Stripe Error:",
                    data
                );

                setError(
                    data.error ||
                    "Unable to start Stripe payment"
                );

                return;
            }

            if (data.url) {

                window.location.href = data.url;

            } else {

                setError(
                    "Stripe checkout URL not received"
                );

            }

        } catch (error) {

            console.error(
                "Stripe Checkout Error:",
                error
            );

            setError(
                "Unable to start Stripe checkout"
            );
        }
    };

    return (

        <div className="max-w-3xl mx-auto px-5 py-10">

            <h1 className="text-4xl font-bold mb-8">
                Checkout
            </h1>

            <div className="space-y-5">

                {error && (
                    <div className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl">
                        {error}
                    </div>
                )}

                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) =>
                        setName(e.target.value)
                    }
                    className="w-full h-[55px] border rounded-xl px-4"
                />

                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) =>
                        setPhone(e.target.value)
                    }
                    className="w-full h-[55px] border rounded-xl px-4"
                />

                <textarea
                    placeholder="Address"
                    value={address}
                    onChange={(e) =>
                        setAddress(e.target.value)
                    }
                    className="w-full border rounded-xl px-4 py-3"
                    rows={4}
                />

                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) =>
                        setCity(e.target.value)
                    }
                    className="w-full h-[55px] border rounded-xl px-4"
                />

                <button
                    onClick={placeOrder}
                    className="w-full h-[60px] bg-[#ea9200] hover:bg-[#d98300] text-white rounded-2xl font-semibold text-lg transition"
                >
                    🚚 Cash On Delivery
                </button>
                <button
                    onClick={handleStripeCheckout}
                    className="w-full h-[60px] bg-black hover:bg-gray-800 text-white rounded-2xl font-semibold text-lg transition"
                >
                    💳 Pay with Stripe
                </button>

            </div>

        </div>
    );
}