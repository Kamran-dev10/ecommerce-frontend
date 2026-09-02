"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Truck,
  Shield,
  HeadphonesIcon,
} from "lucide-react";

export const HeroSection = () => {
  return (
    <>

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">

          <img
            src="//buysahi.com/cdn/shop/files/ChatGPT_Image_Aug_18_2026_03_30_26_PM.png"
            alt="Store Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">

          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <motion.span
              className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6"
            >
              Step into the world of Allura Hub
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Discover Amazing Products
            </motion.h1>

            <motion.p
              className="text-lg text-gray-200 mb-8 max-w-xl"
            >
              Premium quality products with Cash on Delivery
              available all over Pakistan.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4">

              <Link href="/products">

                <button className="bg-white text-black px-8 h-14 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition">

                  Shop Now

                  <ArrowRight className="w-5 h-5" />

                </button>

              </Link>

              <Link href="/collections">

                <button className="border border-white text-white px-8 h-14 rounded-lg font-semibold hover:bg-white hover:text-black transition">

                  View Collections

                </button>

              </Link>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* Features Section */}
      <motion.section
        className="py-14 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center">

                <Truck className="w-7 h-7" />

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Delivery
                </h3>

                <p className="text-gray-400">
                  All Over Pakistan
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center">

                <Shield className="w-7 h-7" />

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  Cash on Delivery
                </h3>

                <p className="text-gray-400">
                  Pay when you receive
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center">

                <HeadphonesIcon className="w-7 h-7" />

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  24/7 Support
                </h3>

                <p className="text-gray-400">
                  We are here to help
                </p>

              </div>

            </div>

          </div>

        </div>

      </motion.section>


    </>
  );
};