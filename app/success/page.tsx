export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="max-w-lg text-center">

        <h1 className="text-5xl font-bold text-green-600 mb-4">
          Thank You 🎉
        </h1>

        <p className="text-xl text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>

        <a
          href="/"
          className="inline-block bg-[#ea9200] text-white px-8 py-4 rounded-2xl font-semibold"
        >
          Continue Shopping
        </a>

      </div>
    </div>
  );
}