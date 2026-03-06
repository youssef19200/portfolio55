import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900">Hi, I'm <span className="text-blue-600">Youssef Makboul</span></h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8">
              Digital IC Design & Verification Engineer
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Electronics & Communication Engineer specializing in RTL design, FPGA implementation, 
              and functional verification using Verilog HDL, Vivado, and QuestaSim.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >View My Work</button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-6 justify-center mb-12"
          >
            <a
              href="https://github.com/youssefmakboul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/youssef-makboul-a78826242"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:youssefmakboul98@gmail.com"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={28} />
            </a>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6 },
              y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={32} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}