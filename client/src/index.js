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
  uri: "https://71z1g.sse.codesandbox.io/",
  connectToDevTools: true,
  cache: new InMemoryCache(),
});

const GET_IMAGES = gql`
  query GetImagesByCategory($imageCategory: String) {
    images(category: $imageCategory) {
      id
      title
      owner
      url
      category
    }
  }
`;

// client
//   .query({
//     query: GET_IMAGES,
//     // variables: { imageCategory: "Coffee" },
//   })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
