import { AlertType } from "../../types";
import { AppDispatch } from "../../store";
import { popMessage, pushMessage } from "../../store/slices/alert";

interface Props {
  dispatch: AppDispatch
  type: AlertType
  text: string
  delay: number
}

export const appMessagesManager = ({ dispatch, type, text, delay }: Props) => {
  const id = Date.now();
  dispatch(pushMessage({ id, type, text }));
  setTimeout(() => dispatch(popMessage(id)), delay);
}