import { ProjectCard } from "@/components/ProjectCard";
import type { Meta, StoryObj } from "@storybook/react";
import { mockProject } from "./mockProjectCard";
import { RefsProvider } from "@/context";

const meta = {
  title: "Portfolio/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  args: {
    project: mockProject,
  },
  decorators: [
    (Story) => (
      <RefsProvider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <div
            style={{
              width: "calc(100% / 3)",
            }}
          >
            <Story />
          </div>
        </div>
      </RefsProvider>
    ),
  ],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
