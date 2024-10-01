"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {cn} from "@/lib/utils";

// Type Aliases
type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;
type TooltipContentRef = React.ElementRef<typeof TooltipPrimitive.Content>;

// Destructure Radix components for easier access
const {
    Provider: TooltipProvider,
    Root: Tooltip,
    Trigger: TooltipTrigger,
    Content: TooltipContentPrimitive,
} = TooltipPrimitive;

const TooltipContent = React.forwardRef<TooltipContentRef, TooltipContentProps>(
    ({className, sideOffset = 4, ...restProps}, ref) => {
        return (
            <TooltipContentPrimitive
                ref={ref}
                sideOffset={sideOffset}
                className={cn(
                    "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    className
                )}
                {...restProps}
            />
        );
    }
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {Tooltip, TooltipTrigger, TooltipContent, TooltipProvider};
