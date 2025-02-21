import type { Meta, StoryObj } from "@storybook/react";
import { parameters } from "../../storybook/parameters";
import { Icon, iconSizeKeys, iconVariantKeys } from "../../icons/Icon";

export default {
  title: "Icons/Icon",
  component: Icon,
  argTypes: {
    symbol: {
      control: { type: "select" },
    },
    size: {
      control: { type: "select" },
      options: iconSizeKeys,
    },
    variant: {
      control: { type: "select" },
      options: iconVariantKeys,
    },
    color: {
      control: { type: "color" },
    },
  },
} satisfies Meta<typeof Icon>;

export const Default: StoryObj<typeof Icon> = {
  name: "Icon",
  args: {
    symbol: "asterisk",
    size: "xl",
    variant: "regular",
    color: "currentColor",
  },
  parameters: parameters(
    `<Icon variant="asterisk" color="currentColor" size="xl" />`,
    "Icon component",
  ),
};
