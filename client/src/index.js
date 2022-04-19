import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:5000/graphql",
  // uri: "https://71z1g.sse.codesandbox.io/",
  uri: "http://localhost:4000",
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

const GET_DOGS = gql`
  {
    dogs {
      uid
      breed
    }
  }
`;

client
  .query({
    query: GET_DOGS,
    // variables: { imageCategory: "Coffee" },
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
