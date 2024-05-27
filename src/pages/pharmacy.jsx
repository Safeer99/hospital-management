import Hero6 from "../assets/hero6.png";
import Medicine from "../assets/medicine.jpg";
import Vector1 from "../assets/bg-vector-1.png";
import { UserAvatar } from "@/components/user-avatar";

const PharmacyPage = () => {
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
            className="absolute inset-0 -translate-y-10 -z-10 scale-[1.20]"
          />
          <img src={Hero6} className="mt-16" />
        </div>
      </section>
      <section className="w-[85%] m-auto my-20">
        <h3 className="text-3xl text-center font-bold">Our Medicines</h3>
        <div className="py-16 grid gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <UserAvatar src={Medicine} size="lg" fallback="Dr." />
              <div className="flex flex-col">
                <p className="font-bold">ABC</p>
                <p className="text-sm text-muted-foreground">Headache,Pain</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PharmacyPage;
