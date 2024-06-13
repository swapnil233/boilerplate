import app from "@/lib/app";
import Head from "next/head";
import { FC } from "react";

interface ISharedHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  copyright?: string;
  ogType?: string;
  siteName?: string;
  canonicalUrl?: string;
}

const SharedHead: FC<ISharedHeadProps> = ({
  title,
  description = app.description,
  author = app.author,
  copyright = app.name,
  ogType = "website",
  siteName = app.name,
  canonicalUrl = process.env.VERCEL_URL,
}) => {
  const fullTitle = title ? `${title} | ${app.name}` : `${app.name}`;
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      ></meta>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <meta name="robots" content="index, follow" />
      <title>{fullTitle}</title>

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />

      <link rel="canonical" href={canonicalUrl} />
    </Head>
  );
};

export default SharedHead;
