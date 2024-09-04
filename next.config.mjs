import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: { unoptimized: true }
};

export default withMDX(config);
