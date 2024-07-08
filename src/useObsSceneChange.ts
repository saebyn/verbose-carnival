import { useEffect } from "react";

export default function useObsSceneChange(enabled: boolean, sceneName: string) {
  useEffect(() => {
    if (!enabled) {
      return;
    }
    window.obsstudio.setCurrentScene(sceneName);
  }, [enabled, sceneName]);
}