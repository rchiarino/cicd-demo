import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { pageTree } from "@/src/app/source";
import { HomeLayoutProps } from "fumadocs-ui/home-layout";
// import { version } from "../../package.json";

export const layoutOptions: DocsLayoutProps = {
  tree: pageTree,
  nav: {
    title: "ISA 2 - CI/CD",
  },
  sidebar: {
    collapsible: false,
    hideSearch: true,
  },
};
