import Link from "next/link";
import {
  PiNumberCircleFiveFill,
  PiNumberCircleFourFill,
  PiNumberCircleOneFill,
  PiNumberCircleSixFill,
  PiNumberCircleThreeFill,
  PiNumberCircleTwoFill,
} from "react-icons/pi";

export default function StudentGuidelines() {
  return (
    <div className="flex md:flex-row flex-col-reverse font-trika justify-end lg:gap-80 md:gap-12 md:items-center items-end w-full bg-gradient-to-r from-gray-300 to-gray-200 my-4 p-2">
      {/* left */}
      <div>
        <div className="flex gap-1 justify-end items-center my-4">
          <Link
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:f60a4a79-5de5-4437-8006-919898083d5e"
            className="text-[10px] md:text-[11px] lg:text-[13px] tracking-wide text-gray-600 underline cursor-pointer"
          >
            دليل الطالب المستمر لكلية العلوم 2021/2020
          </Link>
          <PiNumberCircleFourFill size={30} className="text-[#0086d7]" />
        </div>
        <div className="flex gap-1 justify-end items-center my-4">
          <Link
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:00f22d35-d58c-4c03-ac34-a434278baaf4"
            className="text-[10px] md:text-[11px] lg:text-[13px]  tracking-wide text-gray-600 underline cursor-pointer"
          >
            دليل الطالب المستمر لكلية العلوم 2022/2021
          </Link>
          <PiNumberCircleFiveFill size={30} className="text-[#0086d7]" />
        </div>
        <div className="flex gap-1 justify-end items-center my-4">
          <Link
            href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:0fd8f2bc-f215-3257-9ae0-b0c9d8adfc73"
            className="text-[10px] md:text-[11px] lg:text-[13px]  tracking-wide text-gray-600 underline cursor-pointer"
          >
            دليل الطالب المستمر لكلية العلوم 2023/2022
          </Link>
          <PiNumberCircleSixFill size={30} className="text-[#0086d7]" />
        </div>
      </div>
      {/* right */}
      <div>
        <div className="flex gap-1 justify-end items-center">
          <Link
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:8b246f9c-27f1-4981-b231-1a0c3aad7a7c"
            className="text-[10px] md:text-[11px] lg:text-[13px]  tracking-wide text-gray-600 underline cursor-pointer"
          >
            دليل الطالب المستمر لكلية العلوم 2018/2017
          </Link>
          <PiNumberCircleOneFill size={30} className="text-[#0086d7]" />
        </div>
        <div className="flex gap-1 justify-end items-center my-4">
          <Link
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:6e23428f-1030-4998-9187-00e1a5abca8a"
            className="text-[10px] md:text-[11px] lg:text-[13px]  tracking-wide text-gray-600 underline cursor-pointer"
          >
            دليل الطالب المستمر لكلية العلوم 2019/2018
          </Link>
          <PiNumberCircleTwoFill size={30} className="text-[#0086d7]" />
        </div>
        <div className="flex gap-1 justify-end items-center">
          <Link
            href="https://documentcloud.adobe.com/link/track?uri=urn:aaid:scds:US:cc66f40a-718b-41e0-8afe-58cab9539ed0"
            className="text-[10px] md:text-[11px] lg:text-[13px]  tracking-wide text-gray-600 underline cursor-pointer"
          >
            دليل الطالب المستمر لكلية العلوم 2020/2019
          </Link>
          <PiNumberCircleThreeFill size={30} className="text-[#0086d7]" />
        </div>
      </div>
    </div>
  );
}
