import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Props {
  onFinish: () => void;
}

const CrackerAnimation = ({ onFinish }: Props) => {
  const [stage, setStage] = useState<"ignite" | "launch" | "blast">("ignite");
  const launchSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const igniteTimer = setTimeout(() => setStage("launch"), 1500);
    const blastTimer = setTimeout(() => setStage("blast"), 3300);
    const finishTimer = setTimeout(() => onFinish(), 6000);

    return () => {
      clearTimeout(igniteTimer);
      clearTimeout(blastTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  // Play sound when rocket launches
  useEffect(() => {
    if (stage === "launch" && launchSoundRef.current) {
      launchSoundRef.current.play().catch(() => {});
    }
  }, [stage]);

  const colors = [
    "#FFD700",
    "#FF8C00",
    "#FF4500",
    "#00FFFF",
    "#FF69B4",
    "#ADFF2F",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overflow-hidden">
      {/* IGNITE STAGE */}
      {stage === "ignite" && (
        <motion.div
          className="flex flex-col items-center space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="text-6xl animate-pulse">🪔</div>
          <p className="text-yellow-300 text-lg font-semibold">
            Lighting the Diwali Spark...
          </p>
          <motion.div
            className="w-2 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mt-2"
            animate={{ height: ["10px", "30px", "10px"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* ROCKET LAUNCH STAGE */}
      {stage === "launch" && (
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 150 }}
          animate={{ y: -400 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {/* Tilted rocket */}
          <motion.div
            className="text-3xl mb-1"
            initial={{ rotate: 0 }}
            animate={{ rotate: -40 }} // tilt 20 degrees to left
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            🚀
          </motion.div>

          {/* Spark Trail */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
              initial={{ opacity: 1, y: 0 }}
              animate={{ y: i * 12, opacity: 0 }}
              transition={{ duration: 2, delay: i * 0.05, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      )}

     {/* EXPLOSION STAGE */}
{stage === "blast" && (
  <motion.div
    className="relative flex items-center justify-center"
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1.2, 1], opacity: [1, 1, 0.7] }}
    transition={{ duration: 3, ease: "easeOut" }}
  >
    {[...Array(120)].map((_, i) => {
      const color = colors[i % colors.length];
      const size = Math.random() * 8 + 4; // varied particle size
      const angle = Math.random() * 2 * Math.PI;
      const distance = 120 + Math.random() * 80;

      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: color,
            boxShadow: `0 0 15px ${color}`,
          }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
          animate={{
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 0,
            scale: [1, 1.5, 0],
            rotate: Math.random() * 360, // random rotation
          }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
      );
    })}

    {/* Central fireworks emoji */}
    <motion.div
      className="absolute text-6xl"
      animate={{
        scale: [0.8, 1, 1],
        opacity: [1, 0.5, 0],
        rotate: [0, 180, 0],
      }}
      transition={{ duration: 2 }}
    >
      💛
    </motion.div>
  </motion.div>
)}


      {/* Diwali launch sound */}
      <audio ref={launchSoundRef} src="/sounds/diwali-cracker.mp3" />
    </div>
  );
};

export default CrackerAnimation;
