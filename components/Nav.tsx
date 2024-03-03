'use client';
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export default function Nav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#" className="hover:font-bold">Overview</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Pricing</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Marketplace</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Features</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Integrations</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#" className="hover:font-bold">About</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Team</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Blog</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Careers</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Connect</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#" className="hover:font-bold">Contact</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">Newsletter</NavigationMenuLink>
                        <NavigationMenuLink href="#" className="hover:font-bold">LinkedIn</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="gap-x-3">
                <NavigationMenuItem>
                    <NavigationMenuLink href="#" className="btn button-secondary border-none button-secondary-hover">Login</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#" className="btn button-primary button-primary-hover px-8 py-3">Sign Up</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}