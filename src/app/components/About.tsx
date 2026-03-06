import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code, Palette, Rocket } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'RTL Design',
      description: 'Designing digital circuits with Verilog HDL and FPGA implementation',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Verification',
      description: 'Functional verification using UVM, SystemVerilog, and coverage-driven testing',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'FPGA Prototyping',
      description: 'Synthesis and implementation using Vivado with timing closure optimization',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758598307046-22f11e2a6917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrJTIwbGFwdG9wfGVufDF8fHx8MTc3MjQzMDg5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional workspace"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl sm:text-3xl text-gray-900 mb-4">
              Digital IC Design & Verification Engineer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm an Electronics and Communication Engineering student at Helwan University with a strong 
              passion for digital IC design and verification. My expertise includes RTL development, 
              functional verification, and FPGA implementation using industry-standard tools like Vivado 
              and QuestaSim.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Through internships at Samsung Electronics Egypt and ITI, along with intensive training programs, 
              I've gained hands-on experience in real-world digital design workflows. I'm well-versed in 
              Verilog HDL, SystemVerilog, and verification methodologies including UVM and coverage-driven verification.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My work focuses on creating efficient, reliable semiconductor solutions with attention to timing 
              closure, static timing analysis, and formal verification. I'm constantly learning new techniques 
              in low-power design and advanced verification methodologies.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl mb-2 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}