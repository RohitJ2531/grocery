import http from "../http-common";

/* -------------------------------  PRODUCT API  ------------------------------- */

export const getProduct = () => {
  return http.get("/products");
};

export const addProductData = (product) => {
  return http.post("/products", product);
};

export const editProductById = (id, product) => {
  return http.patch(`/products/${id}`, product);
};

export const deleteProductByID = (id) => {
  return http.delete(`/products/${id}`);
};

/* -------------------------------  CART API  ------------------------------- */

export const getCart = () => {
  return http.get("/carts");
};

export const addCartData = (cart) => {
  return http.post("/carts", cart);
};

export const editCartById = (id, cart) => {
  return http.patch(`/carts/${id}`, cart);
};

export const deleteCartByID = (id) => {
  return http.delete(`/carts/${id}`);
};
