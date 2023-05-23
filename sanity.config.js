import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { muxInput } from "sanity-plugin-mux-input";

export default defineConfig({
  name: "default",
  title: "sanity-next-mux-test",
  projectId: "x5q1obfu",
  dataset: "production",
  basePath: "/admin",
  plugins: [deskTool(), muxInput()],
});
