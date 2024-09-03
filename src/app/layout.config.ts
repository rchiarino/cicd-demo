import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/src/app/source";

export const layoutOptions: DocsLayoutProps = {
  tree: pageTree,
  nav: {
    title: "CI/CD - Demo",
    transparentMode: "top",
    enableSearch: false,
  },
  sidebar: {
    collapsible: false,
    hideSearch: true,
  },
};
