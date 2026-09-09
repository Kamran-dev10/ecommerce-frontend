"use client";

import { BsCart3 } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { useState } from "react";

import { Breadcrumb } from "./breadcrumb";
import QuantityCounter from "./QuantityCounter";

function ProductDetaile(props: any) {
    const stock = props.product.stock ?? 0;

    const router = useRouter();

    const product = props.product;

    // Backend image URL
    const imageUrl = product.image
        ? `https://ecommerce-backend-ecommerse.up.railway.app${product.image}`
        : "";

    const [selectedImage, setSelectedImage] = useState(imageUrl);

    const addToCart = () => {
        let cart = localStorage.getItem("cart");

        let items = cart ? JSON.parse(cart) : [];

        const existingItem = items.find(
            (item: any) =>
                (item._id || item.id) === (product._id || product.id)
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            items.push({
                ...product,
                quantity: 1,
            });
        }

        localStorage.setItem("cart", JSON.stringify(items));

        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">

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
                        label: "Household",
                        href: "/collections/household",
                    },
                    {
                        label: product.name,
                    },
                ]}
            />

            <div className="grid md:grid-cols-2 gap-12 mt-10">

                {/* Product Image */}
                <div>
                    <div className="bg-[#f8f8f8] rounded-3xl p-3">

                        {selectedImage ? (
                            <img
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-[500px] object-cover"
                            />
                        ) : (
                            <div className="w-full h-[500px] flex items-center justify-center text-gray-500">
                                No Image Available
                            </div>
                        )}

                    </div>

                    {/* Gallery */}
                    <div className="flex gap-4 mt-4">

                        {(product.gallery || []).map(
                            (img: string, index: number) => {

                                const galleryImage = img.startsWith("http")
                                    ? img
                                    : `https://ecommerce-backend-ecommerse.up.railway.app${img}`;

                                return (
                                    <img
                                        key={index}
                                        onClick={() => {
                                            setSelectedImage(galleryImage);
                                        }}
                                        src={galleryImage}
                                        alt="Product"
                                        className="w-[100px] h-[100px] object-cover rounded-xl cursor-pointer"
                                    />
                                );
                            }
                        )}

                    </div>
                </div>

                <div className="flex flex-col gap-6">

                    {/* Category */}
                    <p className="text-[#0aa06e] text-lg font-semibold">
                        Household
                    </p>

                    {/* Product Name */}
                    <h1 className="text-[45px] leading-[40px] font-bold text-[#0b2239]">
                        {product.name}
                    </h1>

                    {/* Price Section */}
                    <div className="flex items-center gap-4 flex-wrap">

                        <span className="text-[#0aa06e] text-[40px] font-bold">
                            Rs. {product.price}
                        </span>

                        {product.oldPrice && (
                            <span className="text-gray-400 text-[24px] line-through font-semibold">
                                Rs. {product.oldPrice}
                            </span>
                        )}

                        {product.discount && (
                            <span className="bg-[#e58b0d] text-white px-4 py-2 rounded-full text-lg font-semibold">
                                {product.discount}
                            </span>
                        )}

                    </div>

                    {/* Product Details Heading */}
                    <div className="flex items-center gap-3 mt-4">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-[#0aa06e]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20 7l-8-4-8 4m16 0v10l-8 4m8-14l-8 4m0 10L4 17V7m8 4L4 7m8 4l8-4"
                            />
                        </svg>

                        <h2 className="text-[30px] font-bold text-[#0b2239]">
                            Product Details
                        </h2>

                    </div>

                    {/* Description Box */}
                    <div className="border border-gray-200 rounded-[30px] p-8">

                        <p className="text-[20px] leading-[42px] text-[#607d8b]">

                            <span className="font-bold text-[#0b2239]">
                                Description:
                            </span>{" "}

                            {product.description || "No description available."}

                        </p>

                    </div>

                </div>

            </div>

            {/* Stock */}
            <p className="mt-6 flex items-center gap-2 font-semibold">

                <span className="w-3 h-3 bg-green-600 rounded-full inline-block"></span>

                <span className="text-green-700 font-bold">
                    In Stock
                </span>

                <span className="text-gray-500">
                    ({stock} available)
                </span>

            </p>

            {/* Price */}
            <div className="flex items-center gap-4 flex-wrap">

                <span className="text-[#0aa06e] text-[40px] font-bold">
                    Rs. {product.price}
                </span>

                {product.oldPrice && (
                    <span className="text-gray-400 text-[24px] line-through font-semibold">
                        Rs. {product.oldPrice}
                    </span>
                )}

                {product.discount && (
                    <span className="bg-[#e58b0d] text-white px-4 py-2 rounded-full text-lg font-semibold">
                        {product.discount}
                    </span>
                )}

            </div>

            {/* Cart Buttons */}
            <div className="flex items-center gap-4 mt-8">

                <QuantityCounter
                    id={product._id || product.id}
                    quantity={1}
                    func={() => window.dispatchEvent(new Event("cartUpdated"))}
                />
                <button
                    onClick={addToCart}
                    className="w-[413px] h-[54px] bg-[#e58b0d] hover:bg-[#d17d08] text-white rounded-xl flex items-center justify-center gap-2 text-lg font-semibold"
                >
                    <BsCart3 size={24} />
                    Add to Cart
                </button>

            </div>

            {/* Order Now */}
            <div className="gap-4 mt-8">

                <button
                    onClick={() => {
                        addToCart();
                        router.push("/cart");
                    }}
                    className="w-[595px] h-[35px] bg-[#e58b0d] hover:bg-[#d17d08] text-white rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
                >
                    <BsLightningCharge />
                    Order Now
                </button>

            </div>

            {/* Reviews */}
            <div className="mt-10 border-t pt-8">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <div>

                        <div className="flex items-center gap-2">

                            <MessageSquare size={22} />

                            <h2 className="text-3xl font-bold">
                                Reviews (2)
                            </h2>

                        </div>

                        <div className="flex items-center gap-2 mt-2">

                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill="#f59e0b"
                                    color="#f59e0b"
                                />
                            ))}

                            <span className="text-gray-600 font-medium">
                                5.0 out of 5
                            </span>

                        </div>

                    </div>

                    <button className="bg-green-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-700">
                        Write a Review
                    </button>

                </div>

                {/* Review Card 1 */}
                <div className="bg-white rounded-2xl shadow-sm p-5 mt-8">

                    <div className="flex justify-between">

                        <div className="flex gap-4">

                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                                H
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    Hussain
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    14/03/2026
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-1">

                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill="#f59e0b"
                                    color="#f59e0b"
                                />
                            ))}

                        </div>

                    </div>

                </div>

                {/* Review Card 2 */}
                <div className="bg-white rounded-2xl shadow-sm p-5 mt-5">

                    <div className="flex justify-between">

                        <div className="flex gap-4">

                            <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                                I
                            </div>

                            <div>

                                <h3 className="font-bold text-lg">
                                    ibad
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    02/03/2026
                                </p>

                                <p className="mt-3 text-gray-700">
                                    best product
                                </p>

                            </div>

                        </div>

                        <div className="flex gap-1">

                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star
                                    key={i}
                                    size={18}
                                    fill="#f59e0b"
                                    color="#f59e0b"
                                />
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ProductDetaile;