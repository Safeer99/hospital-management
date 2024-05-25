import Hero3 from "../assets/hero3.png";
import Hero4 from "../assets/hero4.png";
import Vector1 from "../assets/bg-vector-1.png";

const AboutPage = () => {
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
          <img src={Hero3} className="mt-16" />
        </div>
      </section>
      <section className="p-6 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mt-36">
          <img src={Hero4} />
        </div>
        <div className="mt-20">
          <p>Biography</p>
          <h3 className="text-4xl sm:text-5xl font-bold mb-8 mt-4">
            Who we are
          </h3>
          <p className="w-[85%] text-justify leading-6 mb-6">
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Social Media is now
            one of the most powerful marketing tools with the ability to
            communicate with a target audience in real time.
            <br />
            <br />
            It's 2019: time to sink or swim.
            <br />
            <br />
            We are your Social Media Marketing Agency.
            <br />
            <br />
            Lorem Media is a full-service social media agency. We offer
            businesses innovative solutions that deliver the right type of
            audience to you in the most effective strategies possible. We strive
            to develop a community around your business, polishing your
            branding, and improving your public relations. Social Media is now
            one of the most powerful marketing tools with the ability to
            communicate with a target audience in real time.
            <br />
            <br />
            It's 2019: time to sink or swim.
            <br />
            <br />
            We are your Social Media Marketing Agency.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
