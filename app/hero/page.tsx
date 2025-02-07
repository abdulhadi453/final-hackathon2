import Header from "@/Components/Header";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Gearup from '../gearup/page';
import Airmax from '../airmax/page';
import Link from "next/link";

// Define the interface for the Essentials data
interface Essential {
  title: string;
  imageUrl: string;
}

async function getData() {
  const dataFetch: Essential[] = await client.fetch(`*[_type == "essentials"] {
    title, "imageUrl": image.asset->url
  }`);
  return dataFetch;
}

export default async function hero() {
  const data = await getData();

  return (
    <div>
      <Header />
      
      {/* Home Session */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col">
          <div className="text-center max-lg:w-2/3 w-full">
            <div className="bg-gray-100">
              <h1 className="text-gray-900 font-semibold">Hello Nike app</h1>
              <p className="leading-relaxed">
                Download the app to access everything Nike. Get Your Great
              </p>
            </div>
            <Image
              className="max-lg:w-2/6 max-sm:w-3/6 w-full mb-10 object-cover object-center rounded"
              alt="hero"
              width={1000}
              height={1000}
              src="https://cdn.sanity.io/images/p1ntw02w/production/03c4eed6aa44f0a9e95b5a3adefa729d18712511-1344x700.png"
            />
            <h1 className="font-semibold text-gray-900 mb-4">First Look</h1>
            <h1 className="title-font max-sm:text-4xl text-5xl mb-6 font-semibold text-gray-900">
              NIKE AIR MAX PULSE
            </h1>
            <p className="text-gray-900 mb-6">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
              —designed to push you past your limits and help you go to the max.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
                Notify Me
              </button>
              <Link href="/airmax">
                <button className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
                  Shop Air Max
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best of Air Max */}
      <Airmax />

      {/* Featured Session */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 justify-center flex-col">
          <div className="max-lg:w-2/3 w-full">
            <h1 className="title-font max-sm:text-4xl text-2xl mb-4 font-semibold text-gray-900">
              Featured
            </h1>
            <Image
              className="max-lg:w-2/6 max-md:w-3/6 w-full mb-10 object-cover object-center rounded"
              alt="hero"
              width={1000}
              height={1000}
              src="https://cdn.sanity.io/images/p1ntw02w/production/eb51a3f29cb163404bad1c00af6e60341d13e279-1344x700.png"
            />
            <h1 className="title-font max-sm:text-4xl text-5xl flex justify-center mb-6 font-semibold text-gray-900">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="text-gray-900 flex justify-center mb-6 ">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <div className="flex justify-center">
              <Link href="/allproducts">
                <button className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
                  Find your shoe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gear up session */}
      <Gearup />

      {/* Dont Miss */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 justify-center flex-col">
          <div className="max-lg:w-2/3 w-full">
            <h1 className="title-font max-sm:text-4xl text-2xl mb-4 font-semibold text-gray-900">
              Don&apos;t Miss
            </h1>
            <Image
              className="max-lg:w-2/6 max-md:w-3/6 w-full mb-10 object-cover object-center rounded"
              alt="hero"
              width={1000}
              height={1000}
              src="https://cdn.sanity.io/images/p1ntw02w/production/e542d98bad7976d922e57e8f3250f817d8a54baa-1344x700.png"
            />
            <h1 className="title-font max-sm:text-4xl text-5xl flex justify-center mb-6 font-semibold text-gray-900">
              FLIGHT ESSENTIALS
            </h1>
            <p className="text-gray-900 flex justify-center mb-6 ">
              Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
            <div className="flex justify-center">
              <Link href="/allproducts">
                <button className="ml-4 inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-lg">
                  Shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Essentials session */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap w-auto p-1 mb-6">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl mb-2 text-gray-900">
                The Essentials
              </h1>
            </div>
          </div>
          <div className="w-full inline-flex justify-between pl-5 pr-24 -m-4">
            {data.map((val: Essential) => (
              <div key={val.title} className="xl:w-1/4 md:w-1/2">
                <div className="w-96 rounded-lg">
                  <Image
                    className="h-[400px] rounded w-full object-cover object-center mb-2"
                    src={val.imageUrl}
                    width={1000}
                    height={1000}
                    alt="content"
                  />
                  <p>{val.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
