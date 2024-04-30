import React, { useState } from "react";
import BottomSheet from "@/components/BottomSheet";
import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * The mobile-style popup UI that comes up from the bottom of the screen.
 */
const meta: Meta = {
  title: "Components/Basic/BottomSheet",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Click the button to show the bottom sheet.
 */
export const Default: Story = {
  render: () => {
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
              tincidunt eget nullam non. Quis hendrerit dolor magna eget est
              lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet
              massa. Commodo odio aenean sed adipiscing diam donec adipiscing
              tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor
              augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus
              arcu felis. Egestas integer eget aliquet nibh praesent. In hac
              habitasse platea dictumst quisque sagittis purus. Pulvinar
              elementum integer enim neque volutpat ac.
            </p>
          </BottomSheet>
        )}
      </div>
    );
  },
  args: {},
};

/**
 * Set the `scrimOpacity` prop to change the opacity of the scrim.
 */
export const Opacity: Story = {
  render: () => {
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
          <BottomSheet
            scrimOpacity="0.1"
            onClickAway={() => setIsVisible(false)}
          >
            <p
              style={{
                margin: 0,
                padding: "2rem 1.25rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non. Quis hendrerit dolor magna eget est
              lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet
              massa. Commodo odio aenean sed adipiscing diam donec adipiscing
              tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor
              augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus
              arcu felis. Egestas integer eget aliquet nibh praesent. In hac
              habitasse platea dictumst quisque sagittis purus. Pulvinar
              elementum integer enim neque volutpat ac.
            </p>
          </BottomSheet>
        )}
      </div>
    );
  },
  args: {},
};

/**
 * Set the `isNonModal` prop to make the bottom sheet non-modal.
 */
export const NonModal: Story = {
  render: () => {
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
        <div
          style={{
            marginTop: "1rem",
            marginBottom: "auto",
          }}
        >
          <Button onClick={() => setIsVisible((prev) => !prev)}>
            Toggle Bottom Sheet
          </Button>
        </div>
        {isVisible && (
          <BottomSheet isNonModal onClickAway={() => setIsVisible(false)}>
            <p
              style={{
                margin: 0,
                padding: "2rem 1.25rem",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non. Quis hendrerit dolor magna eget est
              lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet
              massa. Commodo odio aenean sed adipiscing diam donec adipiscing
              tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor
              augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus
              arcu felis. Egestas integer eget aliquet nibh praesent. In hac
              habitasse platea dictumst quisque sagittis purus. Pulvinar
              elementum integer enim neque volutpat ac.
            </p>
          </BottomSheet>
        )}
      </div>
    );
  },
  args: {},
};
