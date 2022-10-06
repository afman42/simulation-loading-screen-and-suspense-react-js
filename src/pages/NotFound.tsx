import { ReactElement } from "react";
import { CustomNavLink } from "../components";
export default function NotFound(): ReactElement {
  return (
    <div className="center-div" style={{ flexDirection: "column" }}>
      NotFound
      <CustomNavLink to="/" type="Button">
        Home
      </CustomNavLink>
    </div>
  );
}
