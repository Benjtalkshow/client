import { isMainnet } from "@/constants";
import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const apolloClient = new ApolloClient({
  uri: isMainnet()
    ? "https://graphql.mainnet.endur.fi"
    : "https://graphql.sepolia.endur.fi",
  cache: new InMemoryCache(),
  defaultOptions,
});

export default apolloClient;
