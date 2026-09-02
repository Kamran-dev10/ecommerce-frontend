"use client";

import { Breadcrumb } from "../../components/breadcrumb";

import {
  Package,
  Search,
} from "lucide-react";

import { useState } from "react";

export default function TrackOrderPage() {

  const [orderNumber, setOrderNumber] = useState("");

  return (

    <section className="py-16 bg-[#f5f5f5] min-h-screen">

      <div className="max-w-5xl mx-auto px-5">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            {
              label: "Home",
              href: "/",
            },

            {
              label: "Track Order",
            },
          ]}
        />

        {/* Hero */}
        <div className="text-center mb-14">

          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">

            <Package className="w-10 h-10 text-green-600" />

          </div>

          <h1 className="text-5xl font-bold mb-5">

            Track Your Order

          </h1>

          <p className="text-xl text-gray-500">

            Enter your order number or phone number to check your order status

          </p>

        </div>

        {/* Search Box */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">

          {/* Input */}
          <div className="relative flex-1">

            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />

            <input
              type="text"
              placeholder="Order number (ORD-...) or phone number"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="w-full h-[65px] rounded-2xl border border-gray-200 bg-white pl-16 pr-5 text-lg outline-none focus:border-green-500"
            />

          </div>

          {/* Button */}
          <button className="h-[65px] px-10 rounded-2xl bg-green-600 hover:bg-green-700 transition text-white text-lg font-semibold shadow-md">

            Track

          </button>

        </div>

        {/* Help Box */}
        <div className="bg-white rounded-[28px] p-10 text-center shadow-sm">

          <h2 className="text-3xl font-semibold mb-4">

            Need help finding your order?

          </h2>

          <p className="text-gray-500 text-lg leading-8">

            You can find your order number in the confirmation message or email we sent you.

          </p>

        </div>

      </div>

    </section>

  );
}