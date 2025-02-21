import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { parameters } from "../../storybook/parameters";
import { MenuButton } from "../../buttons/MenuButton";
import { MenuItem } from "../../buttons/MenuItem";

export default {
  title: "Buttons/Menu Button",
  component: MenuButton,
  argTypes: {
    icon: {
      control: { type: "select" },
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "danger"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "outline", "light", "ghost"],
    },
  },
} satisfies Meta<typeof MenuButton>;

export const Default: StoryObj<typeof MenuButton> = {
  name: "MenuButton",
  args: {
    label: "Menu",
    icon: undefined,
    color: "primary",
    size: "md",
    variant: "filled",
  },
  render: (args) => (
    <MenuButton
      {...args}
      onClick={() => console.log(`Menu button "${args.label}" clicked`)}
    >
      <MenuItem
        label="Add"
        icon="plus"
        onClick={() => console.log(`Menu item "Add" clicked`)}
      />
      <MenuItem
        label="Copy"
        onClick={() => console.log(`Menu item "Copy" clicked`)}
      />
    </MenuButton>
  ),
  parameters: parameters(
    `<MenuButton label="Menu">
  <MenuItem label="Add" icon="plus" color="primary" />
  <MenuItem label="Copy" />
</MenuButton>`,
    "Menu button component",
  ),
};
