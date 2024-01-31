import Link from "next/link";
import React from "react";

function CategoryCard({ category }) {
  return (
    <Link
      href="#"
      className="border border-gray-100 shadow-2xl flex items-center flex-col justify-center py-6 px-4 rounded-md"
    >
      <img
        className="w-[100px] h-[100px] object-cover rounded-full"
        src={category.image}
        alt=""
      />
      <h2>{category.name}</h2>
    </Link>
  );
}

export default CategoryCard;
