import { CodegenConfig } from "@graphql-codegen/cli";
const config: CodegenConfig = {
  //GraphQL server's endpoint; so generator can read the server's schema
  schema: "http://localhost:4000",

  //files generator should scan to generate types for frontend
  documents: ["src/**/*.tsx"],

  //where to output the code generated
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
//   ignoreNoDocuments: true,
};

export default config;
