import products from "@/data/datproduct.json";

export default function ProductsPage() {

  return (

    <section className="py-16 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading + Count */}
        <div className="flex items-center justify-between mb-10">

          <h1 className="text-3xl font-bold">
            Our Products
          </h1>

          <span className="text-gray-500 text-lg">
            {products.length} Items
          </span>

        </div>

        {/* Products */}

      </div>

    </section>

  );
}