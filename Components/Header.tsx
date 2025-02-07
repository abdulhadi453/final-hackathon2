'use client'; // Marking this component as a Client Component

import React, { useState } from 'react'; // React import
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Sample data for demonstration
const sampleData = [
  { id: 1, title: 'Nike Air Max', description: 'Comfortable running shoes' },
  { id: 2, title: 'Nike Air Zoom', description: 'Lightweight and fast' },
  { id: 3, title: 'Nike Running T-shirt', description: 'Breathable fabric' },
  { id: 4, title: 'Nike Basketball Shorts', description: 'Durable and comfortable' },
];

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState(sampleData);

  // Handle input change and filter data dynamically
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter the data based on search query
    const filteredData = sampleData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredResults(filteredData); // Update the filtered results
  };

  // Handle form submit (optional in this case, but can be used to handle search logic)
  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="text-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/Home"><div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            width="59"
            height="22"
            viewBox="0 0 59 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181595 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z"
              fill="#111111"
            ></path>
          </svg>
        </div></Link>
        <nav className="md:ml-auto md:mr-32 flex flex-wrap items-center text-lg justify-center">
          <Link href="/allproducts"><div className="mr-5 ml-5 hover:text-gray-600">New & Featured</div></Link>
          <Link href="/allproducts"><div className="mr-5 hover:text-gray-600">Men</div></Link>
          <Link href="/allproducts"><div className="mr-5 hover:text-gray-600">Women</div></Link>
          <Link href="/allproducts"><div className="mr-5 hover:text-gray-600">Kids</div></Link>
          <Link href="/allproducts"><div className="mr-5 hover:text-gray-600">Sale</div></Link>
          <Link href="/allproducts"><div className="mr-5 hover:text-gray-600">SNKRS</div></Link>
        </nav>

        {/* Search Form */}
        <div>
          <form onSubmit={handleSearchSubmit} className="relative flex items-center justify-center">
            <div className="flex items-center">
              {/* Search Icon */}
              <button type="submit">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
              </button>
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Display Search Results */}
      <div className="container mx-auto mt-4">
        {searchQuery && (
          <>
            <h2 className="text-xl font-semibold mb-4">Search Results:</h2>
            <ul>
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <li key={item.id} className="mb-3">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </li>
                ))
              ) : (
                <p>No results found</p>
              )}
            </ul>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
