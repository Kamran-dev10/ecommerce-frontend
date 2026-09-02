"use client";

import { useState } from "react";
import { updateCartQuantity } from "@/services/cartService";

type QuantityCounterProps = {
  id: string;
  quantity: number;
  func: () => void;
};

export default function QuantityCounter({
  id,
  quantity: initialQuantity,
  func,
}: QuantityCounterProps) {

  const [quantity, setQuantity] =
    useState(initialQuantity || 1);


  const updateQuantity = async (
    newQuantity: number
  ) => {

    if (newQuantity < 1) {
      return;
    }

    try {

      console.log(
        "UPDATING PRODUCT:",
        id,
        "QUANTITY:",
        newQuantity
      );


      // =========================
      // BACKEND
      // =========================

      const response =
        await updateCartQuantity(
          id,
          newQuantity
        );

      console.log(
        "UPDATE CART RESPONSE:",
        response
      );


      // =========================
      // LOCAL STORAGE
      // =========================

      const data =
        localStorage.getItem("cart");

      if (data) {

        let items = JSON.parse(data);

        items = items.map(
          (item: any) => {

            const itemId =
              item._id || item.id;

            if (String(itemId) === String(id)) {

              return {
                ...item,
                quantity: newQuantity,
              };

            }

            return item;
          }
        );

        localStorage.setItem(
          "cart",
          JSON.stringify(items)
        );
      }


      // =========================
      // UPDATE UI
      // =========================

      setQuantity(newQuantity);

      func();

      window.dispatchEvent(
        new Event("cartUpdated")
      );

    } catch (error) {

      console.error(
        "UPDATE QUANTITY ERROR:",
        error
      );

    }
  };


  return (
    <div className="flex items-center bg-[#f4f1ea] rounded-2xl overflow-hidden w-fit">

      {/* MINUS */}

      <button
        onClick={() =>
          updateQuantity(quantity - 1)
        }
        disabled={quantity <= 1}
        className="w-[55px] h-[45px] text-2xl hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        -
      </button>


      {/* QUANTITY */}

      <span className="w-[55px] text-center text-lg font-semibold">
        {quantity}
      </span>


      {/* PLUS */}

      <button
        onClick={() =>
          updateQuantity(quantity + 1)
        }
        className="w-[55px] h-[45px] text-2xl hover:bg-gray-200"
      >
        +
      </button>

    </div>
  );
}