import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/*<div className="h-64 w-64">*/}
        <Image className="h-64 w-64" src={"/dancing-heart.gif"} alt='' width={624} height={624}/>
      {/*</div>*/}
      <div>
        <h1 className="font-bold text-3xl text-transparent gradient-text">Yay let's go!</h1>
      </div>
    </div>
  )
}
