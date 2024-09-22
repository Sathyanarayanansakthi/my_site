const About = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex items-center">
      {/* Container for both left and right sections */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 flex flex-col md:flex-row justify-between">
        {/* Left side content */}
        <div className="md:w-1/2 text-white text-3xl sm:text-4xl md:text-5xl">
          <h1>Hello there</h1>
          <div className="py-5 sm:py-10 text-base sm:text-lg md:text-xl">
            A Highly motivated Final-Year Student specializing in Full-Stack Development,
            <br />
          </div>
          <button className="text-lg sm:text-2xl md:text-3xl border border-gray-400 text-gray-400 px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
          hover:bg-gray-100 hover:text-black transition-colors duration-300">
            Download Resume
          </button>
        </div>

        {/* Right side content */}
        <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img 
            src="https://source.unsplash.com/random/400x400" 
            alt="Random" 
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
