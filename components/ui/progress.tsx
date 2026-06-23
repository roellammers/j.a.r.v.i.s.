import * as React from "react";
import { cn, clamp } from "@/lib/utils";

type ProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  indicatorClassName?: string;
};

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, indicatorClassName, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative h-1.5 w-full overflow-hidden rounded-full bg-primary/10", className)}
      {...props}
    >
      <div
        className={cn("h-full rounded-full bg-gradient-to-r from-primary to-[#4fd2ff] shadow-[0_0_8px_rgba(0,166,237,0.6)] transition-all", indicatorClassName)}
        style={{ width: `${clamp(value, 0, 100)}%` }}
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
