import Image from "next/image";
import announcementImg from "../assets/advertisement.png";
import latestNewsImg from "../assets/latestnews.png";
import comingEventsImg from "../assets/comingevents.png";
import Link from "next/link";
import { RiArrowLeftDoubleLine } from "react-icons/ri";
import { supabase } from "../services/supabaseClient";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Skeleton } from "@nextui-org/react";
import Announcement from "./annoucements";

export default function Advertisement({ refAdvertise }) {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5,
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
  // };
  const [fetchedData, setFetchedData] = useState([{}]);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);

  const fetchData = async () => {
    const { data, error } = await supabase.from("announcements").select();
    if (error) throw error;
    console.log("fetchedData", data);
    setFetchedData(data);
  };

  const fetchImg1 = async () => {
    const { data, error } = supabase.storage
      .from("mostaqillaSc-main")
      .getPublicUrl("announcements/announcement1.png");
    setImg1(data);
    console.log("img1", data?.publicUrl);
    if (error) {
      console.log("img err1", error);
    }
  };

  const fetchImg2 = async () => {
    const { data, error } = supabase.storage
      .from("mostaqillaSc-main")
      .getPublicUrl("announcements/announcement2.png");
    setImg2(data);
    console.log("img2", data?.publicUrl);
    if (error) {
      console.log("img err2", error);
    }
  };

  const fetchImg3 = async () => {
    const { data, error } = supabase.storage
      .from("mostaqillaSc-main")
      .getPublicUrl("announcements/announcement3.png");
    setImg3(data);
    console.log("img3", data?.publicUrl);
    if (error) {
      console.log("img err3", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchImg1();
    fetchImg2();
    fetchImg3();
  }, []);
  return (
    <div className="w-full h-auto" ref={refAdvertise}>
      <h2 className="text-xl tracking-wide text-right font-trika mb-4">
        الإعلانات
      </h2>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        labels={false}
        showArrows={false}
        // transitionTime={3}
        // showThumbs={false}
        showStatus={false}
        className="w-full md:h-[450px] h-[200px]"
      >
        <Announcement img={img1?.publicUrl} fetchedData={fetchedData} num={1} />
        <Announcement img={img2?.publicUrl} fetchedData={fetchedData} num={2} />
        <Announcement img={img3?.publicUrl} fetchedData={fetchedData} num={3} />
      </Carousel>
    </div>
  );
}
