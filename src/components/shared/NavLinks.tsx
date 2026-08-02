"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/technicians",
    label: "Technicians",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "font-medium transition-colors hover:text-primary",
            pathname === link.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;