import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-primary/35 bg-primary/10 text-[#4fd2ff]",
        success: "border-[#28c76f]/40 bg-[#28c76f]/10 text-[#7ee0a8]",
        warning: "border-[#eca400]/45 bg-[#eca400]/10 text-[#eca400]",
        destructive: "border-destructive/45 bg-destructive/10 text-destructive",
        muted: "border-border bg-muted/40 text-muted-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
