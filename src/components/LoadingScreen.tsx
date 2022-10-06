import { ReactElement } from "react";

export default function LoadingScreen(props: { text: string }): ReactElement {
  return <div className="center-div">Loading from {props.text}...</div>;
}
