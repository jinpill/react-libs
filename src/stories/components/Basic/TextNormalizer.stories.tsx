import TextNormalizer from "@/components/TextNormalizer";
import type { Meta, StoryObj } from "@storybook/react";

/**
 * This component splits the text by breaking lines and normalizes the text alignment.
 */
const meta: Meta<typeof TextNormalizer> = {
  title: "Components/Basic/TextNormalizer",
  component: TextNormalizer,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: `
      Hello, World!

      My name is John Doe.




      Goodbye, World!
    `,
  },
};
