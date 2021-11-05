import { setAbsWarningLightIsActive } from "../abs-warning-light/AbsWarningLightSlice";
import io from "socket.io-client";

export default function WebSocketConfiguration(
  dispatch: (arg0: { payload: boolean; type: string }) => void
) {
  const socket = io(`http://localhost:3100`);
  socket.connect();

  socket.on("test", (msg) => {
    console.log(msg);
    dispatch(setAbsWarningLightIsActive(JSON.parse(msg)));
  });
}
