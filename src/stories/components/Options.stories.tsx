import React from "react";
import Options, { Option, OptionsArea } from "../../components/Options";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component displays a selectable options list at the top of the screen.
 */
const meta: Meta<typeof Options> = {
  title: "Components/Options",
  component: Options,
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
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            position: "absolute",
            inset: 0,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
            }}
          >
            Try to set the 'isVisible' prop to 'true' in the controls panel.
          </p>
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
    isVisible: false,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    options: OPTIONS,
    isVisible: false,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    options: OPTIONS,
    isVisible: false,
  },
};
