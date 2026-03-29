import svgPaths from "./svg-dgp01kl6bl";
import imgLiveCameraPlaceholderMuseumArtifactView from "figma:asset/64d0d95f9e8f747f189f5da697e0557efb1ff413.png";

function LiveCameraPlaceholderMuseumArtifactView() {
  return (
    <div className="opacity-90 relative size-full" data-name="Live Camera Placeholder → Museum Artifact View">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLiveCameraPlaceholderMuseumArtifactView} />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g clipPath="url(#clip0_1_2125)" id="SVG">
          <path d="M0 0H100V100H0V0V0" fill="var(--fill-0, black)" id="Vector" opacity="0.03" />
        </g>
        <defs>
          <clipPath id="clip0_1_2125">
            <rect fill="white" height="100" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="content-stretch flex flex-col h-[884px] items-start overflow-clip pb-[784px] pr-[340px] relative shrink-0 w-[440px]" data-name="image fill">
      <Svg />
    </div>
  );
}

function OverlayTextures() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_-62px_0] items-start" data-name="Overlay Textures">
      <ImageFill />
    </div>
  );
}

function InstructionText() {
  return (
    <div className="content-stretch flex flex-col items-center px-[9.92px] relative shadow-[0px_2px_2px_0px_rgba(0,0,0,0.06),0px_4px_3px_0px_rgba(0,0,0,0.07)] shrink-0" data-name="Instruction Text">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[300.16px]">
        <p className="leading-[20px] mb-0">Point your camera at an artifact to reveal its</p>
        <p className="leading-[20px]">story.</p>
      </div>
    </div>
  );
}

function InstructionTextMargin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[60px] max-w-[320px] pt-[48px] top-[542px]" data-name="Instruction Text:margin">
      <InstructionText />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[17.923px] relative shrink-0 w-[10.76px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.7595 17.9229">
        <g id="Container">
          <path d={svgPaths.pf0ec600} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(213,195,185,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[19px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.9999">
        <g id="Container">
          <path d={svgPaths.pfa79800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center p-px relative rounded-[9999px] shrink-0 size-[48px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(213,195,185,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container1 />
    </div>
  );
}

function ContextualControlsTop() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start right-[24px] top-[28px]" data-name="Contextual Controls (Top)">
      <Button />
      <Button1 />
    </div>
  );
}

function SubtleCenterCrosshair() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Subtle Center Crosshair">
      <div className="bg-[#735c00] opacity-40 rounded-[9999px] shrink-0 size-[4px]" data-name="Background" />
    </div>
  );
}

function CentralElegantScanFrame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[288px] top-[calc(50%-44px)]" data-name="Central Elegant Scan Frame">
      <div className="absolute bg-[rgba(255,255,255,0)] border-[#ffe088] border-l-2 border-solid border-t-2 left-0 shadow-[0px_0px_15px_0px_rgba(233,195,73,0.3)] size-[48px] top-0" data-name="Glowing Corners" />
      <div className="absolute bg-[rgba(255,255,255,0)] border-[#ffe088] border-r-2 border-solid border-t-2 right-0 shadow-[0px_0px_15px_0px_rgba(233,195,73,0.3)] size-[48px] top-0" data-name="Overlay+Border+Shadow" />
      <div className="absolute bg-[rgba(255,255,255,0)] border-[#ffe088] border-b-2 border-l-2 border-solid bottom-0 left-0 shadow-[0px_0px_15px_0px_rgba(233,195,73,0.3)] size-[48px]" data-name="Overlay+Border+Shadow" />
      <div className="absolute bg-[rgba(255,255,255,0)] border-[#ffe088] border-b-2 border-r-2 border-solid bottom-0 right-0 shadow-[0px_0px_15px_0px_rgba(233,195,73,0.3)] size-[48px]" data-name="Overlay+Border+Shadow" />
      <div className="-translate-y-1/2 absolute bg-gradient-to-r from-[rgba(255,224,136,0)] h-px left-0 opacity-50 right-0 shadow-[0px_0px_10px_0px_#e9c349] to-[rgba(255,224,136,0)] top-[calc(50%+0.5px)] via-1/2 via-[#ffe088]" data-name="Scanning Line (Implicit Motion via placement)" />
      <SubtleCenterCrosshair />
    </div>
  );
}

function GalleryUploadButton() {
  return <div className="absolute bottom-[809px] h-[46px] left-[59px] w-[201px]" data-name="Gallery Upload Button" />;
}

function Container2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[50px] top-1/2 w-[190px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[188px]">
        <p className="leading-[20px]">Switch to Live Video Mode</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[19px] size-[24px] top-[10px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1c4d0dc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p4207a00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] border border-[rgba(213,195,185,0.2)] border-solid h-[46px] left-[calc(50%-66px)] rounded-[9999px] top-[28px] w-[258px]" data-name="Button">
      <Container2 />
      <Frame />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[14.167px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1666 14.1666">
        <g id="Container">
          <path d={svgPaths.p1c1ad400} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[101.64px]">
          <p className="leading-[20px]">Browse Gallery</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[12px] items-center px-[25px] py-[13px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(213,195,185,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container3 />
      <Container4 />
    </div>
  );
}

function GalleryUploadButton1() {
  return (
    <div className="absolute bottom-[192px] content-stretch flex items-start justify-center left-0 w-[440px]" data-name="Gallery Upload Button">
      <Button3 />
    </div>
  );
}

function ScanInterfaceUi() {
  return (
    <div className="absolute inset-[0_0_-62px_0]" data-name="Scan Interface UI">
      <InstructionTextMargin />
      <ContextualControlsTop />
      <CentralElegantScanFrame />
      <GalleryUploadButton />
      <Button2 />
      <GalleryUploadButton1 />
    </div>
  );
}

function MainCameraViewport() {
  return (
    <div className="absolute bg-black inset-[62px_0_0_0] overflow-clip" data-name="Main Camera Viewport">
      <div className="absolute flex inset-[-22.1px_-11px_-84.1px_-11px] items-center justify-center">
        <div className="flex-none h-[1000.2px] w-[462px]">
          <LiveCameraPlaceholderMuseumArtifactView />
        </div>
      </div>
      <OverlayTextures />
      <div className="absolute bg-gradient-to-t from-[rgba(52,23,1,0.6)] inset-[0_0_-62px_0] to-[rgba(52,23,1,0.4)] via-1/2 via-[rgba(52,23,1,0)]" data-name="Gradient" />
      <ScanInterfaceUi />
    </div>
  );
}

function Container6() {
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

function Container5() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[39.7px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container6 />
      <Margin />
    </div>
  );
}

function Container8() {
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

function Container7() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[111.14px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container8 />
      <Margin1 />
    </div>
  );
}

function Container10() {
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
      <Container10 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] text-center tracking-[-0.25px] w-[30px]">
        <p className="leading-[15px]">Scan</p>
      </div>
    </div>
  );
}

function Container9() {
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
      <Container9 />
    </div>
  );
}

function Container12() {
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

function Container11() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.39px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container12 />
      <Margin4 />
    </div>
  );
}

function Container14() {
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

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[0.364px] items-center justify-center opacity-60 relative" data-name="Container">
      <Container14 />
      <Margin5 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,250,236,0.9)] border-[#c9a84c] border-solid border-t h-[84px] left-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_32px_0px_rgba(52,23,1,0.05)] top-[872px] w-[440px]" data-name="BottomNavBar">
      <Container5 />
      <Container7 />
      <Margin2 />
      <Container11 />
      <div className="-translate-y-1/2 absolute flex h-[38.9px] items-center justify-center left-[370.1px] top-[calc(50%-8px)] w-[31.59px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Container13 />
        </div>
      </div>
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
          <path d={svgPaths.p2984eb00} fill="var(--fill-0, black)" id="Wifi" />
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-131px)] top-[calc(50%-445.5px)]" data-name="Elements / Time">
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

export default function ScanningInTheImageMode() {
  return (
    <div className="bg-[#fbf9f4] relative size-full" data-name="Scanning in the image mode">
      <MainCameraViewport />
      <BottomNavBar />
      <Group />
    </div>
  );
}