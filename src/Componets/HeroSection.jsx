import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen px-4 sm:px-8 lg:px-16 w-full m-auto">
      <motion.div
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        className="flex flex-col items-center text-center p-6 sm:p-12 w-full max-w-[1017px] h-auto sm:w-[90%]"
      >
        
        {/* Badge with top-to-bottom animation */}
        <motion.span
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="px-4 py-2 bg-black text-white rounded-full"
        >
          🖐️ Let's Save our Environment
        </motion.span>

        {/* Heading with left-to-right animation */}
        <motion.h1
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Streamline Your Sustainability <br />
          Reporting With
          <span className="text-green-600"> CARBON CRUNCH</span>
        </motion.h1>

        {/* Subtext with right-to-left animation */}
        <motion.p
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg"
        >
          95% Accurate Carbon Calculations Trusted by Industry Leaders
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center space-x-4">
          <button className="px-6 py-3 bg-white border border-green-600 text-green-600 rounded-md shadow-md hover:bg-green-50 transition">
            Free Calculator
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition">
            Book Demo
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
