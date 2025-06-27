import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden sm:pt-24 lg:pt-56 pb-2 sm:pb-0"
      style={{ marginTop: "60px", marginBottom: "0px" }}
    >
      {/* 200px Black Bar */}
      <div
        className="absolute top-0 left-0 w-full h-[70px] sm:h-[220px] lg:h-[200px] z-20"
        style={{ background: "linear-gradient(to bottom, black 50%, transparent)" }}
      />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-black" />

         {/* Main gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #000 0%, #0917A5 40%, #1072FE 70%, #1225B9 50%, #000000 0%)",
        }}
      />

      {/* Motion blur overlay */}
      <div className="absolute inset-0 bg-black/[0.03] backdrop-blur-[150px]" />


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
      <div className="absolute -left-20 sm:-left-24 lg:-left-32 top-[50%] -translate-y-1/2 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/132590db632c9506b94b7efdbd98e0cd20b9f477"
          alt="Decorative star"
          className="w-[200px] h-[205px] sm:w-[280px] sm:h-[290px] lg:w-[400px] lg:h-[410px] object-contain opacity-70"
        />
      </div>

      {/* Right decorative visual */}
      <div className="absolute -right-16 sm:-right-20 lg:-right-16 top-[50%] -translate-y-1/2 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/00b30545de4d64f0f4e090044a099085d9f9ff05"
          alt="Visual element"
          className="w-[160px] h-[165px] sm:w-[200px] sm:h-[205px] lg:w-[240px] lg:h-[250px] object-contain opacity-70"
        />
      </div>

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center justify-center gap-6 sm:gap-7 lg:gap-8 text-center px-4 max-w-7xl mx-auto lg:mt-24"
        style={{ marginTop: '-80px' }} // Move only the text/button upwards
      >
        {/* Main heading */}
        <h1 className="text-white font-bold leading-none mt-0 sm:mt-0 lg:mt-0">
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px]">
            Expect More
          </span>
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] mt-2">
            With Us!
          </span>
        </h1>

        {/* Secondary section */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 mt-2">
          <div className="font-normal text-white text-base sm:text-lg md:text-xxl lg:text-2xl max-w-sm sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl space-y-2">
            <p className="font-bold">Everything you need</p>
            <p>your partner for creative advertising solutions!</p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-2">
              From branding and graphic design to social media, digital ads, and
              outdoor campaigns — we plan, design, and execute strategies that
              get you noticed. Set goals, assign tasks, and watch your brand
              grow — effortlessly.
            </p>
          </div>

          {/* CTA Button */}
          <a href="#services" tabIndex={-1} className="focus:outline-none">
            <Button className="mt-4 sm:mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-white/10 border border-white/15 rounded-lg backdrop-blur-[7px] hover:bg-white/20 transition-all duration-300 shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]">
              <span className="text-white text-base sm:text-lg">Explore More</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;