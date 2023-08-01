"use client";

import { totalPrice } from "@/Redux/Slices/ShoppingSlice";
import Shop from "@/components/Shop";
import SingleShop from "@/components/SingleShop";
import React from "react";
import { useSelector } from "react-redux";

const Shopping = () => {
  const data = useSelector((state) => state.shop.shoppingCart);

  let total = 0;
  data.map((shop) => {
    return (total += shop.price);
  });

  return (
    <div className="w-[80%] mx-auto mt-[8rem]">
      <Shop />
      {data && <SingleShop />}

      <div className="bg-slate-700 w-[20rem] p-4 mb-[2rem] ml-auto rounded-md">
        <h1 className="text-2xl pb-2">Subtotal Prices</h1>
        <p>Total Price : ${total}</p>
        <button className="w-full text-center bg-blue-700 py-2 mt-6 hover:bg-blue-800 rounded-md">
          Process The Payment
        </button>
      </div>
    </div>
  );
};

export default Shopping;
