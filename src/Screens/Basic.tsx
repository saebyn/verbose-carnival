import { useRef } from "react";
import useTextJumble from "../useTextJumble";

interface BasicProps {
  text: string;
  title: string;
}

export default function Basic({text, title}: BasicProps): JSX.Element {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useTextJumble(titleRef);

  return (
    <div className="screen-content">
      <p>{text}</p>
      <h1 ref={titleRef}>{title}</h1>
    </div>
  )
}