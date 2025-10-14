const FloatingHearts = () => {
  const colors = ["#FF69B4", "#FF1493", "#FFB6C1", "#FF4500"]; 

  const heartSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="32"
      height="32"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" >
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 20 + 15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div
            key={i}
            className="absolute animate-floatUp"
            style={{
              left: `${Math.random() * 100}%`,
              top: `100%`, 
              width: `${size}px`,
              height: `${size}px`,
              color: color,
              animationDuration: `${Math.random() * 6 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              filter: `drop-shadow(0 0 10px ${color})`,
            }}
          >
            {heartSVG}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingHearts;
