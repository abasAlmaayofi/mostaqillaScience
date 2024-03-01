import Image from "next/image";
import announcementImg from "../assets/advertisement.png";
import latestNewsImg from "../assets/latestnews.png";
import comingEventsImg from "../assets/comingevents.png";
import Link from "next/link";
import { RiArrowLeftDoubleLine } from "react-icons/ri";

export default function Advertisement({ refAdvertise }) {
  return (
    <div className="w-full h-auto" ref={refAdvertise}>
      <div className="w-full md:h-[450px] h-[200px] flex ">
        <div className="w-[50%] h-full">
          <Image src={announcementImg} className="w-full h-full" />
        </div>
        <div className="w-[50%] overflow-scroll  h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2">
          <h2 className="text-sm py-1 border-b border-white md:text-xl">
            الإعلانات
          </h2>
          <p className="text-xs text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            تبـارك القائمة المستقلة للطلبة والطالبات المقبوليـن في كليـة العلـوم
            .. للاستفسـار عن تخصصات الكلية يرجى التواصل مع الأرقام التاليـة . ..
            للاستفسـار عن تخصصات الكلية يرجى التواصل مع الأرقام التاليـة .{" "}
          </p>
          <Link
            className="mt-2 underline text-sm flex gap-1 items-center"
            href=""
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
            أحدث الأخبار
          </h2>
          <p className="text-xs text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            شكـراً لـ 833 طالب و طالبة ممن منحونا الثقة و شكراً لمن اعفانا من
            حمل هذه المسؤولية . كما ستـبقى القائمة المستقلة في كلية العلوم في
            خدمتكم دائماً .. فيك أمضي أجدد العهد
          </p>
          <Link
            className="mt-2 underline text-sm flex gap-1 items-center"
            href=""
          >
            اقرأ أكثر <RiArrowLeftDoubleLine size={30} />
          </Link>
        </div>
        <div className="w-[50%] h-full">
          <Image src={latestNewsImg} className="w-full h-full" />
        </div>
      </div>
      <div className="w-full md:h-[450px] h-[200px] flex ">
        <div className="w-[50%] h-full">
          <Image src={comingEventsImg} className="w-full h-full" />
        </div>
        <div className="w-[50%] overflow-scroll  h-full bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] flex flex-col items-end text-white font-trika  p-2">
          <h2 className="text-sm py-1 border-b border-white md:text-xl">
            مـسابـقات{" "}
          </h2>
          <p className="text-xs text-right text-gray-200 mt-3 leading-relaxed md:text-lg md:leading-loose">
            السؤال: ما اسم مرضعة النبيّ عليه الصلاة والسلام؟ شروط المسابقة: -
            طالب أو طالبة في كلية العلوم. -متابعة حساب القائمة في تويتر - رتويت
            للتغريدة الجـائزة: 50KD
          </p>
          <Link
            className="mt-2 underline text-sm flex gap-1 items-center"
            href=""
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
