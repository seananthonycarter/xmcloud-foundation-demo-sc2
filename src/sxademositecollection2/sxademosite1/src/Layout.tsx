/**
 * This Layout is needed for Starter Kit.
 */
import Head from 'next/head';
import Scripts from 'src/Scripts';

import React from 'react';
import config from 'temp/config';

import {
  Field,
  HTMLLink,
  LayoutServiceContext,
  LayoutServiceData,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = config.publicUrl;

interface LayoutProps {
  layoutData: LayoutServiceData;
  headLinks: HTMLLink[];
}

interface RouteFields {
  [key: string]: unknown;
  Title?: Field;
  MetaTitle?: Field;
  MetaDescription?: Field;
  CanonicalTag?: { url: string };
}

const Layout = ({ layoutData, headLinks }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  const fields: RouteFields | undefined = route?.fields;
  const context: LayoutServiceContext = layoutData.sitecore.context;

  const site = layoutData.sitecore?.context?.site?.name?.toLowerCase();

  const isPageEditing = layoutData.sitecore.context.pageEditing;
  const mainClassPageEditing = isPageEditing ? 'editing-mode' : 'prod-mode';
  return (
    <>
      <Scripts />
      <Head>
        <title>
          {fields?.MetaTitle?.value?.toString() || fields?.Title?.value?.toString() || 'Page'}
        </title>
        <meta name="description" content={String(fields?.MetaDescription?.value?.toString())} />

        <link
          rel="canonical"
          href={
            fields?.CanonicalTag?.url ? fields?.CanonicalTag?.url : (context?.itemPath as string)
          }
        />
        <link rel="icon" href={`${publicUrl}/${site}_favicon.ico`} />
        {headLinks.map((headLink) => (
          <link rel={headLink.rel} key={headLink.href} href={headLink.href} />
        ))}
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className={mainClassPageEditing}>
        <header id="header">
          {route && <Placeholder name="headless-header" rendering={route} />}
        </header>
        <main id="main">
          {route && (
            <>
              <Placeholder name="headless-main-top" rendering={route} />
              <Placeholder name="headless-main" rendering={route} />
            </>
          )}
        </main>
        <footer id="footer">
          {route && <Placeholder name="headless-footer" rendering={route} />}
        </footer>
      </div>
    </>
  );
};

export default Layout;
