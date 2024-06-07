import { retrieveLaunchParams } from "@tma.js/sdk-react";
import { useEffect, useState } from "react";
import { AuthInitAPI } from "./api/auth";

export default function App() {
  const [test, setTest] = useState("");
  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    if (initDataRaw) {
      localStorage.setItem("tma", initDataRaw);
      setTimeout(() => { AuthInitAPI().then((res) => setTest(JSON.stringify(res))); }, 2000);
    }
  }, []);

  return (
    <div>
      <div>{`tma ${initDataRaw}`}</div>
      <div>{`response: ${test}`}</div>
    </div>
  );
}
