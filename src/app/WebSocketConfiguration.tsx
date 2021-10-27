import { setIsActive } from "../abs-warning-light/AbsWarningLightSlice";
import { useAppDispatch } from "./hooks";
import io from "socket.io-client";

export default function WebSocketConfiguration(
  dispatch: (arg0: { payload: boolean; type: string }) => void
) {
  const socket = io(`http://localhost:3100`);
  socket.connect();

  socket.on("test", (msg) => {
    console.log(msg);
    dispatch(setIsActive(JSON.parse(msg)));
  });
}
