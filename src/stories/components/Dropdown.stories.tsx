import React from "react";
import Dropdown from "../../components/Dropdown";
import { Option } from "../../components/Options";
import OptionsArea from "../../components/Options/OptionsArea";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple dropdown UI.
 */
const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          width: 900,
          height: 250,
          position: "relative",
        }}
      >
        <OptionsArea />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            inset: 0,
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const OPTIONS: Option[] = [
  {
    type: "option",
    label: "Option 1",
    value: "1",
    description: "1st",
  },
  {
    type: "option",
    label: "Option 2",
    value: "2",
    description: "2nd",
  },
  {
    type: "option",
    label: "Option 3",
    value: "3",
    description: "3rd",
  },
  {
    type: "option",
    label: "Option 4",
    value: "4",
  },
  {
    type: "option",
    label: "Option 5",
    value: "5",
  },
  {
    type: "option",
    label: "Option 6",
    value: "6",
  },
];

export const Large: Story = {
  args: {
    size: "large",
    options: OPTIONS,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    options: OPTIONS,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    options: OPTIONS,
  },
};
