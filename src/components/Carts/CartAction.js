export const fetchedCarts = (allCart) => {
    return { type: "FETCHED_CART", payload: allCart };
  };
  
  export const addCart = (cart) => {
    return { type: "ADD_CART", payload: cart };
  };
  
  export const updateCart = (cart) => {
    return {
      type: "EDIT_CART",
      payload: cart,
    };
  };
  
  export const removeCart = (cart) => {
    return {
      type: "REMOVE_CART",
      payload: cart,
    };
  };
  