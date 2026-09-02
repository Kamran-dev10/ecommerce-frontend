"use client"

import { Breadcrumb } from "../../components/breadcrumb";

import {
    RotateCcw,
    Clock,
    Truck,
    Shield,
    CheckCircle,
    Package,
} from "lucide-react";

export default function ReturnPolicyPage() {

    return (

        <section className="py-16 bg-[#f5f5f5] min-h-screen">

            <div className="max-w-7xl mx-auto px-5">

                {/* Breadcrumb */}
                <Breadcrumb
                    items={[
                        {
                            label: "Home",
                            href: "/",
                        },

                        {
                            label: "Return Policy",
                        },
                    ]}
                />

                {/* Hero Section */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">

                        <RotateCcw className="w-10 h-10 text-green-600" />

                    </div>

                    <h1 className="text-5xl font-bold text-black mb-5">

                        7-Day Easy Return Policy

                    </h1>

                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">

                        Shop with confidence! We offer hassle-free returns within 7 days of delivery.

                    </p>

                </div>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

                    {/* Card 1 */}
                    <div className="bg-white rounded-[24px] p-8 shadow-sm text-center">

                        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-2xl mb-5">

                            <Clock className="w-7 h-7 text-green-600" />

                        </div>

                        <h3 className="text-2xl font-bold mb-3">

                            7 Days Window

                        </h3>

                        <p className="text-gray-500 leading-8">

                            Return your order within 7 days of delivery for a full refund or exchange.

                        </p>

                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-[24px] p-8 shadow-sm text-center">

                        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-2xl mb-5">

                            <Truck className="w-7 h-7 text-green-600" />

                        </div>

                        <h3 className="text-2xl font-bold mb-3">

                            Free Shipping

                        </h3>

                        <p className="text-gray-500 leading-8">

                            Free shipping on all orders across Pakistan. No hidden charges!

                        </p>

                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-[24px] p-8 shadow-sm text-center">

                        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-2xl mb-5">

                            <Shield className="w-7 h-7 text-green-600" />

                        </div>

                        <h3 className="text-2xl font-bold mb-3">

                            Quality Guarantee

                        </h3>

                        <p className="text-gray-500 leading-8">

                            All products are quality checked before shipping to ensure your satisfaction.

                        </p>

                    </div>

                </div>

                {/* Policy Details */}
                <div className="bg-white rounded-[24px] p-8 shadow-sm mb-12">

                    <h2 className="text-3xl font-bold mb-8">

                        Return Policy Details

                    </h2>

                    <div className="space-y-10">

                        {/* Eligible */}
                        <div>

                            <h3 className="flex items-center gap-3 text-2xl font-bold mb-4">

                                <CheckCircle className="w-6 h-6 text-green-600" />

                                Eligible for Return

                            </h3>

                            <ul className="list-disc list-inside text-gray-500 space-y-2 leading-8 ml-4">

                                <li>Product received in damaged condition</li>
                                <li>Wrong product delivered</li>
                                <li>Product not as described</li>
                                <li>Missing items in order</li>
                                <li>Manufacturing defects</li>

                            </ul>

                        </div>

                        {/* Conditions */}
                        <div>

                            <h3 className="flex items-center gap-3 text-2xl font-bold mb-4">

                                <Package className="w-6 h-6 text-green-600" />

                                Return Conditions

                            </h3>

                            <ul className="list-disc list-inside text-gray-500 space-y-2 leading-8 ml-4">

                                <li>Product must be unused and in original packaging</li>
                                <li>All tags and labels must be intact</li>
                                <li>Original receipt or order confirmation required</li>
                                <li>Return request must be initiated within 7 days</li>

                            </ul>

                        </div>

                        {/* How To Return */}
                        <div>

                            <h3 className="flex items-center gap-3 text-2xl font-bold mb-4">

                                <RotateCcw className="w-6 h-6 text-green-600" />

                                How to Return

                            </h3>

                            <ol className="list-decimal list-inside text-gray-500 space-y-2 leading-8 ml-4">

                                <li>Contact us with your order number</li>
                                <li>Explain the reason for return</li>
                                <li>Wait for approval from our team</li>
                                <li>Ship the product back or arrange pickup</li>
                                <li>Receive your refund or exchange</li>

                            </ol>

                        </div>

                    </div>

                </div>

                {/* CTA */}
                <div className="text-center">

                    <p className="text-gray-500 text-lg mb-5">

                        Have questions about our return policy? We're here to help!

                    </p>

                    <a
                        href="https://wa.me/923166492005"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebc59] text-white rounded-2xl font-semibold transition"
                    >

                        Contact Us on WhatsApp

                    </a>

                </div>

            </div>

        </section>

    );
}