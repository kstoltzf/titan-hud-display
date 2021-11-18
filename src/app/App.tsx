import UpperRowWarningLights from "../upper-row-warning-lights/UpperRowWarningLights";
import LowerRowWarningLights from "../lower-row-warning-lights/LowerRowWarningLights";
import InfoRow from "../info-row/InfoRow";
import { useAppDispatch } from "./Hooks";
import { useEffect } from "react";
import NumberPayloadMessageReceiver from "./NumberPayloadMessageReceiver";
import { io } from "socket.io-client";
import BooleanPayloadMessageReceiver from "./BooleanPayloadMessageReceiver";

export default function App() {
  const dispatch = useAppDispatch();
  const socket = io(`http://localhost:3100`);
  socket.connect();

  useEffect(() => {
    NumberPayloadMessageReceiver(dispatch, socket);
    BooleanPayloadMessageReceiver(dispatch, socket);
  });

  return (
    <div>
      <InfoRow />
      <UpperRowWarningLights />
      <LowerRowWarningLights />
    </div>
  );
}
