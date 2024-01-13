"use client";
import { SocialIconsProps } from "@/types/Types";
import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";

const SocialIcon = ({ contiainerStyles, iconsStyles }: SocialIconsProps) => {
  const socialBtn = [
    { id: 1, path: "/", name: <RiLinkedinFill /> },
    { id: 1, path: "/", name: <RiGithubFill /> },
    { id: 1, path: "/", name: <RiFacebookFill /> },
    { id: 1, path: "/", name: <RiInstagramFill /> },
  ];
  return (
    <div className={`${contiainerStyles}`}>
      {socialBtn?.map((icon) => {
        return (
          <Link
            key={icon?.id}
            href={icon?.path}
          >
            <div className={`${iconsStyles}`}>{icon?.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcon;
