"use client"
import { Breadcrumb } from "../../components/breadcrumb";
import Link from "next/link";

export default function CollectionsPage() {

    return (

        <>

            <section className="py-16 bg-[#f5f5f5] min-h-screen">

                <div className="max-w-7xl mx-auto px-5">

                    <Breadcrumb currentPage="Collections" />

                    <h1 className="text-4xl text-center font-bold mb-3">

                        All Collections

                    </h1>

                    <p className="text-gray-500 text-center font-bold text-md">

                        Browse our complete range of household essentials

                    </p>

                </div>

                {/* Collection Cards */}
                <div className="max-w-7xl mx-auto px-5 mt-12 flex gap-8 flex-wrap">

                    {/* Card 1 */}
                    <div className="relative w-[320px] h-[215px] rounded-[20px] overflow-hidden cursor-pointer group">

                        <img
                            src="https://azearn.com/uploadspicghr/1770382341_2026_02_04_d6941fad1476614898b2e1c7f21cbe3a%20(1).png"
                            alt="Hair Dye Shampoo"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/35"></div>

                        <div className="absolute left-5 bottom-5 z-10 text-white">

                            <h2 className="text-[32px] font-bold leading-tight mb-2">

                                Hair Dye Shampoo

                            </h2>

                            <Link
                                href="/collections/Shampoo"
                                className="inline-flex items-center gap-2 text-yellow-400 text-lg font-semibold transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-300"
                            >

                                Explore
                                <span>➜</span>

                            </Link>
                        </div>

                    </div>

                    {/* Card 2 */}
                    <div className="relative w-[320px] h-[215px] rounded-[20px] overflow-hidden cursor-pointer group">

                        <img
                            src="https://images.unsplash.com/photo-1556911220-bff31c812dba"
                            alt="Household"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-black/35"></div>

                        <div className="absolute left-5 bottom-5 z-10 text-white">

                            <h2 className="text-[32px] font-bold leading-tight mb-2">

                                Household

                            </h2>

                            <Link
                                href="/collections/household"
                                className="inline-flex items-center gap-2 text-yellow-400 text-lg font-semibold transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-300"
                            >

                                Explore
                                <span>➜</span>

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );
}