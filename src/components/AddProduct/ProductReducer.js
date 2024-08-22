const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHED_PRODUCT":
      console.log("!!! fetch reducer called",action);
      return { ...state, products: action.payload };

    case "ADD_PRODUCT":
      console.log("!!! add reducer called");

      return { ...state, products: [...state.products, action.payload] };

    case "EDIT_PRODUCT":
      console.log("!!! edit reducer called");

      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };

    case "REMOVE_PRODUCT":
      console.log("!!! rmove reducer called");

      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
