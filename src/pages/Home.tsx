import { ReactElement } from "react";
import { useLoading } from "../context/LoadingContext";
import { CustomNavLink } from "../components";

export default function Home(): ReactElement {
  return (
    <CustomNavLink to="about" type="Link">
      About
    </CustomNavLink>
  );
}
