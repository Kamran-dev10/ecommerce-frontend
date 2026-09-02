"use client";

import { Breadcrumb } from "../../components/breadcrumb";
import { ProductsSection } from "../../components/productmap";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();

        console.log("PRODUCTS FROM API:", data);

        setProducts(data.products);
      } catch (error) {
        console.error("PRODUCTS ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold">
          Loading Products...
        </h1>
      </div>
    );
  }

  return (
    <>
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-5">

          <Breadcrumb currentPage="Products" />

          <h2 className="text-5xl font-light mb-2">
            <span>
              All Products
            </span>
          </h2>

          <h1 className="text-lg text-gray-500 mb-10">
            {filteredProducts.length} Products Found
          </h1>

          <div>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-[350px] h-[50px] px-5 rounded-2xl border border-gray-300 outline-none focus:border-black"
            />
          </div>

          <ProductsSection products={filteredProducts} />

        </div>

      </section>
    </>
  );
}