import React from "react";

import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  pageDescription?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle,
  pageDescription,
}) => {
  return (
    <div>
      <Head>
        <title>{pageTitle || "NextJS"}</title>
        <meta name="description" content={pageDescription || pageTitle || ""} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
