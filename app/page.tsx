"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "../components/herosection";
import { ProductsSection } from "../components/productmap";
import { CTASection } from "../components/CTA";
import { getProducts } from "@/services/productService";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();

        console.log("API DATA:", data);

        setProducts(data.products);
      } catch (error) {
        console.error("API ERROR:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <HeroSection />

      <ProductsSection products={products} />

      <CTASection />
    </div>
  );
}