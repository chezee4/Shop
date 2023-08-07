import { useHttp } from "../../hooks/http.hook";

const useShopService = () => {
  const { request } = useHttp();
  const _API = "https://fakestoreapi.com/products/";

  const getAllProducts = async () => await request(`${_API}`);
  return {
    getAllProducts,
  };
};

export default useShopService;