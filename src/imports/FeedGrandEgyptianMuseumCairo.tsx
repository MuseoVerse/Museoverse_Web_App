import svgPaths from "./svg-wbfgaqh1xc";
import imgImage1 from "figma:asset/6ad5b2372d473d7fa1b2325d1b5c6f48e5efa82c.png";
import imgRemovedBg1 from "figma:asset/ca37ab0589456b573561e21d7ada50143220bbeb.png";
import imgImageBackgroundBorder from "figma:asset/28e668f5cf9239147a3561d1addef5edf5be9922.png";
import imgImageBackgroundBorder1 from "figma:asset/4c7d05a6808a37b09c672d5be34db15ea4a5c1a7.png";
import imgImageBackgroundBorder2 from "figma:asset/39f2b848935eba0f9524ec8b9bc07c6fcc53206e.png";
import imgImage from "figma:asset/26ba0f3a3a3c7e99709b441b6313cf75bcc15c10.png";
import imgImage2 from "figma:asset/9daab04414367d49254977be5b6fb20e0c511e1b.png";
import imgImageBackground from "figma:asset/13e0aecd027207234c6d3f67b9dd51470dc36fad.png";
import imgMedia from "figma:asset/feeb787d3fd1ac5bf61ebec76282ebb771ba46be.png";
import imgImageBackground1 from "figma:asset/39479d40e880068a5b50a1c174a8e243d249fd76.png";
import imgImage3 from "figma:asset/07bc81a768f63fb90c646c2c895d4e10379d0f6e.png";
import imgImage4 from "figma:asset/a33aeae8343bfa25367ab8869bcca2f982dfd19c.png";

function Container2() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #C9A84C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#c9a84c] text-[12px] w-[191px]">
        <p className="leading-[16px]">Grand Egyptian Museum, Cairo</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] h-[16px] items-center left-0 right-[-93.91px] top-0" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-y-1/2 absolute h-[16px] left-[19px] top-[calc(50%+16px)] w-[141.093px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Container4() {
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
      <Container4 />
      <Background />
    </div>
  );
}

function H() {
  return (
    <div className="absolute h-[39.999px] left-[49px] top-[6px] w-[195.22px]" data-name="h1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[40px] left-[-5px] not-italic text-[#5c300f] text-[20px] top-[5px] tracking-[-0.8px] whitespace-nowrap">MuseoVerse</p>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(246,246,248,0.9)] border-[#e2e8f0] border-b border-solid h-[77px] left-0 right-0 top-[62px]" data-name="Header">
      <Container />
      <Button />
      <div className="-translate-x-1/2 absolute left-[calc(50%-192.5px)] size-[27px] top-[12px]" data-name="removed bg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRemovedBg1} />
      </div>
      <H />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
        <g id="Container">
          <path d={svgPaths.p76ea580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[2px] relative rounded-[6px] shrink-0" data-name="Overlay+OverlayBlur">
      <Container8 />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.5px] uppercase w-[40.83px]">
        <p className="leading-[15px]">Pinned</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 right-0 top-0" data-name="Container">
      <OverlayOverlayBlur />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[27px]" data-name="Heading 2">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[56px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-[244px]">
        <p className="leading-[28px] mb-0">Special Lecture: Ancient</p>
        <p className="leading-[28px]">Egypt</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[87px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[#e2e8f0] text-[14px] w-[213.47px]">
        <p className="leading-[20px] mb-0">Join Dr. Rossi in the Main Hall at</p>
        <p className="leading-[20px]">2 PM.</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[32px]" data-name="Margin">
      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image+Background+Border">
        <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
          <div className="absolute bg-[#cbd5e1] inset-0 rounded-[9999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgImageBackgroundBorder1} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#5c300f] border-solid inset-0 rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[32px]" data-name="Margin">
      <div className="pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image+Background+Border">
        <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
          <div className="absolute bg-[#cbd5e1] inset-0 rounded-[9999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgImageBackgroundBorder2} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#5c300f] border-solid inset-0 rounded-[9999px]" />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center pb-[9px] pt-[8px] px-[2px] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border-2 border-[#5c300f] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white w-[19.86px]">
        <p className="leading-[15px]">+42</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-8px] relative shrink-0 size-[32px]" data-name="Margin">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex items-start left-0 pr-[8px] right-0 top-[143px]" data-name="Container">
      <div className="mr-[-8px] pointer-events-none relative rounded-[9999px] shrink-0 size-[32px]" data-name="Image+Background+Border">
        <div aria-hidden="true" className="absolute inset-0 rounded-[9999px]">
          <div className="absolute bg-[#cbd5e1] inset-0 rounded-[9999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgImageBackgroundBorder} />
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#5c300f] border-solid inset-0 rounded-[9999px]" />
      </div>
      <Margin />
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] h-[175px] min-h-px min-w-px relative" data-name="Container">
      <Container7 />
      <Heading />
      <Container9 />
      <Container10 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[24px] shrink-0 size-[80px]" data-name="Background+Shadow">
      <div aria-hidden="true" className="absolute bg-[#1e293b] inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[150.98%] left-0 max-w-none top-[-13.31%] w-full" src={imgImage} />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <BackgroundShadow />
    </div>
  );
}

function PinnedAnnouncement() {
  return (
    <div className="absolute left-[16px] right-[18px] rounded-[32px] top-[160px]" data-name="Pinned Announcement" style={{ backgroundImage: "linear-gradient(152.096deg, rgb(139, 111, 71) 0%, rgb(92, 48, 15) 100%)" }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[20px] relative rounded-[inherit] w-full">
        <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[20px] right-[-32px] rounded-[9999px] size-[128px] top-[-32px]" data-name="Overlay+Blur" />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(11,23,60,0.2),0px_4px_6px_-4px_rgba(11,23,60,0.2)]" />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#e2e8f0] content-stretch flex flex-col items-start justify-center left-[16px] overflow-clip rounded-[9999px] size-[40px] top-[16px]" data-name="Background">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[117.03%] left-0 max-w-none top-[-0.07%] w-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">Share your discovery...</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-0 top-[calc(50%+0.5px)]" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#c9a84c] text-[8px] w-[56px]">
        <p className="leading-[16px]">Visitors-only</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[13px] relative shrink-0 w-[53px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[14px] relative shrink-0 w-[30px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 14">
        <g id="Group 49">
          <rect fill="var(--fill-0, #E2E8F0)" height="14" id="Track" rx="7" width="30" />
          <circle cx="7" cy="7" fill="var(--fill-0, white)" id="Thumb" r="6" />
        </g>
      </svg>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-start justify-center left-0 overflow-clip pb-[20px] top-0 w-[320px]" data-name="Textarea">
      <Container12 />
      <Container13 />
      <Group1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16.667px] relative shrink-0 w-[18.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.6667">
        <g id="Container">
          <path d={svgPaths.p35e35380} fill="var(--fill-0, #0B173C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
        <g id="Container">
          <path d={svgPaths.p2eb9f680} fill="var(--fill-0, #0B173C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#5c300f] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_4px_6px_-1px_rgba(11,23,60,0.2),0px_2px_4px_-2px_rgba(11,23,60,0.2)]" data-name="Button:shadow" />
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[30.09px]">
          <p className="leading-[20px]">Post</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute content-stretch flex h-[45.667px] items-center justify-between left-0 pt-[13px] top-[48px] w-[320px]" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Container15 />
      <Button3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[93.667px] left-[68px] right-[16px] top-[16px]" data-name="Container">
      <Textarea />
      <HorizontalBorder />
    </div>
  );
}

function Composer() {
  return (
    <div className="absolute bg-white border border-[#c9a84c] border-solid h-[127.667px] left-[16px] right-[18px] rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[396px]" data-name="Composer">
      <Background1 />
      <Container11 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[12px] tracking-[1.2px] uppercase w-[126.3px]">
        <p className="leading-[16px]">Recent Activity</p>
      </div>
    </div>
  );
}

function FeedDivider() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[16px] pb-[8px] px-[16px] right-[18px] top-[551.13px]" data-name="Feed Divider">
      <div className="bg-[#e2e8f0] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Horizontal Divider" />
      <Container18 />
      <div className="bg-[#e2e8f0] flex-[1_0_0] h-px min-h-px min-w-px" data-name="Horizontal Divider" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[14px] w-[55.66px]">
        <p className="leading-[20px]">Alice M.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-full">
        <p className="leading-[16px]">2 min ago • 10th Family Hall</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[185px]" data-name="Container">
      <Heading1 />
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[16px] top-1/2 w-[262px]" data-name="Container">
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Image+Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgImageBackground} />
        </div>
      </div>
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
        <g id="Container">
          <path d={svgPaths.p30aa4a00} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[313px] top-[24.5px]" data-name="Button">
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[338px] top-1/2" data-name="Button">
      <Container23 />
    </div>
  );
}

function UserInfo() {
  return (
    <div className="absolute h-[64px] left-0 right-0 top-0" data-name="User Info">
      <Container19 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[62.75px]" data-name="Content">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-[318px]">
        <p className="leading-[22.75px]">
          Discovered this stunning artifact at the Grand Egyptian Museum! 🏺 #MuseoVerse
          <br aria-hidden="true" />
          {`The ancient craftsmanship is truly breathtaking. `}
        </p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[15.292px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.2917">
        <g id="Container">
          <path d={svgPaths.p28063980} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[15.09px]">
        <p className="leading-[16px]">24</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Button">
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f961b80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[7.25px]">
        <p className="leading-[16px]">5</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Button">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[16px] top-1/2" data-name="Container">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p105e9c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[331px] top-[calc(50%+0.17px)]" data-name="Button">
      <Container29 />
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute h-[40.667px] left-0 right-0 top-[404.25px]" data-name="Actions">
      <Container24 />
      <Button8 />
    </div>
  );
}

function ParagraphOverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(0,0,0,0.6)] h-[23px] left-[12px] rounded-[16px] top-[12px] w-[97.66px]" data-name="Paragraph+Overlay+OverlayBlur">
      <div className="absolute h-[7.5px] left-[8px] top-[7.75px] w-[11px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7.5">
          <path d={svgPaths.p1940a400} fill="var(--fill-0, white)" id="Icon" />
        </svg>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] left-[21px] not-italic text-[10px] text-white top-[11.5px] w-[68.66px]">
        <p className="leading-[15px]">{` Museum Only`}</p>
      </div>
    </div>
  );
}

function Media() {
  return (
    <div className="absolute bg-[#f1f5f9] h-[256px] left-0 right-0 top-[148.25px]" data-name="Media">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedia} />
      <ParagraphOverlayOverlayBlur />
    </div>
  );
}

function FeedItem() {
  return (
    <div className="absolute bg-white border border-[#c9a84c] border-solid h-[447px] left-[33px] overflow-clip right-[35px] rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[586px]" data-name="Feed Item 1">
      <UserInfo />
      <Content />
      <Actions />
      <Media />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[14px] w-[57.08px]">
        <p className="leading-[20px]">David K.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] w-[131.48px]">
        <p className="leading-[16px]">15 min ago • Egypt Hall</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[131.48px]" data-name="Container">
      <Heading2 />
      <Container32 />
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[12px] items-center left-[16px] top-1/2" data-name="Container">
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Image+Background">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
          <div className="absolute bg-[#e2e8f0] inset-0 rounded-[9999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgImageBackground1} />
        </div>
      </div>
      <Container31 />
    </div>
  );
}

function Container33() {
  return <div className="absolute h-[15px] left-[262.91px] top-[24.5px] w-[11.667px]" data-name="Container" />;
}

function Container34() {
  return (
    <div className="h-[4px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
        <g id="Container">
          <path d={svgPaths.p3a256b80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[338px] top-1/2" data-name="Button">
      <Container34 />
    </div>
  );
}

function UserInfo1() {
  return (
    <div className="h-[64px] mb-[-1.2px] relative shrink-0 w-full" data-name="User Info">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container30 />
        <Container33 />
        <div className="-translate-x-1/2 absolute h-[15px] left-[calc(50%+133.83px)] top-[24.5px] w-[11.667px]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
            <path d={svgPaths.p30aa4a00} fill="var(--fill-0, #94A3B8)" id="Icon" />
          </svg>
        </div>
        <Button9 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="mb-[-1.2px] relative shrink-0 w-[324px]" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[69px] justify-center leading-[0] not-italic relative shrink-0 text-[#334155] text-[14px] w-[302.45px]">
          <p className="leading-[22.75px] mb-0">{`Just finished the "Pharaoh's Curse" AR`}</p>
          <p className="leading-[22.75px] mb-0">experience. The way the hieroglyphs light up</p>
          <p className="leading-[22.75px]">when you point the camera is mind-blowing! 🤯</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1f5f9] col-1 content-stretch flex flex-col h-[192px] items-start justify-center justify-self-stretch relative row-1 shrink-0" data-name="Background">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="relative shrink-0 size-[25px]" data-name="Shadow">
      <div className="absolute inset-[0_-32%_-72%_-32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 43">
          <g filter="url(#filter0_dd_1_1863)" id="Shadow">
            <path d={svgPaths.p39548b00} fill="var(--fill-0, white)" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="43" id="filter0_dd_1_1863" width="41" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="10" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_1863" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend in2="effect1_dropShadow_1_1863" mode="normal" result="effect2_dropShadow_1_1863" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_1863" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.3)] content-stretch flex inset-0 items-center justify-center" data-name="Overlay">
      <Shadow />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f1f5f9] col-2 content-stretch flex flex-col h-[192px] items-start justify-center justify-self-stretch relative row-1 shrink-0" data-name="Background">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-4.24%] max-w-none top-0 w-[108.47%]" src={imgImage4} />
        </div>
      </div>
      <Overlay />
    </div>
  );
}

function MediaGalleryStyle() {
  return (
    <div className="mb-[-1.2px] relative shrink-0 w-full" data-name="Media - Gallery Style">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[2px] gap-y-[2px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_192px] pt-[17.2px] relative w-full">
        <Background2 />
        <Background3 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[15.292px] relative shrink-0 w-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.2917">
        <g id="Container">
          <path d={svgPaths.p29a88200} fill="var(--fill-0, #F43F5E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f43f5e] text-[12px] text-center w-[19.78px]">
        <p className="leading-[16px]">156</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Button">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 size-[16.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
        <g id="Container">
          <path d={svgPaths.p2f961b80} fill="var(--fill-0, #64748B)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[14.92px]">
        <p className="leading-[16px]">32</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Button">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container35() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[16px] top-[calc(50%+0.6px)]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[13.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 17.5">
        <g id="Container">
          <path d={svgPaths.p105e9c80} fill="var(--fill-0, #94A3B8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[331px] top-[calc(50%+0.6px)]" data-name="Button">
      <Container40 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="h-[42.7px] mb-[-1.2px] relative shrink-0 w-full" data-name="Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container35 />
        <Button12 />
      </div>
    </div>
  );
}

function FeedItem1() {
  return (
    <div className="absolute bg-white left-[33px] right-[35px] rounded-[32px] top-[1060.13px]" data-name="Feed Item 2">
      <div className="content-stretch flex flex-col items-center overflow-clip pb-[2.2px] pt-px px-px relative rounded-[inherit] w-full">
        <UserInfo1 />
        <Content1 />
        <MediaGalleryStyle />
        <Actions1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 right-0 top-[62px]">
      <Header />
      <PinnedAnnouncement />
      <Composer />
      <FeedDivider />
      <FeedItem />
      <FeedItem1 />
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
        <g clipPath="url(#clip0_1_1848)" id="Elements / Battery">
          <rect height="12" id="Border" opacity="0.4" rx="3.5" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p223c2d00} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2" width="21" x="2" y="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_1848">
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

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white h-[62px] left-0 opacity-50 shadow-[0px_2px_51.2px_0px_rgba(0,0,0,0.25)] top-0 w-[440px]" />
      <Indicators />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-131px)] top-[calc(50%-759px)]" data-name="Elements / Time">
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
      <Group2 />
    </div>
  );
}

function CompleteApplicationPrototypeCopy() {
  return (
    <div className="absolute bg-white h-[1571px] left-0 overflow-clip top-0 w-[440px]" data-name="Complete application prototype (Copy)">
      <div className="absolute flex h-[1500px] items-center justify-center left-[-125px] top-0 w-[690.377px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[690.377px] relative w-[1500px]" data-name="image 1">
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[134.77%] left-[-0.04%] max-w-none top-[-17.5%] w-[100.08%]" src={imgImage1} />
            </div>
          </div>
        </div>
      </div>
      <Group3 />
      <Group />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.p20226780} fill="var(--fill-0, #341701)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[21.77px]">
        <p className="leading-[15px]">Feed</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[39.7px] top-[calc(50%-8px)]" data-name="Container">
      <Container42 />
      <Margin3 />
    </div>
  );
}

function Container44() {
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

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[33.41px]">
        <p className="leading-[15px]">Explore</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[111.14px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container44 />
      <Margin4 />
    </div>
  );
}

function Container46() {
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

function Background4() {
  return (
    <div className="bg-[#341701] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_8px_#fbf9f4,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-1/2" data-name="Overlay+Shadow" />
      <Container46 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[10px] tracking-[-0.25px] w-[22.53px]">
        <p className="leading-[15px]">Scan</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[-32px]" data-name="Container">
      <Background4 />
      <Margin6 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute h-[47px] left-[191.97px] top-[10px] w-[56px]" data-name="Margin">
      <Container45 />
    </div>
  );
}

function Container48() {
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

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[28.72px]">
        <p className="leading-[15px]">Virtual</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.39px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container48 />
      <Margin7 />
    </div>
  );
}

function Container50() {
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

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[15px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[10px] tracking-[-0.25px] w-[28.718px]">
        <p className="leading-[15px]">Profile</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col gap-[0.364px] items-center justify-center opacity-60 relative" data-name="Container">
      <Container50 />
      <Margin8 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,250,236,0.9)] border-[#c9a84c] border-solid border-t bottom-0 h-[84px] left-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_32px_0px_rgba(52,23,1,0.05)] w-[440px]" data-name="BottomNavBar">
      <Container41 />
      <Container43 />
      <Margin5 />
      <Container47 />
      <div className="-translate-y-1/2 absolute flex h-[38.9px] items-center justify-center left-[370.1px] top-[calc(50%-8px)] w-[31.59px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Container49 />
        </div>
      </div>
    </div>
  );
}

export default function FeedGrandEgyptianMuseumCairo() {
  return (
    <div className="relative size-full" data-name="Feed - Grand Egyptian Museum, Cairo">
      <CompleteApplicationPrototypeCopy />
      <BottomNavBar />
    </div>
  );
}