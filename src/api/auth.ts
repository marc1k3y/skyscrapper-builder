// import { $authHost } from "../service/http";

import axios from "axios";

export const AuthInitAPI = async (tma: string) => {
  try {
    console.log(tma);
    
    // const { data } = await $authHost.get("auth/init");
    // const { data } = await axios.get("https://api.tmaserver.online/api/auth/init", { headers: { "Authorization": `tma ${tma}` } });
    const { data } = await axios.get("https://api.tmaserver.online/api/auth/init");
    return data;
  } catch (e) {
    return console.error(e);
  }
}