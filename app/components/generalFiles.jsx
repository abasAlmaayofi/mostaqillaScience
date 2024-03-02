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
          {/* 1 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/systemSymbols.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9zeXN0ZW1TeW1ib2xzLnBkZiIsImlhdCI6MTcwOTIxOTMxMywiZXhwIjoxNzQwNzU1MzEzfQ.Pj7d3MjvSJs0STgtDRMi0Q1IMmjq1sG_j1Odg_JwYrw&t=2024-02-29T15%3A08%3A33.724Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/registeration.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9yZWdpc3RlcmF0aW9uLnBkZiIsImlhdCI6MTcwOTIxOTU3MywiZXhwIjoxODY2ODk5NTczfQ.kIyBwh_cReZsVISWnHyYgD-eWtnUPs-hzDw9e2vA1ac&t=2024-02-29T15%3A12%3A53.190Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/stepsOfRegisteration.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9zdGVwc09mUmVnaXN0ZXJhdGlvbi5qcGVnIiwiaWF0IjoxNzA5MjE5ODQwLCJleHAiOjE3NDA3NTU4NDB9.pXoZ83avS6tX-jjj9p6WiGowJzajIxIPtAT_p3XUTvk&t=2024-02-29T15%3A17%3A20.013Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/backupMajor.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9iYWNrdXBNYWpvci5qcGVnIiwiaWF0IjoxNzA5MjE5OTg1LCJleHAiOjE3NDA3NTU5ODV9.fYLFQ-aKIZ738EPEFDDb0n5Aqkj86Fq5Pv4Z9JeAAsw&t=2024-02-29T15%3A19%3A44.905Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/transfer.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi90cmFuc2Zlci5wZGYiLCJpYXQiOjE3MDkyMjAyMjksImV4cCI6MTc0MDc1NjIyOX0.wAw7OyodcQdqpjsFD7eIYF7H8vplqqJTyN639nvP2FI&t=2024-02-29T15%3A23%3A49.511Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/gradingScale.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9ncmFkaW5nU2NhbGUuanBlZyIsImlhdCI6MTcwOTIyMDUyMiwiZXhwIjoxNzQwNzU2NTIyfQ.YvOKUULecQZ92h6K90DyzIkHP-hPHEtXJbXci_ueLUE&t=2024-02-29T15%3A28%3A42.497Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/progressFaculty.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9wcm9ncmVzc0ZhY3VsdHkuanBlZyIsImlhdCI6MTcwOTIyMDY3MSwiZXhwIjoxNzQwNzU2NjcxfQ.F61lQDh1eD6YXUQPktf1nms-7mWsuz2z7VQRObDnAHE&t=2024-02-29T15%3A31%3A11.832Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/moralValuesFaculty.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9tb3JhbFZhbHVlc0ZhY3VsdHkuanBlZyIsImlhdCI6MTcwOTIyMDc2NiwiZXhwIjoxNzQwNzU2NzY2fQ.ehgFpU3-vjPSogL0GagizKr-jr3deZHFiocxS4exaos&t=2024-02-29T15%3A32%3A46.656Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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

          {/* 9 */}
          <div className="flex justify-between w-full h-12 my-2">
            <div className="w-[20%] bg-gradient-to-bl  to-[#1d87ca] from-[#054c78] h-full flex justify-center items-center text-white">
              <Link
                href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/issueID.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9pc3N1ZUlELnBuZyIsImlhdCI6MTcwOTIyNzM2MywiZXhwIjoxNzQwNzYzMzYzfQ.kqi_6gkavD_KA6MLoU0h-kSDyhCZ_NOuMG0e_ZogLKY&t=2024-02-29T17%3A22%3A42.732Z"
                className="flex justify-center items-center gap-2"
              >
                <FaDirections size={25} />
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
                <span className="md:text-[13px] text-[10px]">إطلع</span>
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
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/allowance.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9hbGxvd2FuY2UucGRmIiwiaWF0IjoxNzA5MzIyODA2LCJleHAiOjE3NDA4NTg4MDZ9.Y1i9pH74gRb1JbF58dgYIFOcaXozzMawYoRRSTntNb0&t=2024-03-01T19%3A53%3A26.653Z"
            text="المكافأة الاجتماعيه"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/internalTransferTerms.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9pbnRlcm5hbFRyYW5zZmVyVGVybXMucGRmIiwiaWF0IjoxNzA5MzIyODQ0LCJleHAiOjE3NDA4NTg4NDR9.Mzp6c3ovzVNS7zERHKp_uq9_3EIp66_T2jJVG9Adhco&t=2024-03-01T19%3A54%3A05.061Z"
            text="شروط التحويل الداخلي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/externalTransferTerms.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9leHRlcm5hbFRyYW5zZmVyVGVybXMucGRmIiwiaWF0IjoxNzA5MzIyODIzLCJleHAiOjE3NDA4NTg4MjN9.tqlUeHWsJurs9SWaF6Utx0dZH6RKkHl9lHbPOxe70y0&t=2024-03-01T19%3A53%3A43.916Z"
            text="شروط التحويل الخارجي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/userfullInfo.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi91c2VyZnVsbEluZm8ucGRmIiwiaWF0IjoxNzA5MzIzMDk1LCJleHAiOjE3NDA4NTkwOTV9.Gjwl7JSXaoeLbNNSinraS51zmq2zx6_Z1Xk8OYYsdUE&t=2024-03-01T19%3A58%3A15.124Z"
            text="معلومات تهمك"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/majorSheets.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9tYWpvclNoZWV0cy5wZGYiLCJpYXQiOjE3MDkzMjI4OTMsImV4cCI6MTc0MDg1ODg5M30.hSSUDL-H9pRUPlCDbImecV7N9ShgJtlWuRk5bB1dgcU&t=2024-03-01T19%3A54%3A53.875Z"
            text="مجرشيت تخصصات كليه العلوم"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/summaryForMajors.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9zdW1tYXJ5Rm9yTWFqb3JzLnBkZiIsImlhdCI6MTcwOTMyMzA4MSwiZXhwIjoxNzQwODU5MDgxfQ.N3_HW1i0YEW5Ungw2VSQpXycVnE53qWYE0DyAfV6rgk&t=2024-03-01T19%3A58%3A01.353Z"
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
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/activateAccount.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9hY3RpdmF0ZUFjY291bnQucGRmIiwiaWF0IjoxNzA5MzIyNzUxLCJleHAiOjE4NjcwMDI3NTF9.aOUVniAsRNnTMHQpXSy7LUQB-d_obpae7lA4GoXRxS0&t=2024-03-01T19%3A52%3A31.591Z"
            text="تفعيل الحساب في تيمز"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/rareMajors.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9yYXJlTWFqb3JzLmpwZWciLCJpYXQiOjE3MDkzMjI5NjksImV4cCI6MTc0MDg1ODk2OX0.kg140m64p9krJHNIpYUBNHtW53LO8YJaPBM22lGyImw&t=2024-03-01T19%3A56%3A09.837Z"
            text="التخصصات النادره "
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/userfullInfo.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi91c2VyZnVsbEluZm8ucGRmIiwiaWF0IjoxNzA5MzIzMDk1LCJleHAiOjE3NDA4NTkwOTV9.Gjwl7JSXaoeLbNNSinraS51zmq2zx6_Z1Xk8OYYsdUE&t=2024-03-01T19%3A58%3A15.124Z"
            text="الإنذارات الجامعية"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/jobs.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9qb2JzLnBkZiIsImlhdCI6MTcwOTMyMjg3NSwiZXhwIjoxNzQwODU4ODc1fQ.idLPjBtVqQkxaTDJPOv_-oirZTQmoxqCbGUTax14npk&t=2024-03-01T19%3A54%3A35.941Z"
            text="مجالات العمل والمسمى الوظيفي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/perksOfCollageEmail.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9wZXJrc09mQ29sbGFnZUVtYWlsLnBkZiIsImlhdCI6MTcwOTMyMjk1NSwiZXhwIjoxNzQwODU4OTU1fQ.RJE1C5Qno1Opb3nrQdZgML-vDUa0LBw_B789fj4XB2g&t=2024-03-01T19%3A55%3A55.472Z"
            text="مميزات الايميل الجامعي"
          />
          <File
            href="https://pojlcikkchhymaiqcdex.supabase.co/storage/v1/object/sign/mostaqillaSc-main/numbersOfInterestTou.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtb3N0YXFpbGxhU2MtbWFpbi9udW1iZXJzT2ZJbnRlcmVzdFRvdS5wZGYiLCJpYXQiOjE3MDkzMjI5MjEsImV4cCI6MTc0MDg1ODkyMX0.5NKt-K_NIZZUvBx0cHOtMUJyB_KnjXT-15rt09-mFrE&t=2024-03-01T19%3A55%3A21.389Z"
            text="أرقام تهمك"
          />
        </div>
      </ScrollShadow>
    </div>
  );
}
