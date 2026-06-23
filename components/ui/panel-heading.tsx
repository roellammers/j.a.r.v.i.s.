import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PanelHeadingProps = {
  title: string;
  meta?: string;
  amber?: boolean;
  className?: string;
  children?: ReactNode;
};

export function PanelHeading({ title, meta, amber, className, children }: PanelHeadingProps) {
  return (
    <div className={cn("mb-3 flex items-center gap-2", className)}>
      <span
        className={cn(
          "size-1.5 shrink-0 bg-primary shadow-[0_0_8px_hsl(var(--primary))]",
          amber && "bg-[#eca400] shadow-[0_0_8px_#eca400]"
        )}
        aria-hidden="true"
      />
      <span className="shrink-0 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4fd2ff]">
        {title}
      </span>
      <span className="h-px min-w-6 flex-1 bg-gradient-to-r from-primary/45 to-transparent" aria-hidden="true" />
      {children}
      {meta ? (
        <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
