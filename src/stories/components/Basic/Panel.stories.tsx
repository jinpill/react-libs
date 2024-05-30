import React from "react";
import Panel from "@/components/Panel";
import IconButton from "@/components/IconButton";
import ToggleButton from "@/components/ToggleButton";
import Input from "@/components/Input";
import Button from "@/components/Button";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component is a panel UI for options.
 */
const meta: Meta = {
  title: "Components/Basic/Panel",
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

const OPTIONS = [
  {
    label: "Show",
    value: "visible",
  },
  {
    label: "Hide",
    value: "hidden",
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Panel.Container style={{ minWidth: 320 }}>
      <Panel.Header title="View Options" />

      <Panel.Contents style={{ maxHeight: 500 }}>
        <Panel.Section title="Point cloud">
          <Panel.Label name="Point size" unit="mm" contentWidth="small">
            <Input.Number value={9} textAlignment="center" isFullWidth />
          </Panel.Label>
        </Panel.Section>
        <Panel.Section
          title="Coordinate frames"
          actions={<IconButton size="small" preset="add" />}
        ></Panel.Section>
        <Panel.Section title="Cad matches" isCollapsible isSpread>
          <Panel.Label name="Returned">
            <ToggleButton value="visible" options={OPTIONS} isFullWidth />
          </Panel.Label>
          <Panel.Label name="Additional">
            <ToggleButton value="visible" options={OPTIONS} isFullWidth />
          </Panel.Label>
        </Panel.Section>
        <Panel.Section title="Grasps" isCollapsible>
          <Panel.Label name="Valid grasps">
            <ToggleButton value="visible" options={OPTIONS} isFullWidth />
          </Panel.Label>
          <Panel.Label name="Colliding grasps">
            <ToggleButton value="visible" options={OPTIONS} isFullWidth />
          </Panel.Label>
        </Panel.Section>
        <Panel.Section title="Gripper" isCollapsible>
          <Panel.Label name="Animation speed" contentWidth="small">
            <Input.Number value={2} textAlignment="center" isFullWidth />
          </Panel.Label>
        </Panel.Section>
        <Panel.Section title="Load Carrier" isCollapsible>
          <Panel.Label name="Wireframe">
            <ToggleButton value="visible" options={OPTIONS} isFullWidth />
          </Panel.Label>
        </Panel.Section>
      </Panel.Contents>

      <Panel.Footer>
        <Button role="tertiary" text="Reset View" isFullWidth />
      </Panel.Footer>
    </Panel.Container>
  ),
};
