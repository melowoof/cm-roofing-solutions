import SquareBlackButton from "./buttons";
import { services } from "../services/services";
import { inter } from "./fonts";
import { ChevronDown } from "lucide-react";

export default function FormPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <section className="w-screen h-[100vh]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-2/4 flex flex-col gap-4">
          <h1
            className={`${inter.className} lg:text-6xl text-3xl flex justify-end`}
          >
            Get in touch
          </h1>
          <form action="" className="flex flex-col gap-5 font-serif">
            <input
              className="border-2 rounded-md p-3"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="border-2 rounded-md p-3"
              type="email"
              placeholder="Email"
              required
            />
            <div className="w-full relative">
              <select
                className="border-2 rounded-md px-3 h-12 appearance-none w-full bg-gray-100"
                name="Service"
                id=""
              >
                <option value="general-inquiry">General Inquiry</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute top-0 right-0 h-full mr-2 pointer-events-none" />
            </div>
            <textarea
              className="border-2 rounded-md p-3 min-h-40"
              name="Message"
              id="message"
              placeholder="Message"
            ></textarea>
            <div className="flex justify-end">
              <SquareBlackButton onClick={handleSubmit} text={"Get a Quote"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
