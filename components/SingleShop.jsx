import { removeCard } from "@/Redux/Slices/ShoppingSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleShop = () => {
  const data = useSelector((state) => state.shop.shoppingCart);
  const dispatch = useDispatch(null);

  return (
    <div className="flex flex-col gap-4 my-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="flex items-center justify-between bg-slate-700 p-2 rounded-md">
          <div className="flex items-center gap-6">
            <img className="w-[6rem]" src={item.image_url} alt="image" />
            <div>
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          </div>
          <button
            onClick={() => dispatch(removeCard(item))}
            className="hover:opacity-75 text-[1.5rem]">
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
};

export default SingleShop;
