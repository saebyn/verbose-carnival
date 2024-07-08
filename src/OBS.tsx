import { createContext, useEffect, useRef, useState } from "react";
import OBSWebSocket from "obs-websocket-js";

const OBS_URL = import.meta.env.VITE_OBS_URL as string;
const OBS_PASSWORD = import.meta.env.VITE_OBS_PASSWORD as string;

type OBSContextType = OBSWebSocket | null;

export const OBSContext = createContext<OBSContextType>(null);

const OBS = ({ children }: { children: React.ReactNode }) => {
  const obs = useRef<OBSWebSocket | null>(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (connected || obs.current) {
      return;
    }

    if (!OBS_URL) {
      console.error("OBS_URL not set!");
      return;
    }

    if (!OBS_PASSWORD) {
      console.error("OBS_PASSWORD not set!");
      return;
    }

    console.log("Connecting to OBS...");
    obs.current = new OBSWebSocket();
    obs.current.connect(OBS_URL, OBS_PASSWORD, { rpcVersion: 1 });
    obs.current.on("ConnectionOpened", () => {
      console.log("Connected to OBS!");
      setConnected(true);
    });
    obs.current.on("ConnectionError", (err) => {
      console.error("OBS error:", err);
      setConnected(false);
    });
    obs.current.on("ConnectionClosed", () => {
      console.log("Disconnected from OBS!");
      setConnected(false);
    });

    obs.current.on("CustomEvent", (msg) => {
      console.log("CustomEvent", msg);
    });

    return () => {
      if (connected) {
        console.log("Disconnecting from OBS on unmount...");
        if (obs.current) {
          obs.current.disconnect().then(() => {
            // Code inside the promise callback
          });
          obs.current.removeAllListeners();
        }
      }
    };
  }, []);

  const value = obs.current && connected ? obs.current : null;

  return <OBSContext.Provider value={value}>{children}</OBSContext.Provider>;
};

export default OBS;
