import { useState } from "react";
import LoveCalculator from "./components/LoveCalculator";
import CrackerAnimation from "./components/CrackerAnimation";
import ResultModal from "./components/ResultModal";
import FloatingHearts from "./components/FloatingHearts";

const App = () => {
  const [showCracker, setShowCracker] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [loveScore, setLoveScore] = useState(0);

  const handleCalculate = () => {
    // Start cracker animation
    setShowCracker(true);

    // Generate random love score between 80–100
    const randomScore = Math.floor(Math.random() * 21) + 80;

    // Wait for cracker animation to finish before showing result
    setTimeout(() => {
      setShowCracker(false);
      setLoveScore(randomScore);
      setShowResult(true);
    }, 6000); // Slightly longer to match cracker sound + animation
  };

  const handleCloseResult = () => setShowResult(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden 
      bg-black 
      before:absolute before:inset-0 before:bg-gradient-radial before:from-yellow-400/10 before:to-transparent"
    >
      {/* Floating decorative hearts */}
      <FloatingHearts />

      {/* Main calculator */}
      <div className="relative z-10">
        <LoveCalculator onCalculate={handleCalculate} />
      </div>

      {/* Firecracker animation with sound */}
      {showCracker && (
        <CrackerAnimation
          onFinish={() => {
            setShowCracker(false);
            setShowResult(true);
          }}
        />
      )}

      {/* Love result modal */}
      <ResultModal
        isOpen={showResult}
        score={loveScore}
        onClose={handleCloseResult}
      />
    </div>
  );
};

export default App;
