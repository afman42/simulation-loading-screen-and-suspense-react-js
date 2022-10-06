import { NavLink } from "react-router-dom";
import React from "react";
import { useLoading } from "../context/LoadingContext";
export default function CustomNavLink(props: {
  to: string;
  children: React.ReactNode;
}): React.ReactElement {
  const { funcLoad } = useLoading();
  return (
    <NavLink to={props.to} onClick={() => funcLoad()}>
      {props.children}
    </NavLink>
  );
}
