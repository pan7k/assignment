import React, { FC, HTMLAttributes } from "react";
import {
  Warning,
  CaretUp,
  CaretDown,
  Plus,
  Minus,
  User,
  Stack,
  List,
  Export,
  Ruler,
  Scribble,
  Asterisk,
  Bug,
  Polygon,
  Square,
  BoundingBox,
  Circle,
  Gps,
  GpsFix,
  MapPin,
  CornersOut,
  MapPinPlus,
  UniteSquare,
  DownloadSimple,
  Gear,
  Pencil,
  Table,
  PencilSimple,
  Browser,
  DotsThreeVertical,
  ChartLine,
  Trash,
  SquareSplitVertical,
  Download,
  CircleDashed,
  FunnelSimple,
  Cards,
  X,
  MagnifyingGlass,
  LineSegments,
  Globe,
  Info,
  Check,
  Notepad,
  Note,
  Graph,
  WarningCircle,
  Activity,
  CaretRight,
  Folder,
  FloppyDisk,
  CaretLeft,
  NotePencil,
  Printer,
} from "@phosphor-icons/react";
import { ComponentSize, CSS } from "../common/types";
import { sx } from "../theme/utils/sx";

export const iconSizeKeys = ["xs", "sm", "md", "lg", "xl"];
export const iconVariantKeys = [
  "thin",
  "light",
  "regular",
  "bold",
  "fill",
  "duotone",
];

export type IconSize = ComponentSize | number;

export type IconSymbol =
  | "asterisk"
  | "warning"
  | "warning-circle"
  | "activity"
  | "caret-up"
  | "caret-down"
  | "error"
  | "plus"
  | "minus"
  | "user"
  | "stack"
  | "list"
  | "export"
  | "ruler"
  | "scribble"
  | "polygon"
  | "square"
  | "bounding-box"
  | "circle"
  | "gps"
  | "gps-fix"
  | "map-pin"
  | "x"
  | "map-pin-plus"
  | "unite-square"
  | "corners-out"
  | "magnifying-glass"
  | "gear"
  | "pencil-simple"
  | "browser"
  | "chart-line"
  | "square-split-vertical"
  | "circle-dashed"
  | "graph"
  | "line-segments"
  | "filter"
  | "info"
  | "check"
  | "dots-three-vertical"
  | "trash"
  | "pencil"
  | "table"
  | "chevron-down"
  | "download"
  | "caret-right"
  | "printer"
  | "globe"
  | "download-simple"
  | "caret-left"
  | "note"
  | "notepad"
  | "note-pencil"
  | "folder"
  | "floppy-disk"
  | "cards";

export type IconVariant =
  | "thin"
  | "light"
  | "regular"
  | "bold"
  | "fill"
  | "duotone";

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  symbol: IconSymbol;
  size?: IconSize;
  variant?: IconVariant;
  color?: string;
  cursor?: string;
  classes?: CSS;
}

const getSize = (size: IconSize): number => {
  const defaultSize: Record<string, number> = {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 30,
    xl: 40,
  };
  return defaultSize[size] ?? defaultSize.md;
};

const getPredefinedIcon = (symbol: string) => {
  switch (symbol) {
    case "asterisk":
      return Asterisk;
    case "warning":
      return Warning;
    case "warning-circle":
      return WarningCircle;
    case "activity":
      return Activity;
    case "caret-up":
      return CaretUp;
    case "caret-down":
      return CaretDown;
    case "error":
      return Bug;
    case "asterisk":
      return Asterisk;
    case "plus":
      return Plus;
    case "minus":
      return Minus;
    case "user":
      return User;
    case "stack":
      return Stack;
    case "list":
      return List;
    case "export":
      return Export;
    case "ruler":
      return Ruler;
    case "scribble":
      return Scribble;
    case "polygon":
      return Polygon;
    case "square":
      return Square;
    case "bounding-box":
      return BoundingBox;
    case "circle":
      return Circle;
    case "gps":
      return Gps;
    case "gps-fix":
      return GpsFix;
    case "map-pin":
      return MapPin;
    case "map-pin-plus":
      return MapPinPlus;
    case "unite-square":
      return UniteSquare;
    case "gear":
      return Gear;
    case "pencil-simple":
      return PencilSimple;
    case "browser":
      return Browser;
    case "chart-line":
      return ChartLine;
    case "square-split-vertical":
      return SquareSplitVertical;
    case "circle-dashed":
      return CircleDashed;
    case "graph":
      return Graph;
    case "line-segments":
      return LineSegments;
    case "trash":
      return Trash;
    case "corners-out":
      return CornersOut;
    case "x":
      return X;
    case "magnifying-glass":
      return MagnifyingGlass;
    case "info":
      return Info;
    case "check":
      return Check;
    case "dots-three-vertical":
      return DotsThreeVertical;
    case "filter":
      return FunnelSimple;
    case "pencil":
      return Pencil;
    case "table":
      return Table;
    case "caret-right":
      return CaretRight;
    case "download":
      return Download;
    case "printer":
      return Printer;
    case "caret-left":
      return CaretLeft;
    case "globe":
      return Globe;
    case "download-simple":
      return DownloadSimple;
    case "note":
      return Note;
    case "notepad":
      return Notepad;
    case "note-pencil":
      return NotePencil;
    case "folder":
      return Folder;
    case "floppy-disk":
      return FloppyDisk;
    case "cards":
      return Cards;
  }
};

export const Icon: FC<IconProps> = ({
  symbol = "asterisk",
  size = "md",
  variant = "regular",
  color = "currentColor",
  cursor,
  classes,
  onClick,
}) => {
  const resolvedSize = typeof size === "number" ? size : getSize(size);
  const SelectedIcon = getPredefinedIcon(symbol);

  if (!SelectedIcon) {
    console.error(`Icon "${symbol}" not found in library.`);
    return null;
  }

  return (
    <SelectedIcon
      size={resolvedSize}
      weight={variant}
      color={color}
      cursor={cursor}
      onClick={onClick}
      className={sx("flex-shrink-0", classes)}
    />
  );
};
