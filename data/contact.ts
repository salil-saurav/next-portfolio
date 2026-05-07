import type { ContactMethod } from "@/lib/types";
import { profile } from "./profile";

export const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`
  },
  {
    label: "Location",
    value: profile.location,
    href: "https://maps.google.com/?q=Gurugram,Haryana"
  }
];
