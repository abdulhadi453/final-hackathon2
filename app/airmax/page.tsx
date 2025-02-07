import { client } from '@/sanity/lib/client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

async function getData() {
  const dataFetch: Product[] = await client.fetch(`*[_type == "products"] {
    id, title, description, price, "imageUrl": image.asset->url
  }`);
  return dataFetch;
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6">
              <h1 className="max-sm:w-2/5 text-gray-900 font-semibold title-font text-2xl mb-2 max-sm:mb-0">
                Best of Air Max
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {data.map((val: Product) => (
              <div key={val.id} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <Link href={`airmax/${val.id}`}>
                  <div className="rounded-lg h-96 overflow-hidden">
                    <Image
                      alt="content"
                      className="object-cover object-center h-full w-full"
                      width={500}
                      height={500}
                      src={val.imageUrl}
                    />
                  </div>
                </Link>
                <div className="flex justify-between">
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                    {val.title}
                  </h2>
                  <p className="text-xl font-medium title-font text-gray-900 mt-5">
                    ₹ {val.price}
                  </p>
                </div>
                <p className="text-x1 text-gray-500 leading-relaxed mt-2">
                  {val.description}
                </p>
              </div> // return end
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
