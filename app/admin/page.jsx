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
import secureLocalStorage from "react-secure-storage";
import { notification } from "antd";
import Image from "next/image";
import { MuiFileInput } from "mui-file-input";
import { supabase } from "../services/supabaseClient";
import Header2 from "../components/header2";

export default function Admin() {
  const fileTypes = ["JPG", "PNG"];
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [id, setId] = useState(1);
  const { push } = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [file, setFile] = useState(null);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "إشعار",
      description: "تم نشر إعلانك بنجاح",
    });
  };

  const handleChange = (file) => {
    setFile(file);
  };

  const updateAnnouncment = async (e) => {
    e.preventDefault();
    console.log("title", title);
    try {
      const { error: error1 } = await supabase
        .from("announcements")
        .update({ title: title, description: description })
        .eq("id", 1);
      const { data, error: error2 } = await supabase.storage
        .from("mostaqillaSc-main")
        .upload(`announcements/announcements1.png`, file, {
          cacheControl: "3600",
          upsert: false,
        });
      console.log(file);
      console.log("success");
      openNotificationWithIcon("success");
      if (error1 || error2) {
        console.log("an error has occured!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickAdvertise = () => {
    push("/");
  };
  const handleClickFiles = () => {
    push("/");
  };

  useEffect(() => {
    let auth = !!secureLocalStorage.getItem("user")?.aud;
    if (!auth) {
      push("/");
    } else {
      setLoaded(true);
    }
  }, []);

  if (!loaded) {
    return <div></div>;
  }

  return (
    <>
      {contextHolder}
      <main className="">
        <div className="relative w-screen h-[250px] bg-gradient-to-b to-black from-gray-800">
          <Header2 />
          <div className="w-full h-full flex flex-col justify-center items-center z-0">
            <p className="text-2xl md:text-3xl text-white font-trika relative -top-10">
              صفحة الإدارة
            </p>
            <p className="text-lg relative -top-5 flex gap-2 text-right text-gray-300 font-trika">
              حياك <FaLongArrowAltLeft size={25} />
            </p>
          </div>
        </div>
        <form
          enctype="multipart/form-data"
          onSubmit={updateAnnouncment}
          className="w-screen bg-gray-200 h-auto flex justify-center items-center py-8"
        >
          {file ? (
            <Image src={file} alt="testfile" width={300} height={300} />
          ) : (
            ""
          )}
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
                <Input
                  isRequired
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div dir="rtl" className="flex flex-col items-start gap-2 mt-4">
                {" "}
                <label htmlFor="description" className="font-trika text-md">
                  الوصف
                </label>
                <Textarea
                  isRequired
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mt-8">
                {" "}
                <p className="font-trika text-md ml-auto w-fit mb-2 ">صورة</p>
                {/* <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                /> */}
                <MuiFileInput value={file} onChange={handleChange} />
                <p className="text-small text-default-500 text-right mt-2">
                  في حالة عدم وجود صورة، سيتم اختيار صورة عشوائية من قاعدة
                  البيانات{" "}
                </p>
              </div>
            </CardBody>
            <Divider />
            <CardFooter dir="rtl">
              <Button
                type="submit"
                variant="solid"
                color="primary"
                className="text-lg font-bold tracking-wide"
              >
                نشر
              </Button>
            </CardFooter>
          </Card>
        </form>
        <Footer />
      </main>
    </>
  );
}
