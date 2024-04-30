import React, { useState } from "react";
import BottomSheet from "@/components/BottomSheet";
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
      <Button onClick={() => setIsVisible(true)}>Show Bottom Sheet</Button>
      {isVisible && (
        <BottomSheet onClickAway={() => setIsVisible(false)}>
          <p
            style={{
              margin: 0,
              padding: "2rem 1.25rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem
            ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa.
            Commodo odio aenean sed adipiscing diam donec adipiscing tristique.
            Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at
            imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis.
            Egestas integer eget aliquet nibh praesent. In hac habitasse platea
            dictumst quisque sagittis purus. Pulvinar elementum integer enim
            neque volutpat ac.
          </p>
        </BottomSheet>
      )}
    </div>
  );
};

const meta: Meta<typeof BottomSheet> = {
  title: "Components/Basic/BottomSheet",
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
