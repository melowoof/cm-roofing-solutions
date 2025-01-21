"use client";

import Link from "next/link";
import { mauline } from "./fonts";
import { motion } from "framer-motion";
import { scrollToId } from "../utils/util";

export default function Navbar() {
  return (
    <div
      className={`${mauline.className} w-screen text-black lg:text-2xl h-20 py-4 flex fixed z-50 justify-center`}
    >
      <div className="flex justify-between lg:w-3/4 lg:gap-10 gap-4">
        <div className="flex lg:gap-10 gap-4">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1 * 0.2, duration: 0.5 }}
            className=""
          >
            <button
              // href={"/"}
              onClick={() => scrollToId("home")}
              className="hover:underline hover:underline-offset-8 underline-offset-4 transition-all"
            >
              Home
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 2 * 0.2, duration: 0.5 }}
            className=""
          >
            <button
              // href={"/"}
              onClick={() => scrollToId("services")}
              className="hover:underline hover:underline-offset-8 underline-offset-4 transition-all"
            >
              Services
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 3 * 0.2, duration: 0.5 }}
            className=""
          >
            <button
              // href={"/"}
              onClick={() => scrollToId("about-us")}
              className="hover:underline hover:underline-offset-8 underline-offset-4 transition-all"
            >
              About Us
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 4 * 0.2, duration: 0.5 }}
            className=""
          >
            <Link
              href={"/"}
              className="hover:underline hover:underline-offset-8 underline-offset-4 transition-all"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 5 * 0.2, duration: 0.5 }}
            className=""
          >
            <Link
              href={"/"}
              className="hover:underline hover:underline-offset-8 underline-offset-4 transition-all"
            >
              FAQ
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1 }}
          className=""
        >
          <button
            // href={"/contact-us"}
            onClick={() => scrollToId("contacts")}
            className="underline-offset-4 underline underline-black hover:underline-offset-8 transition-all"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// type LinkType = {
//   href: string;
//   title: string;
// };

// const href: LinkType[] = [
//   { href: "/", title: "Home" },
//   { href: "/about-us", title: "About Us" },
//   { href: "/services", title: "Our Services" },
//   { href: "/projects", title: "Projects" },
//   { href: "/faq", title: "FAQ" },
// ];
