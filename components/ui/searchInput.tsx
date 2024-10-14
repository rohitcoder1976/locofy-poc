import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-fit">
         <input
          type={type}
          className={cn(
            "flex h-10 rounded-[10px] border-[2px] border-[#8a8a8a] bg-[#f2f2f2] px-[38px] py-5 text-[14px] focus:border-[#000000] shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
          />
          <span className="material-symbols-outlined absolute left-[10px]">search</span>
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput";

export { SearchInput }