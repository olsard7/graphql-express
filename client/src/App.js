import { useState } from "react";
import Dogs from "./Dogs";
import DogPhoto from "./DogPhoto";

const App = () => {
  const [selectedDog, setSelectedDog] = useState("");
  const dogSelectedHandler = ({ target }) => {
    const { value } = target;
    setSelectedDog(value);
  };

  return (
    <div>
      {/* <DogPhoto breed={selectedDog} />
      <Dogs onDogSelected={dogSelectedHandler} /> */}
      <p>Test</p>
    </div>
  );
};

export default App;
