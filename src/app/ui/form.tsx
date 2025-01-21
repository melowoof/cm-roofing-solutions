import SquareBlackButton from "./buttons";
import { services } from "../services/services";
import { inter } from "./fonts";

export default function FormPage() {
  return (
    <section className="w-screen h-[100vh]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-2/4 flex flex-col gap-4">
          <h1 className={`${inter.className} lg:text-6xl text-3xl flex justify-end`}>Get in touch</h1>
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
            <select className="border-2 rounded-md p-3" name="Service" id="">
              <option value="general-inquiry">General Inquiry</option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
            <textarea
              className="border-2 rounded-md p-3 min-h-40"
              name="Message"
              id="message"
              placeholder="Message"
            ></textarea>
            <div className="flex justify-end">
              <SquareBlackButton text={"Get a Quote"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
