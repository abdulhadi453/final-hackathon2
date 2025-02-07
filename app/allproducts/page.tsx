"use client";

import { useEffect, useState } from "react";
import Filtersession from "@/Components/Filtersession";
import Sidebar from "@/Components/Sidebar";
import Pagination from "@/Components/Pagination";
import { allproducts } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const products = await sanityFetch({ query: allproducts });
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Filtersession />
      <div className="flex">
        <Sidebar />
        {/* Show loading or pass data */}
        {isLoading ? (
          <div className="flex-grow text-center">Loading...</div>
        ) : (
          <Pagination data={data} />
        )}
      </div>
    </div>
  );
}
