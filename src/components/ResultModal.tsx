import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import romanticHearts from "../assets/movie2.jpeg";

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
            className="bg-white rounded-3xl p-4 sm:p-6 max-w-xs sm:max-w-sm w-full shadow-2xl flex flex-col items-center relative overflow-hidden"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Close X button */}
            <button
              onClick={onClose}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-600 hover:text-gray-800"
            >
              <X className="w-5 sm:w-6 h-5 sm:h-6" />
            </button>

            {/* Love Score */}
            <div className="text-center mb-3 sm:mb-4">
              <h2 className="text-2xl sm:text-3xl font-romantic text-pink-600 mb-1 sm:mb-2">
                ❤️ Your Love Score ❤️
              </h2>
              <motion.p
                className="text-4xl sm:text-5xl font-bold text-red-500"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {score}%
              </motion.p>
            </div>

            {/* Heart image */}
            <a
              href="https://www.chaupal.com/movie/soch-toh-parey"
              className="text-pink-600 hover:underline"
            >
              <div className="relative w-full h-full mb-4 sm:mb-6">
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
              className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold text-lg sm:text-xl hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💛 Watch Now
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResultModal;
