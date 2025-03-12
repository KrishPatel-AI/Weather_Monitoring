"use client";

import Link from "next/link";

import Image from "next/image";

import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

import spulogo from "../../public/spulogo.png";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[var(--primary-color)]/20 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-evenly items-center gap-4">
          <Image src={spulogo} alt="SPU Logo" width={160} height={160} />

          <h1 className="text-xl md:text-2xl font-bold text-[var(--primary-color)] text-center">
            Visualisation of Mehsana Observation Data and Archival System
          </h1>
        </div>
      </div>

      <div className="bg-[var(--primary-color)] shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-end items-center">
          <nav className="hidden md:flex gap-8 mr-30">
            {["Home", "About", "Dashboard", "Contact"].map((item) => {
              const linkPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = pathname === linkPath;

              return (
                <Link
                  key={item}
                  href={linkPath}
                  className={`font-medium tracking-wide transition relative ${
                    isActive
                      ? "text-[var(--accent-color)]"
                      : "text-[var(--secondary-color)] hover:underline hover:underline-offset-4 hover:text-[var(--accent-color)]"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[var(--secondary-color)]"
                >
                  <Menu size={28} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-[var(--primary-color)] text-[var(--secondary-color)]"
              >
                <div className="flex flex-col space-y-6 text-lg mt-6">
                  {["Home", "About", "Dashboard", "Contact"].map((item) => {
                    const linkPath =
                      item === "Home" ? "/" : `/${item.toLowerCase()}`;

                    const isActive = pathname === linkPath;

                    return (
                      <Link
                        key={item}
                        href={linkPath}
                        className={`transition duration-300 ${
                          isActive
                            ? "text-[var(--accent-color)]"
                            : "hover:underline hover:underline-offset-4 hover:text-[var(--accent-color)]"
                        }`}
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
