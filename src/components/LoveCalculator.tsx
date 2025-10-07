import { useState } from "react";
import { Heart } from "lucide-react"; // Optional: Using an icon for the heart

interface Props {
  onCalculate: (name1: string, name2: string) => void;
}

const LoveCalculator = ({ onCalculate }: Props) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name1 || !name2) return alert("Enter both names!");
    onCalculate(name1, name2);
  };

  return (
    <div className="relative z-10 w-full max-w-md mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-pink-200">
      {/* Beating Heart at the top */}
      <div className="flex justify-center mb-4">
        <Heart className="w-16 h-16 text-pink-500 animate-heartPulse" fill="currentColor" />
      </div>

      <h1 className="text-4xl font-romantic text-center text-pink-600 mb-6">Love Calculator 💖</h1>
      
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
          className="px-4 py-2 rounded-lg text-black text-lg focus:outline-none shadow-inner"
        />
        <input
          type="text"
          placeholder="Second Name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
          className="px-4 py-2 rounded-lg text-black text-lg focus:outline-none shadow-inner"
        />
        <button className="bg-pink-600 hover:bg-pink-700 py-3 rounded-lg text-white font-bold transition shadow-lg">
          Calculate Love %
        </button>
      </form>
    </div>
  );
};

export default LoveCalculator;
