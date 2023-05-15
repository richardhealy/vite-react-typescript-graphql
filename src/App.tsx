import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  const client = new ApolloClient({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
}

export default App;
