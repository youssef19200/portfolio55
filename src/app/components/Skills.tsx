import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Digital IC Design',
      skills: [
        { name: 'Verilog HDL', level: 90 },
        { name: 'RTL Design', level: 85 },
        { name: 'FPGA Implementation', level: 85 },
        { name: 'Static Timing Analysis', level: 75 },
      ],
    },
    {
      category: 'Verification',
      skills: [
        { name: 'SystemVerilog', level: 80 },
        { name: 'UVM/UVMF', level: 75 },
        { name: 'Functional Coverage', level: 80 },
        { name: 'Formal Verification', level: 70 },
      ],
    },
    {
      category: 'Tools & Programming',
      skills: [
        { name: 'Vivado', level: 90 },
        { name: 'QuestaSim', level: 90 },
        { name: 'C/C++/Python', level: 80 },
        { name: 'JavaScript/HTML/CSS', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-gray-900">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-blue-600 h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}