import { useState } from "react";
import DogSelect from "./DogSelect";
import DogPhoto from "./DogPhoto";

const App = () => {
  const [selectedDog, setSelectedDog] = useState("");
  const dogSelectedHandler = ({ target }) => {
    const { value } = target;
    setSelectedDog(value);
  };

  return (
    <div>
      <DogPhoto breed={selectedDog} />
      <DogSelect onDogSelected={dogSelectedHandler} />
    </div>
  );
};

export default App;
