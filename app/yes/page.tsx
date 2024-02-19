import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div>
        <Image src={"/dancing-heart.gif"} alt='' width={336.5} height={175}/>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-transparent gradient-text">Yay let's go!</h1>
      </div>
    </div>
  )
}