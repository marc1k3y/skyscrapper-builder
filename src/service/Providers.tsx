import { ReactNode, StrictMode } from "react";
import { Provider } from "react-redux";
import { SDKProvider } from "@tma.js/sdk-react";
import { store } from "../store";
import { AlertManager } from "./AlertManager";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <StrictMode>
      <SDKProvider>
        <Provider store={store}>
          {children}
          <AlertManager />
        </Provider>
      </SDKProvider>
    </StrictMode>
  );
}