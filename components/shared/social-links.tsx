"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Instagram } from "@/components/shared/icons";
import {
  SOCIAL_LINKS,
  SOCIAL_LINKS_ARRAY,
  type SocialPlatform,
  type SocialLink as SocialLinkType,
} from "@/lib/social-links";
import { cn } from "@/lib/utils";

const platformIcons: Record<
  SocialPlatform,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHub,
  linkedin: LinkedIn,
  instagram: Instagram,
};

export interface SocialButtonProps {
  platform: SocialPlatform;
  showLabel?: boolean;
  size?: "default" | "sm";
  className?: string;
  animate?: boolean;
}

export function SocialButton({
  platform,
  showLabel = false,
  size = "default",
  className,
  animate = true,
}: SocialButtonProps) {
  const data = SOCIAL_LINKS[platform];
  if (!data) return null;

  const IconComponent = platformIcons[platform];

  const sizeClasses =
    size === "sm"
      ? showLabel
        ? "h-10 px-3.5 gap-2 text-xs rounded-xl"
        : "w-10 h-10 rounded-xl"
      : showLabel
        ? "h-12 px-5 gap-2.5 text-sm rounded-2xl"
        : "w-12 h-12 rounded-2xl";

  const iconSizeClass = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium bg-muted border border-border text-foreground/80 hover:text-primary hover:border-primary/50 hover:bg-card/60 transition-all duration-300 shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 shrink-0",
    sizeClasses,
    className
  );

  if (!animate) {
    return (
      <a
        href={data.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={data.label}
        className={baseClasses}
      >
        <IconComponent className={cn(iconSizeClass, "shrink-0")} />
        {showLabel && <span>{data.name}</span>}
      </a>
    );
  }

  return (
    <motion.a
      href={data.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={data.label}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={baseClasses}
    >
      <IconComponent className={cn(iconSizeClass, "shrink-0")} />
      {showLabel && <span>{data.name}</span>}
    </motion.a>
  );
}

export interface SocialLinksProps {
  className?: string;
  itemClassName?: string;
  showLabels?: boolean;
  size?: "default" | "sm";
  animate?: boolean;
  platforms?: SocialPlatform[];
}

export function SocialLinks({
  className,
  itemClassName,
  showLabels = false,
  size = "default",
  animate = true,
  platforms = ["github", "linkedin", "instagram"],
}: SocialLinksProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        showLabels ? "flex-wrap" : "flex-row",
        className
      )}
    >
      {platforms.map((platform) => (
        <SocialButton
          key={platform}
          platform={platform}
          showLabel={showLabels}
          size={size}
          animate={animate}
          className={itemClassName}
        />
      ))}
    </div>
  );
}
