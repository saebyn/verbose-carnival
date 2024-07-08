import { useContext, useState } from "react";
import { OBSContext } from "./OBS";
import styles from "./OBSDock.module.css";

const CAMERA_SOURCE = import.meta.env.VITE_CAMERA_SOURCE as string;

function NewSplash() {
  const obs = useContext(OBSContext);

  const [countdownTimeSeconds, setCountdownTimeSeconds] = useState("300");

  const handleDisableCameraClick = async () => {
    if (!obs) {
      console.error("OBS not connected!");
      return;
    }

    console.log("Disabling camera...");

    obs.call("BroadcastCustomEvent", {
      eventData: {
        type: "disableCamera",
      },
    });

    return;

    /*
    // Find the camera source ID
    const sources = await obs.call("GetSceneItemList", {
      sceneName: "Test",
    });

    const cameraSource = sources.sceneItems.find(
      (item) => item.sourceName === CAMERA_SOURCE
    );

    if (!cameraSource) {
      console.error("Could not find camera source!");
      return;
    }

    // disable camera via websocket
    await obs.call("SetSceneItemEnabled", {
      sceneItemEnabled: false,
      sceneName: "Test",
      sceneItemId: cameraSource.sceneItemId as number,
    });
    */
  };

  const handleResetCountdown = () => {
    if (!obs) {
      console.error("OBS not connected!");
      return;
    }

    console.log("Resetting countdown...");

    obs.call("BroadcastCustomEvent", {
      eventData: {
        type: "ResetCountdown",
      },
    });
  };

  const handleCountdownTimeChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    setCountdownTimeSeconds(event.target.value);
  };

  const handleSetCountdown: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (!obs) {
      console.error("OBS not connected!");
      return;
    }

    const timeSeconds = parseInt(countdownTimeSeconds, 10);

    console.log("Setting countdown...");

    obs.call("BroadcastCustomEvent", {
      eventData: {
        type: "ChangeCountdown",
        timeSeconds,
      },
    });
  };

  return (
    <>
      <button className={styles.button} onClick={handleDisableCameraClick}>
        Disable Camera
      </button>

      <button className={styles.button} onClick={handleResetCountdown}>
        Reset Countdown
      </button>

      {/* set countdown time via websocket */}
      <input
        type="number"
        min="0"
        max="999"
        step="1"
        value={countdownTimeSeconds}
        onChange={handleCountdownTimeChange}
      />
      <button className={styles.button} onClick={handleSetCountdown}>
        Set Countdown
      </button>
    </>
  );
}

export default NewSplash;
