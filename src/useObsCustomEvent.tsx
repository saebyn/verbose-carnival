import { useContext } from "react";
import { OBSContext } from "./OBS";
import { JsonObject } from "type-fest";

function useObsCustomEvent(
  event: string,
  callback: (arg0: JsonObject) => void
) {
  const obs = useContext(OBSContext);

  if (!obs) {
    console.error("OBS not connected!");
    return;
  }

  obs.on("CustomEvent", (msg: any) => {
    console.log("(useObsCustomEvent) CustomEvent", msg);
    if (msg.type === event) {
      callback(msg);
    }
  });
}

export default useObsCustomEvent;
