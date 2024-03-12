import Link from "next/link";
import { FaDirections } from "react-icons/fa";
import { VscTriangleLeft } from "react-icons/vsc";
import File from "./files";
import { ScrollShadow } from "@nextui-org/react";

export default function GeneralFiles({ refFiles }) {
  return (
    <div className="mt-2 font-trika" ref={refFiles}>
      <h2 className="text-xl tracking-wide text-right">ملفات عامة</h2>
      <ScrollShadow className="mt-2 max-h-[500px] overflow-x-hidden">
        <div className="h-full">
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/facultyMission.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9mYWN1bHR5TWlzc2lvbi5qcGciLCJpYXQiOjE3MTAyNTE1NDcsImV4cCI6MTc0MTc4NzU0N30.6msx1LSw7qP4ms36IWePZbU6B6ODy5c9b1Nxlqzn6gs&t=2024-03-12T13%3A52%3A26.920Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                تعريف ومبادئ القائمة المستقلة في كلية العلوم{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/facultyAchievments.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9mYWN1bHR5QWNoaWV2bWVudHMuanBnIiwiaWF0IjoxNzEwMjUxNTYyLCJleHAiOjE3NDE3ODc1NjJ9.o7qYvQiFmxJbcGyF8sAfuXtqAC4zNbfCbMgnRMmc4Rg&t=2024-03-12T13%3A52%3A42.163Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                انجازات وتحركات القائمة المستقله{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 8 */}

          {/* 1 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/symbolsRegistration.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9zeW1ib2xzUmVnaXN0cmF0aW9uLnBkZiIsImlhdCI6MTcxMDI3MjQyMiwiZXhwIjoxNzQxODA4NDIyfQ.C718ZLmp-VXIecUlepYu92re1CfHtt058tXGDOeUOfU&t=2024-03-12T19%3A40%3A21.346Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                توضيح العلامات و الرموز الموجودة في السستم أثناء عملية التسجيل{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 2 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/registerationAndwithdraw.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9yZWdpc3RlcmF0aW9uQW5kd2l0aGRyYXcucGRmIiwiaWF0IjoxNzEwMjcyNDU5LCJleHAiOjE3NDE4MDg0NTl9.3fqvxmWXGD3a1-lczmorj8j9wvM7sa0V-_1ZJkxF3F4&t=2024-03-12T19%3A40%3A58.416Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                خطوات التسجيل والسحب وطباعة الجدول الدراسي في نظام التسجيل{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 3 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/bestList%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9iZXN0TGlzdCAoMSkuanBnIiwiaWF0IjoxNzEwMjcyNDgwLCJleHAiOjE3NDE4MDg0ODB9.DMUNFr0-mMPysAdmcET77PXHb58ozQMn0TY58YaK-a8&t=2024-03-12T19%3A41%3A19.776Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                اختيار القائمة المفضلة لك من المواد الدراسية{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 4 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/backupMajors.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9iYWNrdXBNYWpvcnMuanBnIiwiaWF0IjoxNzEwMjczMDI4LCJleHAiOjE3NDE4MDkwMjh9.M5qUw07RrqBj77rwIR5vwxcno_QCPxzZKsS_VdUa58g&t=2024-03-12T19%3A50%3A26.944Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                طريقة تحديد التخصص المساند عن طريق نظام التسجيل{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 5 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/transferSteps1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi90cmFuc2ZlclN0ZXBzMS5qcGciLCJpYXQiOjE3MTAyNzI1MjksImV4cCI6MTc0MTgwODUyOX0.iL-y7WKvEs6mY5ZzPdt-HPNMxevSbxBlVWAjrmrSVy0&t=2024-03-12T19%3A42%3A08.281Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                التحويل بين الكليات والتخصصات{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 6 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/gradingsScale.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9ncmFkaW5nc1NjYWxlLmpwZyIsImlhdCI6MTcxMDI3MjYyOSwiZXhwIjoxNzQxODA4NjI5fQ.ZgRHf0R6JDBG9T6MGSjTI3BaSZ2D9JwI5CDs5VebWEc&t=2024-03-12T19%3A43%3A48.738Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                سلم الدرجات المعتمدة في جامعه الكويت{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 7 */}

          {/* 9 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/issueID.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9pc3N1ZUlELnBuZyIsImlhdCI6MTcwOTIyNzM2MywiZXhwIjoxNzQwNzYzMzYzfQ.kqi_6gkavD_KA6MLoU0h-kSDyhCZ_NOuMG0e_ZogLKY&t=2024-02-29T17%3A22%3A42.732Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                إصدار الهوية الجامعية للطلبة{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 10 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/servicesAvailable.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9zZXJ2aWNlc0F2YWlsYWJsZS5wbmciLCJpYXQiOjE3MDkyMjc0NDYsImV4cCI6MTc0MDc2MzQ0Nn0.8Q554G-BqZmoy3t9LjaT2639ANOfeR68NZCTYv1xi7Q&t=2024-02-29T17%3A24%3A06.644Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">اطلع</span>
              </Link>
            </div>
            <div className="relative w-[80%] h-full bg-gray-200 flex justify-end items-center">
              <p className="mr-4 md:text-[16px] text-[12px] text-right text-gray-600">
                الخدمات العامة المتوفرة في كلية العلوم{" "}
              </p>
              <span className="absolute top-1/2 -right-[9px] -translate-y-1/2 text-[#34769f]">
                <VscTriangleLeft size={30} />
              </span>
            </div>
          </div>
          {/* 11 */}
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/allowanceSteps.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9hbGxvd2FuY2VTdGVwcy5qcGciLCJpYXQiOjE3MTAyNzI3NDksImV4cCI6MTc0MTgwODc0OX0.skhKhP96OEmzdu6hTn-n_Qo6rl15QaF7Wu7txy1n2jM&t=2024-03-12T19%3A45%3A48.257Z"
            text="المكافأة الاجتماعيه"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/InternalTransferConditions.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9JbnRlcm5hbFRyYW5zZmVyQ29uZGl0aW9ucy5wZGYiLCJpYXQiOjE3MTAyNTE1MDUsImV4cCI6MTc0MTc4NzUwNX0.hg4aMlmemiv3Xn4SLvQUl0rsqUuTI1l2IcYNMAk2GIk&t=2024-03-12T13%3A51%3A45.303Z"
            text="شروط التحويل الداخلي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/externalTransferConditions.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9leHRlcm5hbFRyYW5zZmVyQ29uZGl0aW9ucy5wZGYiLCJpYXQiOjE3MTAyNTE0NDYsImV4cCI6MTc0MTc4NzQ0Nn0.VmahFCj40NeBx-yEmSKY9KnlvnjAor_6_D-KQ8l3lUY&t=2024-03-12T13%3A50%3A46.428Z"
            text="شروط التحويل الخارجي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/interestingInfor.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9pbnRlcmVzdGluZ0luZm9yLnBkZiIsImlhdCI6MTcxMDI3Mjc5NywiZXhwIjoxNzQxODA4Nzk3fQ.dtBi6RzanIt0jjMs4_Cf9QTgCjNfL3LSY00gSmImHco&t=2024-03-12T19%3A46%3A36.061Z"
            text="معلومات تهمك"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/majorSheet.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9tYWpvclNoZWV0LnBkZiIsImlhdCI6MTcxMDI1MTM5NCwiZXhwIjoxNzQxNzg3Mzk0fQ.wR5aXXNpLZ_AlmPPZVoRUeQOB0eGpdggKlZ_9SzNvVY&t=2024-03-12T13%3A49%3A54.230Z"
            text="مجرشيت تخصصات كليه العلوم"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/ScienceMajorSummary.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9TY2llbmNlTWFqb3JTdW1tYXJ5LnBkZiIsImlhdCI6MTcxMDI1MTMzMywiZXhwIjoxNzQxNzg3MzMzfQ.xtt1nY6R-G1ogT_sfiiXk6oDehg_5Q2j6Ec8zYksB18&t=2024-03-12T13%3A48%3A52.815Z"
            text="نبذه عن تخصصات كليه العلوم"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/namesAndNumbers.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9uYW1lc0FuZE51bWJlcnMucGRmIiwiaWF0IjoxNzA5MzIyOTA3LCJleHAiOjE3NDA4NTg5MDd9.1PGQMe17hvneD84FKfaPrhnO2v90xrF4YMh1aZ_4xq0&t=2024-03-01T19%3A55%3A07.345Z"
            text="أسماء وأرقام بعض المقررات"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/buildingSymbols.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9idWlsZGluZ1N5bWJvbHMucGRmIiwiaWF0IjoxNzA5MzIyNzkyLCJleHAiOjE4NjcwMDI3OTJ9.4Vv7S8ZS96ts6J3OulxMndQPHNrBCYTrjHI9sYSGeyY&t=2024-03-01T19%3A53%3A12.169Z"
            text="رموز المباني"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/activeTeamsAccount.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9hY3RpdmVUZWFtc0FjY291bnQuanBnIiwiaWF0IjoxNzEwMjcyODI2LCJleHAiOjE3NDE4MDg4MjZ9.xkrh4TkRpOchnP8-UeOa7EOokUZWe_Bl3VcO0xRG1gc&t=2024-03-12T19%3A47%3A05.395Z"
            text="تفعيل الحساب في تيمز"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/rareMajors.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9yYXJlTWFqb3JzLmpwZWciLCJpYXQiOjE3MDkzMjI5NjksImV4cCI6MTc0MDg1ODk2OX0.kg140m64p9krJHNIpYUBNHtW53LO8YJaPBM22lGyImw&t=2024-03-01T19%3A56%3A09.837Z"
            text="التخصصات النادره "
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/warnings.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi93YXJuaW5ncy5wZGYiLCJpYXQiOjE3MTAyNzI4NTQsImV4cCI6MTc0MTgwODg1NH0.Bd5nRQYEDRuA4VqeK3k1mQKwUUX-zsWaj3iKucN-MOA&t=2024-03-12T19%3A47%3A33.637Z"
            text="الإنذارات الجامعية"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/jobDomains.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9qb2JEb21haW5zLnBkZiIsImlhdCI6MTcxMDI3Mjg3NSwiZXhwIjoxNzQxODA4ODc1fQ.swS7k3C2BvyQHTceqvvLHCuXzi7do8_9niMzopTTZa4&t=2024-03-12T19%3A47%3A54.621Z"
            text="مجالات العمل والمسمى الوظيفي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/perksofemail.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9wZXJrc29mZW1haWwucGRmIiwiaWF0IjoxNzEwMjcyOTExLCJleHAiOjE3NDE4MDg5MTF9.Bkmg9HfkJEnmkcLsv5hxZ1wMcnkXJTXfQwMXMXe88z0&t=2024-03-12T19%3A48%3A30.762Z"
            text="مميزات الايميل الجامعي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/numbersInterseting.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9udW1iZXJzSW50ZXJzZXRpbmcuanBnIiwiaWF0IjoxNzEwMjczMDUxLCJleHAiOjE3NDE4MDkwNTF9.y9y2qH9dc0WAFqlx5kymPZOXpFcg-A2sbeoTdNIjvHo&t=2024-03-12T19%3A50%3A49.999Z"
            text="أرقام تهمك"
          />
        </div>
      </ScrollShadow>
    </div>
  );
}
