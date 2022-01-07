import Pallete from "./Pallete";
import seedColor from "./seedColor";
import generatePalette from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColor[4]))
  return (
    <div>
      <Pallete {...seedColor[4]} />
    </div>
  );
}

export default App;
