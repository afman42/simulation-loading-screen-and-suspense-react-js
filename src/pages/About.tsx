import { ReactElement } from "react";
import { useLoading } from "../context/LoadingContext";
import { CustomNavLink } from "../components";
export default function About(): ReactElement {
  return (
    <div className="center-div">
      <CustomNavLink to="/">Home</CustomNavLink>
    </div>
  );
}
