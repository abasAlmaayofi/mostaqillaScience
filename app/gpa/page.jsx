"use client";

import Footer from "../components/footer";
import { FaLongArrowAltLeft } from "react-icons/fa";
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
import Header2 from "../components/header2";
import CourseForm from "../components/courseForm";
import CourseList from "../components/courseList";

export default function Admin() {
  const [courses, setCourses] = useState([]);

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((course, i) => i !== index);
    setCourses(updatedCourses);
  };

  const gradePoints = {
    "A+": 4.0,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    "D-": 0.7,
  };

  const calculateGPA = () => {
    let totalGradePoints = 0;
    let totalCreditHours = 0;

    courses.forEach((course) => {
      totalGradePoints += gradePoints[course.grade] * course.creditHours;
      totalCreditHours += course.creditHours;
    });

    return totalCreditHours === 0 ? 0 : totalGradePoints / totalCreditHours;
  };

  return (
    <>
      <main>
        <div className="relative w-screen h-[250px] bg-gradient-to-b to-black from-gray-800">
          <Header2 />
          <div className="w-full h-full flex flex-col justify-center items-center z-0">
            <p className="text-2xl md:text-3xl text-white font-trika relative -top-10">
              حساب المعدل التراكمي{" "}
            </p>
            <p className="text-lg relative -top-5 flex gap-2 text-right text-gray-300 font-trika">
              حياك <FaLongArrowAltLeft size={25} />
            </p>
          </div>
        </div>
        <div className="w-screen h-[540px] bg-gray-200  flex justify-center items-center py-8">
          <Card className="min-w-[400px]">
            {/* <CardHeader className="flex gap-3" dir="rtl">
              <div className="flex flex-col">
                <p className="text-xl font-bold">إنشر إعلانك</p>
                <p className="text-small text-default-500">
                  هام: يمكنك عرض 3 إعلانات كحد أقصى على الصفحة الرئيسية، وسيؤدي
                  الإعلان الجديد إلى حذف آخر إعلان تم نشره
                </p>
              </div>
            </CardHeader>
            <Divider /> */}
            <CardBody className="min-h-[200px]">
              <CourseForm onAddCourse={handleAddCourse} />
              <CourseList
                courses={courses}
                onDeleteCourse={handleDeleteCourse}
                calculateGPA={calculateGPA}
              />
            </CardBody>
          </Card>
        </div>

        <Footer />
      </main>
    </>
  );
}
