import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

export default function Announcement({ img, fetchedData, dir, num }) {
  return (
    <div className="w-full md:h-[450px] h-[200px] flex ">
      <div className="w-[50%] h-full">
        <div className="relative w-full h-full">
          <Image alt="announcement" src={img} layout="fill" />
        </div>
      </div>
      {fetchedData?.[0]?.id ? (
        <div className="w-[50%] overflow-scroll  h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2">
          <h2 className="text-sm py-1 border-b border-white md:text-xl">
            {fetchedData?.filter((obj) => obj?.id == num)[0]?.title}
          </h2>
          <p className="text-[10px] text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            {fetchedData?.filter((obj) => obj?.id == num)[0]?.description}
          </p>
          <Link
            className="mt-2 underline text-xs md:text-sm flex gap-1 items-center"
            href={
              fetchedData?.filter((obj) => obj?.id == num)[0]?.link
                ? fetchedData?.filter((obj) => obj?.id == num)[0]?.link
                : ""
            }
          >
            اقرأ أكثر <RiArrowLeftDoubleLine size={30} />
          </Link>
        </div>
      ) : (
        <div className="w-[50%] overflow-scroll  h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2">
          <Skeleton className="w-3/5 h-8 mb-6 rounded-lg bg-transparent">
            <div className="h-3 w-full rounded-lg bg-default-200/50"></div>
          </Skeleton>
          <div className="w-full h-auto flex flex-col gap-2 items-end mb-4">
            <Skeleton className="w-4/5 rounded-lg bg-transparent">
              <div className="h-3 w-full rounded-lg bg-default-200/50"></div>
            </Skeleton>{" "}
            <Skeleton className="w-4/5 rounded-lg bg-transparent">
              <div className="h-3 w-full rounded-lg bg-default-200/50"></div>
            </Skeleton>{" "}
            <Skeleton className="w-3/5 rounded-lg bg-transparent">
              <div className="h-3 w-full rounded-lg bg-default-200/50"></div>
            </Skeleton>{" "}
            {/* <Skeleton className="w-3/5 h-4 mb-6 rounded-lg bg-black/20 backdrop-blur-md" />
                <Skeleton className="w-3/5 h-4 mb-6 rounded-lg bg-black/20 backdrop-blur-md" /> */}
          </div>
          <Skeleton className="w-2/5 rounded-lg bg-transparent">
            <div className="h-6 w-full rounded-lg bg-default-200/50"></div>
          </Skeleton>{" "}
        </div>
      )}{" "}
      {/* <div className="w-[50%] h-full">
          <Image src={announcementImg} className="w-full h-full" />
        </div> */}
    </div>
  );
}
