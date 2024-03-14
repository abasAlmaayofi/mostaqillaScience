import Image from "next/image";
import CollageOfScienceImg from "../assets/collageOfScienceImg.png";
import Header from "./header";
import { MdNumbers } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import ArrowIcon from "../assets/icons/arrowIcon";
import { Button } from "@nextui-org/button";
import { useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { supabase } from "../services/supabaseClient";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function Screen({ handleClickAdvertise, handleClickFiles }) {
  const [visitorsCounter, setVisitorsCounter] = useState(null);
  const getVisitorsCount = async () => {
    const { data, error } = await supabase.from("stat").select().eq("id", 1);
    console.log("data visitors", data);
    setVisitorsCounter(data?.[0]?.visitorsCounter);
    if (error) {
      console.log("Err", error);
    }
    // return setVisitorsCounter(data);
  };
  useEffect(() => {
    getVisitorsCount();
  }, [visitorsCounter]);
  return (
    <div className="relative w-screen h-screen">
      <Image
        alt="collageOfScience"
        src={CollageOfScienceImg}
        className="absolute top-0 w-screen h-screen z-0"
      />
      <div className="w-screen h-screen bg-gradient-to-b from-[#152238] to-transparent relative z-10">
        <Header
          handleClickFiles={handleClickFiles}
          handleClickAdvertise={handleClickAdvertise}
        />
        <div className="flex md:justify-between justify-around items-center w-screen relative lg:top-[150px] md:top-[50px] top-[100px] text-white z-20">
          <div className="relative lg:-top-28  -top-[60px] md:ml-20 ml-2 w-32 md:w-44  border border-white rounded-lg  p-2 h-auto">
            {/* <p className="md:text-3xl text-2xl text-right mb-1 flex text-white items-center justify-end">
              <MdNumbers />{" "}
              {visitorsCounter ? JSON.stringify(visitorsCounter) : ""}
            </p>
            <p className=" text-right tracking-wide md:text-xl text-gray-300">
              عدد الزائريين
            </p> */}
            <p className="md:text-xl text-[11px] tracking-wide text-right mb-1 flex text-white items-center justify-end font-trika">
              ارقام طلبة
            </p>
            <div className="flex flex-row-reverse justify-start gap-2 items-center mt-2">
              <Button
                as={Link}
                size="sm"
                href="https://wa.me/96551153949"
                isIconOnly
                className="bg-tranparent/50 text-white border border-white"
              >
                <FaWhatsapp size={20} />
              </Button>
              <Button
                size="sm"
                as={Link}
                href="https://wa.me/96599282004"
                isIconOnly
                className="bg-tranparent/50 text-white border border-white"
              >
                <FaWhatsapp size={20} />
              </Button>
            </div>
            <p className="md:text-xl text-[11px] tracking-wide text-right mb-1 flex text-white items-center justify-end font-trika mt-2">
              ارقام طالبات
            </p>
            <div className="flex flex-row-reverse justify-start gap-2 items-center mt-2">
              <Button
                size="sm"
                as={Link}
                href="https://wa.me/96592257532"
                isIconOnly
                className="bg-tranparent/50 text-white border border-white"
              >
                <FaWhatsapp size={20} />
              </Button>
              <Button
                size="sm"
                as={Link}
                href="https://wa.me/96560052400"
                isIconOnly
                className="bg-tranparent/50 text-white border border-white"
              >
                <FaWhatsapp size={20} />
              </Button>
            </div>
          </div>

          <div className="md:mr-20 mr-3 text-wrap md:w-1/2 w-fit  lg:text-5xl text-2xl font-trika font-extralight leading-loose lg:leading-[80px] text-right ">
            <p>
              تقدم لكم{" "}
              <span className="bg-gradient-to-r font-ruwudu font-bold md:text-[60px] text-[35px] to-[#2aadff] from-[#0372b8] bg-clip-text text-transparent mx-2">
                القائمة
              </span>{" "}
              <span className="bg-gradient-to-r font-ruwudu font-bold md:text-[60px] text-[35px] to-[#2aadff] from-[#0372b8] bg-clip-text text-transparent ml-2">
                المستقلة
              </span>
              كل ما يخص الطلبة في{" "}
              <span className="bg-gradient-to-r font-ruwudu font-bold md:text-[60px] text-[35px] to-yellow-400 from-yellow-600  bg-clip-text text-transparent inline">
                كلية
              </span>{" "}
              <span className="bg-gradient-to-r font-ruwudu font-bold md:text-[60px] text-[35px] to-yellow-400 from-yellow-600 bg-clip-text text-transparent inline">
                العلـوم
              </span>
            </p>
            <p className="mt-8   text-gray-300 text-sm tracking-wide font-trika flex gap-2 justify-end items-center">
              <span className="pl-2 border-b border-[#2aadff] w-fit ml-auto leading-loose">
                قائمة إسلامية وطنية معتدلة
              </span>{" "}
              <GoDotFill size={30} />
              {/* من رحم الأسئلة, تنبثق الإجابات المضيئة, كلية العلوم: نستكشف,
              نبتكر, نلهم */}
            </p>
            <p className="mt-2 mr-6  text-gray-300 text-sm tracking-wide font-trika flex gap-2 justify-end items-center">
              <span className="pl-2 border-b w-[250px] border-[#2aadff] ml-auto leading-loose">
                تسعى لإستقلالية الحركة الطلابية{" "}
              </span>
              <GoDotFill size={30} />
              {/* من رحم الأسئلة, تنبثق الإجابات المضيئة, كلية العلوم: نستكشف,
              نبتكر, نلهم */}
            </p>
          </div>
        </div>
        <div
          onClick={handleClickFiles}
          className="absolute md:borrom-10 bottom-6 backdrop-blur-sm bg-[#0086d7]/20 rounded-lg p-2  right-0 md:mr-40 md:mb-0 mr-6 mb-10 cursor-pointer hover:backdrop-blur-lg"
        >
          {/* <Button variant="light" size="lg"> */}
          <ArrowIcon width={40} height={80} />
          {/* </Button> */}
        </div>
      </div>
    </div>
  );
}
