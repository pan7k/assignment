import { CSS } from "../common/types";

interface Button {
  button?: CSS;
  stack?: CSS;
  label?: CSS;
  icon?: CSS;
}

interface MenuButton {
  stack?: CSS;
  button?: Button;
  menuList?: CSS;
}

interface Tooltip {
  tooltip?: CSS;
  container?: CSS;
}

interface IconButton {
  button?: CSS;
  stack?: CSS;
  icon?: CSS;
  tooltip?: CSS;
}

export interface Theme {
  button?: Button;
  menuButton?: MenuButton;
  tooltip?: Tooltip;
  iconButton?: IconButton;
}
