"use client";
import { Button } from "@nextui-org/button";
import Header from "./components/header";
import Screen from "./components/screen";
import Middle from "./components/middle";
import Footer from "./components/footer";
import { useRef } from "react";

export default function Home() {
  const refAdvertise = useRef();
  const refFiles = useRef();
  const handleClickAdvertise = () => {
    refAdvertise.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickFiles = () => {
    refFiles.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="">
      <Screen
        handleClickAdvertise={handleClickAdvertise}
        handleClickFiles={handleClickFiles}
      />
      <Middle refAdvertise={refAdvertise} refFiles={refFiles} />
      <Footer />
    </main>
  );
}
