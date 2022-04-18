import { useQuery, gql } from "@apollo/client";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = () => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data.dogs.map((dog) => <p key={dog.id}>{dog.breed}</p>);
};

export default Dogs;
