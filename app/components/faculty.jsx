import Image from "next/image";
import comingEventImg from "../assets/comingevents.png";

export default function Faculty() {
  return (
    <div className="w-full p-2 bg-gradient-to-b from-[#f6df55] to-[#e6c612] h-[200px] mt-4 flex gap-4 justify-start items-center overflow-y-hidden overflow-x-scroll">
      <div className="flex h-full p-2 w-[500px] gap-4">
        <Image src={comingEventImg} className="w-40 h-full" />
        <div className="w-[300px] h-full font-trika">
          <p className="w-full text-[12px] text-right">
            Abas Almaayofi, head of it
          </p>
          <p className="w-full text-[10px] text-gray-700 text-right mt-2">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            commodi eius perspiciatis vel"
          </p>
        </div>
      </div>
      <div className="flex h-full p-2 w-[500px] gap-4">
        <Image src={comingEventImg} className="w-40 h-full" />
        <div className="w-[300px] h-full">
          <p className="w-full">Abas Almaayofi, head of it</p>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            commodi eius perspiciatis vel, provident alias molestiae ratione
            ducimus ipsa natus, nulla doloremque, dolores iste amet cupiditate
            ex ea architecto deleniti?
          </p>
        </div>
      </div>
      <div className="flex h-full p-2 w-[500px] gap-4">
        <Image src={comingEventImg} className="w-40 h-full" />
        <div className="w-[300px] h-full">
          <p>Abas Almaayofi, head of it</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            commodi eius perspiciatis vel, provident alias molestiae ratione
            ducimus ipsa natus, nulla doloremque, dolores iste amet cupiditate
            ex ea architecto deleniti?
          </p>
        </div>
      </div>
      <div className="flex h-full p-2 w-[500px] gap-4">
        <Image src={comingEventImg} className="w-40 h-full" />
        <div className="w-[300px] h-full">
          <p>Abas Almaayofi, head of it</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            commodi eius perspiciatis vel, provident alias molestiae ratione
            ducimus ipsa natus, nulla doloremque, dolores iste amet cupiditate
            ex ea architecto deleniti?
          </p>
        </div>
      </div>
      <div className="flex h-full p-2 w-[500px] gap-4">
        <Image src={comingEventImg} className="w-40 h-full" />
        <div className="w-[300px] h-full">
          <p>Abas Almaayofi, head of it</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            commodi eius perspiciatis vel, provident alias molestiae ratione
            ducimus ipsa natus, nulla doloremque, dolores iste amet cupiditate
            ex ea architecto deleniti?
          </p>
        </div>
      </div>
    </div>
  );
}
