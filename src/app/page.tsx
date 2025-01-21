"use client";
import Background from "./ui/background";
import Logo from "./ui/logo";
import SquareBlackButton from "./ui/buttons";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { inter } from "./ui/fonts";
import Image from "next/image";
// import Link from "next/link";
// import clsx from "clsx";
import { initialBlur, visible } from "./ui/transitions";
import FormPage from "./ui/form";
// import { services, ServiceType } from "./services/services";
import { scrollToId } from "./utils/util";

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const buttonOpacityRange = useTransform(
    scrollYProgress,
    [0, 0.1, 0.95, 1],
    [0, 1, 1, 0]
  );
  const logoOpacityRange = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const blur = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["blur(0px)", "blur(10px)"]
  );

  return (
    <>
      {/* <link rel="icon" href="/favicons/favicon.png" sizes="any" /> */}
      <section ref={targetRef} className="relative ">
        <div className="absolute z-10 w-screen h-full pointer-events-none">
          <div className="sticky top-0 flex items-end justify-end h-screen p-5">
            <motion.div
              className="pointer-events-auto"
              style={{ opacity: buttonOpacityRange }}
            >
              <SquareBlackButton
                text={"Get a Quote"}
                onClick={() => scrollToId("form")}
              />
            </motion.div>
          </div>
        </div>

        <section id="home" className="block h-screen mb-40 ">
          <Background imgSrc={"/images/beautiful-brown-metal-roof.webp"}>
            <motion.p
              initial={initialBlur}
              animate={visible}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-0 left-0 lg:w-96 min-w-40 max-w-96 text-white m-10 font-sans lg:text-lg md:text-md text-xs opacity-80"
            >
              CM Roofing Solutions is an expert in roofing for homes,
              businesses, and industrial properties in{" "}
              <span className="text-orange-200">Orangeville</span>,{" "}
              <span className="text-orange-200">Muskoka</span>,{" "}
              <span className="text-orange-200">Dufferin</span>,{" "}
              <span className="text-orange-200">Simcoe County</span>, and{" "}
              <span className="text-orange-200">the surrounding regions</span>.
              Our company&apos;s top priority is delivering exceptional quality
              and service that exceeds your expectations. We take pride in
              upholding the highest standards in the industry and ensuring your
              complete satisfaction.
            </motion.p>
          </Background>
          {/* Logo element */}
          <div className=" h-full pt-32 pb-80 relative">
            <div className="w-full flex sticky justify-center top-4 md:top-10">
              <motion.div
                initial={initialBlur}
                animate={visible}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ opacity: logoOpacityRange, filter: blur }}
                className=" lg:w-1/2 w-3/4"
              >
                <Logo color={"white"} />
                <motion.div className="pointer-events-auto flex justify-center lg:mt-20 mt-10">
                  <SquareBlackButton
                    text={"Get a Quote"}
                    onClick={() => scrollToId("form")}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* BUTTON ELEMENT */}
          <motion.div className="button fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <SquareBlackButton text={"Get a Quote"} /> */}
          </motion.div>
        </section>

        {/* SECOND SECTION */}
        <SecondSection />

        {/* SERVICES SECTION */}
        {/* <ServicesSection /> */}

        {/* ABOUT SECTION */}
        <AboutSection />
        <AboutUsDetails />

        <ReviewsSection />
      </section>

      <div id="form">
        <FormPage />
      </div>
      <Footer />
    </>
  );
}

function SecondSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const opacity = [
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    useTransform(scrollYProgress, [0.2, 0.5], [0, 1]),
    useTransform(scrollYProgress, [0.3, 0.6], [0, 1]),
    useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
  ];
  const blur = [
    useTransform(scrollYProgress, [0, 0.2], ["blur(10px)", "blur(0px)"]),
    useTransform(scrollYProgress, [0.2, 0.4], ["blur(10px)", "blur(0px)"]),
    useTransform(scrollYProgress, [0.3, 0.5], ["blur(10px)", "blur(0px)"]),
    useTransform(scrollYProgress, [0.4, 0.6], ["blur(10px)", "blur(0px)"]),
  ];

  return (
    <section ref={targetRef} className=" relative h-[200vh]">
      {/* Left side */}
      <div className="flex lg:flex-row sticky top-0 h-screen flex-col">
        <div className="w-1/2 pt-14 pl-14 pr-8 flex flex-col items-center">
          <motion.h1
            style={{ opacity: opacity[0], filter: blur[0] }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className={`${inter.className}  lg:text-8xl md:text-5xl text-4xl`}
          >
            ROOFING DONE
          </motion.h1>
          {/* 1st image */}
          <div className="h-full w-full lg:px-20 pb-14 pt-6 flex items-center">
            <motion.div
              style={{ opacity: opacity[2], filter: blur[2] }}
              transition={{ delay: 0.25 * 5, duration: 0.8 }}
              className="h-full"
            >
              <Image
                className="h-full object-cover"
                src={"/images/cf-shingle_barkwood.webp"}
                width={2560}
                height={1920}
                // fill
                alt="Barkwood shingle"
              ></Image>
              <p className="font-serif text-xl mt-1">Barkwood shingle</p>
            </motion.div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-1/2 flex flex-col items-center pt-14 pr-14 pl-8">
          <motion.div
            style={{ opacity: opacity[3], filter: blur[3] }}
            transition={{ delay: 0.25 * 5, duration: 0.8 }}
            className="flex py-10 flex-col"
          >
            <Image
              className="object-cover h-full"
              src={"/images/bituminous-shingles.webp"}
              width={2000}
              height={1324}
              alt="Bituminous shingles"
            ></Image>
            <p className="font-serif text-md mt-1">
              Quality roofing, covered with bituminous shingles of brown color.
            </p>
          </motion.div>
          <motion.h1
            style={{ opacity: opacity[1], filter: blur[1] }}
            transition={{ delay: 0.25 * 2, duration: 0.8 }}
            className={`${inter.className} lg:text-8xl md:text-5xl text-4xl`}
          >
            THE RIGHT WAY
          </motion.h1>
        </div>
      </div>
    </section>
  );
}

// function ServicesSection() {
//   return null;

//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({ target: targetRef });
//   const x = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "-70%"]);

//   return (
//     <section id="services" ref={targetRef} className="relative h-[500vh]">
//       <div className="sticky top-0 h-[100vh] flex flex-col justify-center overflow-hidden ">
//         <motion.ul
//           initial={{ translateX: "-100%", opacity: 0 }}
//           whileInView={{ translateX: "0", opacity: 1 }}
//           transition={{ ease: "easeInOut", duration: 0.6 }}
//           className="flex flex-col p-4 pb-10 w-fit "
//         >
//           {services.map((service) => {
//             return (
//               <Link
//                 className={clsx(
//                   `font-serif opacity-55 hover:opacity-100 transition-opacity`
//                 )}
//                 href={service.url}
//                 key={service.id}
//               >
//                 {service.title}
//               </Link>
//             );
//           })}
//         </motion.ul>

//         <div className="flex">
//           <motion.div
//             style={{ x }}
//             initial={initialBlur}
//             whileInView={visible}
//             transition={{ duration: 0.5 }}
//             className="flex gap-4 pl-4"
//           >
//             {services.map((service) => {
//               return <Card service={service} key={service.id} />;
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Card({ service }: { service: ServiceType }) {
//   return (
//     <div className="flex w-[50vw] h-[15vw] ">
//       <Link href={service.url} className="h-full">
//         <Image
//           className="h-full object-cover hover:-translate-y-1 transition-transform w-fit"
//           src={service.imgSrc}
//           // src={"/images/services/asphalt-shingles.webp"}
//           width={500}
//           height={300}
//           alt={service.title}
//         ></Image>
//       </Link>
//       <h1
//         className={`${inter.className} ml-4 lg:text-5xl md:text-3xl text-black w-1/2 `}
//       >
//         {service.title}
//       </h1>
//     </div>
//   );
// }

function AboutSection() {
  return (
    <section className="relative">
      {/* ABOUT US HEADING */}
      <div className="h-full w-full absolute">
        <div className="sticky lg:top-6 md:top-10 top-20 flex justify-start z-10">
          <div className="w-1/2 px-10">
            <h1
              className={`${inter.className} 2xl:text-9xl xl:text-7xl lg:text-7xl md:text-7xl text-5xl`}
            >
              ABOUT US
            </h1>
          </div>
        </div>
      </div>

      <section className="h-[150vh] w-full pt-40">
        <div className="sticky top-0 flex w-full h-screen px-10 py-10 gap-10 ">
          {/* LEFT SIDE */}
          <div
            id="about-us"
            className="w-1/2 h-full flex flex-col gap-4 justify-end"
          >
            <motion.p
              // initial={initialBlur}
              // whileInView={visible}
              // viewport={{ once: true, amount: 0.5 }}
              // transition={{ duration: 0.5 * 1 }}
              // style={{ opacity: opacity[0], filter: blur[0] }}
              className="font-serif lg:text-2xl lg:pr-20 antialiased"
            >
              With 30 years of combined experience in the industry, we have the
              skills and expertise to tackle any roofing project, from minor
              repairs to full replacements. We take our responsibilities
              seriously, which is why we are fully licensed and insured, giving
              you the peace of mind that you&apos;re working with a reputable
              and safe company.
            </motion.p>
            <motion.div
              // initial={initialBlur}
              // whileInView={visible}
              // viewport={{ once: true, amount: 0.5 }}
              // transition={{ duration: 0.5 * 3 }}
              className="h-1/2 flex justify-center"
            >
              <Image
                className="object-cover w-full h-full"
                src={
                  "/images/about-us/Landmark-Pro-CertainTeed-Asphalt-Shingle-Roofing-CM-Roofing-Solutions-1.webp"
                }
                width={1290}
                height={964}
                alt=""
              ></Image>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 h-full flex flex-col gap-4">
            <motion.div
              initial={initialBlur}
              whileInView={visible}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 * 3 }}
              className="w-full "
            >
              <Image
                src={"/images/about-us/landmark-shingles-CertainTeed.webp"}
                width={1610}
                height={1074}
                alt=""
              ></Image>
            </motion.div>
            <motion.p
              initial={initialBlur}
              whileInView={visible}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 * 1 }}
              className="font-serif lg:text-xl lg:pr-20 antialiased"
            >
              Our commitment to quality workmanship is second to none, and we
              use only the best materials to ensure that each project meets our
              high standards of excellence. We do not subcontract work and
              provide a seamless and stress-free experience with your new roof.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="h-[150vh] wfull">
        <div className="sticky top-0 flex w-full h-screen px-10 py-10 gap-20">
          <div className="w-2/5 h-full flex flex-col gap-4 justify-end">
            <motion.div
              initial={initialBlur}
              whileInView={visible}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 * 3 }}
              className="h-1/2 flex justify-center"
            >
              <Image
                className="object-cover"
                src={
                  "/images/about-us/construction-worker-on-a-renovation-roof-the-house-installed-new-shingles.webp"
                }
                width={2000}
                height={1125}
                alt=""
              ></Image>
            </motion.div>
            <motion.p
              initial={initialBlur}
              whileInView={visible}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 * 1 }}
              className="font-serif lg:text-xl lg:pr-20 antialiased"
            >
              We understand that roofing projects can be expensive, which is why
              we offer competitive pricing without sacrificing quality. When you
              choose us for your roofing needs, you can expect a team that is
              dedicated to your satisfaction, providing exceptional service and
              quality workmanship.
            </motion.p>
          </div>
          <div className="w-3/5 h-full flex flex-col gap-4 pt-10">
            <motion.p
              initial={initialBlur}
              whileInView={visible}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 * 1 }}
              className="font-serif lg:text-xl lg:pr-20 antialiased"
            >
              We believe that great customer service is just as important as
              great roofing, which is why we strive to provide excellent service
              and communication throughout every project.
            </motion.p>
            <motion.div
              initial={initialBlur}
              whileInView={visible}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 * 3 }}
              className="h-2/4 "
            >
              <Image
                className="object-cover h-full"
                src={
                  "/images/about-us/CM-Roofing-Solutions-Project-Photos-2.webp"
                }
                alt=""
                width={2064}
                height={1548}
              ></Image>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}

function AboutUsDetails() {
  return (
    <section className="relative h-[100vh] w-screen">
      <div className="h-full w-full -z-10 absolute">
        <Image
          className="h-full w-full object-cover blur-sm p-16"
          src={"/images/about-us/cf-shingle_barkwood_05_1.FUMVAQ-scaled.webp"}
          fill
          // width={2560}
          // height={1920}
          alt=""
        ></Image>
      </div>
      <div className="grid grid-cols-3 justify-center h-full w-full items-center gap-16 text-white p-40">
        <div className="flex flex-col gap-4 h-1/3">
          <h1 className={`${inter.className} lg:text-4xl `}>Owner Operated</h1>
          <p className="font-serif lg:text-xl">
            From start to finish, we are involved with every step of the
            process. We maintain contact until every last detail is finished.
          </p>
        </div>
        <div className="flex items-center flex-col gap-4  h-1/3">
          <h1 className={`${inter.className} lg:text-4xl`}>
            30 Years of Experience
          </h1>
          <p className="font-serif lg:text-xl">
            Our team has combined experience of over 30 years, leading us to
            take great pride in delivering high-quality services while
            maintaining efficient project timelines and proven industry
            experience.
          </p>
        </div>
        <div className="flex flex-col gap-4  h-1/3 ">
          <h1 className={`${inter.className} lg:text-4xl`}>
            Satisfaction Guaranteed
          </h1>
          <p className="font-serif lg:text-xl">
            With our commitment to excellence, we&apos;re confident that we can
            make a noticeable and affordable difference on your next roofing
            project.
          </p>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      reviewAuthor: "Ethan Hayes",
      reviewText:
        '"I recently had my roof replaced by CM Roofing Solutions and I couldn\'t be happier with the results. Chris and his crew were professional, prompt, and efficient throughout the entire process. They worked tirelessly to ensure that my roof was completed on time and within budget. I was impressed with their attention to detail and the quality of their work. I highly recommend this company to anyone in need of roofing services."',
    },
    {
      reviewAuthor: "Caleb Ross",
      reviewText:
        "“I had a leaky roof that needed to be repaired and I'm so glad I chose this company to do the job. Chris and his team were knowledgeable, friendly, and provided excellent service. They quickly identified the problem and were able to fix it in a timely manner. The pricing was fair and they even provided a warranty on their work. I have since recommended them to my friends and family.”",
    },
    {
      reviewAuthor: "Isabella Foster",
      reviewText:
        "”After a severe storm damaged my roof, I was worried about finding a reputable roofing company to make the necessary repairs. Fortunately, I came across this company and I'm so glad I did. They were responsive, reliable, and did an outstanding job repairing my roof. The team was professional and took the time to explain the process and answer all of my questions. I would definitely use this company again and recommend them to others in need of roofing services.”",
    },
    {
      reviewAuthor: "Julie Booth",
      reviewText:
        "”Chris and his team did a fabulous job with my roof. They got the job done quickly and cleanly, at a fair price! Chris recommended the colour and I love it! Thanks so much!”",
    },
    // {
    //   reviewAuthor: "Chantelle Boyes",
    //   reviewText:
    //     "”Chris was extremely professional and thorough upon our initial meeting for a quote to redo the roof on both my drive shed and guest cabin. He also pointed out a few other areas that he noticed (such as small strip of roof over a bay window that had been previously missed in 2016 when the roof on the house was done). I was excited to get some of these other details dealt with and repaired too. Chris and his crew worked extremely hard and surprisingly fast to strip double layers of decaying shingles from the buildings, even in the hottest days of summer that we had experienced so far. They did a wonderful clean up of the mess and debris. I found Chris to be priced competitively, have exceptional attention to detail and was a pleasure to work with. I should also mention he was able to match up the shingles on these two buildings perfectly to my main house roof to creative a polished and cohesive look. Amazing! CM Roofing IS the Solution. Contact them today! I will be referring them to anyone in need of a roof.”",
    // },
  ];
  const [reviewPage, setReviewPage] = useState(1);

  return (
    <section className="w-screen lg:h-[100vh] h-[70vh] flex items-center">
      <div className="h-full w-full flex flex-col items-center lg:p-40 px-20 gap-5">
        <div className="h-full w-full flex items-end">
          <Review
            key={reviews[reviewPage - 1].reviewAuthor}
            reviewText={reviews[reviewPage - 1].reviewText}
            reviewAuthor={reviews[reviewPage - 1].reviewAuthor}
          />
        </div>
        <div className="">
          <ReviewNavButton
            reviewPage={reviewPage}
            setReviewPage={setReviewPage}
            numReviews={reviews.length}
          />
        </div>
      </div>
    </section>
  );
}

type ReviewType = { reviewText: string; reviewAuthor: string };

function Review({ reviewText, reviewAuthor }: ReviewType) {
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.015 } },
  };
  const word = {
    hidden: { opacity: 0.3, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="xl:text-5xl lg:text-3xl font-serif">
        <motion.p
          className="flex flex-wrap xl:gap-4 lg:gap-2 gap-1 h-fit max-h-[50vh]"
          variants={sentence}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {reviewText.split(" ").map((string, index) => {
            return (
              <motion.span
                key={string + "-" + index}
                variants={word}
              >{`${string} `}</motion.span>
            );
          })}
        </motion.p>
      </div>
      <p className="font-bold lg:text-3xl font-serif">{reviewAuthor}</p>
    </div>
  );
}

function ReviewNavButton({
  reviewPage,
  setReviewPage,
  numReviews,
}: {
  reviewPage: number;
  setReviewPage: React.Dispatch<React.SetStateAction<number>>;
  numReviews: number;
}) {
  return (
    <div className="font-bold flex flex-row text-sm gap-2">
      <div className="w-[10px] h-[10px]">
        {reviewPage > 1 && (
          <button
            onClick={() => {
              setReviewPage((prevPage) => prevPage - 1);
            }}
          >
            <Image
              className="rotate-180"
              src={"icons/triangle.svg"}
              width={10}
              height={10}
              alt=""
            ></Image>
          </button>
        )}
      </div>
      <div className="">{reviewPage}</div>
      <div className="w-10 flex justify-center items-center">
        <div className="border border-black h-0 w-full"></div>
      </div>
      <div className="">{numReviews}</div>
      <div className="w-[10px] h-[10px]">
        {reviewPage < numReviews && (
          <button
            onClick={() => {
              setReviewPage((prevPage) => prevPage + 1);
            }}
          >
            <Image
              src={"icons/triangle.svg"}
              width={10}
              height={10}
              alt=""
            ></Image>
          </button>
        )}
      </div>
    </div>
  );
}

function Footer() {
  const email = "info@cmroofingsolutions.ca";

  return (
    <section className="w-screen h-[50vh] bg-black flex flex-col text-white justify-end overflow-hidden">
      <div className="flex flex-row h-full w-full justify-center gap-40 p-10">
        <div className="w-1/6">
          <Logo color={"white"} />
        </div>
        <div className="w-3/6 flex flex-col">
          {/* {services.map((card) => {
            return (
              <Link
                className={clsx(
                  `opacity-80 hover:opacity-100 transition-opacity lg:text-xl leading-tight`
                )}
                href={card.url}
                key={card.id}
              >
                {card.title}
              </Link>
            );
          })} */}
        </div>
        <div id="contacts" className="w-2/6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-2xl">Contact Us</h1>
            <div className="flex flex-col opacity-50 text-xs">
              <a href="tel:+19057577663">(905) 757 - 7663</a>
              <a href={`mailto:${email}`}>info@cmroofingsolutions.ca</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Serving Areas:</p>
            <div className="opacity-50 text-xs">
              <p>Muskoka,</p>
              <p>Dufferin,</p>
              <p>Simcoe County,</p>
              <p>and the surrounding areas.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-end w-full overflow-hidden flex justify-center text-nowrap gap-6 mb-4 font-serif">
        <div className="opacity-20">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-20">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-50">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-20">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
        <div className="opacity-20">
          © 2025 CM Roofing Solutions. All Rights Reserved.
        </div>
      </div>
    </section>
  );
}
