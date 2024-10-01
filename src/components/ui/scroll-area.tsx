"use client";

import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";

// Destructure Radix components for easier access
const {
    Root: ScrollAreaRoot,
    Viewport: ScrollAreaViewport,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    Corner: ScrollAreaCorner,
} = ScrollAreaPrimitive;

// Type aliases for improved readability
type ScrollAreaRef = React.ElementRef<typeof ScrollAreaRoot>;
type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof ScrollAreaRoot>;

type ScrollBarRef = React.ElementRef<typeof ScrollAreaScrollbar>;
type ScrollBarProps = React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>;



// ScrollArea component
const ScrollArea = React.forwardRef<ScrollAreaRef, ScrollAreaProps>(
    function ScrollArea({ className, children, ...props }, ref) {
        return (
            <ScrollAreaRoot
                ref={ref}
                className={cn("relative overflow-hidden", className)}
                {...props}
            >
                <ScrollAreaViewport className="h-full w-full rounded-[inherit]">
                    {children}
                </ScrollAreaViewport>
                <ScrollBar />
                <ScrollAreaCorner />
            </ScrollAreaRoot>
        );
    }
);
ScrollArea.displayName = ScrollAreaRoot.displayName;

// ScrollBar component
const ScrollBar = React.forwardRef<ScrollBarRef, ScrollBarProps>(
    function ScrollBar({ className, orientation = "vertical", ...props }, ref) {
        return (
            <ScrollAreaScrollbar
                ref={ref}
                orientation={orientation}
                className={cn(
                    "flex touch-none select-none transition-colors",
                    orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
                    orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
                    className
                )}
                {...props}
            >
                <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
            </ScrollAreaScrollbar>
        );
    }
);
ScrollBar.displayName = ScrollAreaScrollbar.displayName;

// Export components for use in other parts of the application
export { ScrollArea, ScrollBar };
