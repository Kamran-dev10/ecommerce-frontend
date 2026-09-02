"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>

            <Link
              href="/"
              className="flex items-center gap-3 mb-4"
            >

              <img
                src="https://azearn.com/uploadspicghr/1770266198_banner1.png"
                alt="Allura Hub"
                className="w-12 h-12 rounded-full object-cover"
              />

              <h2 className="text-2xl font-bold">
                Allura Hub
              </h2>

            </Link>

            <p className="text-gray-300 leading-7">
              Pakistan's premier destination for quality products.
              Cash on Delivery available all over Pakistan.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="hover:text-gray-300 transition"
              >
                Home
              </Link>

              <Link
                href="/products"
                className="hover:text-gray-300 transition"
              >
                Products
              </Link>

              <Link
                href="/collections"
                className="hover:text-gray-300 transition"
              >
                Collections
              </Link>

              <Link
                href="/cart"
                className="hover:text-gray-300 transition"
              >
                Cart
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-4">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+92 3485641184</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>allurahub2@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>All Over Pakistan</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          <p>
            © {new Date().getFullYear()} Allura Hub.
            All rights reserved.
          </p>

          <p className="mt-2 text-sm">
            Founded by Tayab Malik
          </p>

          <a
            href="https://www.allurahub.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 hover:text-white"
          >
            www.allurahub.online
          </a>

        </div>

      </div>

    </footer>
  );
};