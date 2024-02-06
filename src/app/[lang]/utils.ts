export const fetchProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    method: "GET",
  });

  return res.json();
};

export const fetchProductById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "GET",
  });
  return res.json();
};
