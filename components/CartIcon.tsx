"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartIcon() {

    const [cartCount, setCartCount] = useState(0);

    const updateCart = () => {

        let data = localStorage.getItem("cart");

        if (data) {

            setCartCount(JSON.parse(data).length);

        } else {

            setCartCount(0);

        }
    };

    useEffect(() => {

        updateCart();

        const interval = setInterval(() => {

            updateCart();

        }, 300);

        return () => clearInterval(interval);

    }, []);

    return (

        <Link
            href="/cart"
            className="relative"
        >

            <div className="text-3xl">

                🛒

            </div>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

                {cartCount}

            </span>

        </Link>

    );
}