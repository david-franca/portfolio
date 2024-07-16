import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "../components/NavBar";
import { RefsProvider } from "@/context";

const meta = {
  title: "Portfolio/NavBar",
  component: NavBar,
  decorators: [
    (Story) => (
      <RefsProvider>
        <Story />
      </RefsProvider>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {};
