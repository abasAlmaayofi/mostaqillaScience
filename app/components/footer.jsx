import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="w-screen  pt-8 flex flex-col justify-start items-center bg-black">
      <div className="flex gap-2">
        <Link
          href="https://twitter.com/MostaqillaSc"
          className="p-1 bg-white text-black rounded-full"
        >
          <FaXTwitter size={30} />
        </Link>
        <Link
          href="https://www.tiktok.com/@mostaqilla_sc"
          className="p-1 bg-white text-black rounded-full"
        >
          {" "}
          <FaTiktok size={30} />
        </Link>
        <Link
          href="https://www.instagram.com/mostaqilla_sc/"
          className="p-1 bg-white text-black rounded-full"
        >
          {" "}
          <FaInstagram size={30} />
        </Link>
      </div>
      <div className="text-sm text-gray-300 flex gap-4 mt-6">
        {/* <Link href="">تسجيل</Link> */}
        {/* <Link href="">الملفات</Link> */}
        {/* <Link href="">إعلانات</Link> */}
        <Link href="/admin"> صفحة الإدارة </Link>
        <Link href="/gpa"> حساب المعدل التراكمي </Link>
        <Link href="/"> الصفحة الرئيسية</Link>
      </div>
      <div className="mt-4 font-trika pt-4 w-full flex justify-center">
        <Link
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="bg-white rounded-xl px-4 py-2"
        >
          تواصل
        </Link>
      </div>
      <div className="mt-4 border-t border-white w-[80%] flex justify-center py-4">
        <p className="text-xs text-gray-400">
          جميع حقوق النشر &copy; محفوظة للقائمة المستقلة | كلية العلوم
        </p>
      </div>
    </div>
  );
}
