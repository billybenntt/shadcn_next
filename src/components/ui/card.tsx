import * as React from "react";
import { cn } from "@/lib/utils";

// Type Aliases for refs and props
type CardRef = HTMLDivElement;
type CardTitleRef = HTMLHeadingElement;
type CardDescriptionRef = HTMLParagraphElement;

type CardProps = React.HTMLAttributes<CardRef>;
type CardTitleProps = React.HTMLAttributes<CardTitleRef>;
type CardDescriptionProps = React.HTMLAttributes<CardDescriptionRef>;

// Card component
const Card = React.forwardRef<CardRef, CardProps>(
    function Card({ className, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border bg-card text-card-foreground shadow",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card"; // Set display name for easier debugging

// CardHeader component
const CardHeader = React.forwardRef<CardRef, CardProps>(
    function CardHeader({ className, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={cn("flex flex-col space-y-1.5 p-6", className)}
                {...props}
            />
        );
    }
);
CardHeader.displayName = "CardHeader";

// CardTitle component
const CardTitle = React.forwardRef<CardTitleRef, CardTitleProps>(
    function CardTitle({ className, ...props }, ref) {
        return (
            <h3
                ref={ref}
                className={cn("font-semibold leading-none tracking-tight", className)}
                {...props}
            />
        );
    }
);
CardTitle.displayName = "CardTitle";

// CardDescription component
const CardDescription = React.forwardRef<CardDescriptionRef, CardDescriptionProps>(
    function CardDescription({ className, ...props }, ref) {
        return (
            <p
                ref={ref}
                className={cn("text-sm text-muted-foreground", className)}
                {...props}
            />
        );
    }
);
CardDescription.displayName = "CardDescription";

// CardContent component
const CardContent = React.forwardRef<CardRef, CardProps>(
    function CardContent({ className, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={cn("p-6 pt-0", className)}
                {...props}
            />
        );
    }
);
CardContent.displayName = "CardContent";

// CardFooter component
const CardFooter = React.forwardRef<CardRef, CardProps>(
    function CardFooter({ className, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={cn("flex items-center p-6 pt-0", className)}
                {...props}
            />
        );
    }
);
CardFooter.displayName = "CardFooter";

// Export components for use in other parts of the application
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
