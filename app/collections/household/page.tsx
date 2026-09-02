"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import ProductDetaile from "@/components/productdetal";
import { getProductById } from "@/services/productService";

export default function ProductDetail() {
  const params = useParams();

  const id = params.id as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);

        console.log("SINGLE PRODUCT:", data);

        setProduct(data.product);
      } catch (error) {
        console.error("PRODUCT ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold">
          Loading Product...
        </h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return <ProductDetaile product={product} />;
}