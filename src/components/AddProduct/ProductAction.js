export const fetchedProducts = (allProduct) => {
    console.log("---->fetch action called");
    
    return { type: "FETCHED_PRODUCT", payload: allProduct };
  };
  
  export const addProduct = (product) => {
    console.log("---->add action called",product);
    return { type: "ADD_PRODUCT", payload: product };
  };
  
  export const updateProduct = (product) => {
    console.log("---->update action called");
    return {
      type: "EDIT_PRODUCT",
      payload: product,
    };
  };
  
  export const removeProduct = (product) => {
    console.log("---->remove action called");
    return {
      type: "REMOVE_PRODUCT",
      payload: product,
    };
  };
  