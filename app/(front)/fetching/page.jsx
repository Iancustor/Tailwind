import Categories from "@/components/Categories";
import getData from "@/utils/getData";
import React from "react";

export default async function page() {
  const categories = await getData(
    "https://api.escuelajs.co/api/v1/categories"
  );
  console.log(categories);
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}
