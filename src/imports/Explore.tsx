import svgPaths from "./svg-b9f3a8s288";
import imgImage1 from "figma:asset/6ad5b2372d473d7fa1b2325d1b5c6f48e5efa82c.png";
import imgRemovedBg1 from "figma:asset/ca37ab0589456b573561e21d7ada50143220bbeb.png";
import imgOverlayShadow from "figma:asset/fc7bde1ba3b2cc226a6490603390ab85ec0adc12.png";
import imgAb6AXuDwqyJmMTlYYqLv6X9KbziIuf1W4Nr7TCgkLKtVjJpGVsYdtab1HiOyjFjLgkQAavMlpmSjMPxuwUoz93NaJfAqeTjudVbvOuP6NxThXqq6PHqiMEDjobCkVjahE2J2FostU2DUqlx1SpcSCfMjk7JdSeqePhft1YfdYMsepiv2Oytfb3C3O8U1If7CAupqahn2Ik6DkBrvbfGabiLhKvlVdsv6HcxDkwlWxD5IsHoiArS00Tb06UXmkXtmZaglBpQtG01 from "figma:asset/78e12718b25d6700505e87dd53ec9969d3d45995.png";
import imgAb6AXuB6CqjtH2NsxNMd8NDd03WFk9SnvAlgg60EBwZlZojAakFzPhc8VmYhNubvcFTxZLgBop9CQsJMlGmQf50YtGfYa1JxgNhhC0N3ZTYziFuViWbS8Gx2Iqao55IhZbo70FShRtYqLhSYkoTxqGqJzzCtAsKyQlquBQtYE4DjLIyRSduweXnieE9Wv5Zw93AsDzfDbFh7TRAzCUkgAG9BfSsqjGbmw8YcM2Q8SwpqTkNVvSHzRmYdCo1La45DEdwM2V0ZXDe from "figma:asset/941d9b34208631347cbc2b3e5dacbf731dd9c5bd.png";
import imgAb6AXuD9CnMcCeyGs6KuaXyI09Eq1O4L4QtZ0ZlTwucMZ2IEBvaaA01G7ZluClFkZd4KmI6BxzEfag950GcAcIk6YAxs6VqwCxripCaVuJktYqaEh4Mkvp6JUmg3By1CynGjV5Y96MSz5XcysBcVNsy9OilxwqNiRbGezXfayugWpqUlMwfpPoqPAwvFnF09MYr1Ux1Dw6TspABtj9LrAdLwGwx2X724S0OhgEji3Lvb66Opi8Rgd6S5SdnQVaKguRh3X6SlH8Nac6 from "figma:asset/d33610ae448d2df1e6611b17bcb3dd1a2b752c6f.png";
import imgAb6AXuDkm8SuH6EtWp5ERKpMMpoO499HBfv8GnkPQoLSzKm03KZ4DD2GvnB5LdLhPwhLoXonsVvMCfDf2EBCrptc6KvWcEuFnDIpVpHavqNxAvIHrJsbx9YTaZjzJk8Qn87BvWoZailuQUqlePPlQ58CUx9PQWzOhAd3QaH8H01U1Qo5S9Oru5TtjsRfcWjjrkIsmw3SOrof7KqMnJbIun8Ob9TYdhjq2LsRxoSiQhQbRsVwcUxDyWoNksvoPzKunvf73718IzK7 from "figma:asset/beefa562b6d628e7caa9c53979fc80d71335f872.png";

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

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(131,116,107,0.6)] w-full">
        <p className="leading-[normal]">Search museums, exhibits, artifacts...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#f5f3ee] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pl-[48px] pr-[16px] py-[17px] relative w-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-[23.21%] content-stretch flex flex-col items-start left-[16px] top-[33.93%]" data-name="Container">
      <div className="relative shrink-0 size-[17.192px]" data-name="Icon">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1922 17.1922">
          <path d={svgPaths.p10cae140} fill="var(--fill-0, #83746B)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#341701] content-stretch flex flex-col items-center justify-center left-0 px-[24px] py-[8px] rounded-[9999px] top-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[100.02px]">
        <p className="leading-[20px]">All Discoveries</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#e4e2dd] content-stretch flex flex-col items-center justify-center left-[160.02px] px-[24px] py-[8px] rounded-[9999px] top-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center tracking-[0.35px] w-[106.05px]">
        <p className="leading-[20px]">Ancient History</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#e4e2dd] content-stretch flex flex-col items-center justify-center left-[326.06px] px-[24px] py-[8px] rounded-[9999px] top-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center tracking-[0.35px] w-[76.95px]">
        <p className="leading-[20px]">Modern Art</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#e4e2dd] content-stretch flex flex-col items-center justify-center left-[463.02px] px-[24px] py-[8px] rounded-[9999px] top-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center tracking-[0.35px] w-[103.39px]">
        <p className="leading-[20px]">Natural History</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e4e2dd] content-stretch flex flex-col items-center justify-center left-[626.41px] px-[24px] py-[8px] rounded-[9999px] top-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[14px] text-center tracking-[0.35px] w-[106.09px]">
        <p className="leading-[20px]">Classical Music</p>
      </div>
    </div>
  );
}

function CategoryChips() {
  return (
    <div className="h-[44px] overflow-clip relative shrink-0 w-full" data-name="Category Chips">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function SectionSearchBar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[158px] w-[392px]" data-name="Section - Search Bar">
      <Container1 />
      <CategoryChips />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[2.4px] uppercase w-[87.69px]">
        <p className="leading-[16px]">Spotlight</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[36px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[30px] w-[253.48px]">
        <p className="leading-[36px]">Featured Museum</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[253.48px]" data-name="Container">
      <Container6 />
      <Heading />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[11.089px] relative shrink-0 w-[8.806px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.80605 11.0889">
        <g id="Container">
          <path d={svgPaths.p20164500} fill="var(--fill-0, white)" fillOpacity="0.8" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[16px] items-center left-0 right-0 top-0" data-name="Container">
      <Container10 />
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[1.2px] uppercase w-[97.77px]">
        <p className="leading-[16px]">Paris, France</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[24px]" data-name="Heading 3">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[80px] justify-center leading-[0] relative shrink-0 text-[36px] text-white w-[145.47px]">
        <p className="leading-[40px] mb-0">Louvre</p>
        <p className="leading-[40px]">Museum</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bottom-[114px] h-[112px] left-[21px] w-[145.47px]" data-name="Container">
      <Container9 />
      <Heading1 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white bottom-[32px] content-stretch flex flex-col items-center justify-center left-[240.23px] opacity-90 px-[31.77px] py-[12px] rounded-[8px]" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[48px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[16px] text-center w-[56.23px]">
        <p className="leading-[24px] mb-0">Explore</p>
        <p className="leading-[24px]">Now</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-0 h-[176px] left-0 right-0" data-name="Container">
      <Container8 />
      <Button6 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="aspect-[16/10] bg-[rgba(255,255,255,0)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Shadow">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[160%] left-0 max-w-none top-[-30%] w-full" src={imgOverlayShadow} />
        </div>
        <div className="absolute bg-gradient-to-t from-[rgba(52,23,1,0.8)] inset-0 to-[rgba(52,23,1,0)] via-1/2 via-[rgba(52,23,1,0)]" data-name="Gradient" />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function FeaturedMuseumSectionBentoInspired() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] top-[298px] w-[392px]" data-name="Featured Museum Section (Bento Inspired)">
      <Container4 />
      <OverlayShadow />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[2.4px] uppercase w-[76.16px]">
        <p className="leading-[16px]">Tailored</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[64px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[24px] w-[169.67px]">
        <p className="leading-[32px] mb-0">Recommended</p>
        <p className="leading-[32px]">Exhibitions</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[169.67px]" data-name="Container">
      <Container13 />
      <Heading2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 size-[8.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74996 8.74996">
        <g id="Container">
          <path d={svgPaths.p398000} fill="var(--fill-0, #76593A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[20.39px] items-center pl-[16.37px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[40px] justify-center leading-[0] relative shrink-0 text-[#76593a] text-[14px] text-center w-[44.14px]">
        <p className="leading-[20px] mb-0">View</p>
        <p className="leading-[20px]">gallery</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Button7 />
    </div>
  );
}

function OverlayOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-[12px] px-[12px] py-[4px] rounded-[9999px] top-[12px] w-[81px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] tracking-[-0.5px] uppercase w-[63px]">
        <p className="leading-[15px]">SPONSORED</p>
      </div>
    </div>
  );
}

function Ab6AXuDwqyJmMTlYYqLv6X9KbziIuf1W4Nr7TCgkLKtVjJpGVsYdtab1HiOyjFjLgkQAavMlpmSjMPxuwUoz93NaJfAqeTjudVbvOuP6NxThXqq6PHqiMEDjobCkVjahE2J2FostU2DUqlx1SpcSCfMjk7JdSeqePhft1YfdYMsepiv2Oytfb3C3O8U1If7CAupqahn2Ik6DkBrvbfGabiLhKvlVdsv6HcxDkwlWxD5IsHoiArS00Tb06UXmkXtmZaglBpQtG() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-full" data-name="AB6AXuDWQYJmMTlYYqLV6X9KbziIUF1W4Nr7tCgkLKtVJJpGVsYdtab1hi-oyjFJLgk_q_AavMLPMSj__MPxuwUOZ93NaJfAQETjudVbvOuP6nxTHXqq6pHqiM_eDJOBCkVjahE2J_2FostU2DUqlx1SpcSCfMjk7JDSeqePHFT1YFD_yMsepiv2Oytfb3C3O8U1if7cAupqahn2Ik6DkBrvbfGABILhKVLVdsv_6HCXDkwlWxD5isHOIArS00tb06uXmkXtmZaglBPQtG01">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[153.13%] left-0 max-w-none top-[-26.56%] w-full" src={imgAb6AXuDwqyJmMTlYYqLv6X9KbziIuf1W4Nr7TCgkLKtVjJpGVsYdtab1HiOyjFjLgkQAavMlpmSjMPxuwUoz93NaJfAqeTjudVbvOuP6NxThXqq6PHqiMEDjobCkVjahE2J2FostU2DUqlx1SpcSCfMjk7JdSeqePhft1YfdYMsepiv2Oytfb3C3O8U1If7CAupqahn2Ik6DkBrvbfGabiLhKvlVdsv6HcxDkwlWxD5IsHoiArS00Tb06UXmkXtmZaglBpQtG01} />
      </div>
      <OverlayOverlayBlur />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col h-[256px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Ab6AXuDwqyJmMTlYYqLv6X9KbziIuf1W4Nr7TCgkLKtVjJpGVsYdtab1HiOyjFjLgkQAavMlpmSjMPxuwUoz93NaJfAqeTjudVbvOuP6NxThXqq6PHqiMEDjobCkVjahE2J2FostU2DUqlx1SpcSCfMjk7JdSeqePhft1YfdYMsepiv2Oytfb3C3O8U1If7CAupqahn2Ik6DkBrvbfGabiLhKvlVdsv6HcxDkwlWxD5IsHoiArS00Tb06UXmkXtmZaglBpQtG />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[24px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[10px] tracking-[1px] uppercase w-[89.02px]">
        <p className="leading-[15px]">Ancient Egypt</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] right-[24px] top-[47px]" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[25px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[20px] w-[189.75px]">
        <p className="leading-[25px]">Egyptian Antiquities</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pb-[0.625px] right-[24px] top-[78.88px]" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[46px] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[14px] w-[307.28px]">
        <p className="leading-[22.75px] mb-0">Journey through the Nile valley and discover the</p>
        <p className="leading-[22.75px]">{`secrets of the pharaohs' eternal resting places.`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(131,116,107,0.8)] w-[119.53px]">
        <p className="leading-[16px]">60 mins walk-through</p>
      </div>
    </div>
  );
}

function Container22() {
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

function Container20() {
  return (
    <div className="absolute bottom-[24px] content-stretch flex items-center justify-between left-[24px] right-[24px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[189.5px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Heading3 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function LargeVerticalCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Large Vertical Card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container16 />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Ab6AXuB6CqjtH2NsxNMd8NDd03WFk9SnvAlgg60EBwZlZojAakFzPhc8VmYhNubvcFTxZLgBop9CQsJMlGmQf50YtGfYa1JxgNhhC0N3ZTYziFuViWbS8Gx2Iqao55IhZbo70FShRtYqLhSYkoTxqGqJzzCtAsKyQlquBQtYE4DjLIyRSduweXnieE9Wv5Zw93AsDzfDbFh7TRAzCUkgAG9BfSsqjGbmw8YcM2Q8SwpqTkNVvSHzRmYdCo1La45DEdwM2V0ZXDe() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuB6CqjtH2_nsxNMd8NDd03wFK9snvALGG60EBwZlZOJAakFZPhc8VmYhNubvcFTxZLgBop9_CQsJMlGmQF50YtGFYa1JXGNhhC0N3zTYziFuVIWbS8GX2IQAO55ihZbo70FShRTYq-lhSYkoTxqGQJzzCtAsKYQlquBQtY-e4DjLIyRSduwe-XnieE9wv5zw93asDzfDbFh7tRAz-cUKG-aG9BfSsqjGbmw8YcM2q8SwpqTkNVvSHzRmYDCo1La45-dEdwM2v0_zXDe">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[245%] left-0 max-w-none top-[-72.5%] w-full" src={imgAb6AXuB6CqjtH2NsxNMd8NDd03WFk9SnvAlgg60EBwZlZojAakFzPhc8VmYhNubvcFTxZLgBop9CQsJMlGmQf50YtGfYa1JxgNhhC0N3ZTYziFuViWbS8Gx2Iqao55IhZbo70FShRtYqLhSYkoTxqGqJzzCtAsKyQlquBQtYE4DjLIyRSduweXnieE9Wv5Zw93AsDzfDbFh7TRAzCUkgAG9BfSsqjGbmw8YcM2Q8SwpqTkNVvSHzRmYdCo1La45DEdwM2V0ZXDe} />
      </div>
    </div>
  );
}

function OverlayOverlayBlur1() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col items-start left-[12px] px-[12px] py-[4px] rounded-[9999px] top-[12px]" data-name="Overlay+OverlayBlur">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#341701] text-[10px] tracking-[-0.5px] uppercase w-[46.02px]">
        <p className="leading-[15px]">Trending</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Ab6AXuB6CqjtH2NsxNMd8NDd03WFk9SnvAlgg60EBwZlZojAakFzPhc8VmYhNubvcFTxZLgBop9CQsJMlGmQf50YtGfYa1JxgNhhC0N3ZTYziFuViWbS8Gx2Iqao55IhZbo70FShRtYqLhSYkoTxqGqJzzCtAsKyQlquBQtYE4DjLIyRSduweXnieE9Wv5Zw93AsDzfDbFh7TRAzCUkgAG9BfSsqjGbmw8YcM2Q8SwpqTkNVvSHzRmYdCo1La45DEdwM2V0ZXDe />
      <OverlayOverlayBlur1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[18px] w-full">
        <p className="leading-[28px]">Renaissance Masters</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Heading 4:margin">
      <Heading4 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[12px] w-full">
        <p className="leading-[16px] mb-0">The rebirth of European art, featuring Da Vinci, Michelangelo,</p>
        <p className="leading-[16px]">and Raphael.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Heading4Margin />
        <Container25 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-1 self-start shrink-0" data-name="Card 2">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] w-full">
        <Container23 />
        <Container24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Ab6AXuD9CnMcCeyGs6KuaXyI09Eq1O4L4QtZ0ZlTwucMZ2IEBvaaA01G7ZluClFkZd4KmI6BxzEfag950GcAcIk6YAxs6VqwCxripCaVuJktYqaEh4Mkvp6JUmg3By1CynGjV5Y96MSz5XcysBcVNsy9OilxwqNiRbGezXfayugWpqUlMwfpPoqPAwvFnF09MYr1Ux1Dw6TspABtj9LrAdLwGwx2X724S0OhgEji3Lvb66Opi8Rgd6S5SdnQVaKguRh3X6SlH8Nac() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuD9cnMcCeyGS6KuaXyI09eq1o4l4qtZ0zlTwuc_mZ2iEBvaaA01g7zluClFkZD4Km_i6BXZEfag950GcAcIk6YAxs6vqwCxripCaVuJKTYqa_Eh4mkvp6JUmg3By1CYNGjV5Y96MSz5XcysBcVNsy9OilxwqNiRbGezXfayugWpqUlMWFPPoqPAwvFnF09MYr1Ux1dw6Tsp-aBtj9lrAdLwGWX2__x724S0OHGEji3lvb66OPI8rgd6S5sdnQVaKguRH3X6slH8Nac6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[245%] left-0 max-w-none top-[-72.5%] w-full" src={imgAb6AXuD9CnMcCeyGs6KuaXyI09Eq1O4L4QtZ0ZlTwucMZ2IEBvaaA01G7ZluClFkZd4KmI6BxzEfag950GcAcIk6YAxs6VqwCxripCaVuJktYqaEh4Mkvp6JUmg3By1CynGjV5Y96MSz5XcysBcVNsy9OilxwqNiRbGezXfayugWpqUlMwfpPoqPAwvFnF09MYr1Ux1Dw6TspABtj9LrAdLwGwx2X724S0OhgEji3Lvb66Opi8Rgd6S5SdnQVaKguRh3X6SlH8Nac6} />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[160px] items-start justify-center overflow-clip relative shrink-0 w-full z-[2]" data-name="Container">
      <Ab6AXuD9CnMcCeyGs6KuaXyI09Eq1O4L4QtZ0ZlTwucMZ2IEBvaaA01G7ZluClFkZd4KmI6BxzEfag950GcAcIk6YAxs6VqwCxripCaVuJktYqaEh4Mkvp6JUmg3By1CynGjV5Y96MSz5XcysBcVNsy9OilxwqNiRbGezXfayugWpqUlMwfpPoqPAwvFnF09MYr1Ux1Dw6TspABtj9LrAdLwGwx2X724S0OhgEji3Lvb66Opi8Rgd6S5SdnQVaKguRh3X6SlH8Nac />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#341701] text-[18px] w-full">
        <p className="leading-[28px]">Prehistoric Giants</p>
      </div>
    </div>
  );
}

function Heading4Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0 w-full" data-name="Heading 4:margin">
      <Heading5 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[12px] w-full">
        <p className="leading-[16px] mb-0">Unearth the massive creatures that ruled our planet millions of</p>
        <p className="leading-[16px]">years ago.</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Heading4Margin1 />
        <Container28 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[12px] row-2 self-start shrink-0" data-name="Card 3">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[inherit] w-full">
        <Container26 />
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function Component2X2SmallGridSection() {
  return (
    <div className="col-1 gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___264px_264px_208.50px] justify-self-stretch relative row-2 self-start shrink-0" data-name="2x2 Small Grid Section">
      <Card />
      <Card1 />
    </div>
  );
}

function Container15() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__445.50px_784.50px] relative shrink-0 w-full" data-name="Container">
      <LargeVerticalCard />
      <Component2X2SmallGridSection />
    </div>
  );
}

function SectionRecommendedForYouAsymmetricGrid() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[23px] pt-[8px] top-[659px] w-[392px]" data-name="Section - Recommended For You (Asymmetric Grid)">
      <Container11 />
      <Container15 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#735c00] text-[12px] tracking-[2.4px] uppercase w-[85.42px]">
        <p className="leading-[16px]">Proximity</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[36px] justify-center leading-[0] relative shrink-0 text-[#341701] text-[30px] w-[266.48px]">
        <p className="leading-[36px]">Museums Near You</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[28px] pt-[12px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Manrope:Regular',sans-serif] h-[78px] justify-center leading-[0] not-italic relative shrink-0 text-[#83746b] text-[16px] w-[311.2px]">
        <p className="leading-[26px] mb-0">Discover hidden cultural gems right in your</p>
        <p className="leading-[26px] mb-0">neighborhood. There are 12 exhibitions</p>
        <p className="leading-[26px]">starting today within 5 miles.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[16.923px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9999 16.923">
        <g id="Container">
          <path d={svgPaths.p9aeff80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#341701] content-stretch flex gap-[12px] items-center px-[32px] py-[16px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.01px_0_0] rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
      <Container32 />
      <div className="flex flex-col font-['Manrope:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[86.8px]">
        <p className="leading-[24px]">See on Map</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container30 />
      <Heading6 />
      <Container31 />
      <Button8 />
    </div>
  );
}

function Ab6AXuDkm8SuH6EtWp5ERKpMMpoO499HBfv8GnkPQoLSzKm03KZ4DD2GvnB5LdLhPwhLoXonsVvMCfDf2EBCrptc6KvWcEuFnDIpVpHavqNxAvIHrJsbx9YTaZjzJk8Qn87BvWoZailuQUqlePPlQ58CUx9PQWzOhAd3QaH8H01U1Qo5S9Oru5TtjsRfcWjjrkIsmw3SOrof7KqMnJbIun8Ob9TYdhjq2LsRxoSiQhQbRsVwcUxDyWoNksvoPzKunvf73718IzK() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="AB6AXuDkm8SuH6EtWp5eRKpMMpoO499hBFV8GnkPQoLSzKM03kZ4dD2gvnB_5ldLhPWH-loXonsVvMCfDF2eBCrptc6KvWcEUFnDIpVPHavqNXAv_IHrJSBX9YTaZJZJk8qn87bvWoZailuQUqle-pPlQ58cUx9pQWzOhAD3qaH8H01U1-qo5s9ORU5ttjs_rfcWjjrkIsmw3sOROF7KqMnJbIUN8Ob9TYdhjq2LsRxoSiQhQBRsVWCUxDYWoNKSVOPzKUNVF73718iz-K-7">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.51%] left-0 max-w-none top-[-14.75%] w-full" src={imgAb6AXuDkm8SuH6EtWp5ERKpMMpoO499HBfv8GnkPQoLSzKm03KZ4DD2GvnB5LdLhPwhLoXonsVvMCfDf2EBCrptc6KvWcEuFnDIpVpHavqNxAvIHrJsbx9YTaZjzJk8Qn87BvWoZailuQUqlePPlQ58CUx9PQWzOhAd3QaH8H01U1Qo5S9Oru5TtjsRfcWjjrkIsmw3SOrof7KqMnJbIun8Ob9TYdhjq2LsRxoSiQhQbRsVwcUxDyWoNksvoPzKunvf73718IzK7} />
      </div>
    </div>
  );
}

function DecorativeMapMarkers() {
  return (
    <div className="absolute bg-[#735c00] inset-[26.17%_61.18%_67.58%_33.94%] rounded-[9999px]" data-name="Decorative Map Markers">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Decorative Map Markers:shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#735c00] left-[calc(50%+8px)] rounded-[9999px] size-[16px] top-[calc(50%+8px)]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[16px] top-1/2" data-name="Overlay+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="absolute bg-[#341701] inset-[59.64%_25.91%_34.11%_69.21%] rounded-[9999px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="h-[256px] relative rounded-[16px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute bg-[#e4e2dd] inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full">
        <Ab6AXuDkm8SuH6EtWp5ERKpMMpoO499HBfv8GnkPQoLSzKm03KZ4DD2GvnB5LdLhPwhLoXonsVvMCfDf2EBCrptc6KvWcEuFnDIpVpHavqNxAvIHrJsbx9YTaZjzJk8Qn87BvWoZailuQUqlePPlQ58CUx9PQWzOhAd3QaH8H01U1Qo5S9Oru5TtjsRfcWjjrkIsmw3SOrof7KqMnJbIun8Ob9TYdhjq2LsRxoSiQhQbRsVwcUxDyWoNksvoPzKunvf73718IzK />
        <DecorativeMapMarkers />
        <BackgroundBorder />
        <BackgroundBorder1 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_6px_rgba(0,0,0,0.05)]" />
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function NearbyMuseumsSection() {
  return (
    <div className="absolute bg-[#f0eee9] content-stretch flex flex-col gap-[40px] items-center left-[23px] pb-[32px] pt-[40px] px-[32px] rounded-[24px] top-[1857px] w-[392px]" data-name="Nearby Museums Section">
      <div aria-hidden="true" className="absolute border border-[#c9a84c] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container29 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-[62px]">
      <Header />
      <SectionSearchBar />
      <FeaturedMuseumSectionBentoInspired />
      <SectionRecommendedForYouAsymmetricGrid />
      <NearbyMuseumsSection />
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
        <g clipPath="url(#clip0_1_2020)" id="Elements / Battery">
          <rect height="12" id="Border" opacity="0.4" rx="3.5" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p223c2d00} fill="var(--fill-0, black)" id="Cap" opacity="0.5" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2" width="21" x="2" y="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2020">
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-131px)] top-[calc(50%-1227px)]" data-name="Elements / Time">
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
    <div className="absolute bg-white h-[2533px] left-0 overflow-clip top-0 w-[440px]" data-name="Complete application prototype (Copy)">
      <div className="absolute flex h-[2740px] items-center justify-center left-[-410px] top-0 w-[1261px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[1261px] relative w-[2740px]" data-name="image 1">
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[134.77%] left-[-0.04%] max-w-none top-[-17.5%] w-[100.08%]" src={imgImage1} />
            </div>
          </div>
        </div>
      </div>
      <Group2 />
      <Group />
    </div>
  );
}

function Container34() {
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

function Container33() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[39.7px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container34 />
      <Margin />
    </div>
  );
}

function Container36() {
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

function Container35() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[111.14px] top-[calc(50%-8px)]" data-name="Container">
      <Container36 />
      <Margin1 />
    </div>
  );
}

function Container38() {
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

function Background1() {
  return (
    <div className="bg-[#341701] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Background">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_8px_#fbf9f4,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-1/2" data-name="Overlay+Shadow" />
      <Container38 />
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

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 top-[-32px]" data-name="Container">
      <Background1 />
      <Margin3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="absolute h-[47px] left-[191.97px] top-[10px] w-[56px]" data-name="Margin">
      <Container37 />
    </div>
  );
}

function Container40() {
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

function Container39() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[295.39px] opacity-60 top-[calc(50%-8px)]" data-name="Container">
      <Container40 />
      <Margin4 />
    </div>
  );
}

function Container42() {
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

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[0.364px] items-center justify-center opacity-60 relative" data-name="Container">
      <Container42 />
      <Margin5 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(255,250,236,0.9)] border-[#c9a84c] border-solid border-t bottom-0 h-[84px] left-0 rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_-4px_32px_0px_rgba(52,23,1,0.05)] w-[440px]" data-name="BottomNavBar">
      <Container33 />
      <Container35 />
      <Margin2 />
      <Container39 />
      <div className="-translate-y-1/2 absolute flex h-[38.9px] items-center justify-center left-[370.1px] top-[calc(50%-8px)] w-[31.59px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "43" } as React.CSSProperties}>
        <div className="flex-none scale-x-[110.00000000000001%] scale-y-[110.00000000000001%]">
          <Container41 />
        </div>
      </div>
    </div>
  );
}

export default function Explore() {
  return (
    <div className="relative size-full" data-name="Explore">
      <CompleteApplicationPrototypeCopy />
      <BottomNavBar />
    </div>
  );
}