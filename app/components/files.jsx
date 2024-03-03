import Link from "next/link";
import { FaDirections } from "react-icons/fa";
import { VscTriangleLeft } from "react-icons/vsc";

export default function File({ href, text }) {
  return (
    <div className="flex justify-between w-full h-12 my-2">
      <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
        <Link href={href} className="flex justify-center items-center gap-2">
          <FaDirections size={25} />
          <span className="md:text-[13px] text-[10px]">اطلع</span>
        </Link>
      </div>
      <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
        <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
          {text}
        </p>
        <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
          <VscTriangleLeft size={30} />
        </span>
      </div>
    </div>
  );
}
