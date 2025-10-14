import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MapPin,
} from "lucide-react";
import React from "react";

type TContactCardItem = {
  icon: React.ElementType;
  title: string;
  detail: string;
};

type TContactIconItem = Omit<TContactCardItem, "title" | "detail"> & {
  link: string;
};

export const contactCardItems: TContactCardItem[] = [
  {
    icon: MapPin,
    title: "Address",
    detail: "KP. Waas RT 05 RW 01 Kecamatan Pameungpeuk Desa Sukasari",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "gemadp01@gmail.com",
  },
] as const;

export const contactIconItems: TContactIconItem[] = [
  {
    icon: InstagramIcon,
    link: "https://instagram.com/gemadp01",
  },
  {
    icon: GithubIcon,
    link: "https://github.com/gemadp01",
  },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/in/gemadp",
  },
] as const;
