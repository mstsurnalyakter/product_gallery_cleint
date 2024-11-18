import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { format } from "date-fns";

const Card = ({ product }) => {
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
  } = product || {};
  console.log(product);
  // const checkStartDate = new Date(session?.registrationStartDate) <= new Date();
  // const checkEndDate = new Date(session?.registrationEndDate) >= new Date();

  return (
    <div>
      <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 border-2 p-3">
        <img
          src={productImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
        />
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
            <p>
              <b>Creation Date</b>:
              {format(new Date(creationDate), "MMMM dd, yyyy, hh:mm:ss a")}
            </p>
            <p>
              <b>Date Added</b>:{format(new Date(dateAdded), "MMMM dd, yyyy")}
            </p>
            <p title={description} className="dark:text-gray-800 text-sm">
              {description.slice(0, 150)}....
            </p>
          </div>
          {/* <Link to={`/productDetail/${._id}`}>
            <button
              type="button"
              className="flex items-center bg-[#4D95EA] text-white hover:bg-[#358ef4]  justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
            >
              Read More
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  session: PropTypes.object,
};

export default Card;
