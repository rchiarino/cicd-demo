import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/src/app/source";
import { HomeLayoutProps } from "fumadocs-ui/home-layout";
// import { version } from "../../package.json";

export const layoutOptions: DocsLayoutProps = {
  tree: pageTree,
  nav: {
    title: "CI/CD - Demo",
  },
  sidebar: {
    collapsible: false,
    hideSearch: true,
  },
};
