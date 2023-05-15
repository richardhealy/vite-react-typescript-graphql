import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      'http://localhost:4000/graphql': {
        headers: {
          authorization: '',
        },
      },
    },
  ],
  documents: './src/**/*.gql',
  generates: {
    'src/apollo/generated/apollo-helpers.ts': {
      plugins: ['typescript-apollo-client-helpers'],
    },
    'src/apollo/generated/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: 'apollo/generated/types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true,
      },
    },
    'src/apollo/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
    'src/apollo/generated/graphql.schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
