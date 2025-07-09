import GetInTouchButton from "@/components/ui/GetInTouchButton";
import bottomEclipse from "@/assets/ellipse_bottom.webp";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-8 pt-32 pb-32 mb-36 max-h-[70vh] md:py-0 md:pt-0 md:pb-[130px] md:max-h-none bg-black md:min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_#0917A5_52.73%,_#1072FE_99%,_#1225B9_96.19%)]"
        >
        <img
          src={bottomEclipse}
          alt="Arrow"
          className="absolute left-0 bottom-[0px] md:bottom-[-250px] min-h w-full h-12 md:h-auto z-10 overflow-hidden"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 md:px-4">
        <div className="text-center max-w-6xl mx-auto pb-10 md:pb-20">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-6 md:mb-8">
            <span className="text-white">Why Choose Us for</span>
            <br />
            <span className="text-white">Your </span>
            <span className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent">
              Marketing
            </span>
            <span className="text-white"> Needs?</span>
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[38px] mb-8 md:mb-12 max-w-5xl mx-auto font-medium">
            At Looklike, we don't just market — we build success stories. With a
            mix of creativity, experience, and market insight, we craft powerful
            campaigns tailored to each brand. Our team is dedicated to
            delivering real results through smart, impactful advertising and
            marketing solutions.
          </p>

          {/* CTA Button */}
          <GetInTouchButton />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;