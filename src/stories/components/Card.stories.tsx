import Card from "../../components/Card";
import type { Meta, StoryObj } from "@storybook/react";

/** This component is a simple card UI. */
const meta: Meta<typeof Card> = {
  title: "Components/Basic/Card",
  component: Card,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    style: {
      width: "20rem",
      height: "15rem",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
