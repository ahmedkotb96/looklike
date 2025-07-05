import { Button } from "@/components/ui/button";
import homeTopLeft from "@/assets/decoration/home_top_left.png";
import homeTopRight from "@/assets/decoration/home_top_right.png";
import eclipse2 from "@/assets/Ellipse_2.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-start justify-center min-h-[70vh] pt-24 mt-16 sm:min-h-[150vh] sm:pt-48 lg:pt-[180px] sm:mt-[30px]"
    >
      {/* 200px Black Bar */}
      <div
        className="absolute top-0 left-0 w-full h-[70px] sm:h-[220px] lg:h-[200px] z-20 bg-gradient-to-b from-black to-transparent"
      />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-black" />

      {/* Main gradient background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,_#000_20%,_#0917A5_40%,_#1072FE_40%,_#1225B9_40%,_#000_98%)]"
      />

      {/* Motion blur overlay */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-[150px]" />

      {/* Background decorative elements */}
      <div className="absolute right-0 top-1/2 w-40 h-[360px] sm:w-60 sm:h-[540px] lg:w-80 lg:h-[720px] opacity-50">
        <svg
          className="w-full h-full fill-[#1225B9] blur-[75px]"
          viewBox="0 0 345 1002"
        >
          <path d="M485.73 489.502C427.464 318.802 163.228 -24.4326 261.999 259.699C360.77 543.831 232.624 234.698 163.312 404.955C93.9989 575.213 331.914 883.203 432.177 848.979C532.441 814.756 543.996 660.202 485.73 489.502Z" />
        </svg>
      </div>

      {/* Left decorative star */}
      <div className="absolute -left-20 sm:-left-24 lg:-left-12 top-[40%] -translate-y-1/2 z-0">
        <img
          src={homeTopLeft} alt="Decorative star"
          className="w-[320px] h-[325px] sm:w-[400px] sm:h-[410px] lg:w-[520px] lg:h-[530px] object-contain opacity-70"
        />
      </div>

      {/* Right decorative visual */}
      <div className="absolute -right-16 sm:-right-20 lg:-right-12 top-[40%] -translate-y-1/2 z-0">
        <img
          src={homeTopRight} alt="Visual element"
          className="w-[260px] h-[265px] sm:w-[320px] sm:h-[325px] lg:w-[450px] lg:h-[500px] object-contain opacity-70"
        />
      </div>

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-start gap-6 sm:gap-7 lg:gap-8 text-center px-4 max-w-7xl mx-auto pt-8 sm:pt-4 lg:pt-8">
        {/* Main heading */}
        <h1 className="text-white font-bold leading-none">
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-10xl xl:text-[180px]">
            Expect More
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] mt-2">
            With Us!
          </span>
        </h1>

        {/* Welcome Paragraphs */}
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="font-bold text-white text-base sm:text-lg md:text-xxl lg:text-2xl">Welcome to looklike advertising & Marketing</p>
          <p className="text-white text-base sm:text-lg md:text-xxl lg:text-2xl">Your partner for creative advertising solutions!</p>
        </div>

        {/* CTA Button */}
        <a href="#services" tabIndex={-1} className="focus:outline-none">
          <Button className="mt-4 sm:mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 border border-white/15 rounded-lg backdrop-blur-[7px] hover:bg-white/20 transition-all duration-300 shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]">
            <span className="text-white text-base sm:text-lg">Explore More</span>
          </Button>
        </a>
      </div>

      {/* Arrow image positioned at the bottom of the section */}
      <img
        src={eclipse2}
        alt="Decorative arrow pointing down"
        className="absolute -bottom-[30px] sm:-bottom-[250px] left-0 w-full z-10 pointer-events-none"
      />
    </section>
  );
};

export default HeroSection;