import { useState } from "react";
import LoveCalculator from "./components/LoveCalculator";
import LoadingModal from "./components/LoadingModal";
import ResultModal from "./components/ResultModal";
import FloatingHearts from "./components/FloatingHearts";

const App = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [loveScore, setLoveScore] = useState(0);

  const handleCalculate = (_name1: string, _name2: string) => {
    setShowLoading(true);

    // Generate random love score between 80-100
    const randomScore = Math.floor(Math.random() * 21) + 80;

    setTimeout(() => {
      setShowLoading(false);
      setLoveScore(randomScore);
      setShowResult(true);
    }, 3000);
  };

  const handleCloseResult = () => setShowResult(false);

  return (
   <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden 
                  bg-black 
                  before:absolute before:inset-0 before:bg-gradient-radial before:from-yellow-400/20 before:to-transparent 
                  before:animate-pulse-slow">
      
      {/* Floating hearts behind everything */}
      <FloatingHearts />

      {/* Beating Heart & Calculator */}
      <div className="relative z-10">
        <LoveCalculator onCalculate={handleCalculate} />
      </div>

      {/* Loading modal */}
      <LoadingModal isOpen={showLoading} />

      {/* Result modal */}
      <ResultModal isOpen={showResult} score={loveScore} onClose={handleCloseResult} />

      {/* Subtle background sparkle particles */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full opacity-50 animate-sparkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 4}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
