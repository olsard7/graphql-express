import { useQuery, gql } from "@apollo/client";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <select onChange={onDogSelected}>
      <option value="">Select breed</option>
      {data.dogs.slice(0, 20).map((dog) => (
        <option value={dog.breed} key={dog.id}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
};

export default Dogs;
