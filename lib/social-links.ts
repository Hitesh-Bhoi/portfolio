export interface SocialLink {
  name: string;
  label: string;
  href: string;
  username: string;
}

export const SOCIAL_LINKS = {
  github: {
    name: "GitHub",
    label: "Visit Hitesh Bhoi's GitHub Profile",
    href: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/Hitesh-Bhoi",
    username: "Hitesh-Bhoi",
  },
  linkedin: {
    name: "LinkedIn",
    label: "Visit Hitesh Bhoi's LinkedIn Profile",
    href:
      process.env.NEXT_PUBLIC_LINKED_IN ||
      "https://www.linkedin.com/in/bhoi-hitesh-332a601a8/",
    username: "bhoi-hitesh-332a601a8",
  },
  instagram: {
    name: "Instagram",
    label: "Visit Hitesh Bhoi's Instagram Profile",
    href:
      process.env.NEXT_PUBLIC_INSTAGRAM ||
      "https://www.instagram.com/bhoihitesh1844/",
    username: "bhoihitesh1844",
  },
} as const;

export type SocialPlatform = keyof typeof SOCIAL_LINKS;

export const SOCIAL_LINKS_ARRAY: SocialLink[] = [
  SOCIAL_LINKS.github,
  SOCIAL_LINKS.linkedin,
  SOCIAL_LINKS.instagram,
];
