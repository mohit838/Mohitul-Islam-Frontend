import booking from "@/public/booking.png";
import dineout from "@/public/dineout.png";
import textanimi from "@/public/textanimi.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Dhaka, Bangladesh",
    description:
      "I worked as a front-end developer for 1 years in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Bachelor Degree",
    location: "Dhaka, Bangladesh",
    description:
      "I am completing my graduation after 4 years of studying computer science and engineering. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Restaurant Landing Page",
    description: "I worked as a frontend developer on this project.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: dineout,
  },
  {
    title: "Booking App",
    description:
      "I was the student of front-end developer when I started my journey.",
    tags: ["React", "Tailwind", "SaSS"],
    imageUrl: booking,
  },
  {
    title: "Text Animation",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["HTML", "CSS", "JS"],
    imageUrl: textanimi,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
