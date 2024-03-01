"use client";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FileUploader } from "react-drag-drop-files";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Textarea,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export default function Admin() {
  const fileTypes = ["JPG", "PNG"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const { push } = useRouter();
  const handleClickAdvertise = () => {
    push("/");
  };
  const handleClickFiles = () => {
    push("/");
  };
  return (
    <main className="">
      <div className="relative w-screen h-[250px] bg-gradient-to-b to-black from-gray-800">
        <Header
          handleClickAdvertise={handleClickAdvertise}
          handleClickFiles={handleClickFiles}
          admin={true}
        />
        <div className="w-full h-full flex flex-col justify-center items-center z-0">
          <p className="text-2xl md:text-3xl text-white font-trika relative -top-10">
            صفحة الإدارة
          </p>
          <p className="text-lg relative -top-5 flex gap-2 text-right text-gray-300 font-trika">
            حياك <FaLongArrowAltLeft size={25} />
          </p>
        </div>
      </div>
      <div className="w-screen bg-gray-200 h-auto flex justify-center items-center py-8">
        {" "}
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3" dir="rtl">
            <div className="flex flex-col">
              <p className="text-xl font-bold">إنشر إعلانك</p>
              <p className="text-small text-default-500">
                هام: يمكنك عرض 3 إعلانات كحد أقصى على الصفحة الرئيسية، وسيؤدي
                الإعلان الجديد إلى حذف آخر إعلان تم نشره
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div dir="rtl" className="flex flex-col items-start gap-2 mt-4">
              <label htmlFor="title" className="font-trika text-md">
                العنوان
              </label>
              <Input name="title" />
            </div>
            <div dir="rtl" className="flex flex-col items-start gap-2 mt-4">
              {" "}
              <label htmlFor="description" className="font-trika text-md">
                الوصف
              </label>
              <Textarea name="description" />
            </div>
            <div className="mt-8">
              {" "}
              <p className="font-trika text-md ml-auto w-fit mb-2 ">صورة</p>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
              />
              <p className="text-small text-default-500 text-right mt-2">
                في حالة عدم وجود صورة، سيتم اختيار صورة عشوائية من قاعدة
                البيانات{" "}
              </p>
            </div>
          </CardBody>
          <Divider />
          <CardFooter dir="rtl">
            <Button
              variant="solid"
              color="primary"
              className="text-lg font-bold tracking-wide"
            >
              نشر
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Footer />
    </main>
  );
}
