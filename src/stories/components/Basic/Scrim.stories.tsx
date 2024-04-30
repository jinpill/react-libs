import React, { useState } from "react";
import Scrim from "@/components/Scrim";
import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      style={{
        height: "20rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={() => setIsVisible(true)}>Show Scrim</Button>
      {isVisible && <Scrim onClick={() => setIsVisible(false)} />}
    </div>
  );
};

/**
 * This component is a simple scrim UI.
 */
const meta: Meta<typeof Scrim> = {
  title: "Components/Basic/Scrim",
  component: Story,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
