import { retrieveLaunchParams, useInitData, useInitDataRaw } from "@tma.js/sdk-react";

function App() {
  const initDataHook = useInitData();
  const initDataRawHook = useInitDataRaw();
  const { initData, initDataRaw } = retrieveLaunchParams()

  return (
    <p className="read-the-docs">
      <div>initData: {JSON.stringify(initData)}</div>
      <div>initDataRaw: {JSON.stringify(initDataRaw)}</div>
      <div>initDataHook: {JSON.stringify(initDataHook)}</div>
      <div>initDataRawHook: {JSON.stringify(initDataRawHook)}</div>
    </p>
  )
}

export default App
