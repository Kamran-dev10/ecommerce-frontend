import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-black text-white rounded-3xl p-10 md:p-16 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of happy customers across Pakistan.
            Cash on Delivery available nationwide!
          </p>

          <Link href="/products">

            <button className="bg-white text-black px-10 h-14 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-200 transition">

              Start Shopping

              <ArrowRight className="w-5 h-5" />

            </button>

          </Link>

        </div>

      </div>

    </section>

  );
};