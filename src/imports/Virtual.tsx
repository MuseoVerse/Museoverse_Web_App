import svgPaths from "./svg-y52ssxcv7x";
import imgImage1 from "figma:asset/6ad5b2372d473d7fa1b2325d1b5c6f48e5efa82c.png";
import imgRemovedBg1 from "figma:asset/ca37ab0589456b573561e21d7ada50143220bbeb.png";
import imgTheBritishMuseumInterior from "figma:asset/0af092a3d5699a92e61a30940518c6aaeeb0e428.png";
import imgTajMahalDetail from "figma:asset/b0ec6be6028b1c4f723c55d0082917bd9ade89b9.png";
import imgGreekSculpture from "figma:asset/98fb3ef6daae91c4eabc56b83ee1d342a60c4012.png";
import imgMayanPyramid from "figma:asset/5d51517bc22b66c3e6cf5cdff01fb12a3f7094dd.png";
import imgAsianTempleDetail from "figma:asset/10db30ff3de814ead55b46bcf6ba938f4cb925a3.png";
import imgLouvrePyramid from "figma:asset/877a06edab6933c457545473290a3c5e88eef89e.png";
import imgMachuPicchu from "figma:asset/73d11799b8c853fffd45eabf7b65798ab6882b86.png";

function Container() {
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

function Background() {
  return (
    <div className="absolute bg-[#ef4444] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] right-0 rounded-[9999px] shadow-[0px_0px_0px_2px_white] size-[8px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[390px] p-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <Container />
      <Background />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[39.999px] left-[49px] top-[16px] w-[195.22px]" data-name="h1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[40px] left-[-5px] not-italic text-[#5c300f] text-[20px] top-[5px] tracking-[-0.8px] whitespace-nowrap">MuseoVerse</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,246,248,0.9)] border-[#e2e8f0] border-b border-solid h-[77px] left-0 right-0 top-[62px]" data-name="Header">
      <Button />
      <div className="-translate-x-1/2 absolute left-[calc(50%-192.5px)] size-[27px] top-[22px]" data-name="removed bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRemovedBg1} />
      </div>
      <H />
    </div>
  );
}

function TheBritishMuseumInterior() {
  return (
    <div className="absolute inset-[-1px]" data-name="The British Museum Interior">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.5%] max-w-none top-0 w-[125%]" src={imgTheBritishMuseumInterior} />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#cca830] content-stretch flex items-start left-[32px] px-[12px] py-[4px] rounded-[9999px] top-[32px]" data-name="Background">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#4f3e00] text-[10px] tracking-[2px] uppercase w-[107.48px]">
        <p className="leading-[15px]">Live Exhibition</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] right-[32px] top-[71px]" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] relative shrink-0 text-[30px] text-white w-[302px]">
        <p className="leading-[37.5px] mb-0">Featured Virtual Tour:</p>
        <p className="leading-[37.5px]">The British Museum</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[32px] max-w-[448px] right-[32px] top-[152.75px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] w-[289.42px]">
        <p className="leading-[22.75px] mb-0">{`Step through the Great Court into the world's`}</p>
        <p className="leading-[22.75px] mb-0">most comprehensive collection of human</p>
        <p className="leading-[22.75px]">history and culture.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[7.112px] relative shrink-0 w-[5.586px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.58648 7.1121">
        <g id="Container">
          <path d={svgPaths.pe00f2c0} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[32px] px-[32px] py-[12px] rounded-[6px] top-[246.25px]" data-name="Button">
      <Container3 />
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[14px] text-center tracking-[0.35px] w-[120.81px]">
        <p className="leading-[20px]">Begin Experience</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bottom-[-1px] h-[322.25px] left-[-1px] right-[-1px]" data-name="Container">
      <Background1 />
      <Heading />
      <Container2 />
      <Button1 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] border border-[#c9a84c] border-solid h-[465px] left-[34px] overflow-clip rounded-[12px] shadow-[0px_32px_64px_-12px_rgba(52,23,1,0.15)] top-[158px] w-[372px]" data-name="Hero Section">
      <TheBritishMuseumInterior />
      <div className="absolute bg-gradient-to-t border border-[#c9a84c] border-solid from-[rgba(52,23,1,0.9)] inset-[-1px] to-[rgba(52,23,1,0)] via-1/2 via-[rgba(52,23,1,0.2)]" data-name="Gradient" />
      <Container1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[14px] tracking-[2.1px] uppercase w-[217.63px]">
        <p className="leading-[20px]">Continue Your Journey</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[12px] w-[43.53px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[16px] underline">View All</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Link />
    </div>
  );
}

function TajMahalDetail() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Taj Mahal Detail">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgTajMahalDetail} />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[96px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <TajMahalDetail />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[29.62px] relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[48px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] w-[107.02px]">
        <p className="leading-[24px] mb-0">Taj Mahal: The</p>
        <p className="leading-[24px]">Love Legacy</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[10px] uppercase w-[21.09px]">
        <p className="leading-[15px]">65%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[12px] w-full">
        <p className="leading-[16px]">Last explored: yesterday</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f0eee9] h-[4px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#341701] inset-[0_35%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container7 />
        <Container8 />
        <Background2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[9.333px] relative shrink-0 w-[7.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33333 9.33333">
        <g id="Container">
          <path d={svgPaths.p25627f80} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#eae8e3] h-[40px] relative rounded-[9999px] shrink-0 w-[28.27px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container9 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_24px_0px_rgba(52,23,1,0.03)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[21px] relative w-full">
          <Container5 />
          <Container6 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function SectionContinueYourJourney() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[35px] top-[670px] w-[372px]" data-name="Section - Continue Your Journey">
      <Container4 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#76593a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-[20px]">Eras of Humanity</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[24px] relative w-full">
          <Heading3 />
        </div>
      </div>
    </div>
  );
}

function GreekSculpture() {
  return (
    <div className="absolute inset-[-1px]" data-name="Greek Sculpture">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.66%] max-w-none top-0 w-[133.33%]" src={imgGreekSculpture} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">1000 BCE</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[17.5px]">{`Greek & Roman`}</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col gap-[4px] items-start left-[15px] right-[15px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function GreekRoman() {
  return (
    <div className="absolute aspect-[3/4] border border-[#c9a84c] border-solid bottom-[16.34px] left-[24px] overflow-clip rounded-[12px] top-0" data-name="Greek & Roman">
      <GreekSculpture />
      <div className="absolute bg-gradient-to-t from-[rgba(52,23,1,0.8)] inset-[-1px] to-[rgba(52,23,1,0)]" data-name="Gradient" />
      <Container12 />
    </div>
  );
}

function MayanPyramid() {
  return (
    <div className="absolute inset-[-1px]" data-name="Mayan Pyramid">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.66%] max-w-none top-0 w-[133.33%]" src={imgMayanPyramid} />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">2000 BCE</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[17.5px]">Mesoamerican</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col gap-[4px] items-start left-[15px] right-[15px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Mesoamerican() {
  return (
    <div className="absolute aspect-[3/4] border border-[#c9a84c] border-solid bottom-[16.34px] left-[180px] overflow-clip rounded-[12px] top-0" data-name="Mesoamerican">
      <MayanPyramid />
      <div className="absolute bg-gradient-to-t from-[rgba(52,23,1,0.8)] inset-[-1px] to-[rgba(52,23,1,0)]" data-name="Gradient" />
      <Container15 />
    </div>
  );
}

function AsianTempleDetail() {
  return (
    <div className="absolute inset-[-1px]" data-name="Asian Temple Detail">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-16.66%] max-w-none top-0 w-[133.33%]" src={imgAsianTempleDetail} />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">1600 CE</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[17.5px]">Asian Dynasties</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bottom-[15px] content-stretch flex flex-col gap-[4px] items-start left-[15px] right-[15px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function AsianDynasties() {
  return (
    <div className="absolute aspect-[3/4] border border-[#c9a84c] border-solid bottom-[16.34px] left-[336px] overflow-clip rounded-[12px] top-0" data-name="Asian Dynasties">
      <AsianTempleDetail />
      <div className="absolute bg-gradient-to-t from-[rgba(52,23,1,0.8)] inset-[-1px] to-[rgba(52,23,1,0)]" data-name="Gradient" />
      <Container18 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[203px] overflow-clip relative shrink-0 w-[856px]" data-name="Container">
      <GreekRoman />
      <Mesoamerican />
      <AsianDynasties />
    </div>
  );
}

function SectionCategoriesByEra() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 overflow-clip pt-[8px] top-[888px] w-[420px]" data-name="Section - Categories by Era">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#76593a] text-[14px] tracking-[2.1px] uppercase w-full">
        <p className="leading-[20px]">New Experiences</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Heading4 />
    </div>
  );
}

function LouvrePyramid() {
  return (
    <div className="h-[209.25px] relative shrink-0 w-full" data-name="Louvre Pyramid">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgLouvrePyramid} />
      </div>
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <LouvrePyramid />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[18px] w-[196.86px]">
        <p className="leading-[28px]">The Night at the Louvre</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[14px] w-[250.38px]">
        <p className="leading-[20px]">Private access after hours walkthrough</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[250.38px]" data-name="Container">
      <Heading5 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[11.083px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 11.0833">
        <g id="Container">
          <path d={svgPaths.p16018880} fill="var(--fill-0, #735C00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] w-[13.02px]">
        <p className="leading-[15px]">VR</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f0eee9] content-stretch flex gap-[3.99px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Background3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <OverlayShadow />
      <Container24 />
    </div>
  );
}

function MachuPicchu() {
  return (
    <div className="h-[209.25px] pointer-events-none relative shrink-0 w-full" data-name="Machu Picchu">
      <div className="absolute inset-0 overflow-hidden">
        <img alt="" className="absolute h-[177.78%] left-0 max-w-none top-[-38.89%] w-full" src={imgMachuPicchu} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0" />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Overlay+Shadow">
      <MachuPicchu />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[18px] w-[152.13px]">
        <p className="leading-[28px]">Peaks of the Incas</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#76593a] text-[14px] w-[231.16px]">
        <p className="leading-[20px]">Machu Picchu panoramic immersion</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[231.16px]" data-name="Container">
      <Heading6 />
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 size-[11.083px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 11.0833">
        <g id="Container">
          <path d={svgPaths.p16018880} fill="var(--fill-0, #735C00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] w-[12.56px]">
        <p className="leading-[15px]">4K</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f0eee9] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Background4 />
    </div>
  );
}

function Container29() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <OverlayShadow1 />
      <Container30 />
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__273.25px_273.25px] relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container29 />
    </div>
  );
}

function SectionNewExperiences() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[11px] pt-[8px] px-[24px] top-[1179px] w-[420px]" data-name="Section - New Experiences">
      <Container21 />
      <Container22 />
    </div>
  );
}

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
          <path d={svgPaths.p10a91100} fill="var(--fill-0, black)" id="Wifi" />
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
    <div className="absolute h-[13px] right-[46.7px] top-[28px] w-[78.301px]" data-name="Indicators">
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-131px)] top-[calc(50%-933.5px)]" data-name="Elements / Time">
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

function CompleteApplicationPrototypeCopy() {
  return (
    <div className="absolute bg-white h-[1932px] left-0 overflow-clip top-0 w-[440px]" data-name="Complete application prototype (Copy)">
      <div className="absolute flex h-[1872px] items-center justify-center left-[-210px] top-[60px] w-[861px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[861px] relative w-[1872px]" data-name="image 1">
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[134.77%] left-[-0.04%] max-w-none top-[-17.5%] w-[100.08%]" src={imgImage1} />
            </div>
          </div>
        </div>
      </div>
      <Header />
      <HeroSection />
      <SectionContinueYourJourney />
      <SectionCategoriesByEra />
      <SectionNewExperiences />
      <Group />
    </div>
  );
}

function Container36() {
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

function Container35() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[39.7px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container36 />
      <Margin />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p2bcd2800} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[33.41px]">
        <p className="leading-[15px]">Explore</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[111.14px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container38 />
      <Margin1 />
    </div>
  );
}

function Container40() {
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

function Background5() {
  return (
    <div className="bg-[#341701] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_8px_#fbf9f4,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-1/2" data-name="Overlay+Shadow" />
      <Container40 />
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

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[-32px]" data-name="Container">
      <Background5 />
      <Margin3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute h-[47px] left-[191.97px] top-[10px] w-[56px]" data-name="Margin">
      <Container39 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p2e71d800} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[28.72px]">
        <p className="leading-[15px]">Virtual</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.39px] top-[calc(50%-8px)]" data-name="Container">
      <Container42 />
      <Margin4 />
    </div>
  );
}

function Container44() {
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

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[0.364px] items-center justify-center opacity-60 relative" data-name="Container">
      <Container44 />
      <Margin5 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,250,236,0.9)] border-[#c9a84c] border-solid border-t bottom-0 h-[84px] left-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_32px_0px_rgba(52,23,1,0.05)] w-[440px]" data-name="BottomNavBar">
      <Container35 />
      <Container37 />
      <Margin2 />
      <Container41 />
      <div className="-translate-y-1/2 absolute flex h-[38.9px] items-center justify-center left-[370.1px] top-[calc(50%-8px)] w-[31.59px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Container43 />
        </div>
      </div>
    </div>
  );
}

export default function Virtual() {
  return (
    <div className="relative size-full" data-name="Virtual">
      <CompleteApplicationPrototypeCopy />
      <BottomNavBar />
    </div>
  );
}