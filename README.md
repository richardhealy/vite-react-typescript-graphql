# Vite React TypeScript GraphQL

- With Codegen enabled
- With React Router
- With MSW, Vite and RTL for tests
- With Apollo Client

### Setup

```
cp .env.template .env
# Add your graphql url to the .env
# Update the graphql url to the codegen.ts
```

### Prebuild

```
# Remember you need .gql files for this to work
yarn codegen
```

### Dev

```
yarn dev
```
