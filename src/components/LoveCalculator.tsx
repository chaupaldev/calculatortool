import { useState } from "react";
import { Sparkles } from "lucide-react"; // Optional: Using an icon for the heart
import banner from "../assets/Banner.webp";

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
    <>
      <div className="relative z-10 w-full max-w-md mx-auto bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-pink-200">
        {/* Beating Heart at the top */}
        <div className="flex justify-center mb-4">
          <Sparkles
            className="w-16 h-16 text-[#FFF100] animate-heartPulse"
            fill="currentColor"
          />
        </div>

        <h1 className="text-4xl font-bold font-romantic text-center text-pink-600 mb-6">
          Discover your Diwali love match
        </h1>
        <a href="https://www.chaupal.com/movie/soch-toh-parey" className="text-pink-600 hover:underline">
          <img
          src={banner}
          alt="Love Calculator Banner"
          className="w-full h-full object-cover rounded-3xl mb-6"
        />
        </a>
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
            Ignite the Spark 🔥
          </button>
        </form>
        {/* Decorative Banner at the bottom */}
      </div>
    </>
  );
};

export default LoveCalculator;
