'use client';
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Nav() {

    const content = [
        {
            title: "Product",
            links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"]
        },
        {
            title: "Company",
            links: ["About", "Team", "Blog", "Careers"]
        },
        {
            title: "Connect",
            links: ["Contact", "Newsletter", "LinkedIn"]
        }
    ];

    return (
        <nav className="md:flex gap-8 relative">
            {content.map((section, index) => {
                return (
                    <div key={index} className="group">
                        <p className="text-white text-lg font-semibold flex items-center gap-2 mb-2">{section.title} <FaChevronDown className="group-hover:hidden" size={12} /> <FaChevronUp className="group-hover:block hidden" size={12}/></p>
                        <ul className="group-hover:flex flex-col gap-2 bg-white rounded-md py-3 px-5 hidden absolute">
                            {section.links.map((link, index) => {
                                return (
                                    <li key={index} className="w-20">
                                        <a href="#" className="text-black text-sm hover:font-medium">{link}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </nav>
    )
}