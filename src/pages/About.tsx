import { ReactElement } from "react";
import { useLoading } from "../context/LoadingContext";
import { CustomNavLink } from "../components";
export default function About(): ReactElement {
  return (
    <CustomNavLink to="/" type="Link">
      Home
    </CustomNavLink>
  );
}
