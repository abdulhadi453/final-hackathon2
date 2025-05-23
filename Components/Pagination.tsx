"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  colors: string;
  material: string;
  imageUrl: string;
};

const ITEMS_PER_PAGE = 6;

export default function Products({ data }: { data: Product[] | null }) { // Allow null in data type
  const [currentPage, setCurrentPage] = useState(1);

  // Default to an empty array if data is null
  const safeData = data ?? [];

  const totalPages = Math.ceil(safeData.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentProducts = safeData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-[1000px] h-full flex flex-wrap gap-3 relative left-8">
      {currentProducts.map((val) => (
        <div key={val.id} className="relative w-[300px] flex-grow h-[533px]">
          <Link href={`allproducts/${val.id}`}>
            <div className="w-[348px] h-[185px] flex flex-grow absolute left-0 top-[348px]">
              <div className="flex flex-col justify-start items-start absolute left-0 top-[9px]">
                <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-[#9e3500]">
                  {val.material}
                </p>
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[3.34375px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-[#111]">
                    {val.title}
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                    {val.description}
                  </p>
                  <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                    {val.colors.length === 1
                      ? `${val.colors.length} Color`
                      : `${val.colors.length} Colors`}
                  </p>
                </div>
              </div>
              <p className="w-[132.42px] h-[17px] absolute left-0 top-[126px] text-[15px] font-medium text-left text-[#111]">
                MRP: ₹ {val.price}.00
              </p>
            </div>
            <Image
              className="w-[348px] h-[348px] absolute left-[-1px] top-[-1px]"
              src={val.imageUrl}
              alt="product image"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center w-full mb-6 mt-6 gap-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}