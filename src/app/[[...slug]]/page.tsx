import { getPage, getPages } from "@/src/app/source";
import type { Metadata } from "next";
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultComponents from "fumadocs-ui/mdx";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (!page) notFound();

  return (
    <DocsPage
      tableOfContent={{ style: "normal", single: false }}
      toc={page.data.toc}
      full={page.data.full}
      footer={{ enabled: false }}
      breadcrumb={{ enabled: true }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <page.data.body components={defaultComponents} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (!page) notFound();

  return {
    title: page.data.title,
  } satisfies Metadata;
}
