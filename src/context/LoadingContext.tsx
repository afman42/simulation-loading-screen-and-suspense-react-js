import { createContext, useState, useContext, useMemo } from "react";
import { Location, useLocation } from "react-router-dom";
import React from "react";

const LoadingContext = createContext<IuseLoading>({} as IuseLoading);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const location = useLocation();
  const funcLoad = () => {
    //console.log(location);
    setLoading(true);
    if (location.pathname !== "") {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const value = useMemo(
    () => ({
      loading,
      funcLoad,
    }),
    [loading]
  );

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export interface IuseLoading {
  loading: boolean;
  funcLoad: () => void;
}

export const useLoading = () => {
  return useContext(LoadingContext);
};
