import axios from "axios";

const REMOTE_HOST_API = "https://api.tmaserver.online/api/";

const $authHost = axios.create({ baseURL: REMOTE_HOST_API });

const authInterceptor = (config: any) => {
  config.headers.authorization = `tma ${localStorage.getItem("tma")}`;
  return config;
}
$authHost.interceptors.request.use(authInterceptor);

export { $authHost };