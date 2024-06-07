import axios from "axios";

const RENDER_NODE_API = "https://skyb-node.onrender.com/api/";

const $authHost = axios.create({ baseURL: RENDER_NODE_API });

const authInterceptor = (config: any) => {
  config.headers.authorization = `tma ${localStorage.getItem("tma")}`;
  return config;
}
$authHost.interceptors.request.use(authInterceptor);

export { $authHost };