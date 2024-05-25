import React from "react";
import Panel from "@/components/Panel";
import Button from "@/components/Button";
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
        <Panel.Header title="View Options" />
        <Panel.Section title="Point cloud">Contents</Panel.Section>
        <Panel.Section title="Coordinate frames">Contents</Panel.Section>
        <Panel.Section>
          <Button role="tertiary" text="Reset View" isFullWidth />
        </Panel.Section>
      </Panel.Container>
    );
  },
};
