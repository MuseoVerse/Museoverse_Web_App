import svgPaths from "./svg-otxbe879rd";
import imgImage1 from "figma:asset/6ad5b2372d473d7fa1b2325d1b5c6f48e5efa82c.png";
import imgHeroSection from "figma:asset/6593319dc02cc70ca4a1c474fe24dc268fae4f3c.png";
import imgMonaLisaCloseUp from "figma:asset/2c5ea1cebe373c24a2e76eccef4daa871bde8178.png";
import imgLouvreSculptures from "figma:asset/b683ea47f7a4479d91cd0029cdea0dfda4eb9f0f.png";
import imgCeilingArt from "figma:asset/863ebcc4084410817f5de235c42f68d6b268467e.png";
import imgEgyptianAntiquities from "figma:asset/58e80897e985ec5465e26819389f874a356ff0a3.png";
import imgRemovedBg1 from "figma:asset/ca37ab0589456b573561e21d7ada50143220bbeb.png";

function Svg() {
  return <div className="shrink-0 size-[60px]" data-name="SVG" />;
}

function ImageFill() {
  return (
    <div className="absolute h-[2693px] left-0 top-[60px] w-[440px]" data-name="image fill">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[2757px] pr-[380px] relative size-full">
          <Svg />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#341701] relative rounded-[9999px] self-stretch shrink-0" data-name="Background">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase w-[61.47px]">
          <p className="leading-[15px]">Exclusive</p>
        </div>
      </div>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.8)] relative rounded-[9999px] self-stretch shrink-0" data-name="Overlay+OverlayBlur">
      <div className="content-stretch flex flex-col h-full items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] tracking-[1px] uppercase w-[87.17px]">
          <p className="leading-[15px]">VR Experience</p>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[23px] items-start relative shrink-0" data-name="Container">
      <Background />
      <OverlayOverlayBlur />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[16px] items-start left-0 pb-[48px] px-[32px] right-0" data-name="Container">
      <Container1 />
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light h-[45px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[36px] tracking-[-0.9px] w-[359.98px]">
        <p className="leading-[45px]">The Night at the Louvre</p>
      </div>
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[28px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[18px] tracking-[0.45px] w-[344.89px]">
        <p className="leading-[28px]">Private access after hours walkthrough</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[618px] left-0 overflow-clip right-0 top-[64px]" data-name="Hero Section">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-20.23%] max-w-none top-0 w-[140.45%]" src={imgHeroSection} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(27,28,25,0)] inset-0 to-[#fbf9f4] via-1/2 via-[rgba(27,28,25,0.4)]" data-name="Gradient" />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.pb01c000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#341701] content-stretch flex gap-[12px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <Container2 />
      <div className="flex flex-col font-['Manrope:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.4px] w-[133.84px]">
        <p className="leading-[24px]">Start Experience</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[16.75px] relative shrink-0 w-[13px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9999 16.7499">
        <g id="Container">
          <path d={svgPaths.p287e8240} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-px py-[13px] relative rounded-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(213,195,185,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container4 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] text-center w-[36.27px]">
        <p className="leading-[24px]">Save</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[19px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p9aabd00} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-center min-h-px min-w-px px-px py-[13px] relative rounded-[12px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(213,195,185,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container5 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] text-center w-[44.02px]">
        <p className="leading-[24px]">Share</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f0eee9] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
        <Button />
        <Container3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[17.019px] relative shrink-0 w-[16.506px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5063 17.0191">
        <g id="Container">
          <path d={svgPaths.p3eddcf40} fill="var(--fill-0, #241A00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ffe088] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background">
      <Container8 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[14px] tracking-[1.4px] uppercase w-[148.45px]">
        <p className="leading-[20px]">{`Curator's Notes`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Heading />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.75px] relative w-full">
        <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">{`"The Louvre at night is not a building, but a living`}</p>
          <p className="leading-[22.75px] mb-0">{`history book closing its pages. We've optimized`}</p>
          <p className="leading-[22.75px] mb-0">{`the soundscapes to capture the subtle 'singing' of`}</p>
          <p className="leading-[22.75px] mb-0">{`the building's limestone, providing a meditative`}</p>
          <p className="leading-[22.75px]">{`layer to your exploration."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[10px] tracking-[0.5px] uppercase w-[231.16px]">
        <p className="leading-[15px]">Jean-Luc Moreau, Digital Heritage Lead</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative w-full">
        <div className="bg-[#d5c3b9] rounded-[9999px] shrink-0 size-[24px]" data-name="Background" />
        <Container11 />
      </div>
    </div>
  );
}

function BackgroundVerticalBorder() {
  return (
    <div className="bg-white relative rounded-br-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Background+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#735c00] border-l-2 border-solid inset-0 pointer-events-none rounded-br-[12px] rounded-tr-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pl-[26px] pr-[24px] pt-[23px] relative w-full">
        <Container9 />
        <Container10 />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[15.083px] relative shrink-0 w-[11.083px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 15.0833">
        <g id="Margin">
          <path d={svgPaths.p5a34280} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[12px] w-[144.58px]">
        <p className="leading-[16px]">4K Photorealistic Textures</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[15.083px] relative shrink-0 w-[11.083px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 15.0833">
        <g id="Margin">
          <path d={svgPaths.p5a34280} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin1 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[12px] w-[171.42px]">
        <p className="leading-[16px]">Interactive Artifact AI Assistant</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[15.083px] relative shrink-0 w-[11.083px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0833 15.0833">
        <g id="Margin">
          <path d={svgPaths.p5a34280} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <Margin2 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#51443d] text-[12px] w-[172.25px]">
        <p className="leading-[16px]">Unlimited Re-entry for 24 hours</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <BackgroundVerticalBorder />
      <List />
    </div>
  );
}

function SideActionsCuratorNotes() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[611.75px] items-start left-[32px] right-[32px] top-[1133px]" data-name="Side Actions & Curator Notes">
      <Background1 />
      <Container6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[10px] tracking-[3px] uppercase w-full">
        <p className="leading-[15px]">The Narrative</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#51443d] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">{`Witness the world's most visited museum as`}</p>
        <p className="leading-[29.25px] mb-0">few ever have. Under the shroud of midnight,</p>
        <p className="leading-[29.25px] mb-0">the glass pyramid stands as a silent sentinel.</p>
        <p className="leading-[29.25px] mb-0">Traverse the empty marble corridors of the</p>
        <p className="leading-[29.25px] mb-0">Denon Wing, where the gaze of the Mona Lisa</p>
        <p className="leading-[29.25px] mb-0">follows you in absolute stillness. This AI-</p>
        <p className="leading-[29.25px] mb-0">restored VR experience uses photogrammetry</p>
        <p className="leading-[29.25px] mb-0">to recreate every shadow and echo of the</p>
        <p className="leading-[29.25px]">Palais du Louvre in its nocturnal solitude.</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] items-start left-0 right-0 top-0" data-name="Container">
      <Heading1 />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[10px] tracking-[3px] uppercase w-full">
        <p className="leading-[15px]">Experience Highlights</p>
      </div>
    </div>
  );
}

function MonaLisaCloseUp() {
  return (
    <div className="h-[376px] relative shrink-0 w-full" data-name="Mona Lisa Close Up">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMonaLisaCloseUp} />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.3px] w-[127.36px]">
        <p className="leading-[16px]">The Da Vinci Sanctum</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(52,23,1,0.8)] inset-0 items-end p-[16px] to-[rgba(52,23,1,0)]" data-name="Background">
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="col-[1/span_2] justify-self-stretch relative rounded-[12px] row-[1/span_2] self-start shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <MonaLisaCloseUp />
        <Background3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function LouvreSculptures() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Louvre Sculptures">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[235%] left-0 max-w-none top-[-67.5%] w-full" src={imgLouvreSculptures} />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white tracking-[0.3px] w-[96.81px]">
        <p className="leading-[16px]">Hall of Caryatids</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(52,23,1,0.8)] inset-0 items-end p-[16px] to-[rgba(52,23,1,0)]" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-[1/span_2] content-stretch flex flex-col h-[160px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-3 shrink-0" data-name="Container">
      <LouvreSculptures />
      <Background4 />
    </div>
  );
}

function CeilingArt() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Ceiling Art">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgCeilingArt} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[88.58px]">
        <p className="leading-[15px]">The Apollo Gallery</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(52,23,1,0.8)] inset-0 items-end p-[16px] to-[rgba(52,23,1,0)]" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none" />
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="col-1 content-stretch flex flex-col h-[160px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-4 shrink-0" data-name="Container">
      <CeilingArt />
      <Background5 />
    </div>
  );
}

function EgyptianAntiquities() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Egyptian Antiquities">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgEgyptianAntiquities} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[0.25px] w-[59.88px]">
        <p className="leading-[15px]">Sulley Crypt</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex from-[rgba(52,23,1,0.8)] inset-0 items-end p-[16px] to-[rgba(52,23,1,0)]" data-name="Background">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none" />
      <Container23 />
    </div>
  );
}

function Container22() {
  return (
    <div className="col-2 content-stretch flex flex-col h-[160px] items-start justify-center justify-self-stretch overflow-clip relative rounded-[12px] row-4 shrink-0" data-name="Container">
      <EgyptianAntiquities />
      <Background6 />
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[____180px_180px_160px_160px] relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function HighlightsBentoGrid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 right-0 top-[336px]" data-name="Highlights Bento Grid">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[1133px] left-[32px] right-[32px] top-0" data-name="Container">
      <Container13 />
      <HighlightsBentoGrid />
    </div>
  );
}

function SectionDescriptionCta() {
  return (
    <div className="absolute h-[1817px] left-0 right-0 top-[814px]" data-name="Section - Description & CTA">
      <SideActionsCuratorNotes />
      <Container12 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="absolute h-[27px] left-[43.33px] top-[-2px] w-[19px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 26.9999">
        <g id="Margin">
          <path d={svgPaths.p1b5e0f00} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-1/2 top-[calc(50%-10.5px)] w-[46.47px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#83746b] text-[10px] top-[7.5px] tracking-[-0.5px] uppercase w-[46.47px]">
        <p className="leading-[15px]">Duration</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[calc(50%+20px)]" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[14px] text-center w-[94px]">
        <p className="leading-[20px]">45 Minutes</p>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="absolute border-[rgba(213,195,185,0.15)] border-r border-solid h-[82px] left-[23px] right-[244.33px] top-[23px]" data-name="VerticalBorder">
      <Margin3 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="absolute h-[27px] left-[43.33px] top-[-2px] w-[19px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 26.9999">
        <g id="Margin">
          <path d={svgPaths.p2e71d800} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-1/2 top-[calc(50%-10.5px)]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[10px] tracking-[-0.5px] uppercase w-[26.91px]">
        <p className="leading-[15px]">Mode</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-1/2 top-[calc(50%+20px)] w-[105.06px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-[50px] not-italic text-[#341701] text-[14px] text-center top-[20px] w-[100px]">
        <p className="leading-[20px]">Immersive VR</p>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="absolute border-[rgba(213,195,185,0.15)] border-r border-solid h-[82px] left-[133.67px] right-[133.67px] top-[23px]" data-name="VerticalBorder">
      <Margin4 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute h-[25px] left-[44.83px] top-[-2px] w-[17px]" data-name="Margin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9999 24.9999">
        <g id="Margin">
          <path d={svgPaths.p39d1e80} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15px] left-1/2 top-[calc(50%-9.5px)] w-[28.52px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] left-0 not-italic text-[#83746b] text-[10px] top-[7.5px] tracking-[-0.5px] uppercase w-[28.52px]">
        <p className="leading-[15px]">Audio</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] left-[calc(50%-0.17px)] top-[calc(50%+21px)] w-[115px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[calc(50%+0.5px)] not-italic text-[#341701] text-[14px] text-center top-[20px] w-[102px]">
        <p className="leading-[20px]">Dolby Atmos</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[80px] left-[244.33px] right-[23px] top-[23px]" data-name="Container">
      <Margin5 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function SectionExperienceStats() {
  return (
    <div className="absolute bg-white border border-[#c9a84c] border-solid h-[122px] left-[32px] right-[32px] rounded-[12px] top-[658px]" data-name="Section - Experience Stats">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[-1px] rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" data-name="Overlay+Shadow" />
      <VerticalBorder />
      <VerticalBorder1 />
      <Container28 />
    </div>
  );
}

function Container31() {
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

function Background7() {
  return (
    <div className="absolute bg-[#ef4444] right-[7.98px] rounded-[9999px] size-[8px] top-[8px]" data-name="Background">
      <div className="absolute bg-[rgba(255,255,255,0)] right-0 rounded-[9999px] shadow-[0px_0px_0px_2px_white] size-[8px] top-0" data-name="Overlay+Shadow" />
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center justify-center left-[390px] p-[8px] rounded-[9999px] top-1/2" data-name="Button">
      <Container31 />
      <Background7 />
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
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,246,248,0.9)] border-[#e2e8f0] border-b border-solid h-[77px] left-0 right-0 top-0" data-name="Header">
      <Button3 />
      <div className="-translate-x-1/2 absolute left-[calc(50%-192.5px)] size-[27px] top-[22px]" data-name="removed bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRemovedBg1} />
      </div>
      <H />
    </div>
  );
}

function Container33() {
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

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[21.77px]">
        <p className="leading-[15px]">Feed</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[39.7px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container33 />
      <Margin6 />
    </div>
  );
}

function Container35() {
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

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[33.41px]">
        <p className="leading-[15px]">Explore</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[111.14px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container35 />
      <Margin7 />
    </div>
  );
}

function Container37() {
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

function Background8() {
  return (
    <div className="bg-[#341701] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_8px_#fbf9f4,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-1/2" data-name="Overlay+Shadow" />
      <Container37 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[22.53px]">
        <p className="leading-[15px]">Scan</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[-32px]" data-name="Container">
      <Background8 />
      <Margin9 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="absolute h-[47px] left-[191.97px] top-[10px] w-[56px]" data-name="Margin">
      <Container36 />
    </div>
  );
}

function Container39() {
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

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[28.72px]">
        <p className="leading-[15px]">Virtual</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.39px] top-[calc(50%-8px)]" data-name="Container">
      <Container39 />
      <Margin10 />
    </div>
  );
}

function Container41() {
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

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[28.718px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[0.364px] items-center justify-center opacity-60 relative" data-name="Container">
      <Container41 />
      <Margin11 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,250,236,0.9)] border-[#c9a84c] border-solid border-t bottom-0 h-[84px] left-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_32px_0px_rgba(52,23,1,0.05)] w-[440px]" data-name="BottomNavBar">
      <Container32 />
      <Container34 />
      <Margin8 />
      <Container38 />
      <div className="-translate-y-1/2 absolute flex h-[38.9px] items-center justify-center left-[370.1px] top-[calc(50%-8px)] w-[31.59px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[2691px] left-0 right-0 top-[62px]" data-name="Main">
      <HeroSection />
      <SectionDescriptionCta />
      <SectionExperienceStats />
      <Header />
      <BottomNavBar />
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-131px)] top-[calc(50%-1344px)]" data-name="Elements / Time">
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

export default function NewExperienceTheNightAtTheLouvre() {
  return (
    <div className="bg-[#fbf9f4] relative size-full" data-name="New Experience - The Night at the Louvre">
      <div className="absolute flex h-[2693px] items-center justify-center left-0 top-[60px] w-[440px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[440px] relative w-[2693px]" data-name="image 1">
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[390.53%] left-[-0.04%] max-w-none top-[-145.71%] w-[102.94%]" src={imgImage1} />
            </div>
          </div>
        </div>
      </div>
      <ImageFill />
      <Main />
      <Group />
    </div>
  );
}