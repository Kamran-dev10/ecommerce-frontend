"use client";

import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string | number;
  image?: string;
};

type ProductsSectionProps = {
  products: Product[];
};

export const ProductsSection = ({
  products,
}: ProductsSectionProps) => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >

              {/* Product Image */}
              <div className="relative bg-gray-100 p-5">

                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-orange-500 text-white font-semibold px-3 py-1 rounded-full">
                    {product.discount}
                  </span>
                )}

                {/* Product Image */}
                <img
                  src={product.image || "/placeholder.png"}
                  alt={product.name}
                  className="w-full h-64 object-contain"
                />

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-4">

                  <button
                    className="flex-1 bg-gray-100 hover:bg-gray-200 transition rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
                  >
                    👁 View
                  </button>

                  <button
                    className="bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-3 rounded-xl"
                  >
                    🛒
                  </button>

                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">

                <h2 className="text-lg font-semibold mb-3">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mb-5">

                  <span className="text-2xl font-bold text-green-600">
                    Rs. {product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      Rs. {product.oldPrice}
                    </span>
                  )}

                </div>

                <Link
                  href="/cart"
                  className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-semibold flex items-center justify-center"
                >
                  ⚡ Order Now
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};