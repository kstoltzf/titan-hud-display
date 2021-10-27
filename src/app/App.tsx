import UpperRowWarningLights from "../upper-row-warning-lights/UpperRowWarningLights";
import LowerRowWarningLights from "../lower-row-warning-lights/LowerRowWarningLights";
import InfoRow from "../info-row/InfoRow";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import WebSocketConfiguration from "./WebSocketConfiguration";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    WebSocketConfiguration(dispatch);
  });

  return (
    <div>
      <UpperRowWarningLights />
      <InfoRow />
      <LowerRowWarningLights />
    </div>
  );
}
