import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Intern – Samsung Electronics Egypt',
      period: 'Aug - Sep 2025',
      description: '6-week internship program gaining exposure to real-world workflows and industry practices inside a multinational environment. Collaborated with engineers and teams on technical and practical tasks.',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Summer Training – Systel Telecom',
      period: 'Jul - Aug 2025',
      description: 'Completed intensive 4-week training in telecommunications, microwave, fiber optics, and CCTV systems. Enhanced leadership capabilities in teamwork, decision-making, and time management.',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Intern – Wireless Communication for IoT (ITI)',
      period: 'Jul - Aug 2024',
      description: 'Gained practical experience in wireless protocols and sensor interfacing. Worked on IoT simulation tools and real-life applications.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'CS Volunteer – IEEE',
      period: 'Oct 2024 - Sep 2025',
      description: 'Supported events, technical sessions, and coordination. Helped organize and run technical workshops for the community.',
    },
  ];

  const education = {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Bachelor of Electronics and Communication Engineering',
    institution: 'Helwan University, Cairo, Egypt',
    period: 'Sep 2021 - Aug 2026',
    description: 'Specializing in Digital IC Design and Verification with strong foundation in digital logic design, RTL development, and VLSI concepts.',
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-gray-900">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl mb-8 text-gray-900 flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education
          </h3>
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                {education.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-xl text-gray-900 mb-1">{education.title}</h4>
                <p className="text-blue-600 mb-2">{education.institution}</p>
                <p className="text-gray-600 text-sm mb-3">{education.period}</p>
                <p className="text-gray-700">{education.description}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl mb-8 text-gray-900 flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" />
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-gray-300 hover:border-blue-600"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-gray-900 mb-1">{exp.title}</h4>
                    <p className="text-blue-600 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
