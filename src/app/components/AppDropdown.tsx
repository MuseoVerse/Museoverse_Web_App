import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type AppDropdownProps = {
  value: string;
  options: string[];
  onValueChange: (value: string) => void;
  label?: string;
  triggerClassName?: string;
  contentClassName?: string;
};

export default function AppDropdown({
  value,
  options,
  onValueChange,
  label,
  triggerClassName,
  contentClassName,
}: AppDropdownProps) {
  const showLabel = Boolean(label);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`group min-w-[172px] cursor-pointer rounded-xl border border-[#e4dbcf] bg-[linear-gradient(180deg,#ffffff_0%,#f7f2ea_100%)] text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(52,23,1,0.05)] transition hover:border-[#d6c7b0] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_14px_28px_rgba(52,23,1,0.08)] data-[state=open]:border-[#c9a84c] data-[state=open]:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_16px_32px_rgba(52,23,1,0.1)] outline-none ${
          showLabel ? "px-3 py-1.5" : "px-3.5 py-2"
        } ${triggerClassName ?? ""}`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            {showLabel && (
              <div className="text-[9px] uppercase tracking-[1.4px] text-[#a89279]">
                {label}
              </div>
            )}
            <div
              className={`truncate font-medium text-[#5a4633] ${
                showLabel ? "mt-0.5 text-[12px]" : "text-[12px]"
              }`}
            >
              {value}
            </div>
          </div>
          <div
            className={`flex shrink-0 items-center justify-center rounded-lg bg-white/75 text-[#a89279] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition group-hover:text-[#76593a] group-data-[state=open]:bg-[#faf5eb] group-data-[state=open]:text-[#c9a84c] ${
              showLabel ? "h-7 w-7" : "h-8 w-8"
            }`}
          >
            <ChevronDown className="h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className={`w-[240px] rounded-2xl border border-[#e8e0d4] bg-[#fffdf9] p-2 shadow-[0_20px_48px_rgba(52,23,1,0.14)] ${
          contentClassName ?? ""
        }`}
      >
        {label && (
          <>
            <DropdownMenuLabel className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-[1.2px] text-[#a89279]">
              {label}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#f1e9dd]" />
          </>
        )}
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {options.map((option) => (
            <DropdownMenuRadioItem
              key={option}
              value={option}
              className="mt-1 cursor-pointer rounded-xl py-2.5 pl-9 pr-3 text-[13px] text-[#5a4633] focus:bg-[#faf5eb] focus:text-[#341701] data-[state=checked]:bg-[#faf5eb] data-[state=checked]:text-[#341701]"
            >
              {option}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
