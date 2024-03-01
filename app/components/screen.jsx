import Image from "next/image";
import CollageOfScienceImg from "../assets/collageOfScienceImg.png";
import Header from "./header";
import { MdNumbers } from "react-icons/md";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import ArrowIcon from "../assets/icons/arrowIcon";
import { Button } from "@nextui-org/button";
export default function Screen({ handleClickAdvertise, handleClickFiles }) {
  return (
    <div className="relative w-screen h-screen">
      <Image
        alt="collageOfScience"
        src={CollageOfScienceImg}
        className="absolute top-0 w-screen h-screen z-0"
      />
      <div className="w-screen h-screen bg-gradient-to-b from-black/90 to-transparent relative z-10">
        <Header
          handleClickFiles={handleClickFiles}
          handleClickAdvertise={handleClickAdvertise}
        />
        <div className="flex md:justify-between justify-around items-center w-screen relative lg:top-[150px] md:top-[50px] top-[100px] text-white z-20">
          <div className="relative lg:-top-20  -top-[53px] md:ml-20 ml-2 w-32 md:w-44  border border-white rounded-lg  p-2 h-28">
            <p className="md:text-3xl text-2xl text-right mb-1 flex text-white items-center justify-end">
              <MdNumbers /> 2240
            </p>
            <p className=" text-right tracking-wide md:text-xl text-gray-300">
              عدد الزائريين
            </p>
          </div>

          <div className="md:mr-20 mr-3 text-wrap md:w-1/2 w-fit  lg:text-5xl text-2xl font-trika font-extralight leading-loose lg:leading-[80px] text-right ">
            <p>
              تقدم لكم <span>القائمة المستقلة</span> كل ما يخص الطلبة في كلية
              العلوم
            </p>
            <p className="mt-8 text-gray-300 text-sm tracking-wide font-trika flex gap-2 justify-end items-center">
              قائمة إسلامية وطنية معتدلة
              <HiOutlineArrowLongLeft size={30} />
              {/* من رحم الأسئلة, تنبثق الإجابات المضيئة, كلية العلوم: نستكشف,
              نبتكر, نلهم */}
            </p>
            <p className="mt-2 mr-6 text-gray-300 text-sm tracking-wide font-trika flex gap-2 justify-end items-center">
              تسعى لإستقلالية الحركة الطلابية{" "}
              <HiOutlineArrowLongLeft size={30} />
              {/* من رحم الأسئلة, تنبثق الإجابات المضيئة, كلية العلوم: نستكشف,
              نبتكر, نلهم */}
            </p>
          </div>
        </div>
        <div
          onClick={handleClickAdvertise}
          className="absolute bottom-20 backdrop-blur-sm bg-[#0086d7]/20 rounded-lg p-2  right-0 md:mr-20 md:mb-6 mr-6 mb-16 cursor-pointer hover:backdrop-blur-lg"
        >
          {/* <Button variant="light" size="lg"> */}
          <ArrowIcon width={40} height={100} />
          {/* </Button> */}
        </div>
      </div>
    </div>
  );
}
