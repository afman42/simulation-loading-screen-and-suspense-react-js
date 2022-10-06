import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { useLoading } from "../context/LoadingContext";
export default function CustomNavLink(props: {
  to: string;
  children: React.ReactNode;
  type: "Link" | "Button";
}): React.ReactElement {
  const navigate = useNavigate();
  const { funcLoad } = useLoading();
  const navigateFunction = () => {
    funcLoad();
    navigate("/");
  };

  if (props.type === "Button") {
    return (
      <button
        onClick={() => {
          navigateFunction();
        }}
      >
        {props.children}
      </button>
    );
  } else {
    return (
      <NavLink to={props.to} onClick={() => funcLoad()}>
        {props.children}
      </NavLink>
    );
  }
}
