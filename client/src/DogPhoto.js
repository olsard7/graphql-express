import { useQuery, gql } from "@apollo/client";

const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dogWithImg(breed: $breed) {
      uid
      displayImage
    }
  }
`;

const DogPhoto = ({ breed }) => {
  const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;
  return (
    <div>
      <div className="photoContainer">
        {data.dogWithImg ? (
          <img src={data.dogWithImg.displayImage} />
        ) : (
          <span>Please select a breed</span>
        )}
      </div>
    </div>
  );
};

export default DogPhoto;
