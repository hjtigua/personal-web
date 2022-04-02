import React from "react";
import { Popover } from "@headlessui/react";
import Logo from "./Logo";
import MenuOptions from "./MenuOptions";
import HamburgerMenu from "./HamburgerMenu";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Header() {
  return (
    <>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <Logo />
            <HamburgerMenu />
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <MenuOptions text="Acerca de mí" url="#" />
              <MenuOptions text="Proyectos" url="#" />
              <MenuOptions text="Blog" url="#" />
              <MenuOptions text="Contacto" url="#" />
            </Popover.Group>
          </div>
        </div>
        <ResponsiveMenu />
      </Popover>
    </>
  );
}
