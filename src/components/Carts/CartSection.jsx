import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartByID, editCartById, getCart } from "../../service/service";
import { fetchedCarts, removeCart, updateCart } from "./CartAction";
import { toast, ToastContainer } from "react-toastify";

export const CartSection = () => {
  const dispatch = useDispatch();

  // Fetch cart data on component mount
  useEffect(() => {
    getCart()
      .then((res) => {
        dispatch(fetchedCarts(res.data));
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const cartData = useSelector((state) => state.cartStore.carts);
  const products = useSelector((state) => state.productStore.products);

  // Calculate total quantity and total amount
  const totalQuantity = cartData.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalAmount = cartData.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price),
    0
  );

  // Handle increment of product quantity
  const handleIncrement = (id, quantity, productQuantity) => {
    if (quantity < productQuantity) {
      editCartById(id, { quantity: quantity + 1 })
        .then((res) => {
          dispatch(updateCart(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.warning("Quantity exceeds available stock!");
    }
  };

  // Handle decrement of product quantity (ensure it doesn't go below 0)
  const handleDecrement = (id, quantity) => {
    if (quantity > 0) {
      editCartById(id, { quantity: quantity - 1 })
        .then((res) => {
          dispatch(updateCart(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDelete = (id) => {
    deleteCartByID(id)
      .then((res) => {
        dispatch(removeCart(res.data));
        toast.success("Product removed successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to remove product. Please try again.");
      });
  };

  return (
    <div className="container mx-auto my-6">
      {/* Total Quantity and Total Amount Section */}
      <div className="float-right my-3 p-4 border border-gray-300 rounded-xl shadow-lg bg-white">
        <h1 className="text-xl font-bold mb-2">
          Total Quantity: {totalQuantity}
        </h1>
        <h1 className="text-xl font-bold">Total Amount: ₹ {totalAmount}</h1>
      </div>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartData &&
          cartData.map((data, index) => {
            const product = products.find((p) => p.id === data.id);

            const isExceedingQuantity = data.quantity > product.quantity;

            return (
              <div
                key={index}
                className="max-w-sm rounded-xl border border-black hover:bg-slate-200 overflow-hidden shadow-xl shadow-neutral-800 my-6 mx-10 bg-amber-50"
              >
                {/* Product Image */}
                <img
                  className="w-full h-64 object-cover pt-3 px-3 rounded-3xl"
                  src={data.imageURL}
                  alt={data.productName}
                />

                {/* Card Content */}
                <div className="p-4">
                  {/* Product Name */}
                  <div className="font-bold text-xl mb-2">
                    {data.productName}
                    {isExceedingQuantity && (
                      <span className="ml-2 text-red-500 font-semibold">
                        Quantity Exceeds Stock!
                      </span>
                    )}
                  </div>

                  {/* Product Description */}
                  <p className="text-gray-700 text-base mb-4">
                    {data.description}
                  </p>

                  {/* Quantity Manager */}
                  <div className="flex justify-between items-center mb-4">
                    {/* Product Price */}
                    <div className="text-xl font-semibold text-gray-900 mb-4">
                      ₹ {data.price}
                    </div>

                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(data.id, data.quantity)}
                        className="bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded-l"
                        disabled={data.quantity === 0}
                      >
                        -
                      </button>
                      <div className="px-3 pt-1 text-xl font-semibold">
                        {data.quantity}
                      </div>
                      <button
                        onClick={() =>
                          handleIncrement(
                            data.id,
                            data.quantity,
                            product.quantity
                          )
                        }
                        className="bg-gray-300 text-gray-800 font-bold py-2 px-2 rounded-r"
                        disabled={data.quantity >= product.quantity}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <div className="flex">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold me-3 py-2 px-4 rounded w-full"
                      disabled={isExceedingQuantity}
                    >
                      Checkout
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                      onClick={() => handleDelete(data.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
};
