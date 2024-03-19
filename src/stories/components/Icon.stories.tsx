import Icon from "../../components/Icon";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * A component that displays an icon from source or preset name.
 */
const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SourceType: Story = {
  args: {
    src: "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/login/default/24px.svg",
  },
};

export const PresetType: Story = {
  args: {
    preset: "expand-more",
  },
};
