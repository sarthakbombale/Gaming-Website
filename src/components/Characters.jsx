import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

function CustomCursor({ isHovering3D }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
      animate={{
        x: position.x - (isHovering3D ? 12 : 15),
        y: position.y - (isHovering3D ? 12 : 15),
        scale: isHovering3D ? 1.5 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <motion.div
        className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
        animate={{
          width: isHovering3D ? "24px" : "40px",
          height: isHovering3D ? "24px" : "40px",
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

const Characters = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("VIKI");
  const [cursorInModeArea, setCursorInModeArea] = useState(false);

  const Avatar = {
    VIKI: {
      name: "VIKI",
      power: 75,
      stable: 95,
      penetrate: 30,
      portable: 80,
      stars: 3,
      img: "/images/VIKI.png",
      iframe: "https://my.spline.design/untitledcopy-pmCy9x2EBBWrbqg26YXluQbZ/",
    },
    EVA: {
      name: "EVA",
      power: 90,
      stable: 80,
      penetrate: 70,
      portable: 60,
      stars: 4,
      img: "/images/EVA.png",
      iframe: "https://my.spline.design/untitled1-g3PYrsaIVvQaN0LhGhjqoF0t/",
    },
  };

  const currentAvatar = Avatar[selectedAvatar];

  return (
    <div className="relative w-full min-h-screen overflow-auto mb-[10%]">
      <CustomCursor isHovering3D={cursorInModeArea} />

      {/* Title */}
      <div className="relative z-10 pt-6 text-center">
        <h1
          className="text-5xl font-bold tracking-widest mb-8"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.7)" }}
        >
          FIGHTERS
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-start w-full h-full p-4 gap-6">
        {/* Left Side - Character Info */}
        <div className="w-full md:w-1/2 flex flex-col md:ml-10">
          {/* Info Card */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            <h1 className="text-2xl font-semibold mb-2">{currentAvatar.name}</h1>

            <div className="space-y-3 mb-8">
              {["power", "stable", "penetrate", "portable"].map((stat) => (
                <div key={stat} className="flex items-center">
                  <span className="w-24 text-gray-400 capitalize">{stat}</span>
                  <div className="flex-1 h-4 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-white"
                      style={{ width: `${currentAvatar[stat]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2">{currentAvatar[stat]}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Proficient
              </button>
              <button className="px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300">
                Redemption
              </button>
            </div>
          </div>

          {/* Avatar Cards */}
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(Avatar).map((key) => {
              const avatar = Avatar[key];
              return (
                <div
                  key={key}
                  className="relative bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 border flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedAvatar(key)}
                >
                  <div className="text-lg mb-2">{avatar.name}</div>
                  <div className="w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2">
                    <img
                      src={avatar.img}
                      alt={`${avatar.name}-IMG`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex">
                    {[...Array(avatar.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-violet-400 text-violet-500" />
                    ))}
                  </div>
                  {selectedAvatar === key && (
                    <div className="absolute inset-0 border-2 border-violet-400 rounded-lg pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - 3D Preview */}
        <div
          className="relative md:w-1/2 w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-visible"
          onMouseEnter={() => setCursorInModeArea(true)}
          onMouseLeave={() => setCursorInModeArea(false)}
        >
          {Object.keys(Avatar).map((key) => (
            <iframe
              key={key}
              src={Avatar[key].iframe}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: selectedAvatar === key ? 1 : 0,
                pointerEvents: selectedAvatar === key ? "auto" : "none",
                transition: "opacity 0.5s ease-in-out",
              }}
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
