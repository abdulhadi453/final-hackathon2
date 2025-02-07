import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

async function getData2() {
  const dataFetch: Product[] = await client.fetch(`*[_type == "gearup"] {
    id, title, description, price, "imageUrl": image.asset->url
  }`);
  return dataFetch;
}

export default async function Page() {
  const data2 = await getData2();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="max-sm:text-3xl font-semibold text-2xl mb-2 text-gray-900">
                Gear up
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -my-4 mx-8">
            {data2.map((val: Product) => (
              <div key={val.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-white rounded-lg">
                  <Link href={`gearup/${val.id}`}>
                    <Image
                      className="h-[300px] rounded w-full object-cover object-center mb-6"
                      src={val.imageUrl}
                      width={500}
                      height={500}
                      alt="content"
                    />
                  </Link>
                  <div className="flex justify-between">
                    <h1 className="text-black w-3/5 leading-relaxed">{val.title}</h1>
                    <h1 className="text-black leading-relaxed">₹ {val.price}</h1>
                  </div>
                  <p className="text-gray-500">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
