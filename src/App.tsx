import { retrieveLaunchParams } from "@tma.js/sdk-react";
import { useEffect, useState } from "react";
import { AuthInitAPI } from "./api/auth";
import { GameCloseAPI, GameSyncAPI } from "./api/game";

export default function App() {
  const [cycles, setCycles] = useState(0);
  const [sended, setSended] = useState({ auth: false, sync: false });
  const [user, setUser] = useState("");
  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    setCycles(cycles + 1);
    if (!sended.auth || !sended.sync) {
      if (initDataRaw) {
        if (localStorage.getItem("tma")) {
          if (!sended.auth) {
            AuthInitAPI().then((res) => {
              if (res.status === "ok") {
                setUser(res.response);
                setSended((prev) => ({ ...prev, auth: true }));
              }
            })
          } else if (!sended.sync) {
            GameSyncAPI().then((res) => {
              if (res.status === "ok") {
              }
            })
          }
        } else {
          localStorage.setItem("tma", initDataRaw);
        }
      }
    }
  }, [initDataRaw, sended]);

  useEffect(() => () => {
    GameCloseAPI().then((res) => console.log(res));
  }, []);

  return (
    <div>
      <div>{`useEffect cycles: ${cycles}`}</div>
      <div>{`user: ${user}`}</div>
    </div>
  );
}
