import { Header } from "./components/Header";
import { TipCalculator } from "./components/TipCalculator";
function App() {
  return (
      
        <div className="min-h-full p-8 h-screen bg-light-grayish-cyan flex flex-col items-center gap-[88px]">
      <div className="overlay"></div>
      <Header></Header>
      <TipCalculator />
    
      </div>
      
    
    
  );
}

export default App;
