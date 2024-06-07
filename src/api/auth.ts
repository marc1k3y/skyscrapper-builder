import axios from "axios";

export const AuthInitAPI = async (tma: string) => {
  try {
    // const { data } = await $authHost.get("auth/init");
    const { data } = await axios.get("https://skyb-node.onrender.com:10000/api/auth/init", { headers: { "Authorization": `tma ${tma}` } });
    return data;
  } catch (e) {
    return console.error(e);
  }
}