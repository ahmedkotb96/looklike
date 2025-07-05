import Navigation from "@/components/LandingPage/Navigation";
import { Button } from "@/components/ui/button";
import bottomEclipse from "@/assets/ellipse_bottom.webp";

const ContactSection = () => {
  return (
    <>
      <Navigation />
      <section
        id="contact"
        className="relative py-24 pt-128 pb-128 bg-black min-h-screen flex items-center overflow-hidden"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #000 10%, #1225B9 75%)",
          }}
        >
          <img
            src={bottomEclipse}
            alt="Arrow"
            className="absolute left-0 bottom-36 md:bottom-0 w-full z-10"
          />
        </div>
        
        {/* Background decorative image */}
        <div className="absolute -left-32 bottom-0 z-0 top-[-80px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a14be66bb588b6b2d22e87778ece4a66646d3dba"
            alt="3D decorative element"
            className="w-[517px] h-[517px] object-contain opacity-80"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto pb-20">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-8">
              <span className="text-white">Why Choose Us for</span>
              <br />
              <span className="text-white">Your </span>
              <span className="bg-gradient-to-r from-[#142EF5] to-[#F41CCC] bg-clip-text text-transparent">
                Marketing
              </span>
              <span className="text-white"> Needs?</span>
            </h2>

            {/* Description */}
            <p className="text-white text-lg md:text-xl lg:text-[25px] lg:leading-[38px] mb-12 max-w-5xl mx-auto font-medium">
              At Looklike, we don't just market — we build success stories. With a
              mix of creativity, experience, and market insight, we craft powerful
              campaigns tailored to each brand. Our team is dedicated to
              delivering real results through smart, impactful advertising and
              marketing solutions.
            </p>

            {/* CTA Button */}
            <Button className="relative px-8 py-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-[10px] hover:bg-white/25 hover:border-white/30 active:bg-white/30 transition-all duration-500 ease-out shadow-[0px_0px_8px_4px_rgba(255,255,255,0.15)_inset] hover:shadow-[0px_0px_20px_8px_rgba(255,255,255,0.25)_inset,0px_8px_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group overflow-hidden">
              {/* Subtle shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
              
              <span className="relative text-white text-base font-medium mr-3 group-hover:text-white/95 transition-colors duration-300">Get In Touch !</span>
              <svg
                className="relative w-5 h-4 text-white group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500 ease-out"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M17.681 7.70853L11.2022 13.7067C10.9993 13.8945 10.7242 14 10.4373 14C10.1504 14 9.87529 13.8945 9.67243 13.7067C9.46958 13.5189 9.35561 13.2642 9.35561 12.9986C9.35561 12.733 9.46958 12.4783 9.67243 12.2905L14.3075 8.00094H1.07981C0.793429 8.00094 0.518775 7.89562 0.31627 7.70814C0.113766 7.52066 0 7.26638 0 7.00125C0 6.73611 0.113766 6.48184 0.31627 6.29436C0.518775 6.10688 0.793429 6.00156 1.07981 6.00156H14.3075L9.67423 1.70954C9.47137 1.52174 9.35741 1.26702 9.35741 1.00143C9.35741 0.735832 9.47137 0.481115 9.67423 0.293311C9.87709 0.105507 10.1522 2.7985e-09 10.4391 0C10.726 -2.7985e-09 11.0011 0.105507 11.204 0.293311L17.6828 6.29147C17.7835 6.38447 17.8634 6.49497 17.9178 6.61662C17.9722 6.73827 18.0002 6.86867 18 7.00035C17.9998 7.13202 17.9716 7.26236 17.9168 7.3839C17.8621 7.50543 17.782 7.61575 17.681 7.70853Z" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;