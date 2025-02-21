import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { parameters } from "../../storybook/parameters";
import { Button } from "../../buttons/Button";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["primary", "danger"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    icon: {
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  name: "Button",
  args: {
    label: "Button",
    color: "primary",
    variant: "filled",
    size: "md",
    icon: "plus",
    disabled: false,
    active: false,
    type: "button",
  },
  render: (args) => (
    <Button
      {...args}
      onClick={() => console.log(`Button "${args.label}" clicked`)}
    />
  ),
  parameters: parameters(
    `<Button label="Button" icon="plus" />`,
    "Button component",
  ),
};
