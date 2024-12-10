import { products } from "@/app/Data/product";
import Breadcrumb from "@/components/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const ProductsPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-10 px-20">
        <h2 className="text-xl font-bold mb-4 sm:mb-0 sm:text-left text-center">
          Ecommerce Accessories & Fashion Item <br />
          <span className="text-sm text-gray-400">About 9,620 results (0.62 seconds)</span>
        </h2>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-6 sm:items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="perPage" className="mr-2 text-sm font-medium text-gray-600">
              Per Page:
            </label>
            <select id="perPage" className="border border-gray-300 rounded p-2 text-sm">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
            </select>
          </div>
          <div className="flex items-center mb-4 sm:mb-0">
            <label htmlFor="sortBy" className="mr-2 text-sm font-medium text-gray-600">
              Sort By:
            </label>
            <select id="sortBy" className="border border-gray-300 rounded p-2 text-sm">
              <option value="best-match">Best Match</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <label htmlFor="view" className="mr-2 text-sm font-medium text-gray-600">
              View:
            </label>
            <select id="view" className="border border-gray-300 rounded p-2 text-sm">
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 px-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-105"
          >
            {/* Icons */}
            <div className="absolute bottom-36 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300 z-10">
              <div className="w-8 h-8 bg-white text-purple-900 rounded-full flex justify-center items-center shadow-md hover:bg-purple-100 transition">
                <FiShoppingCart />
              </div>
              <div className="w-8 h-8 bg-white text-red-600 rounded-full flex justify-center items-center shadow-md hover:bg-red-100 transition">
                <FaRegHeart />
              </div>
              <div className="w-8 h-8 bg-white text-blue-400 rounded-full flex justify-center items-center shadow-md hover:bg-blue-100 transition">
                <AiOutlineSearch />
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center bg-gray-100 group-hover:bg-green-50 transition duration-300 h-44 w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={120}
                height={120}
                objectFit="contain"
                className="object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <div className="flex flex-col justify-between items-center mb-1">
                <h3 className="text-md font-semibold">{product.name}</h3>
                <div className="flex gap-2 mt-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-purple-700"></div>
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                </div>
                <div className="flex gap-4 mt-2">
                  <p className="text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </p>
                  <p className="text-pink-500 font-bold">
                    ${product.discountedPrice.toFixed(2)}
                  </p>
                  
                    <Link
                    href={`/products/${product.id}`}
                    className="bg-white text-gray-400"
                    >
                     <FaEye className="inline-flex" size={20}/>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
       {/* Centered Image Section */}
       <div className="flex justify-center mt-14 mb-14">
        <Image
          src="/newsletter.png" // Replace with your image path
          alt="News Letter"
          width={700}
          height={600}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
