"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Badge } from "../ui/badge";

const components: { title: string; href: string; }[] = [
  {
    title: "My Library",
    href: "/docs/primitives/alert-dialog",
  },
  {
    title: "Downloading",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "DLC's",
    href: "/docs/primitives/progress",
   
  },
 
];

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className="hover:bg-transparent hover:text-white data-[state=open]:bg-transparent data-[state=open]:text-white">
            Discover
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#202024] text-white border-none ring-0">
            <ul className="border-none grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md 
                    bg-black/60 p-6 no-underline outline-none focus:shadow-md"
                    style={{
                      backgroundImage: `url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "overlay",
                    }}
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Grand Theft Auto VI
                    </div>
                    <Badge
                      className="w-fit text-[10px] px-2"
                      variant={"secondary"}
                    >
                      Promoted
                    </Badge>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                className="hover:bg-woodsmoke-800 hover:text-white"
                href="/docs"
                title="New related games"
              >
                How about a new adventure?
              </ListItem>
              <ListItem
                className="hover:bg-woodsmoke-800 hover:text-white"
                href="/docs/installation"
                title="Most Popular"
              >
                The most popular games on the Epic Games Store.
              </ListItem>
              <ListItem
                className="hover:bg-woodsmoke-800 hover:text-white"
                href="/docs/primitives/typography"
                title="Top Sellers"
              >
                The top selling games on the Epic Games Store.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-transparent hover:text-white data-[state=open]:bg-transparent data-[state=open]:text-white">
            Library
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-[#202024] text-white border-none">
            <ul className="grid w-[375px] gap-3 p-4 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                 
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Unreal Engine
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
