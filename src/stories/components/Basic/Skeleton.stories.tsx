import React from "react";
import Skeleton from "@/components/Skeleton";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a simple and customisable skeleton UI.
 */
const meta: Meta<typeof Skeleton> = {
  title: "Components/Basic/Skeleton",
  component: Skeleton,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * A simple usage by styles.
 */
export const Default: Story = {
  args: {
    style: {
      width: 200,
      height: 100,
    },
  },
};

/**
 * Example using lots of skeletons.
 */
export const Layout: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 16,
        }}
      >
        <Skeleton
          style={{
            width: 76,
            height: 76,
            borderRadius: 76 / 2,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Skeleton style={{ width: 200, height: 20 }} />
          <Skeleton style={{ width: 200, height: 20 }} />
          <Skeleton style={{ width: 200, height: 20 }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <Skeleton style={{ width: 292, height: 120 }} />
        <Skeleton style={{ width: 292, height: 20 }} />
        <Skeleton style={{ width: 292, height: 20 }} />
      </div>
    </div>
  ),
};
