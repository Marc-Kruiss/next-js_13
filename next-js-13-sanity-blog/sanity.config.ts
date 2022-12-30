import { defineConfig, WorkspaceOptions } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { getDefaultDocumentNode } from "./structure";
import Logo from "./components/sanity-studio/Logo";
import StudioNavbar from "./components/sanity-studio/StudioNavbar";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig<WorkspaceOptions>({
  basePath: "/studio",
  name: "Blog_Studio",
  title: "Blog Studio",
  projectId,
  dataset,
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  studio:{
    components:{
      logo:Logo,
      navbar:StudioNavbar,
    }
  }
});
