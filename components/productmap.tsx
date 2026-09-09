"use client";

import { useRouter } from "next/navigation";
import { addToCart as addProductToCart } from "@/services/cartService";

type ProductsSectionProps = {
  products: any[];
};

export const ProductsSection = ({
  products,
}: ProductsSectionProps) => {

  const router = useRouter();

  // =========================
  // ADD TO CART
  // =========================

  const addToCart = async (product: any) => {
    try {
      const productId = product._id || product.id;

      if (!productId) {
        console.error(
          "Product ID missing:",
          product
        );
        return;
      }

      console.log(
        "ADDING PRODUCT:",
        productId
      );

      // =========================
      // 1. ADD TO BACKEND CART
      // =========================

      const response =
        await addProductToCart(
          productId,
          1
        );

      console.log(
        "CART RESPONSE:",
        response
      );

      // =========================
      // 2. LOCAL STORAGE
      // =========================

      const existingCart =
        localStorage.getItem("cart");

      let cart = existingCart
        ? JSON.parse(existingCart)
        : [];

      const existingProduct =
        cart.find(
          (item: any) =>
            (item._id || item.id) ===
            productId
        );

      if (existingProduct) {

        existingProduct.quantity =
          (existingProduct.quantity || 1) +
          1;

      } else {

        cart.push({
          ...product,
          _id: productId,
          quantity: 1,
        });

      }

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

      // =========================
      // UPDATE CART ICON
      // =========================

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      console.log(
        "LOCAL CART:",
        JSON.parse(
          localStorage.getItem(
            "cart"
          ) || "[]"
        )
      );

    } catch (error) {

      console.error(
        "ADD TO CART ERROR:",
        error
      );

    }
  };


  return (

    <section className="py-16 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {products.map(
            (product, index) => (

              <div
                key={
                  product._id ||
                  product.id ||
                  index
                }
                className="group bg-white rounded-[18px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* =========================
                    PRODUCT IMAGE
                ========================= */}

                <div className="relative overflow-hidden">

                  {/* Discount Badge */}

                  <span className="absolute top-4 left-4 z-20 bg-[#ea9200] text-white text-[11px] font-semibold px-2.5 py-[3px] rounded-full shadow-md">

                    {product.discount}

                  </span>


                  {/* Image */}

                  <div className="overflow-hidden h-[240px] bg-[#f8f8f8]">

                    <img
                      src={
                        product.image
                          ? product.image.startsWith("http")
                            ? product.image
                            : `https://ecommerce-backend-ecommerse.up.railway.app${product.image}`
                          : "/placeholder.png"
                      }
                      alt={product.name || "Product"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                </div>


                {/* =========================
                    HOVER BUTTONS
                ========================= */}

                <div className="absolute bottom-47 left-2 right-2 flex items-center gap-2">

                  {/* VIEW */}

                  <button
                    onClick={() => {

                      const productId =
                        product._id ||
                        product.id;

                      if (!productId) {

                        console.error(
                          "Product ID missing:",
                          product
                        );

                        return;
                      }

                      router.push(
                        `/product/${productId}`
                      );

                    }}
                    className="flex-1 bg-gray-100 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-xl py-3 font-semibold flex items-center justify-center gap-2"
                  >

                    👁 View

                  </button>


                  {/* ADD TO CART */}

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="bg-orange-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white px-4 py-3 rounded-xl"
                  >

                    🛒

                  </button>

                </div>


                {/* =========================
                    PRODUCT CONTENT
                ========================= */}

                <div className="p-4">

                  {/* Product Name */}

                  <h3 className="text-[17px] leading-[24px] font-medium text-[#1a1a1a] mb-0 line-clamp-2 min-h-[48px]">

                    {product.name}

                  </h3>


                  {/* Prices */}

                  <div className="flex items-center gap-2 mb-5 flex-wrap">

                    <span className="text-[#00a86b] text-[22px] font-bold">

                      Rs.{" "}
                      {product.price}

                    </span>


                    {product.oldPrice && (

                      <span className="text-[#9b9b9b] text-[15px] line-through">

                        Rs.
                        {product.oldPrice}

                      </span>

                    )}

                  </div>


                  {/* ORDER NOW */}

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="w-full h-[46px] rounded-xl bg-[#ea9200] hover:bg-[#d98300] transition text-white text-[15px] font-semibold flex items-center justify-center gap-2 animate-pulse"
                  >

                    ⚡ Order Now

                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>

  );
};