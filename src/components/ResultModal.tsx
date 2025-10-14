import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import romanticHearts from "../assets/Movie.webp";

interface Props {
  isOpen: boolean;
  score: number;
  onClose: () => void;
}

const ResultModal = ({ isOpen, score, onClose }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal with pop-in */}
          <motion.div
            className="bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-3xl p-4 sm:p-6 max-w-xs sm:max-w-sm w-full shadow-2xl flex flex-col items-center relative overflow-hidden"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Close X button */}
            <button
              onClick={onClose}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-800 hover:text-black"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            {/* Love Score */}
            <div className="text-center mb-3 sm:mb-4">
              <h2 className="text-2xl sm:text-3xl font-romantic text-yellow-900 mb-1 sm:mb-2 animate-pulse">
                ❤️ Your Love Score ❤️
              </h2>
              <motion.p
                className="text-4xl sm:text-5xl font-bold text-red-600"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {score}%
              </motion.p>
            </div>

            {/* Glowing Diya Emoji */}
            <motion.div
              className="text-2xl sm:text-2xl mb-4 animate-bounce"
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🪔
            </motion.div>

            {/* Heart image */}
            <a
              href="https://www.chaupal.com/movie/soch-toh-parey"
              className="text-pink-600 hover:underline w-full"
            >
              <div className="relative w-full mb-4 sm:mb-6">
                <img
                  src={romanticHearts}
                  alt="Romantic hearts"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </a>

            {/* Watch Now button */}
            <motion.button
              onClick={() =>
                window.open(
                  "https://www.chaupal.com/movie/soch-toh-parey",
                  "_blank"
                )
              }
              className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold text-lg sm:text-xl hover:opacity-90 transition shadow-lg shadow-yellow-300/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💛 Watch Now
            </motion.button>

            {/* Subtle sparkles */}
            <div className="pointer-events-none absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-60 animate-sparkle"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 5 + 3}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultModal;
