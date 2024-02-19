'use client';
import {useState} from "react";
import clsx from "clsx";
import {motion, useAnimationControls} from "framer-motion";
import {useDebouncedCallback} from "use-debounce";
import Link from "next/link";

export function Close() {
  const [isShown, setIsShown] = useState(true);
  
  function handleClose() {
    setIsShown(false);
  }
  
  return (
    <motion.button
      className={clsx("rounded-full text-white bg-rose-950 w-10 h-10 font-bold cursor-auto")}
      initial={{scale: 1}}
      animate={{scale: isShown ? 1 : 0}}
      transition={{duration: 0.5}}
      onMouseEnter={handleClose}
    >X</motion.button>
  )
}

export function Yes() {
  return (
    <Link href="/yes">
      <button
        className="w-36 h-14 text-white bg-pink-600 rounded-2xl drop-shadow-lg absolute left-40 z-20">Yes
      </button>
    </Link>
  )
  
}

export function Yes2() {
  return (
    <Link href="/yes">
      <button
        className="w-full h-14 text-white bg-pink-600 rounded-2xl drop-shadow-lg">Yes
      </button>
    </Link>
  )
}

interface Stage {
  x: string,
  y: string,
  rotate?: number,
  width?: string
}

const stages: Stage[] = [
  {x: "-50%", y: "150%", width: "9rem"},
  {x: "-200%", y: "-150%", width: "9rem"},
  {x: "10%", y: "0", width: "9rem"},
  {x: "-255%", y: "0", width: "3.5rem", rotate: 0},
  {x: "-205%", y: "0", width: "3.5rem", rotate: 10}
];

export function No() {
  const controls = useAnimationControls();
  const [currentStage, setCurrentStage] = useState(0);
  const finalStage = stages.length - 1;
  
  async function animate(index: number) {
    console.log(index);
    const stage = stages[index];
    await controls.start({
      x: stage.x,
      y: stage.y,
      width: typeof stage?.width === 'string' ? stage.width : undefined,
      rotate: typeof stage?.rotate === 'number' ? stage.rotate : undefined,
      transition: {duration: 0.3},
    })
  }
  
  const handleNo = useDebouncedCallback(async () => {
    await animate(currentStage);
    if (currentStage != finalStage) setCurrentStage(prevState => prevState + 1);
  }, 300)
  
  return (
    <Link href={currentStage > 3 ? "/no" : "/"}>
      <motion.button
        className="w-36 h-14 text-white bg-rose-950 rounded-2xl drop-shadow-lg absolute right-40"
        animate={controls}
        onMouseEnter={handleNo}
        onMouseLeave={currentStage === finalStage ? async () => await animate(finalStage - 1) : () => {
        }}
      >No
      </motion.button>
    </Link>
  )
}

export function Back() {
  return (
    <Link href="/">
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-10 h-10">
        <g>
          <path fill="#000000" d="M224 480h640a32 32 0 110 64H224a32 32 0 010-64z"></path>
          <path fill="#000000"
                d="M237.248 512l265.408 265.344a32 32 0 01-45.312 45.312l-288-288a32 32 0 010-45.312l288-288a32 32 0 1145.312 45.312L237.248 512z"></path>
        </g>
      </svg>
    </Link>
  )
}