import { $authHost } from "../service/http";

export const GameSyncAPI = async () => {
  try {
    const { data } = await $authHost.get("game/sync");
    return data;
  } catch (e) {
    return console.error(e);
  }
}