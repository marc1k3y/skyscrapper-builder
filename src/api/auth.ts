import { $authHost } from "../service/http";

export const AuthInitAPI = async () => {
  try {
    const { data } = await $authHost.get("auth/init");
    // const { data } = await axios.get("https://skyb-node.onrender.com/api/auth/init", { headers: { "Authorization": `tma ${tma}` } });
    return data;
  } catch (e) {
    return console.error(e);
  }
}