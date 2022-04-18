const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const imagesData = require("./imagesData");

const schema = buildSchema(`
    type Query {
        image(id: Int!): Image
        images(category: String): [Image] 
    }

    type Image {
        id: Int
        title: String
        category: String
        owner: String
        url: String
    }
`);

// Get single Image using id

function getImage(args) {
  for (const image of imagesData) {
    if (image.id === args.id) {
      return image;
    }
  }
}

// Get images using category

function getImages(args) {
  if (args.category) {
    return imagesData.filter(
      (image) => image.category.toLowerCase() === args.category.toLowerCase()
    );
  } else {
    return imagesData;
  }
}

// Resolver
const root = {
  image: getImages,
  images: getImages,
};

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(5000, () =>
  console.log("GraphQL server with Express running on localhost:5000/graphql")
);
