import api from "./api";

export const addToCart = async (
  productId: string,
  quantity: number = 1
) => {
  const response = await api.post("/cart/add", {
    productId,
    quantity,
  });

  return response.data;
};


export const getCart = async () => {
  const response = await api.get("/cart");

  return response.data;
};


export const updateCartQuantity = async (
  productId: string,
  quantity: number
) => {
  const response = await api.put(
    `/cart/product/${productId}`,
    {
      quantity,
    }
  );

  return response.data;
};


export const deleteCartItem = async (
  cartId: string
) => {
  const response = await api.delete(
    `/cart/${cartId}`
  );

  return response.data;
};