import React from "react";
import Scrollbar, { ScrollbarProps } from "../../components/Scrollbar";
import type { Meta, StoryObj } from "@storybook/react";

type ScrollbarStoryProps = {
  direction: ScrollbarProps["direction"];
  margin: ScrollbarProps["margin"];
};

const ScrollbarStory = (props: ScrollbarStoryProps) => {
  return (
    <Scrollbar
      {...props}
      style={
        props.direction === "vertical"
          ? {
              width: "16rem",
              height: "16rem",
            }
          : {
              width: "16rem",
            }
      }
    >
      <p
        style={
          props.direction === "vertical"
            ? {
                margin: 0,
              }
            : {
                width: "32rem",
                margin: 0,
              }
        }
      >
        {LOREM_IPSUM}
      </p>
    </Scrollbar>
  );
};

const meta: Meta<typeof Scrollbar> = {
  title: "Components/Scrollbar",
  component: ScrollbarStory,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    direction: "vertical",
    margin: "4",
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    margin: "4",
  },
};

const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.";
