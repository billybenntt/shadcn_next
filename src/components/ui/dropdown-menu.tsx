"use client"

import React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import {CheckIcon, ChevronRightIcon, DotFilledIcon} from "@radix-ui/react-icons"
import {cn} from "@/lib/utils"

// Type aliases for improved readability
type SubTriggerRef = React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>;
type SubTriggerProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
};

type SubContentRef = React.ElementRef<typeof DropdownMenuPrimitive.SubContent>;
type SubContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>;

type ContentRef = React.ElementRef<typeof DropdownMenuPrimitive.Content>;
type ContentProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>;

type ItemRef = React.ElementRef<typeof DropdownMenuPrimitive.Item>;
type ItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
};

type CheckboxItemRef = React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>;
type CheckboxItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>;

type RadioItemRef = React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>;
type RadioItemProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>;

type LabelRef = React.ElementRef<typeof DropdownMenuPrimitive.Label>;
type LabelProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
};

type SeparatorRef = React.ElementRef<typeof DropdownMenuPrimitive.Separator>;
type SeparatorProps = React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>;

type ShortcutProps = React.HTMLAttributes<HTMLSpanElement>;

// DropdownMenu component
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

// DropdownMenuSubTrigger component
const DropdownMenuSubTrigger = React.forwardRef<SubTriggerRef, SubTriggerProps>(
    ({className, inset, children, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.SubTrigger
                ref={ref}
                className={cn(
                    "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
                    inset && "pl-8",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronRightIcon className="ml-auto h-4 w-4"/>
            </DropdownMenuPrimitive.SubTrigger>
        );
    }
);
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

// DropdownMenuSubContent component
const DropdownMenuSubContent = React.forwardRef<SubContentRef, SubContentProps>(
    ({className, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.SubContent
                ref={ref}
                className={cn(
                    "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    className
                )}
                {...props}
            />
        );
    }
);
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

// DropdownMenuContent component
const DropdownMenuContent = React.forwardRef<ContentRef, ContentProps>(
    ({className, sideOffset = 4, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.Content
                    ref={ref}
                    sideOffset={sideOffset}
                    className={cn(
                        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
                        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                        className
                    )}
                    {...props}
                />
            </DropdownMenuPrimitive.Portal>
        );
    }
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

// DropdownMenuItem component
const DropdownMenuItem = React.forwardRef<ItemRef, ItemProps>(
    ({className, inset, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.Item
                ref={ref}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    inset && "pl-8",
                    className
                )}
                {...props}
            />
        );
    }
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

// DropdownMenuCheckboxItem component
const DropdownMenuCheckboxItem = React.forwardRef<CheckboxItemRef, CheckboxItemProps>(
    ({className, children, checked, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.CheckboxItem
                ref={ref}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    className
                )}
                checked={checked}
                {...props}
            >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <CheckIcon className="h-4 w-4"/>
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
                {children}
            </DropdownMenuPrimitive.CheckboxItem>
        );
    }
);
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

// DropdownMenuRadioItem component
const DropdownMenuRadioItem = React.forwardRef<RadioItemRef, RadioItemProps>(
    ({className, children, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.RadioItem
                ref={ref}
                className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                    className
                )}
                {...props}
            >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <DotFilledIcon className="h-4 w-4 fill-current"/>
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
                {children}
            </DropdownMenuPrimitive.RadioItem>
        );
    }
);
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

// DropdownMenuLabel component
const DropdownMenuLabel = React.forwardRef<LabelRef, LabelProps>(
    ({className, inset, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.Label
                ref={ref}
                className={cn(
                    "px-2 py-1.5 text-sm font-semibold",
                    inset && "pl-8",
                    className
                )}
                {...props}
            />
        );
    }
);
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

// DropdownMenuSeparator component
const DropdownMenuSeparator = React.forwardRef<SeparatorRef, SeparatorProps>(
    ({className, ...props}, ref) => {
        return (
            <DropdownMenuPrimitive.Separator
                ref={ref}
                className={cn("-mx-1 my-1 h-px bg-muted", className)}
                {...props}
            />
        );
    }
);
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

// DropdownMenuShortcut component
const DropdownMenuShortcut = ({className, ...props}: ShortcutProps) => {
    return (
        <span
            className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
            {...props}
        />
    );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// Export components for use in other parts of the application
export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
}
