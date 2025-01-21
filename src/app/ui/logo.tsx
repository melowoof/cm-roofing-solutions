import Image from "next/image";
// import { motion } from "framer-motion";
// import { initialBlur, visible } from "./transitions";

export default function Logo({color = "black"}) {
  return (
    <div
      // initial={initialBlur}
      // animate={visible}
      // transition={{ duration: 1, delay: 0.3 }}
    >
      <Image
        className="h-fit"
        draggable={false}
        src={`/images/CM-Roofings-Solutions-${color}.svg`}
        alt="CM Roofings Solution"
        width={1043}
        height={296}
      ></Image>
    </div>
  );
}
