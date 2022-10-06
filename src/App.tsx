import { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LoadingScreen, Layout } from "./components";
import { useLoading } from "./context/LoadingContext";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  const { loading } = useLoading();
  return loading ? (
    <LoadingScreen text="Screen" />
  ) : (
    <Suspense fallback={<LoadingScreen text="Suspense" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
