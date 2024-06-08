import css from "./style.module.css";
import { useAppSelector } from "../../store";
import { AlertType } from "../../types";

export const AlertManager = () => {
  const { alertStack } = useAppSelector((state) => state.appAlerts);

  const setMessageBackgroundColor = (type: AlertType) => {
    switch (type) {
      case "error": return "red";
      case "warning": return "yellow";
      case "success": return "green";
      default: return;
    }
  }
  return (
    <div className={css.wrapper} style={{ display: alertStack.length > 0 ? "flex" : "none" }}>
      {alertStack.length > 0 && alertStack.map((item) => (
        <div
          key={item.id}
          className={css.popup}
          style={{ backgroundColor: setMessageBackgroundColor(item.type) }}>
          {item.text}
        </div>
      ))}
    </div>
  );
}