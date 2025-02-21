import React, { FC, ReactNode } from "react";
import { sx } from "../theme/utils/sx";
import { CSS } from "../common/types";

type ChipSize = "xs" | "sm" | "md" | "lg";
export type ChipColor = "primary" | "secondary" | "danger";
export type ChipVariant = "filled" | "light";

export interface ChipProps {
  children: ReactNode;
  color?: ChipColor;
  variant?: ChipVariant;
  size?: ChipSize;
  classes?: CSS;
}

export const Chip: FC<ChipProps> = ({
  children,
  color = "secondary",
  variant = "light",
  size = "md",
  classes,
}) => {
  return (
    <div className={sx(`chip chip-${variant}-${color} chip-${size}`, classes)}>
      {children}
    </div>
  );
};
