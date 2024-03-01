import Advertisement from "./advertisement";
import GeneralFiles from "./generalFiles";
import StudentGuidelines from "./studentGuidelines";

export default function Middle({ refAdvertise, refFiles }) {
  return (
    <div className="p-8 flex flex-col w-screen h-auto">
      <Advertisement refAdvertise={refAdvertise} />
      <StudentGuidelines />
      <GeneralFiles refFiles={refFiles} />
    </div>
  );
}
