import GetInTouchButton from "@/components/ui/GetInTouchButton";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-8 pt-16 pb-32 max-h-[70vh] md:py-0 md:pt-0 md:pb-[130px] md:max-h-none bg-black md:min-h-screen flex items-center overflow-hidden md:pb-64"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_#0917A5_52.73%,_#1072FE_99%,_#1225B9_96.19%)]"
        >
                {/* eclipse svg */}

        <svg 
          width="100%" 
          height="133" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 bottom-[-100px] md:bottom-[-150px] lg:bottom-[-100px] xl:bottom-[-80px] 2xl:bottom-[-60px] w-full h-[225px] md:h-[200px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px] z-10 overflow-hidden md:mb-4"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 800 133"
        >
          <defs>
            <radialGradient id="radialGradientHero" cx="50%" cy="50%" r="51.38%">
              <stop offset="82.2%" stopColor="#000000" stopOpacity="1" />
              <stop offset="100%" stopColor="#1146D7" stopOpacity="1" />
            </radialGradient>
            <clipPath id="cropClipHero">
              <rect x="0" y="0" width="800" height="133" />
            </clipPath>
          </defs>
          <rect 
            x="0" 
            y="0" 
            width="800" 
            height="400" 
            rx="2191" 
            ry="2191" 
            fill="url(#radialGradientHero)" 
            stroke="#B1D0FF" 
            strokeWidth="0.5"
            clipPath="url(#cropClipHero)" 
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 md:px-4">
        <div className="text-center max-w-6xl mx-auto pb-10 md:pb-20">
          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-[65px] lg:leading-tight font-bold mb-6 md:mb-8"
            style={{
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'Inter',
              fontSize: 'clamp(28px, 8vw, 64.844px)',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            <span className="text-white">Why Choose Us for</span>
            <br />
            <span className="text-white">Your </span>
            <span
              style={{
                background: 'linear-gradient(90deg, #142EF5 5.29%, #F41CCC 61.06%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
              className="bg-clip-text text-transparent"
            >
              Marketing
            </span>
            <span className="text-white"> Needs?</span>
          </h2>

          {/* Description */}
          <p
            className="text-white mb-8 md:mb-12 max-w-5xl mx-auto text-[18px] md:text-[23px]"
            style={{
              textAlign: 'center',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '150%',
            }}
          >
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