const initialState = {
    carts: [],
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCHED_CART":
        return { ...state, carts: action.payload };
  
      case "ADD_CART":
        return { ...state, carts: [...state.carts, action.payload] };
  
      case "EDIT_CART":
        return {
          ...state,
          carts: state.carts.map((cart) =>
            cart.id === action.payload.id ? action.payload : cart
          ),
        };
  
      case "REMOVE_CART":
        return {
          ...state,
          carts: state.carts.filter((cart) => cart.id !== action.payload.id),
        };
  
      default:
        return state;
    }
  };