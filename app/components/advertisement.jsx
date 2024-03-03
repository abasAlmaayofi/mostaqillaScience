import Image from "next/image";
import announcementImg from "../assets/advertisement.png";
import latestNewsImg from "../assets/latestnews.png";
import comingEventsImg from "../assets/comingevents.png";
import Link from "next/link";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { supabase } from "../services/supabaseClient";
import { useEffect, useState } from "react";

export default function Advertisement({ refAdvertise }) {
  const [fetchedData, setFetchedData] = useState([{}]);
  const fetchData = async () => {
    const { data, error } = await supabase.from("announcements").select();
    if (error) throw error;
    console.log(data[0]);
    setFetchedData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full h-auto" ref={refAdvertise}>
      <div className="w-full md:h-[450px] h-[200px] flex ">
        <div className="w-[50%] h-full">
          <Image
            alt="announcement"
            src={announcementImg}
            className="w-full h-full"
          />
        </div>
        <div className="w-[50%] overflow-scroll  h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2">
          <h2 className="text-sm py-1 border-b border-white md:text-xl">
            {fetchedData?.filter((obj) => obj?.id == 1)[0]?.title}
          </h2>
          <p className="text-[10px] text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            {fetchedData?.filter((obj) => obj?.id == 1)[0]?.description}
          </p>
          <Link
            className="mt-2 underline text-xs md:text-sm flex gap-1 items-center"
            href={
              fetchedData?.filter((obj) => obj?.id == 1)[0]?.link
                ? fetchedData?.filter((obj) => obj?.id == 1)[0]?.link
                : ""
            }
          >
            اقرأ أكثر <RiArrowLeftDoubleLine size={30} />
          </Link>
        </div>{" "}
        {/* <div className="w-[50%] h-full">
          <Image src={announcementImg} className="w-full h-full" />
        </div> */}
      </div>
      <div className="w-full md:h-[450px] h-[200px] flex ">
        {/* <div className="w-[30%] h-full">
          <Image src={announcementImg} className="w-full h-full" />
        </div> */}
        <div className="w-[50%]   h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2 overflow-scroll">
          <h2 className="text-sm py-1 border-b border-white md:text-xl">
            {fetchedData?.filter((obj) => obj?.id == 2)[0]?.title}
          </h2>
          <p className="text-[10px] text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            {fetchedData?.filter((obj) => obj?.id == 2)[0]?.description}
          </p>
          <Link
            className="mt-2 underline text-xs md:text-sm flex gap-1 items-center"
            href={
              fetchedData?.filter((obj) => obj?.id == 2)[0]?.link
                ? fetchedData?.filter((obj) => obj?.id == 2)[0]?.link
                : ""
            }
          >
            اقرأ أكثر <RiArrowLeftDoubleLine size={30} />
          </Link>
        </div>
        <div className="w-[50%] h-full">
          <Image
            alt="latestNews"
            src={latestNewsImg}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full md:h-[450px] h-[200px] flex ">
        <div className="w-[50%] h-full">
          <Image
            alt="comingEvents"
            src={comingEventsImg}
            className="w-full h-full"
          />
        </div>
        <div className="w-[50%] overflow-scroll  h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2">
          <h2 className="text-sm py-1 border-b border-white md:text-xl">
            {fetchedData?.filter((obj) => obj?.id == 3)[0]?.title}
          </h2>
          <p className="text-[10px] text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            {fetchedData?.filter((obj) => obj?.id == 3)[0]?.description}
          </p>
          <Link
            className="mt-2 underline text-xs md:text-sm flex gap-1 items-center"
            href={
              fetchedData?.filter((obj) => obj?.id == 3)[0]?.link
                ? fetchedData?.filter((obj) => obj?.id == 3)[0]?.link
                : ""
            }
          >
            اقرأ أكثر <RiArrowLeftDoubleLine size={30} />
          </Link>
        </div>{" "}
        {/* <div className="w-[50%] h-full">
          <Image src={announcementImg} className="w-full h-full" />
        </div> */}
      </div>
    </div>
  );
}
