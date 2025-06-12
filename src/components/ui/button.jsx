import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-800 text-slate-100 hover:bg-slate-700 shadow-sm hover:shadow-md",
        destructive:
          "bg-red-800 text-red-100 hover:bg-red-700",
        outline:
          "border border-slate-600 bg-transparent hover:bg-slate-800/10 hover:text-slate-100 text-slate-400",
        secondary:
          "bg-slate-700 text-slate-200 hover:bg-slate-600",
        ghost: "hover:bg-slate-800/20 hover:text-slate-100 text-slate-400",
        link: "text-slate-400 underline-offset-4 hover:underline hover:text-slate-100",
        accent: "bg-slate-600 text-slate-100 hover:bg-slate-500 shadow-sm hover:shadow-md",
        minimal: "bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-slate-100 backdrop-blur-sm border border-slate-700/50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants } 