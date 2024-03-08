"use client";
import { Button } from "@nextui-org/button";
import Header from "./components/header";
import Screen from "./components/screen";
import Middle from "./components/middle";
import Footer from "./components/footer";
import { useEffect, useRef } from "react";
import { supabase } from "./services/supabaseClient";
import secureLocalStorage from "react-secure-storage";

export default function Home() {
  var visitorsCounter;
  const updateVisitorsCount = async (e) => {
    visitorsCounter = secureLocalStorage.getItem("visitorsCounter");
    if (!visitorsCounter) {
      visitorsCounter = secureLocalStorage.setItem("visitorsCounter", 1);
    }

    try {
      visitorsCounter += 1;
      console.log("visitors", visitorsCounter);
      const { error } = await supabase
        .from("stat")
        .upsert({ id: 1, visitorsCounter: visitorsCounter });
      secureLocalStorage.setItem("visitorsCounter", visitorsCounter);
    } catch (error) {
      console.log(err);
    }
  };
  useEffect(() => {
    updateVisitorsCount();
  }, []);
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
