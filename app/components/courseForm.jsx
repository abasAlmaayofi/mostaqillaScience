import { Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Button } from "@nextui-org/button";
const CourseForm = ({ onAddCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [creditHours, setCreditHours] = useState(0);
  const [grade, setGrade] = useState("A+");

  const handleAddCourse = () => {
    if (courseName && creditHours > 0 && grade) {
      const newCourse = {
        courseName,
        creditHours,
        grade,
      };

      onAddCourse(newCourse);
      setCourseName("");
      setCreditHours(0);
      setGrade("A+");
    } else {
      alert("Please enter valid course details.");
    }
  };

  return (
    <div className="font-mono flex gap-2 flex-row-reverse">
      <div>
        <p className="text-right font-bold">المقرر</p>
        <Input
          dir="rtl"
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </div>
      <div>
        <p className="text-right font-bold">الوحدات</p>
        <Input
          type="number"
          dir="rtl"
          className="h-full"
          value={creditHours}
          onChange={(e) => setCreditHours(Number(e.target.value))}
        />
      </div>
      <div>
        <p className="text-right font-bold">الدرجة</p>
        <Select
          className="h-full text-black w-[80px]"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          defaultSelectedKeys={[grade]}
        >
          <SelectItem key="A+" value="A+">
            A+
          </SelectItem>
          <SelectItem key="A" value="A">
            A
          </SelectItem>
          <SelectItem key="A-" value="A-">
            A-
          </SelectItem>
          <SelectItem key="B+" value="B+">
            B+
          </SelectItem>
          <SelectItem key="B" value="B">
            B
          </SelectItem>
          <SelectItem key="B-" value="B-">
            B-
          </SelectItem>
          <SelectItem key="C+" value="C+">
            C+
          </SelectItem>
          <SelectItem key="C" value="C">
            C
          </SelectItem>
          <SelectItem key="C-" value="C-">
            C-
          </SelectItem>
          <SelectItem key="D+" value="D+">
            D+
          </SelectItem>
          <SelectItem key="D" value="D">
            D
          </SelectItem>
          <SelectItem key="D-" value="D-">
            D-
          </SelectItem>
        </Select>
      </div>
      <div>
        <p style={{ opacity: 0 }}>-</p>
        <Button
          size="sm"
          color="primary"
          className="h-[70%] font-trika"
          onClick={handleAddCourse}
        >
          أضف
        </Button>
      </div>
    </div>
  );
};
export default CourseForm;
