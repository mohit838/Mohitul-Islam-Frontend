"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  containerStyle?: string;
  linksStyle?: string; // Optional prop
  underlineStyle?: string; // Optional prop
}

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const Navbar = ({
  containerStyle,
  linksStyle,
  underlineStyle,
}: NavbarProps) => {
  const pathName = usePathname();

  return (
    <div className={containerStyle}>
      {links?.map((item, index) => (
        <Link
          href={item?.path}
          key={index}
          className={`capitalize ${linksStyle}`}
        >
          {item.path === pathName && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyle}`}
            />
          )}
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
