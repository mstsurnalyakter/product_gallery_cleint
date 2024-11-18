import banner from "../../../public/banner/banner6.jpg";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import toast from "react-hot-toast";
import axios from "axios";
import Spinner from "../../components/Spinner";
import Card from "../../components/Card";

const ProductSection = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

  const [sortBy, setSortBy] = useState("");

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(6);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  const categoryName = [
    "Beauty & Health",
    "Jewelry & Watches",
    "Electronics",
    "Sports & Entertainment",
    "Women's Clothing",
    "Toys & Games",
    "Furniture",
    "Men's Clothing",
  ];

  const brands = [
    "PureSkin",
    "TimeMaster",
    "SoundWave",
    "RunFast",
    "ElegantWear",
    "PlayTime",
    "ComfortZone",
    "YouthGlow",
    "SunShine",
    "TechGiant",
    "FitGear",
    "UrbanWear",
    "GameMaster",
    "BrainBoost",
    "BrightLight",
    "GlowSkin",
    "Timeless",
    "ChargePlus",
    "StretchWell",
    "FootEase",
    "HomeClassic",
    "FreshFace",
    "SmartStyle",
    "BreatheEasy",
    "OutdoorGear",
    "AromaPure",
    "EliteFootwear",
    "ClimateControl",
    "BlockFun",
    "AquaBoost",
    "ClassicGear",
    "SoundMate",
    "BodyPro",
    "ChicFashion",
    "FunRides",
    "ComfortWorks",
    "SoftLips",
    "CasualWear",
    "FitTrack",
    "OutdoorPro",
    "SkinRevive",
    "UrbanEdge",
    "ChargeMate",
    "CreativeKids",
    "ComfortLiving",
    "SkinSoft",
    "TechTime",
    "SmartConnect",
    "FitStrong",
    "WarmWear",
  ];

  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "products",
      currentPage,
      itemPerPage,
      search,
      selectedBrand,
      selectedCategory,
      selectedPriceRange,
      sortBy,
    ],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`,
        {
          params: {
            page: currentPage,
            size: itemPerPage,
            search,
            brand: selectedBrand,
            category: selectedCategory,
            priceMin: selectedPriceRange[0],
            priceMax: selectedPriceRange[1],
            sortBy,
          },
        }
      );
      setProducts(data);
      return data;
    },
  });

  const {
    data: countData = [],
    isLoading: countIsLoading,
    refetch: countRefetch,
    isError: countIsError,
    error: countError,
  } = useQuery({
    queryKey: [
      "products-count",
      search,
      selectedBrand,
      selectedCategory,
      selectedPriceRange,
    ],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/products-count`,
        {
          params: {
            search,
            brand: selectedBrand,
            category: selectedCategory,
            priceMin: selectedPriceRange[0],
            priceMax: selectedPriceRange[1],
          },
        }
      );
      setCount(data.count);
      return data;
    },
  });

  if (isLoading || countIsLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );
  }

  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  return (
    <div>
      <header>
        <div
          className="w-full object-cover bg-cover h-[140px]"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40 ">
            <div className="text-center w-full">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                Find Product
              </h1>

              <form onSubmit={handleSearch} className="mt-4 ">
                <div className="flex items-center justify-center">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search here"
                    className="py-3 outline-none w-2/3 pl-3 rounded"
                    id="search"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                  />
                  <button
                    type="submit"
                    className="bg-[#07BE65] text-white px-3 py-2 rounded"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 ">
        <div className="shadow mt-10 border-2 p-2">
          <h3 className="text-center dark:text-white font-bold text-lg mb-2">
            Filter Products
          </h3>
          <div className="border-b-2"></div>
          <div className="space-y-2 mt-2">
            <div className="flex items-center gap-1">
              <label>
                <b className="dark:text-white">Brand Name:</b>
              </label>
              <select
                className="border-2 border-gray-700 flex-grow p-1 rounded-md"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">All Brands</option>
                {brands?.length > 0 &&
                  brands?.map((brand, index) => (
                    <option value={brand} key={index}>
                      {brand}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <label>
                <b className="dark:text-white">Category Name:</b>
              </label>
              <select
                className="border-2 border-gray-700 flex-grow p-1 rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categoryName?.length > 0 &&
                  categoryName?.map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <label>
                <b className="dark:text-white">Price Range:</b>
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                className="border-2 border-gray-700 flex-grow p-1 rounded-md"
                value={selectedPriceRange[0]}
                onChange={(e) =>
                  setSelectedPriceRange([e.target.value, selectedPriceRange[1]])
                }
              />
              <span className="dark:text-white">
                {selectedPriceRange[0]} - {selectedPriceRange[1]}
              </span>
            </div>
          </div>
        </div>
        <div className="shadow mt-10 border-2 p-2">
          <h3 className="text-center font-bold text-lg mb-2 dark:text-white">
            Sort Products
          </h3>
          <div className="border-b-2"></div>

          <div className="flex items-center gap-1 mt-10 ">
            <label>
              <b className="dark:text-white">Sort By:</b>
            </label>
            <select
              className="border-2 border-gray-700 flex-grow p-1 rounded-md"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Sort the products</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="date-desc">Date Added: Newest First</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid mt-16 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products?.length > 0 &&
          products?.map((product) => (
            <Card product={product} key={product?._id} />
          ))}
      </div>

      {/* pagination section */}

      <div className="flex justify-center mt-16">
        {/* previous button */}
        <button
          onClick={() => handlePaginationButton(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-900 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#07BE65]  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>

        {/* numbers */}
        {pages?.map((btnNum) => (
          <button
            key={btnNum}
            onClick={() => handlePaginationButton(btnNum)}
            className={`hidden ${
              currentPage === btnNum ? "bg-[#07BE65] text-white " : ""
            } px-4 py-2 mx-1 transition-colors duration-300 dark:text-gray-100 transform  rounded-md sm:inline hover:bg-[#07BE65]  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        {/* next button */}
        <button
          onClick={() => handlePaginationButton(currentPage + 1)}
          disabled={currentPage === numberOfPages}
          className="px-4 py-2 mx-1 text-gray-700 dark:text-gray-900 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#07BE65] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
