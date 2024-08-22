import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../../service/service";
import { addCart } from "../Carts/CartAction";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ data, role }) => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartStore.carts);

  // Handle adding product to the cart
  const handleAddToCart = (product) => {
    const existingCartItem = cartData.find((cart) => cart.id === product.id);

    if (!existingCartItem) {
      // Add new product to cart
      addCartData({ ...product, quantity: 1 })
        .then((res) => {
          dispatch(addCart(res.data));
          toast.success("product added to cart successfully!");
        })
        .catch((err) => {
          toast.error("Failed to add product. Please try again.");

          console.log(err);
        });
    } else {
      // Update existing product quantity in the cart
      toast.success("Product already in cart section!");
    }
  };

  return (
    <div className="relative max-w-sm rounded-xl border border-black hover:bg-slate-200 overflow-hidden shadow-xl shadow-neutral-800 my-6 mx-10 bg-amber-50">
      <div className="absolute top-3 right-3">
        {data.quantity === 0 ? (
          <span className="bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-full">
            Out of Stock
          </span>
        ) : data.quantity < 5 ? (
          <span className="bg-yellow-500 text-white text-xs font-semibold py-1 px-2 rounded-full">
            Low Stock
          </span>
        ) : (
          <span className="bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-full">
            In Stock
          </span>
        )}
      </div>

      {/* Product Image */}
      <img
        className="w-full h-64 object-cover pt-3 px-3 rounded-3xl"
        src={data.imageURL}
        alt={data.productName}
      />

      {/* Card Content */}
      <div className="p-4">
        {/* Product Name */}
        <div className="font-bold text-xl mb-2">{data.productName}</div>

        {/* Product Description */}
        <p className="text-gray-700 text-base mb-4">{data.description}</p>

        {/* Quantity Manager */}
        <div className="flex justify-between items-center mb-4">
          {/* Product Price */}
          <div className="text-xl font-semibold text-gray-900 mb-4">
            ₹ {data.price}
          </div>
        </div>

        {!role && (
          <div className="flex justify-between items-center">
            {data.quantity === 0 ? (
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                disabled
              >
                Out of Stock
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                onClick={() => handleAddToCart(data)}
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>
      {/* Toast Notification */}
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ProductCard;
