import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import CategoryCard from "./CategoryCard";

function Categories({ categories }) {
  return (
    <div>
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-3xl font-medium">Popular Categories</h2>
          <p className="text-base">Choose from wide variety of items</p>
        </div>
        <Link
          href="#"
          className="flex items-center gap-2 text-gray-400 hover:text-gray-900 duration-300 transition-all"
        >
          <span className="">All Categories</span>
          <ChevronRight />
        </Link>
      </div>
      {/* CATEGORIES */}
      <div className="py-8 gap-4 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2">
        {/* Category card */}
        {categories.map((category, i) => {
          return <CategoryCard category={category} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Categories;
