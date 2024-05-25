import React from "react";
import Panel from "@/components/Panel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Basic/Panel",
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Panel.Container
        style={{
          minWidth: "320px",
        }}
      >
        <Panel.Header title="Panel Header" size="large" />
      </Panel.Container>
    );
  },
};
