import Image from "next/image";
import {Close, No, Yes} from "@/app/ui/buttons";
export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen w-full bg-pink-700 shadow-vignette md:px-16 px-2">
      <div className="flex flex-col flex-shrink min-w-[22rem] w-[39rem] h-[26rem] bg-white rounded-lg relative">
        <div className="w-full h-20 flex items-center justify-end pr-5">
          <Close/>
        </div>
        <div className="grow flex flex-col">
          <div className="basis-1/2 flex items-center justify-center">
            <h1 className="font-bold text-2xl max-w-64 text-center">Will you be my valentine?</h1>
          </div>
          <div className="basis-1/2 flex flex-row justify-center gap-3">
            <Yes key="yes"/>
            <No key="no"/>
          </div>
        </div>
      </div>
    </main>
  
  );
}
