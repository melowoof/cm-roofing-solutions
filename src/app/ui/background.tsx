import Image from "next/image";

export default function Background({
  children,
  imgSrc,
}: {
  children: React.ReactNode;
  imgSrc: string;
}) {
  return (
    <div className="h-screen w-screen absolute">
      <div className="h-full w-full relative">
        <div className="absolute lg:m-16 m-10 bottom-0">{children}</div>
        <Image
          className="lg:p-16 p-10 blur-sm -z-10 object-cover"
          src={imgSrc}
          fill
          alt=""
        ></Image>
      </div>
    </div>
  );
}
