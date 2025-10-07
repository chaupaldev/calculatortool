import romanticMovie from "../assets/movie1.jpeg";
import { Clock } from "lucide-react";

interface Props { isOpen: boolean; }

const LoadingModal = ({ isOpen }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl p-6 max-w-xs w-full shadow-2xl flex flex-col items-center overflow-hidden">
        {/* Portrait movie image */}
        <div className="relative w-full h-full mb-4">
          <img
            src={romanticMovie}
            alt="Romantic movie"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
          {/* Gradient overlay for cinematic feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
        </div>

        {/* Loading text with spinning clock */}
        <div className="flex items-center gap-3 text-pink-600 text-lg font-semibold">
          <Clock className="w-6 h-6 animate-spin" />
          🎬 Calculating your love match...
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
