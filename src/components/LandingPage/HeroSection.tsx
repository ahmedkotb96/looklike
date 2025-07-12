import { Button } from "@/components/ui/button";
import homeTopLeft from "@/assets/decoration/home_top_left.webp";
import homeTopRight from "@/assets/decoration/home_top_right.webp";
import eclipse2 from "@/assets/Ellipse_2.webp";

const HeroSection = () => {
  return (
    <section
      // FINAL RESPONSIVE LOGIC: Handles all screen types correctly.
      className="relative flex flex-col items-center overflow-hidden
        
        /* 1. Base (Mobile): Compact padding, no min-height. */
        /* INCREASED bottom padding for mobile version. */
        pt-28 pb-32

        /* 2. Portrait Tablet (e.g., 1024x1366): Fills the screen height (100vh) with balanced padding. */
        lg:portrait:min-h-screen lg:portrait:py-40

        /* 3. Landscape Desktop: Restores the original expansive 150vh design with even more bottom padding. */
        lg:landscape:min-h-[150vh] lg:landscape:pt-[25vh] lg:landscape:pb-[64vh]
      "
    >
      {/* Background Elements */}
      <BackgroundLayers />
      
      {/* Decorative Elements */}
      <DecorativeElements />
      
      {/* Main Content */}
      <MainContent />

      {/* This part includes the previous fix for the ellipse image */}
      <div 
        className="absolute left-0 bottom-[-20px] md:bottom-[-100px] w-full z-10 pointer-events-none"
      >
        <img
          src={eclipse2}
          alt="Decorative ellipse at bottom"
          className="w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

// Background layers component
const BackgroundLayers = () => (
  <>
    {/* Base background */}
    <div className="absolute inset-0 bg-black" />
    
    {/* Main gradient background - full coverage */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,_#000_0%,_#000_40%,_#0917A5_55%,_#1072FE_65%,_#1225B9_75%,_#000_98%)]" />
    
    {/* Motion blur overlay */}
    <div className="absolute inset-0 bg-black/5 backdrop-blur-[150px]" />
  </>
);

// Decorative elements component
const DecorativeElements = () => (
  <>
    {/* Abstract background shape */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-50"
         style={{ 
           width: 'clamp(6rem, 25vw, 25rem)',
           height: 'clamp(12rem, 50vh, 45rem)'
         }}>
      <svg
        className="w-full h-full fill-[#1225B9] blur-[75px]"
        viewBox="0 0 345 1002"
      >
        <path d="M485.73 489.502C427.464 318.802 163.228 -24.4326 261.999 259.699C360.77 543.831 232.624 234.698 163.312 404.955C93.9989 575.213 331.914 883.203 432.177 848.979C532.441 814.756 543.996 660.202 485.73 489.502Z" />
      </svg>
    </div>

    {/* Left decorative star */}
    <div className="absolute top-1/2 -translate-y-1/2 z-40"
         style={{
           left: 'clamp(-4rem, -8vw, -6rem)',
           transform: 'translateY(-50%)',
         }}
         // Web/desktop: move up more
         id="left-decorative-star"
    >
      <img
        src={homeTopLeft} 
        alt="Decorative star"
        className="object-contain opacity-150"
        style={{ 
          width: 'clamp(18rem, 40vw, 44rem)',
          height: 'clamp(18rem, 40vw, 44rem)',
          transform: 'rotate(0deg)'
        }}
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Right decorative visual */}
    <div className="absolute top-[54%] -translate-y-1/2 z-40"
         style={{
           right: 'clamp(-6rem, -8vw, -4rem)',
           transform: 'translateY(-50%)',
         }}
         id="right-decorative-visual"
    >
      <img
        src={homeTopRight} 
        alt="Visual element"
        className="object-contain opacity-150"
        style={{ 
          width: 'clamp(18rem, 40vw, 44rem)',
          height: 'clamp(18rem, 40vw, 44rem)'
        }}
        loading="lazy"
        decoding="async"
      />
    </div>
  </>
);

// Add a style tag for desktop-only upward movement
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @media (min-width: 1024px) {
      #left-decorative-star, #right-decorative-visual {
        transform: translateY(-50%) translateY(-6vw) !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Main content component
const MainContent = () => (
  <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mb-auto"
       // IMPROVEMENT: Gap between elements is now responsive to screen height.
       style={{ gap: 'clamp(1rem, 3vh, 3rem)' }}>
    
    {/* Main heading */}
    <MainHeading />
    
    {/* Welcome text */}
    <WelcomeText />
    
    {/* CTA Button */}
    <CTAButton />
    
  </div>
);

// Main heading component
const MainHeading = () => (
  <h1
    style={{
      color: '#FFF',
      textAlign: 'center',
      fontFamily: 'DM Sans, sans-serif',
      // IMPROVEMENT: Replaced fixed font-size with clamp() for fluid scaling.
      // This makes the text large on desktops but readable without overflow on mobile.
      fontSize: 'clamp(4rem, 12vw, 11rem)',
      fontStyle: 'normal',
      fontWeight: 700,
      // IMPROVEMENT: Used a unitless line-height for proper scaling with the font-size.
      lineHeight: 0.95,
      margin: 0,
      padding: 0,
    }}
  >
    <span style={{ display: 'block' }}>
      Expect More
    </span>
    <span style={{ 
        display: 'block', 
        // IMPROVEMENT: Responsive margin-top to maintain spacing across screen sizes.
        marginTop: 'clamp(0.25rem, 2vh, 1rem)' 
    }}>
      With Us!
    </span>
  </h1>
);

// Welcome text component
const baseWelcomeTextStyle = {
  color: '#FFF',
  textAlign: 'center' as const,
  fontFamily: 'DM Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  letterSpacing: '-1.042px',
  // IMPROVEMENT: Fluid font size for better readability on all devices.
  fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
  // IMPROVEMENT: Unitless line-height for responsive vertical spacing.
  lineHeight: 1.5,
};

const WelcomeText = () => (
  // IMPROVEMENT: Responsive margin-top to ensure proper spacing from the main heading.
  <div style={{ marginTop: 'clamp(1rem, 4vh, 2rem)' }}>
    <div style={baseWelcomeTextStyle}>
      Welcome to Look Like Advertising & Marketing
    </div>
    <div style={{ ...baseWelcomeTextStyle, marginTop: '4px' }}>
      your partner for creative advertising solutions!
    </div>
  </div>
);

// CTA button component
const CTAButton = () => (
  <a href="#services" tabIndex={-1} className="focus:outline-none">
    <Button 
      className="bg-white/10 border border-white/15 rounded-lg backdrop-blur-[7px] 
                 hover:bg-white/20 transition-all duration-300 
                 shadow-[0px_0px_6px_3px_rgba(255,255,255,0.25)_inset]"
      style={{ 
        marginTop: 'clamp(0.5rem, 2vh, 2rem)',
        paddingLeft: 'clamp(1rem, 3vw, 2.5rem)',
        paddingRight: 'clamp(1rem, 3vw, 2.5rem)',
        paddingTop: 'clamp(0.5rem, 1.5vh, 1.25rem)',
        paddingBottom: 'clamp(0.5rem, 1.5vh, 1.25rem)'
      }}
    >
      <span className="text-white" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
        Explore More
      </span>
    </Button>
  </a>
);

export default HeroSection;