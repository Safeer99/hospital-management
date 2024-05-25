import { AppointmentForm } from "@/components/forms/appointment-form";
import Hero2 from "../assets/hero2.png";
import Vector1 from "../assets/bg-vector-1.png";

const AppointmentPage = () => {
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
          <img src={Hero2} className="-mt-10" />
        </div>
      </section>
      <section className="p-8">
        <h3 className="text-4xl sm:text-6xl font-bold text-muted-foreground mb-10">
          Appointment
        </h3>
        <AppointmentForm />
      </section>
    </div>
  );
};

export default AppointmentPage;
