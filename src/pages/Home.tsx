import { ReactElement } from "react";
import { useLoading } from "../context/LoadingContext";
import { CustomNavLink } from "../components";

export default function Home(): ReactElement {
  return (
    <div className="center-div">
      <CustomNavLink to="/about">About</CustomNavLink>
    </div>
  );
}
