"use client";

import { gql, useQuery } from "@apollo/client";
import { Page } from "@webiny/app-page-builder-elements";

const GET_PUBLISHED_PAGE = gql`
  query PbGetPublishedPage($path: String, $preview: Boolean) @ps(cache: true) {
    pageBuilder {
      getPublishedPage(path: $path, preview: $preview) {
        data {
          content
        }
        error {
          code
          message
          data
        }
      }
    }
  }
`;

const Demo = () => {
  const getPublishedPageQuery = useQuery(GET_PUBLISHED_PAGE, {
    variables: {
      path: "/example-landing-page",
      preview: true,
    },
  });

  const page = getPublishedPageQuery.data?.pageBuilder?.getPublishedPage?.data;

  if (!page) {
    return null;
  }

  return <Page page={page} />;
};

export default Demo;
