import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider";
import { DocsLayout } from "fumadocs-ui/layout";
import { layoutOptions } from "@/src/app/layout.config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISA 2 - Actions",
  description: "Demo of ISA 2 with CI/CD using GitHub Actions",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <RootProvider>
          <DocsLayout {...layoutOptions}>{children}</DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
