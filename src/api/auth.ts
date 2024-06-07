// import { $authHost } from "../service/http";

import axios from "axios";

export const AuthInitAPI = async (tma: string) => {
  try {
    const tmaToken = `tma ${tma}`;
    const { data } = await axios.get("https://api.tmaserver.online/api/auth/init", { headers: { "Authorization": tmaToken } });
    // const { data } = await axios.get("https://api.tmaserver.online/api/auth/init");
    return data;
  } catch (e) {
    return console.error(e);
  }
}