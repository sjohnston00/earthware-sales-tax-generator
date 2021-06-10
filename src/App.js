import "./App.css";
import Scenario from "./Scenario";

import { TYPES, scenario1, scenario2, scenario3 } from "./items";

function App() {
  return (
    <div className='App'>
      <Scenario number={1} data={scenario1} types={TYPES} />
      <Scenario number={2} data={scenario2} types={TYPES} />
      <Scenario number={3} data={scenario3} types={TYPES} />
    </div>
  );
}

export default App;
