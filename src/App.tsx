import { retrieveLaunchParams } from "@tma.js/sdk-react";
import { useEffect, useState } from "react";
import { AuthInitAPI } from "./api/auth";

export default function App() {
  const [sended, setSended] = useState(false);
  const [test, setTest] = useState("");
  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    if (!sended) {
      if (initDataRaw) {
        localStorage.setItem("tma", initDataRaw);
        AuthInitAPI(initDataRaw).then((res) => {
          setTest(JSON.stringify(res));
          setSended(true);
        })
      }
    }
  }, [initDataRaw]);

  return (
    <div>
      <div>{`tma ${initDataRaw}`}</div>
      <div>{`response: ${test}`}</div>
    </div>
  );
}
