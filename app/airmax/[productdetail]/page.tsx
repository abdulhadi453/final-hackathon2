// pages/[productdetail].tsx
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import AddToCart from "@/Components/AddToCart";
import Header from "@/Components/Header";

interface Product {
  id: number;
  title: string;
  stock: number;
  description: string;
  material: string;
  price: number;
  color: string;
  imageUrl: string;
}

const page = async (props: { params: Promise<{ productdetail: string }> }) => {
  const params = await props.params;
  const query = `*[_type == "products"] {
    id, title, stock, description, material, price, color, "imageUrl": image.asset->url
  }`;

  const data: Product[] = await client.fetch(query);

  // Ensure to handle case when product is not found
  const product = data.find((item) => item.id === Number(params.productdetail));

  // Return a fallback if no product is found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              width={500}
              height={500}
              src={product.imageUrl}
            />
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
              {product.title}
            </h1>
            <p className="mb-8 text-xl leading-relaxed">
              Turn style on its head with this crafted take on the Air Jordan 1
              Mid. Its &quot;inside out&quot;-inspired construction, including unique
              layering and exposed foam accents, ups the ante on this timeless
              Jordan Brand silhouette. Details like the deco stitching on the
              Swoosh add coveted appeal, while the unexpected shading, rich
              mixture of materials and aged midsole aesthetic give this release
              an artisan finish.
            </p>
            <p className="text-3xl font-bold text-black mb-8">
              Price: ₹{product.price}
            </p>
            <div className="flex justify-center">
              <AddToCart product={product} />
              <Link href="/cart">
                <button className="ml-4 inline-flex text-black bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded-full text-lg">
                  Go to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
