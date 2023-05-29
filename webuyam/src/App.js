import './App.css';

import Left from '../src/Left';
import RightSide from '../src/RightSide';

function App() {
  return (
    <div
      className="flex flex-row justify-between bg-[#34434b] w-full h-screen"
    >
      <Left />
      <RightSide/>
    </div>
  );
}

export default App;
