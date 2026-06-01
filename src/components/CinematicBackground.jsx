import { motion } from "framer-motion";

function CinematicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Circle 1 */}
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"
      />

      {/* Circle 2 */}
      <motion.div
        animate={{
          x: [0, -200, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Circle 3 */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl"
      />
    </div>
  );
}

export default CinematicBackground;