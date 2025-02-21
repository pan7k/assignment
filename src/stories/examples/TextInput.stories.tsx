import type { Meta, StoryObj } from "@storybook/react";
import { parameters } from "../../storybook/parameters";
import { TextInput } from "../../inputs/TextInput";
import { iconVariantKeys } from "../../icons/Icon";

export default {
  title: "Examples/Text Input",
  component: TextInput,
  argTypes: {
    icon: {
      control: { type: "select" },
    },
    iconVariant: {
      control: { type: "select" },
      options: iconVariantKeys,
    },
    iconPosition: {
      control: { type: "radio" },
      options: ["start", "end"],
    },
    type: {
      control: { type: "select" },
      options: ["email", "text", "url", "password"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof TextInput>;

export const Default: StoryObj<typeof TextInput> = {
  name: "Default",
  args: {
    label: "Input",
    placeholder: "Placeholder",
    icon: undefined,
    iconVariant: "regular",
    iconPosition: "end",
    description: "",
    type: "text",
    size: "md",
    width: 400,
    warning: false,
    warningText: "Warning text",
    invalid: false,
    invalidText: "Invalid text",
    required: false,
    disabled: false,
  },
  parameters: parameters(
    `<TextInput
  label="Label"
  icon="user"
  placeholder="Placeholder"
  description="Description"
  warningText="Warning text"
  invalidText="Invalid text"
/>`,
    "Text input",
  ),
};

export const Warning: StoryObj<typeof TextInput> = {
  name: "Invalid",
  args: {
    label: "Input",
    placeholder: "Placeholder",
    icon: undefined,
    iconVariant: "regular",
    iconPosition: "end",
    description: "",
    type: "text",
    size: "md",
    width: 400,
    warning: true,
    warningText: "Warning text",
    invalid: false,
    invalidText: "Invalid text",
    required: false,
    disabled: false,
  },
  parameters: parameters(
    `<TextInput
  label="Label"
  icon="user"
  placeholder="Placeholder"
  description="Description"
  warningText="Warning text"
  invalidText="Invalid text"
/>`,
    "Text input",
  ),
};

export const Required: StoryObj<typeof TextInput> = {
  name: "Required",
  args: {
    label: "Input",
    placeholder: "Placeholder",
    icon: undefined,
    iconVariant: "regular",
    iconPosition: "end",
    description: "",
    type: "text",
    size: "md",
    width: 400,
    warning: false,
    warningText: "Warning text",
    invalid: false,
    invalidText: "Invalid text",
    required: true,
    disabled: false,
  },
  parameters: parameters(
    `<TextInput
  label="Label"
  icon="user"
  placeholder="Placeholder"
  description="Description"
  warningText="Warning text"
  invalidText="Invalid text"
/>`,
    "Text input",
  ),
};

export const Disabled: StoryObj<typeof TextInput> = {
  name: "Disabled",
  args: {
    label: "Input",
    placeholder: "Placeholder",
    icon: undefined,
    iconVariant: "regular",
    iconPosition: "end",
    description: "",
    type: "text",
    size: "md",
    width: 400,
    warning: false,
    warningText: "Warning text",
    invalid: false,
    invalidText: "Invalid text",
    required: false,
    disabled: true,
  },
  parameters: parameters(
    `<TextInput
  label="Label"
  icon="user"
  placeholder="Placeholder"
  description="Description"
  warningText="Warning text"
  invalidText="Invalid text"
/>`,
    "Text input",
  ),
};
