import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

export default function Layout(): ReactElement {
  return (
    <div className="center-div">
      <Outlet />
    </div>
  );
}
