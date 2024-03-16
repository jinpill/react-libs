import Icon from "../../components/Icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/login/default/24px.svg",
  },
};
