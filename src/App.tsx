import { retrieveLaunchParams } from "@tma.js/sdk-react";
import { useEffect, useState } from "react";
import { AuthInitAPI } from "./api/auth";

export default function App() {
  const [test, setTest] = useState("");
  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    if (initDataRaw) {
      AuthInitAPI(initDataRaw).then((res) => setTest(JSON.stringify(res)));
    }
  }, []);

  return (
    <div>response: {test}</div>
  );
}
