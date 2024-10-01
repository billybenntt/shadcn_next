import React from "react"
import {ChevronRightIcon, DotsHorizontalIcon} from "@radix-ui/react-icons"
import {Slot} from "@radix-ui/react-slot"
import {cn} from "@/lib/utils"

// Type aliases for improved readability
type NavRef = React.ElementRef<"nav">;
type NavProps = React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
};
type OlRef = React.ElementRef<"ol">;
type OlProps = React.ComponentPropsWithoutRef<"ol">;
type LiRef = React.ElementRef<"li">;
type LiProps = React.ComponentPropsWithoutRef<"li">;
type AnchorRef = React.ElementRef<"a">;
type AnchorProps = React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
};
type SpanRef = React.ElementRef<"span">;
type SpanProps = React.ComponentPropsWithoutRef<"span">;

// Breadcrumb component
const Breadcrumb = React.forwardRef<NavRef, NavProps>((props, ref) => {
        return (
            <nav ref={ref} aria-label="breadcrumb" {...props} />
        );
    }
);
Breadcrumb.displayName = "Breadcrumb";

// BreadcrumbList component
const BreadcrumbList = React.forwardRef<OlRef, OlProps>(
    (props, ref) => {
        const {className, ...restProps} = props;
        return (
            <ol
                ref={ref}
                className={cn(
                    "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
                    className
                )}
                {...restProps}
            />
        );
    }
);
BreadcrumbList.displayName = "BreadcrumbList";

// BreadcrumbItem component
const BreadcrumbItem = React.forwardRef<LiRef, LiProps>(
    (props, ref) => {
        const {className, ...restProps} = props;
        return (
            <li
                ref={ref}
                className={cn("inline-flex items-center gap-1.5", className)}
                {...restProps}
            />
        );
    }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// BreadcrumbLink component
const BreadcrumbLink = React.forwardRef<AnchorRef, AnchorProps>(
    (props, ref) => {
        const {asChild, className, ...restProps} = props;
        const Comp = asChild ? Slot : "a";

        return (
            <Comp
                ref={ref}
                className={cn("transition-colors hover:text-foreground", className)}
                {...restProps}
            />
        );
    }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// BreadcrumbPage component
const BreadcrumbPage = React.forwardRef<SpanRef, SpanProps>(
    (props, ref) => {
        const {className, ...restProps} = props;
        return (
            <span
                ref={ref}
                role="link"
                aria-disabled="true"
                aria-current="page"
                className={cn("font-normal text-foreground", className)}
                {...restProps}
            />
        );
    }
);
BreadcrumbPage.displayName = "BreadcrumbPage";

// BreadcrumbSeparator component
const BreadcrumbSeparator = (props: LiProps) => {
    const {children, className, ...restProps} = props;
    return (
        <li
            role="presentation"
            aria-hidden="true"
            className={cn("[&>svg]:size-3.5", className)}
            {...restProps}
        >
            {children ?? <ChevronRightIcon/>}
        </li>
    );
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// BreadcrumbEllipsis component
const BreadcrumbEllipsis = (props: SpanProps) => {
    const {className, ...restProps} = props;
    return (
        <span
            role="presentation"
            aria-hidden="true"
            className={cn("flex h-9 w-9 items-center justify-center", className)}
            {...restProps}
        >
      <DotsHorizontalIcon className="h-4 w-4"/>
      <span className="sr-only">More</span>
    </span>
    );
};
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// Export components for use in other parts of the application
export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis,
};
