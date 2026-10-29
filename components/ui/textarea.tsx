import * as React from "react"

import { cn } from "@/lib/utils"
import {
  CONTROL_FOCUS,
  CONTROL_RADIUS,
  CONTROL_TRANSITION,
} from "./control-styles"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-28 w-full border bg-background px-3 py-2 text-base shadow-xs hover:border-foreground/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        CONTROL_RADIUS,
        CONTROL_FOCUS,
        CONTROL_TRANSITION,
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
