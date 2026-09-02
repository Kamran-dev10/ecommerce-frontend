"use client";
import { ProductsSection } from "@/components/productmap";
import { Breadcrumb } from "@/components/breadcrumb";

import products from "@/data/datproduct.json";

function Shampoo() {

    const filteredProducts = products.filter(
        (product) => product.category === "Hair"
    );


    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-12">
                <Breadcrumb
                    items={[
                        {
                            label: "Home",
                            href: "/",
                        },

                        {
                            label: "Collections",
                            href: "/collections",
                        },

                        {
                            label: "Hair Dye Shampoo",
                        },
                    ]}
                />
                <h1 className="text-5xl font-bold">

                    Hair Dye Shampoo

                </h1>
            </div>


            <ProductsSection products={filteredProducts} />
        </div>
    );
}

export default Shampoo;