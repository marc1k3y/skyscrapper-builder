import { $authHost } from "../service/http";

export const AuthInitAPI = async () => {
  try {
    const { data } = await $authHost.get("auth/init");
    return data;
  } catch (e) {
    return console.error(e);
  }
}