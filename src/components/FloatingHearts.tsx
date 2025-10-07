import { Heart } from "lucide-react";

const FloatingHearts = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {[...Array(200)].map((_, i) => (
      <Heart key={i} className="absolute text-pink-500/30 animate-floatUp"
        style={{
          left: `${Math.random()*100}%`,
          top: `${Math.random()*100}%`,
          fontSize: `${Math.random()*30+10}px`,
          animationDuration: `${Math.random()*5+5}s`,
          animationDelay: `${Math.random()*5}s`,
        }}
      />
    ))}
  </div>
);

export default FloatingHearts;
