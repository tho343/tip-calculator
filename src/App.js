import { Header } from "./components/Header";
import { TipCalculator } from "./components/TipCalculator";
function App() {
  return (
    <div className=" p-[163px] h-screen bg-light-grayish-cyan flex flex-col items-center gap-[88px]">
      <Header></Header>
      <TipCalculator />
    </div>
  );
}

export default App;
