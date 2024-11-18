import React from "react";
import Spinner from "../../components/Spinner";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FcRating } from "react-icons/fc";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);


  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/productDetail/${id}`
      );
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-10">
        <Spinner />
      </div>
    );
  }
  console.log(data);
  const {
    brandName,
    category,
    creationDate,
    description,
    dateAdded,
    price,
    productImage,
    productName,
    ratings,
    _id,
  } = data || {};

  return (
    <div>
      <header className="">
        <div className="h-[350px]">
          <img src={productImage} alt="" className="w-full h-full" />
        </div>
      </header>

      <div className="shadow-md dark:bg-gray-300 border space-y-5 mx-auto px-8 py-8 lg:py-10 lg:px-10">
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 flex-grow">
            <h2 className="text-lg font-bold">{productName}</h2>
            <div className="flex justify-between items-center">
              <p>
                <b>Price:</b> <span>${price}</span>
              </p>
              <div className="flex items-center justify-center gap-1">
                <span>{ratings}</span>
                <FcRating />
              </div>
            </div>
            <p>
              <b>Brand</b>:{brandName}
            </p>
            <p>
              <b>Category</b>:{category}
            </p>
            <p title={description} className="dark:text-gray-800 text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
