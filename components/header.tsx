"use client";
import CartIcon from "@/components/CartIcon";

import Link from "next/link";

import {
  ShoppingCart,
  Menu,
  X,
  Home,
  Package,
  Layers,
  RotateCcw,
  Search,
  User,
} from "lucide-react";

import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >

            <img
              src="https://azearn.com/uploadspicghr/1770266198_banner1.png"
              alt="Allura Hub"
              className="w-10 h-10 rounded-full object-cover"
            />

            <span className="text-2xl font-bold">
              Allura Hub
            </span>

          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

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
              href="/return-policy"
              className="hover:text-gray-300 transition"
            >
              Return Policy
            </Link>

            <Link
              href="/track-order"
              className="hover:text-gray-300 transition"
            >
              Track Order
            </Link>

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* User */}
            <Link href="/login">

              <button className="hover:text-gray-300 transition">
                <User className="w-5 h-5" />
              </button>

            </Link>

            {/* Cart */}
            <CartIcon />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
            >

              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}

            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (

          <nav className="md:hidden py-4 border-t border-gray-700">

            <div className="flex flex-col gap-3">

              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <Home className="w-5 h-5" />
                Home
              </Link>

              <Link
                href="/products"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <Package className="w-5 h-5" />
                Products
              </Link>

              <Link
                href="/collections"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <Layers className="w-5 h-5" />
                Collections
              </Link>

              <Link
                href="/return-policy"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <RotateCcw className="w-5 h-5" />
                Return Policy
              </Link>

              <Link
                href="/track-order"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                <Search className="w-5 h-5" />
                Track Order
              </Link>

            </div>

          </nav>
        )}

      </div>

    </header>
  );
};