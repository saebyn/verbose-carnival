import { useRef } from "react";
import useCountdown from "../useCountdown";
import useObsSceneChange from "../useObsSceneChange";
import useObsCustomEvent from "../useObsCustomEvent";
import useTextJumble from "../useTextJumble";

import "./Countdown.css";

interface CountdownProps {
  text: string;
  title: string;
  timeSeconds: number;
}

export default function Countdown({
  text,
  title,
  timeSeconds,
}: CountdownProps): JSX.Element {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextJumble(titleRef);

  const {
    value: remainingTimeSeconds,
    changeTime,
    reset,
  } = useCountdown(timeSeconds);
  const countdownTimeFormatted = new Date(remainingTimeSeconds * 1000)
    .toISOString()
    .substring(14, 14 + 5);

  useObsCustomEvent("ResetCountdown", reset);
  useObsCustomEvent("ChangeCountdown", (data) =>
    changeTime(data.timeSeconds as number)
  );

  useObsSceneChange(remainingTimeSeconds === 0, "Starting");

  return (
    <div className="screen-content">
      <p>{text}</p>
      <h1 ref={titleRef}>{title}</h1>

      <p className="countdown">
        <span className="countdown-time">{countdownTimeFormatted}</span>
      </p>
    </div>
  );
}
