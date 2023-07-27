import React from "react";

const SingleShop = () => {
  const data = [
    {
      id: 1,
      title: "Samsung Galaxy A51",
      price: "350",
      image_url: "https://procell.pe/wp-content/uploads/2020/10/a51.png",
    },
    {
      id: 2,
      title: "Samsung Galaxy A12",
      price: "150",
      image_url:
        "https://cdn.ycan.shop/stores/3b145e8182eb3d8cbdd6633fd0df4d38/products/mfc0KT7Cq53NqdCLRPwjTUp75zpoV2NLmNMXEG52.png",
    },
    {
      id: 3,
      title: "Samsung Galaxy S21",
      price: "450",
      image_url:
        "https://kontakt.az/wp-content/uploads/2022/01/Samsung-Galaxy-S21FE-5G-6128GB-SM-G990-Gray.png",
    },
  ];
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
          <button className="hover:opacity-75 text-[1.5rem]">🗑️</button>
        </div>
      ))}
    </div>
  );
};

export default SingleShop;
