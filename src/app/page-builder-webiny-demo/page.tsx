"use client";

import {
  Page,
  PageElementsProvider as PbPageElementsProvider,
} from "@webiny/app-page-builder-elements";

import { CSSObject } from "@emotion/react";
import { createTheme } from "@webiny/theme";

// Breakpoints (desktop, tablet, mobile).
export const breakpoints = {
  desktop: "@media (max-width: 4000px)",
  tablet: "@media (max-width: 991px)",
  "mobile-landscape": "@media (max-width: 767px)",
  "mobile-portrait": "@media (max-width: 478px)",
};

// Colors.
export const colors = {
  color1: "#fa5723", // Primary.
  color2: "#00ccb0", // Secondary.
  color3: "#0a0a0a", // Text primary.
  color4: "#616161", // Text secondary.
  color5: "#eaecec", // Background.
  color6: "#ffffff", // White background.
};

// Fonts (imported in global.scss).
export const fonts = {
  font1: "'IBM Plex Sans', sans-serif;", // Primary.
  font2: "'Lato', sans-serif;", // Secondary.
};

// Border radius.
export const borderRadius = 4;

// Typography.
const headings = {
  fontFamily: fonts.font2,
  color: colors.color3,
  WebkitFontSmoothing: "antialiased",
  lineHeight: "150%",
};

const paragraphs = {
  fontFamily: fonts.font1,
  color: colors.color3,
  fontWeight: 400,
  lineHeight: 1.35,
  WebkitFontSmoothing: "antialiased",
};

export const typography = {
  headings: [
    {
      id: "heading1",
      name: "Heading 1",
      tag: "h1",
      styles: { ...headings, fontWeight: "bold", fontSize: 48 },
    },
    {
      id: "heading2",
      name: "Heading 2",
      tag: "h2",
      styles: { ...headings, fontSize: 36 },
    },
    {
      id: "heading3",
      name: "Heading 3",
      tag: "h3",
      styles: { ...headings, fontSize: 30 },
    },
    {
      id: "heading4",
      name: "Heading 4",
      tag: "h4",
      styles: { ...headings, fontSize: 24 },
    },
    {
      id: "heading5",
      name: "Heading 5",
      tag: "h5",
      styles: { ...headings, fontSize: 20 },
    },
    {
      id: "heading6",
      name: "Heading 6",
      tag: "h6",
      styles: { ...headings, fontSize: 18, lineHeight: "1.75rem" },
    },
  ],
  paragraphs: [
    {
      id: "paragraph1",
      name: "Paragraph 1",
      tag: "p",
      styles: { ...paragraphs, fontSize: 16.5 },
    },
    {
      id: "paragraph2",
      name: "Paragraph 2",
      tag: "p",
      styles: {
        ...paragraphs,
        fontSize: 12.5,
        letterSpacing: "0.45px",
        lineHeight: "19px",
      },
    },
  ],
  quotes: [
    {
      id: "quote",
      name: "Quote",
      tag: "quoteblock",
      styles: {
        ...paragraphs,
        fontWeight: "bold",
        fontSize: 22,
      },
    },
  ],
  lists: [
    {
      id: "list",
      name: "List 1",
      tag: "ul",
      styles: { ...paragraphs, fontSize: 17 },
    },
  ],
};

// Buttons.
const buttons = (overrides: CSSObject) => ({
  a: { textDecoration: "none" },
  ".button-body": {
    borderRadius,
    border: 0,
    padding: "14px 20px",
    fontFamily: fonts.font1,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: 600,
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
    transition: "all .2s",
    "&:hover": {
      boxShadow: "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
      transform: "translateY(-1px)",
    },
    ...overrides,
  },
});

// Theme object.
const theme = createTheme({
  breakpoints,
  styles: {
    colors,
    typography,
    elements: {
      document: {
        a: { color: colors.color1 },
        b: { fontWeight: "bold" },
        i: { fontStyle: "italic" },
      },
      button: {
        default: buttons({ background: colors.color5, color: colors.color3 }),
        primary: buttons({ background: colors.color1, color: colors.color6 }),
        secondary: buttons({ background: colors.color2, color: colors.color6 }),
        outlinePrimary: buttons({
          border: `2px solid ${colors.color1}`,
          color: colors.color1,
        }),
        outlineSecondary: buttons({
          border: `2px solid ${colors.color2}`,
          color: colors.color2,
        }),
        simple: buttons({
          color: colors.color1,
          "&:hover": { transform: "translateY(-1px)" },
        }),
      },
    },
  },
});

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://d26f8gwtfedanq.cloudfront.net/graphql",
    cache: new InMemoryCache(),
  });
};

import { gql, useQuery } from "@apollo/client";

import { createBlock } from "@webiny/app-page-builder-elements/renderers/block";
import { createButton } from "@webiny/app-page-builder-elements/renderers/button";
import { createCell } from "@webiny/app-page-builder-elements/renderers/cell";
import { createDocument } from "@webiny/app-page-builder-elements/renderers/document";
import { createGrid } from "@webiny/app-page-builder-elements/renderers/grid";
import { createHeading } from "@webiny/app-page-builder-elements/renderers/heading";
import { createImage } from "@webiny/app-page-builder-elements/renderers/image";
import { createParagraph } from "@webiny/app-page-builder-elements/renderers/paragraph";

const renderers = {
  document: createDocument(),
  block: createBlock(),
  grid: createGrid(),
  cell: createCell(),
  heading: createHeading(),
  paragraph: createParagraph(),
  image: createImage(),
  button: createButton(),
};

const page: any = {
  content: {
    id: "rdoez4FaCi",
    type: "document",
    data: {
      settings: {},
    },
    elements: [
      {
        id: "yMvoVPQjkR",
        type: "block",
        data: {
          settings: {
            width: {
              desktop: {
                value: "100%",
              },
            },
            margin: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                advanced: true,
              },
            },
            padding: {
              desktop: {
                all: "10px",
              },
            },
            horizontalAlignFlex: {
              desktop: "center",
            },
            verticalAlign: {
              desktop: "flex-start",
            },
          },
        },
        elements: [
          {
            id: "S3deBFuaTo",
            type: "grid",
            data: {
              settings: {
                width: {
                  desktop: {
                    value: "1100px",
                  },
                },
                margin: {
                  desktop: {
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px",
                    advanced: true,
                  },
                },
                padding: {
                  desktop: {
                    all: "10px",
                  },
                },
                grid: {
                  cellsType: "12",
                },
                gridSettings: {
                  desktop: {
                    flexDirection: "row",
                  },
                  "mobile-landscape": {
                    flexDirection: "column",
                  },
                },
                horizontalAlignFlex: {
                  desktop: "flex-start",
                },
                verticalAlign: {
                  desktop: "flex-start",
                },
              },
            },
            elements: [
              {
                id: "ZXqt4zgE4d",
                type: "cell",
                data: {
                  settings: {
                    margin: {
                      desktop: {
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        left: "0px",
                        advanced: true,
                      },
                    },
                    padding: {
                      desktop: {
                        all: "0px",
                      },
                    },
                    grid: {
                      size: 12,
                    },
                    horizontalAlignFlex: {
                      desktop: "flex-start",
                    },
                  },
                },
                elements: [
                  {
                    id: "pCNVFfBvWe",
                    type: "heading",
                    data: {
                      text: {
                        desktop: {
                          type: "heading",
                          alignment: "left",
                          tag: "h1",
                        },
                        data: {
                          text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Heading","type":"text","version":1}],"direction":"ltr","styles":[],"format":"","indent":0,"type":"heading-element","version":1,"tag":"h1"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
                        },
                      },
                      settings: {
                        margin: {
                          desktop: {
                            all: "0px",
                          },
                        },
                        padding: {
                          desktop: {
                            all: "0px",
                          },
                        },
                      },
                    },
                    elements: [],
                    path: ["rdoez4FaCi", "yMvoVPQjkR", "S3deBFuaTo"],
                  },
                  {
                    id: "LAUfp2OthG",
                    type: "grid",
                    data: {
                      settings: {
                        width: {
                          desktop: {
                            value: "1100px",
                          },
                        },
                        margin: {
                          desktop: {
                            top: "0px",
                            right: "0px",
                            bottom: "0px",
                            left: "0px",
                            advanced: true,
                          },
                        },
                        padding: {
                          desktop: {
                            all: "10px",
                          },
                        },
                        grid: {
                          cellsType: "12",
                        },
                        gridSettings: {
                          desktop: {
                            flexDirection: "row",
                          },
                          "mobile-landscape": {
                            flexDirection: "column",
                          },
                        },
                        horizontalAlignFlex: {
                          desktop: "flex-start",
                        },
                        verticalAlign: {
                          desktop: "flex-start",
                        },
                      },
                    },
                    elements: [
                      {
                        id: "kBK3FPnCEx",
                        type: "cell",
                        data: {
                          settings: {
                            margin: {
                              desktop: {
                                top: "0px",
                                right: "0px",
                                bottom: "0px",
                                left: "0px",
                                advanced: true,
                              },
                            },
                            padding: {
                              desktop: {
                                all: "0px",
                              },
                            },
                            grid: {
                              size: 12,
                            },
                            horizontalAlignFlex: {
                              desktop: "flex-start",
                            },
                          },
                        },
                        elements: [
                          {
                            id: "C0Tv1ERIOT",
                            type: "image",
                            data: {
                              settings: {
                                horizontalAlignFlex: {
                                  desktop: "center",
                                },
                                margin: {
                                  desktop: {
                                    all: "0px",
                                  },
                                },
                                padding: {
                                  desktop: {
                                    all: "0px",
                                  },
                                },
                              },
                              image: {
                                file: {
                                  id: "65e1921fc69fb8000825d1a4",
                                  src: "https://d26f8gwtfedanq.cloudfront.net/files/65e1921fc69fb8000825d1a4/test_stitest.png",
                                },
                              },
                              link: {
                                href: "",
                              },
                            },
                            elements: [],
                            path: [
                              "rdoez4FaCi",
                              "yMvoVPQjkR",
                              "S3deBFuaTo",
                              "ZXqt4zgE4d",
                              "LAUfp2OthG",
                              "kBK3FPnCEx",
                            ],
                          },
                        ],
                        path: [
                          "rdoez4FaCi",
                          "yMvoVPQjkR",
                          "S3deBFuaTo",
                          "ZXqt4zgE4d",
                          "LAUfp2OthG",
                        ],
                      },
                    ],
                    path: [
                      "rdoez4FaCi",
                      "yMvoVPQjkR",
                      "S3deBFuaTo",
                      "ZXqt4zgE4d",
                    ],
                  },
                ],
                path: ["rdoez4FaCi", "yMvoVPQjkR", "S3deBFuaTo"],
              },
            ],
            path: ["rdoez4FaCi", "yMvoVPQjkR"],
          },
          {
            id: "aVPu2R3mld",
            type: "paragraph",
            data: {
              text: {
                desktop: {
                  type: "paragraph",
                  alignment: "left",
                  tag: "p",
                },
                data: {
                  text: '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.","type":"text","version":1}],"direction":"ltr","styles":[],"format":"","indent":0,"tag":"p","type":"paragraph-element","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
                },
              },
              settings: {
                margin: {
                  desktop: {
                    all: "0px",
                  },
                },
                padding: {
                  desktop: {
                    all: "0px",
                  },
                },
              },
            },
            elements: [],
            path: ["rdoez4FaCi", "yMvoVPQjkR"],
          },
          {
            id: "NVFDPfIGqF",
            type: "grid",
            data: {
              settings: {
                width: {
                  desktop: {
                    value: "1100px",
                  },
                },
                margin: {
                  desktop: {
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px",
                    advanced: true,
                  },
                },
                padding: {
                  desktop: {
                    all: "10px",
                  },
                },
                grid: {
                  cellsType: "12",
                },
                gridSettings: {
                  desktop: {
                    flexDirection: "row",
                  },
                  "mobile-landscape": {
                    flexDirection: "column",
                  },
                },
                horizontalAlignFlex: {
                  desktop: "flex-start",
                },
                verticalAlign: {
                  desktop: "flex-start",
                },
              },
            },
            elements: [
              {
                id: "7Iw3BqDUEx",
                type: "cell",
                data: {
                  settings: {
                    margin: {
                      desktop: {
                        top: "0px",
                        right: "0px",
                        bottom: "0px",
                        left: "0px",
                        advanced: true,
                      },
                    },
                    padding: {
                      desktop: {
                        all: "0px",
                      },
                    },
                    grid: {
                      size: 12,
                    },
                    horizontalAlignFlex: {
                      desktop: "flex-start",
                    },
                  },
                },
                elements: [],
                path: ["rdoez4FaCi", "yMvoVPQjkR", "NVFDPfIGqF"],
              },
            ],
            path: ["rdoez4FaCi", "yMvoVPQjkR"],
          },
        ],
        path: ["rdoez4FaCi"],
      },
    ],
    path: [],
  },
  id: "65e19287c69fb8000825d1a6#0001",
  path: "/demo-landing-page",
};

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

interface PageElementsProviderProps {
  children: React.ReactNode;
}

const PageElementsProvider = ({ children }: PageElementsProviderProps) => (
  <PbPageElementsProvider
    theme={theme}
    renderers={renderers}
    modifiers={{
      attributes: {
        /* ... */
      },
      styles: {
        /* ... */
      },
    }}
  >
    {children}
  </PbPageElementsProvider>
);

export default function App() {
  const client = createApolloClient();

  return (
    <ApolloProvider client={client}>
      <Demo />
    </ApolloProvider>
  );
}

const Demo = () => {
  const getPublishedPageQuery = useQuery(GET_PUBLISHED_PAGE, {
    variables: {
      path: "/welcome-to-webiny",
      preview: true,
    },
  });

  const page = getPublishedPageQuery.data?.pageBuilder?.getPublishedPage?.data;

  console.log("page", page);
  if (!page) {
    return null;
  }

  return <PageElementsProvider children={<Page page={page} />} />;
};
