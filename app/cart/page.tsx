"use client";

import { Breadcrumb } from "@/components/breadcrumb";
import QuantityCounter from "../../components/QuantityCounter";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type CartProduct = {
    _id?: string;
    id?: string;
    name: string;
    price: number;
    image?: string;
    quantity: number;
};

function ShoppingCart() {

    const router = useRouter();

    const [procart, setProcart] = useState<CartProduct[]>([]);
    const [total1, setTotal1] = useState(0);

    // =========================
    // LOAD CART
    // =========================

    useEffect(() => {
        getdatafromLocal();
    }, []);

    const getdatafromLocal = () => {

        const data = localStorage.getItem("cart");

        if (!data) {
            setProcart([]);
            setTotal1(0);
            return;
        }

        try {

            const items: CartProduct[] = JSON.parse(data);

            let totalprice = 0;

            items.forEach((item) => {

                totalprice +=
                    Number(item.price || 0) *
                    Number(item.quantity || 1);

            });

            setProcart(items);
            setTotal1(totalprice);

        } catch (error) {

            console.error("CART ERROR:", error);

            localStorage.removeItem("cart");

            setProcart([]);
            setTotal1(0);
        }
    };


    // =========================
    // DELETE PRODUCT
    // =========================

    const deletedatabyid = (id: string) => {

        const data = localStorage.getItem("cart");

        if (!data) return;

        try {

            const datatemp: CartProduct[] =
                JSON.parse(data);

            const temp = datatemp.filter((item) => {

                const itemId =
                    item._id || item.id;

                return itemId !== id;

            });

            localStorage.setItem(
                "cart",
                JSON.stringify(temp)
            );

            setProcart(temp);

            calculateTotal(temp);

            window.dispatchEvent(
                new Event("cartUpdated")
            );

        } catch (error) {

            console.error(
                "DELETE CART ERROR:",
                error
            );

        }
    };


    // =========================
    // CALCULATE TOTAL
    // =========================

    const calculateTotal = (
        items: CartProduct[]
    ) => {

        let total = 0;

        items.forEach((item) => {

            total +=
                Number(item.price || 0) *
                Number(item.quantity || 1);

        });

        setTotal1(total);
    };


    // =========================
    // STRIPE CHECKOUT
    // =========================

    const handleStripeCheckout = async () => {

        if (procart.length === 0) {

            alert("Your cart is empty.");

            return;
        }

        try {

            const items = procart.map(
                (item) => ({

                    price_data: {

                        currency: "pkr",

                        product_data: {
                            name: item.name,
                        },

                        unit_amount:
                            Number(item.price) * 100,
                    },

                    quantity:
                        Number(item.quantity || 1),

                })
            );

            const res = await fetch(
                "/api/create-checkout-session",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        items,
                    }),
                }
            );

            if (!res.ok) {

                throw new Error(
                    "Checkout request failed"
                );
            }

            const data = await res.json();

            if (data.url) {

                window.location.href =
                    data.url;

            } else {

                alert(
                    "Checkout URL was not received."
                );

            }

        } catch (error) {

            console.error(
                "CHECKOUT ERROR:",
                error
            );

            alert(
                "Unable to start checkout."
            );

        }
    };


    return (

        <div className="max-w-7xl mx-auto px-5 py-12">

            <Breadcrumb
                currentPage="Shopping Cart"
            />

            {/* PAGE TITLE */}

            <div className="mt-2 mb-8">

                <h2 className="text-5xl font-bold text-black">

                    Shopping Cart

                </h2>

            </div>


            <div className="flex flex-col lg:flex-row gap-8">


                {/* =========================
                    PRODUCTS
                ========================= */}

                <div className="flex-1 space-y-5">

                    {procart.length === 0 && (

                        <div className="bg-[#f5f5f5] rounded-[28px] p-10 text-center">

                            <p className="text-xl text-gray-500 mb-5">

                                Your cart is empty.

                            </p>

                            <button
                                onClick={() =>
                                    router.push(
                                        "/products"
                                    )
                                }
                                className="bg-[#ea9200] hover:bg-[#d98300] text-white px-6 py-3 rounded-xl font-semibold"
                            >

                                Continue Shopping

                            </button>

                        </div>

                    )}


                    {procart.map((e, index) => {

                        const productId =
                            e._id || e.id || String(index);

                        return (

                            <div
                                key={productId}
                                className="w-full max-w-[850px] min-h-[180px] bg-[#f5f5f5] rounded-[28px] px-6 py-5 flex items-center gap-6"
                            >

                                {/* PRODUCT IMAGE */}

                                <div className="w-[110px] h-[110px] bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">

                                    <img
                                        src={
                                            e.image
                                                ? e.image.startsWith("http")
                                                    ? e.image
                                                    : `https://ecommerce-backend-ecommerse.up.railway.app${e.image}`
                                                : "/placeholder.png"
                                        }
                                        alt={e.name || "Product"}
                                        className="w-full h-full object-contain"
                                    />
                                </div>


                                {/* PRODUCT INFORMATION */}

                                <div className="flex-1">

                                    <h2 className="text-2xl font-bold text-black mb-2">

                                        {e.name}

                                    </h2>


                                    <span className="text-green-600 text-2xl font-bold block mb-5">

                                        Rs.{" "}
                                        {e.price}

                                    </span>


                                    {/* QUANTITY */}

                                    <QuantityCounter
                                        func={getdatafromLocal}
                                        id={productId}
                                        quantity={e.quantity || 1}
                                    />

                                </div>


                                {/* DELETE */}

                                <button
                                    onClick={() =>
                                        deletedatabyid(
                                            productId
                                        )
                                    }
                                    className="text-red-500 text-2xl hover:text-red-600 transition"
                                >

                                    🗑

                                </button>

                            </div>

                        );

                    })}

                </div>


                {/* =========================
                    ORDER SUMMARY
                ========================= */}

                <div className="w-full lg:w-[380px]">

                    <div className="bg-white rounded-[30px] shadow-xl p-6">

                        <h2 className="text-[22px] font-bold text-[#1f2d2d] mb-5">

                            Order Summary

                        </h2>


                        <div className="space-y-4">


                            {/* SUBTOTAL */}

                            <div className="flex justify-between items-center">

                                <span className="text-[18px] font-semibold text-[#6f8b83]">

                                    Subtotal

                                </span>

                                <span className="text-[18px] font-bold text-[#6f8b83]">

                                    Rs.{" "}
                                    {total1}

                                </span>

                            </div>


                            {/* SHIPPING */}

                            <div className="flex justify-between items-center">

                                <span className="text-[16px] font-semibold text-[#6f8b83]">

                                    🚚 Shipping

                                </span>

                                <span className="text-[16px] font-bold text-[#6f8b83]">

                                    FREE

                                </span>

                            </div>


                            <p className="text-[#00a86b] text-[14px]">

                                ✓ Free shipping on all orders

                            </p>


                            {/* TOTAL */}

                            <div className="border-t border-gray-200 pt-4">

                                <div className="flex justify-between items-center">

                                    <span className="text-[20px] font-bold text-[#1f2d2d]">

                                        Total

                                    </span>

                                    <span className="text-[20px] font-bold text-[#00a86b]">

                                        Rs.{" "}
                                        {total1}

                                    </span>

                                </div>

                            </div>


                            {/* STRIPE */}

                            <button
                                onClick={
                                    handleStripeCheckout
                                }
                                disabled={
                                    procart.length ===
                                    0
                                }
                                className="w-full h-[60px] bg-[#ea9200] hover:bg-[#d98300] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-2xl font-semibold text-lg transition"
                            >

                                Proceed to checkout

                            </button>


                            {/* PAYPAL */}

                            <div className="border border-gray-200 rounded-3xl p-5 mt-4">

                                <div className="flex items-center gap-3 mb-4">

                                    <img
                                        src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                                        alt="PayPal"
                                        className="w-10 h-10"
                                    />

                                    <div>

                                        <h3 className="font-bold text-lg">

                                            PayPal

                                        </h3>

                                        <p className="text-sm text-gray-500">

                                            Secure online payment

                                        </p>

                                    </div>

                                </div>


                                <button
                                    onClick={() => {

                                        if (
                                            procart.length ===
                                            0
                                        ) {

                                            alert(
                                                "Your cart is empty."
                                            );

                                            return;
                                        }

                                        alert(
                                            "PayPal Demo Payment"
                                        );

                                        window.location.href =
                                            "/success";

                                    }}
                                    className="w-full h-[55px] bg-[#0070ba] hover:bg-[#005ea6] text-white rounded-2xl font-semibold"
                                >

                                    Continue with PayPal

                                </button>

                            </div>


                            {/* CASH ON DELIVERY */}

                            <button
                                onClick={() => {

                                    if (
                                        procart.length ===
                                        0
                                    ) {

                                        alert(
                                            "Your cart is empty."
                                        );

                                        return;
                                    }

                                    router.push(
                                        "/checkout"
                                    );

                                }}
                                className="w-full h-[60px] bg-green-600 hover:bg-green-700 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition mt-3"
                            >

                                🚚 Cash On Delivery

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ShoppingCart;