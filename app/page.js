"use client";
import { Button } from "@nextui-org/button";
import Header from "./components/header";
import Screen from "./components/screen";
import Middle from "./components/middle";
import Footer from "./components/footer";
import { useEffect, useRef } from "react";
import { supabase } from "./services/supabaseClient";

export default function Home() {
  // var visitorsCounter;
  // const updateVisitorsCount = async (e) => {
  //   try {
  //     const { data, error: error1 } = await supabase
  //       .from("stat")
  //       .select()
  //       .eq("id", 1);
  //     visitorsCounter = data?.[0]?.visitorsCounter;
  //     visitorsCounter += 1;
  //     console.log("visitors", visitorsCounter);
  //     const { error: error2 } = await supabase
  //       .from("stat")
  //       .upsert({ id: 1, visitorsCounter: visitorsCounter });
  //   } catch (error1) {
  //     console.log(error1);
  //   }
  // };
  // useEffect(() => {
  //   updateVisitorsCount();
  // }, []);
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
