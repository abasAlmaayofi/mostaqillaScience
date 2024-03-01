import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-screen  pt-8 flex flex-col justify-start items-center bg-black">
      <div className="flex gap-2">
        <Link
          href="https://twitter.com/MostaqillaSc"
          className="p-1 bg-white text-black rounded-full"
        >
          <FaTwitter size={20} />
        </Link>
        <Link
          href="https://www.tiktok.com/@mostaqilla_sc"
          className="p-1 bg-white text-black rounded-full"
        >
          {" "}
          <FaTiktok size={20} />
        </Link>
        <Link
          href="https://www.instagram.com/mostaqilla_sc/"
          className="p-1 bg-white text-black rounded-full"
        >
          {" "}
          <FaInstagram size={20} />
        </Link>
      </div>
      <div className="text-sm text-gray-300 flex gap-4 mt-6">
        <Link href="">تسجيل</Link>
        <Link href="">الملفات</Link>
        <Link href="">إعلانات</Link>
        <Link href=""> حساب المعدل التراكمي </Link>
        <Link href=""> الصفحة الرئيسية</Link>
      </div>
      <div className="mt-4 font-trika pt-4 w-full flex justify-center">
        <Button className="bg-white rounded-xl">تواصل</Button>
      </div>
      <div className="mt-4 border-t border-white w-[80%] flex justify-center py-4">
        <p className="text-xs text-gray-400">
          جميع حقوق النشر &copy; محفوظة للقائمة المستقلة | كلية العلوم
        </p>
      </div>
    </div>
  );
}
