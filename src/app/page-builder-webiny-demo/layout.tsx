"use client";

import { apolloClient } from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ReactElement } from "react";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default Layout;
