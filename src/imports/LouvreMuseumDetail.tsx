import svgPaths from "./svg-n841ujh0cy";
import imgImage1 from "figma:asset/6ad5b2372d473d7fa1b2325d1b5c6f48e5efa82c.png";
import imgRemovedBg1 from "figma:asset/ca37ab0589456b573561e21d7ada50143220bbeb.png";
import imgLouvrePyramidAtSunset from "figma:asset/554bb9ffbe9a1773f8a6d8fe7eaf625ed18c477e.png";
import imgRenaissanceArt from "figma:asset/e0e50356844c5809457c45c92f50f40add747fbb.png";
import imgEgyptianAntiquities from "figma:asset/8a0faeb883a7de3eb30a8dc7a135e9c7c88e4984.png";
import imgMonaLisa from "figma:asset/50f0adf0c210c6cc24d8f88e5f095c623b3cc073.png";
import imgWingedVictory from "figma:asset/975cc6aa7f47dec91766eabbaa1d9e953b767643.png";
import imgMapOfParisLouvreArea from "figma:asset/8ef3108ecb775ebd7ce0b44030efdd318827ca13.png";

function ElementsSignal() {
  return (
    <div className="-translate-y-1/2 absolute h-[12px] right-[56.33px] top-1/2 w-[19.971px]" data-name="Elements / Signal">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9707 12.0001">
        <g id="Elements / Signal">
          <path d={svgPaths.pe92800} fill="var(--fill-0, black)" id="Cellular Connection" />
        </g>
      </svg>
    </div>
  );
}

function ElementsConnection() {
  return (
    <div className="-translate-y-1/2 absolute h-[12.5px] right-[33.33px] top-1/2 w-[17px]" data-name="Elements / Connection">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12.5001">
        <g id="Elements / Connection">
          <path d={svgPaths.p2b7cea80} fill="var(--fill-0, black)" id="Wifi" />
        </g>
      </svg>
    </div>
  );
}

function ElementsBattery() {
  return (
    <div className="absolute h-[13px] right-0 top-0 w-[27.33px]" data-name="Elements / Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.33 13">
        <g clipPath="url(#clip0_1_2039)" id="Elements / Battery">
          <rect height="12" id="Border" opacity="0.4" rx="3.5" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p223c2d00} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2" width="21" x="2" y="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2039">
            <rect fill="white" height="13" width="27.33" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Indicators() {
  return (
    <div className="absolute h-[13px] right-[46.7px] top-[33px] w-[78.301px]" data-name="Indicators">
      <ElementsSignal />
      <ElementsConnection />
      <ElementsBattery />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[62px] left-0 opacity-50 shadow-[0px_2px_51.2px_0px_rgba(0,0,0,0.25)] top-0 w-[440px]" />
      <Indicators />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-131px)] top-[calc(50%-1559.5px)]" data-name="Elements / Time">
        <div className="flex flex-col font-['SF_Pro_Text:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-center tracking-[-0.5px] whitespace-nowrap" style={{ fontFeatureSettings: "'ss03'" }}>
          <p className="leading-[17px]">09:41</p>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute h-[3198px] left-0 overflow-clip top-0 w-[440px]" data-name="image fill">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p20226780} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[21.77px]">
        <p className="leading-[15px]">Feed</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[39.7px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container1 />
      <Margin />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p2bcd2800} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[33.41px]">
        <p className="leading-[15px]">Explore</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[111.14px] top-[calc(50%-8px)]" data-name="Container">
      <Container3 />
      <Margin1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[21.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2499 21.2499">
        <g id="Container">
          <path d={svgPaths.p33424200} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#341701] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_8px_#fbf9f4,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-1/2" data-name="Overlay+Shadow" />
      <Container5 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[22.53px]">
        <p className="leading-[15px]">Scan</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[-32px]" data-name="Container">
      <Background />
      <Margin3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute h-[47px] left-[191.97px] top-[10px] w-[56px]" data-name="Margin">
      <Container4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p2e71d800} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[28.72px]">
        <p className="leading-[15px]">Virtual</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.39px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container7 />
      <Margin4 />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p301d5280} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[28.718px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[0.364px] items-center justify-center opacity-60 relative" data-name="Container">
      <Container9 />
      <Margin5 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,250,236,0.9)] border-[#c9a84c] border-solid border-t bottom-0 h-[84px] left-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_32px_0px_rgba(52,23,1,0.05)] w-[440px]" data-name="BottomNavBar">
      <Container />
      <Container2 />
      <Margin2 />
      <Container6 />
      <div className="-translate-y-1/2 absolute flex h-[38.9px] items-center justify-center left-[370.1px] top-[calc(50%-8px)] w-[31.59px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #0B173C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#ef4444] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] right-0 rounded-[9999px] shadow-[0px_0px_0px_2px_white] size-[8px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[390px] p-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <Container10 />
      <Background1 />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[39.999px] left-[49px] top-[8px] w-[195.22px]" data-name="h1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[40px] left-[-5px] not-italic text-[#5c300f] text-[20px] top-[5px] tracking-[-0.8px] whitespace-nowrap">MuseoVerse</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,246,248,0.9)] border-[#e2e8f0] border-b border-solid h-[61px] left-[24px] right-[-24px] top-0" data-name="Header">
      <Button />
      <div className="-translate-x-1/2 absolute left-[calc(50%-192.5px)] size-[27px] top-[14px]" data-name="removed bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRemovedBg1} />
      </div>
      <H />
    </div>
  );
}

function LouvrePyramidAtSunset() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Louvre Pyramid at Sunset">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-0.23%] max-w-none top-0 w-[100.45%]" src={imgLouvrePyramidAtSunset} />
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(115,92,0,0.1)] content-stretch flex flex-col items-start px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[0.6px] uppercase w-[120.33px]">
        <p className="leading-[16px]">National Museum</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Overlay />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[36px] tracking-[-0.9px] w-full">
        <p className="leading-[40px]">Louvre Museum</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[12.673px] relative shrink-0 w-[10.064px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0641 12.673">
        <g id="Container">
          <path d={svgPaths.p2822f100} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[14px] w-[81.69px]">
        <p className="leading-[20px]">Paris, France</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[12.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6666 12.6666">
        <g id="Container">
          <path d={svgPaths.pa7b322c} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[14px] w-[117.86px]">
        <p className="leading-[20px]">9:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container17 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bottom-[32px] content-stretch flex flex-col gap-[8px] items-start left-[32px] right-[32px]" data-name="Container">
      <Container12 />
      <Heading />
      <Container13 />
    </div>
  );
}

function HeaderHeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col h-[442px] items-start justify-center left-[24px] overflow-clip right-[-24px] top-[60px]" data-name="Header - Hero Section">
      <LouvrePyramidAtSunset />
      <div className="absolute bg-gradient-to-t from-[#fbf9f4] inset-0 to-[rgba(251,249,244,0)] via-1/2 via-[rgba(251,249,244,0)]" data-name="Gradient" />
      <Container11 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[24px] right-[-24px] top-0">
      <Header />
      <HeaderHeroSection />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[23.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7499 18.7499">
        <g id="Container">
          <path d={svgPaths.p84824a0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[28.52px]">
        <p className="leading-[20px]">Visit</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#341701] col-1 content-stretch flex flex-col items-center justify-center justify-self-start px-[79px] py-[25px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.48px_-0.25px_0] rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Margin6 />
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[18.361px] relative shrink-0 w-[23.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7499 18.3613">
        <g id="Container">
          <path d={svgPaths.p28841340} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin7() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center w-[73.95px]">
          <p className="leading-[20px]">Virtual Visit</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col items-center justify-center justify-self-start pl-[57.02px] pr-[57.03px] py-[25px] relative rounded-[12px] row-1 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin7 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20.937px] relative shrink-0 w-[16.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2499 20.9374">
        <g id="Container">
          <path d={svgPaths.p2726f400} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin8() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center w-[31.73px]">
          <p className="leading-[20px]">Save</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col items-center justify-center justify-self-start pl-[78.13px] pr-[78.14px] py-[25px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin8 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[23.75px] relative shrink-0 w-[21.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2499 23.7499">
        <g id="Container">
          <path d={svgPaths.p3fae94a8} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin9() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative">
        <Container26 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center w-[38.52px]">
          <p className="leading-[20px]">Share</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col items-center justify-center justify-self-start pl-[74.73px] pr-[74.75px] py-[25px] relative rounded-[12px] row-2 self-start shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin9 />
      <Container27 />
    </div>
  );
}

function QuickActionsBento() {
  return (
    <div className="absolute gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__114px_114px] left-[48px] right-0 top-[478px]" data-name="Quick Actions Bento">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex gap-[28px] items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[32px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[24px] w-[103.7px]">
        <p className="leading-[32px]">Overview</p>
      </div>
      <div className="bg-[rgba(213,195,185,0.3)] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Horizontal Divider" />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">The Louvre, or the Louvre Museum, is the</p>
        <p className="leading-[29.25px] mb-0">{`world's most-visited museum and a historic`}</p>
        <p className="leading-[29.25px] mb-0">monument in Paris, France. It is the home of</p>
        <p className="leading-[29.25px] mb-0">some of the best-known works of art, including</p>
        <p className="leading-[29.25px]">the Mona Lisa and the Venus de Milo.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Collections</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f5f3ee] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative w-full">
        <Container31 />
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[24px] w-[105.98px]">
          <p className="leading-[32px]">380,000+</p>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[12px] tracking-[1.2px] uppercase w-full">
        <p className="leading-[16px]">Annual Visitors</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f5f3ee] col-2 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col gap-[7.5px] items-start p-[24px] relative w-full">
        <Container32 />
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[24px] w-[119.61px]">
          <p className="leading-[32px]">10.2 Million</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_104px] pt-px relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Background3 />
    </div>
  );
}

function SectionOverview() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-start relative shrink-0 w-full" data-name="Section - Overview">
      <Heading1 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[24px] w-full">
        <p className="leading-[32px]">Featured Exhibitions</p>
      </div>
    </div>
  );
}

function RenaissanceArt() {
  return (
    <div className="h-[220.5px] relative shrink-0 w-full" data-name="Renaissance Art">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgRenaissanceArt} />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <RenaissanceArt />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] w-full">
        <p className="leading-[24px]">Renaissance Masters</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[14px] w-full">
        <p className="leading-[20px]">A journey through the golden age of Italian art.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[20px] relative w-full">
        <Heading3 />
        <Container36 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[-0.6px] uppercase w-[68.34px]">
          <p className="leading-[16px]">Ends Dec 24</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#f0eee9] col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container34 />
        <Container35 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function EgyptianAntiquities() {
  return (
    <div className="h-[220.5px] relative shrink-0 w-full" data-name="Egyptian Antiquities">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgEgyptianAntiquities} />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <EgyptianAntiquities />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] w-full">
        <p className="leading-[24px]">Egyptian Antiquities</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[14px] w-full">
        <p className="leading-[20px]">Exploring the mysteries of the Pharaohs.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[20px] relative w-full">
        <Heading4 />
        <Container39 />
        <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[-0.6px] uppercase w-[136.98px]">
          <p className="leading-[16px]">Permanent Collection</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#f0eee9] col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Background+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container37 />
        <Container38 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container33() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__336.50px_336.50px] relative shrink-0 w-full" data-name="Container">
      <BackgroundShadow />
      <BackgroundShadow1 />
    </div>
  );
}

function SectionFeaturedExhibitions() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Featured Exhibitions">
      <Heading2 />
      <Container33 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[24px] w-full">
        <p className="leading-[32px]">Must-See Highlights</p>
      </div>
    </div>
  );
}

function MonaLisa() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Mona Lisa">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMonaLisa} />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shrink-0 size-[96px]" data-name="Container">
      <MonaLisa />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] w-[74.78px]">
        <p className="leading-[24px]">Mona Lisa</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[60px] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[14px] w-[211.66px]">
        <p className="leading-[20px] mb-0">{`Leonardo da Vinci's enigmatic`}</p>
        <p className="leading-[20px] mb-0">{`portrait, the world's most famous`}</p>
        <p className="leading-[20px]">painting.</p>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(52,23,1,0.05)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] w-[55.53px]">
        <p className="leading-[15px]">Denon Wing</p>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(52,23,1,0.05)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] w-[41.44px]">
        <p className="leading-[15px]">Room 711</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Overlay1 />
      <Overlay2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[211.66px]" data-name="Container">
      <Heading6 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container41() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <Container42 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function WingedVictory() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Winged Victory">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgWingedVictory} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[8px] shrink-0 size-[96px]" data-name="Container">
      <WingedVictory />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] w-[226.53px]">
        <p className="leading-[24px]">Winged Victory of Samothrace</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[14px] w-[225.61px]">
        <p className="leading-[20px] mb-0">A 2nd-century BC marble sculpture</p>
        <p className="leading-[20px]">of the Greek goddess Nike.</p>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(52,23,1,0.05)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] w-[55.53px]">
        <p className="leading-[15px]">Denon Wing</p>
      </div>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(52,23,1,0.05)] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] w-[67.55px]">
        <p className="leading-[15px]">Daru Staircase</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Overlay3 />
      <Overlay4 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[226.53px]" data-name="Container">
      <Heading7 />
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container46() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container46 />
    </div>
  );
}

function SectionHighlights() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section - Highlights">
      <Heading5 />
      <Container40 />
    </div>
  );
}

function LeftColumnContent() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[48px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Left Column: Content">
      <SectionOverview />
      <SectionFeaturedExhibitions />
      <SectionHighlights />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[32px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[20px] w-full">
        <p className="leading-[28px]">Visitor Information</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[19px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
          <path d={svgPaths.p1b5e0f00} fill="var(--fill-0, #735C00)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[12px] tracking-[1.2px] uppercase w-[48.11px]">
        <p className="leading-[16px]">Hours</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[20px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c19] text-[14px] w-[137.19px]">
        <p className="leading-[20px]">Monday: 9:00 - 18:00</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[80.54px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c19] text-[14px] w-[108.45px]">
        <p className="leading-[20px]">Tuesday: Closed</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[41px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c19] text-[14px] w-[161.59px]">
        <p className="leading-[20px]">Wednesday: 9:00 - 21:00</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[61px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c19] text-[14px] w-[147.72px]">
        <p className="leading-[20px]">Thu - Sun: 9:00 - 18:00</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-full relative shrink-0 w-[161.59px]" data-name="Container">
      <Container55 />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[19px] items-start left-0 right-0 top-0" data-name="Container">
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="Container">
      <div className="h-[14.692px] relative shrink-0 w-[20.308px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.3076 14.6922">
          <path d={svgPaths.p3d2e5a60} fill="var(--fill-0, #735C00)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[12px] tracking-[1.2px] uppercase w-[77.83px]">
        <p className="leading-[16px]">Admission</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col h-[85px] items-start left-[-0.31px] right-[-163.77px] top-[27px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c19] text-[14px] w-[85.22px]">
        <p className="leading-[20px]">Full Rate: €17</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[111.69px] right-[-111.69px] top-[27px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#1b1c19] text-[14px] w-[92.92px]">
        <p className="leading-[20px]">Under 18: Free</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-full relative shrink-0 w-[92.92px]" data-name="Container">
      <Container63 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[14.692px] items-start left-0 right-0 top-[116px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function MapOfParisLouvreArea() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Map of Paris Louvre area">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[170.83%] left-0 max-w-none top-[-35.42%] w-full" src={imgMapOfParisLouvreArea} />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[19.01px] relative shrink-0 w-[15.096px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0961 19.0095">
        <g id="Container">
          <path d={svgPaths.p28d827c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#341701] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[40px] top-1/2" data-name="Overlay+Shadow" />
      <Container67 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Background5 />
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-[#e4e2dd] content-stretch flex flex-col h-[192px] items-start justify-center left-0 overflow-clip right-0 rounded-[12px] top-[24px]" data-name="Background">
      <MapOfParisLouvreArea />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[232px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[12px] w-full">
        <p className="leading-[15px]">Rue de Rivoli, 75001 Paris, France</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[rgba(213,195,185,0.15)] border-solid border-t h-[248px] left-0 right-0 top-[193px]" data-name="HorizontalBorder">
      <Background4 />
      <Container68 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#735c00] h-[56px] left-0 right-0 rounded-[12px] top-[454px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] left-1/2 text-[16px] text-center text-white top-1/2 w-[95.56px]">
        <p className="leading-[24px]">Book Tickets</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[560px] left-[32px] right-[32px] top-[73.75px]" data-name="Container">
      <Container52 />
      <Container60 />
      <HorizontalBorder />
      <Button5 />
    </div>
  );
}

function RightColumnInfoMap() {
  return (
    <div className="bg-white col-1 h-[602px] relative rounded-[16px] row-2 self-start shrink-0 w-[392px]" data-name="Right Column: Info & Map">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_32px_0px_rgba(52,23,1,0.05)]" />
      <Heading8 />
      <Container51 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__1522.25px_652px] h-[2172px] left-[48px] right-0 top-[770px]" data-name="Container">
      <LeftColumnContent />
      <RightColumnInfoMap />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[24px] right-[-24px] top-0">
      <Group2 />
      <QuickActionsBento />
      <Container28 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[2473px] left-[-24px] right-[24px] top-[62px]" data-name="Main">
      <Group3 />
    </div>
  );
}

export default function LouvreMuseumDetail() {
  return (
    <div className="bg-[#fbf9f4] relative size-full" data-name="Louvre Museum Detail">
      <div className="absolute flex h-[3006px] items-center justify-center left-0 top-[60px] w-[440px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[440px] relative w-[3006px]" data-name="image 1">
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[423.62%] left-[-0.04%] max-w-none top-[-162.05%] w-[100.05%]" src={imgImage1} />
            </div>
          </div>
        </div>
      </div>
      <ImageFill />
      <BottomNavBar />
      <Main />
    </div>
  );
}