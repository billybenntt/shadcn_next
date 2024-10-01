"use client";

import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import {cn} from "@/lib/utils";

// Type aliases for improved readability
type AvatarRef = React.ElementRef<typeof AvatarPrimitive.Root>;
type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;
type AvatarImageRef = React.ElementRef<typeof AvatarPrimitive.Image>;
type AvatarImageProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>;
type AvatarFallbackRef = React.ElementRef<typeof AvatarPrimitive.Fallback>;
type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>;

// Destructure Radix components for easier access
const {
    Root: AvatarRoot,
    Image: AvatarImagePrimitive,
    Fallback: AvatarFallbackPrimitive,
} = AvatarPrimitive;

// Avatar component
const Avatar = React.forwardRef<AvatarRef, AvatarProps>(
    ({className, ...props}, ref) => (
        <AvatarRoot
            ref={ref}
            className={cn(
                "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
                className
            )}
            {...props}
        />
    )
);
Avatar.displayName = AvatarRoot.displayName;

// AvatarImage component
const AvatarImage = React.forwardRef<AvatarImageRef, AvatarImageProps>(
    ({className, ...props}, ref) => (
        <AvatarImagePrimitive
            ref={ref}
            className={cn("aspect-square h-full w-full", className)}
            {...props}
        />
    )
);
AvatarImage.displayName = AvatarImagePrimitive.displayName;

// AvatarFallback component
const AvatarFallback = React.forwardRef<AvatarFallbackRef, AvatarFallbackProps>(
    ({className, ...props}, ref) => (
        <AvatarFallbackPrimitive
            ref={ref}
            className={cn(
                "flex h-full w-full items-center justify-center rounded-full bg-muted",
                className
            )}
            {...props}
        />
    )
);
AvatarFallback.displayName = AvatarFallbackPrimitive.displayName;

// Export components for use in other parts of the application
export {Avatar, AvatarImage, AvatarFallback};
