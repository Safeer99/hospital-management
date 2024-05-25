import { CustomCarousel } from "../components/custom-carousel";
import Hero1 from "../assets/hero1.png";
import Vector1 from "../assets/bg-vector-1.png";
import Vector2 from "../assets/bg-vector-2.png";
import Vector3 from "../assets/bg-vector-3.png";
import { UserAvatar } from "@/components/user-avatar";
import { MessageForm } from "@/components/forms/message-form";

const HomePage = () => {
  return (
    <div>
      <section className="p-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-20">
          <h2 className="text-5xl sm:text-7xl font-bold mb-8">
            Virtual Healthcare for You
          </h2>
          <p className="sm:text-lg w-[70%] text-muted-foreground mb-10">
            Efficiency, Compassion, Care: Streamlining Health for a Better
            Tomorrow!
          </p>
          <p className="w-[85%] text-justify leading-6">
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations.
          </p>
        </div>
        <div className="relative">
          <img
            src={Vector1}
            className="absolute inset-0 -z-10 -translate-y-10 scale-[1.20]"
          />
          <img src={Hero1} className="-mt-16 sm:-mt-32" />
        </div>
      </section>
      <section className="relative p-14 sm:p-20 my-16">
        <img
          src={Vector2}
          className="absolute inset-0 -translate-y-60 -translate-x-32 sm:-translate-x-10 -z-10"
        />
        <CustomCarousel />
      </section>
      <section className="w-[85%] m-auto">
        <h3 className="text-3xl text-center font-bold">Our Doctors</h3>
        <div className="py-16 grid gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <UserAvatar size="lg" fallback="Dr." />
              <div className="flex flex-col">
                <p className="font-bold">ABC</p>
                <p className="text-sm text-muted-foreground">MBBS,MD,IDCCM</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative my-20">
        <img
          src={Vector3}
          className="absolute inset-y-0 -z-10 -right-20 -translate-y-40"
        />
        <h3 className="text-3xl text-center font-bold">Send us a message</h3>
        <MessageForm />
      </section>
    </div>
  );
};

export default HomePage;
