"use client";

import PbPageElementsProvider from "@/lib/PbPageElementsProvider";
import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <PbPageElementsProvider>{children}</PbPageElementsProvider>
    </ApolloProvider>
  );
};

export default Layout;
