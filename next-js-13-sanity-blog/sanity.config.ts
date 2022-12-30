import { defineConfig, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig<WorkspaceOptions>({
  basePath: "/studio",
  name: "Blog_Studio",
  title: "Blog Studio",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
