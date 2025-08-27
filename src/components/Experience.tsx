import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'WordPress Development Lead',
      company: 'WebMobi Technologies',
      period: 'Sept 2024 – Present',
      location: 'Remote',
      description: 'Leading WordPress development initiatives and managing development teams.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'WordPress Development Lead',
      company: 'Solvative',
      period: 'July 2024 – Sept 2024',
      location: 'Remote',
      description: 'Led WordPress development projects and mentored development teams.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Multidots',
      period: 'Dec 2022 – Jun 2024',
      location: 'Remote',
      description: 'Developed advanced WordPress solutions including the Multicollab plugin for real-time collaboration.',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Infobeans',
      period: 'Dec 2020 – Dec 2022',
      location: 'Indore, India',
      description: 'Led major platform migrations including CIO.com from OneCMS to WordPress VIP. Awarded Star Performer.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Software Developer',
      company: 'Mango IT Solutions',
      period: 'Jun 2016 – Dec 2020',
      location: 'Indore, India',
      description: 'Started my professional journey, developing WordPress themes and plugins for various clients.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const achievements = [
    {
      title: 'Star Performer Award',
      description: 'Awarded at InfoBeans for ownership, excellence, dedication and teamwork',
      impact: '35% boost in sprint delivery efficiency'
    },
    {
      title: 'Team Mentorship',
      description: 'Mentored 10+ team members including developers, designers, and QA engineers',
      impact: '50% reduction in onboarding time'
    },
    {
      title: 'Sprint Success Rate',
      description: 'Maintained consistent project delivery excellence',
      impact: '100% sprint delivery success rate'
    },
    {
      title: 'Client Satisfaction',
      description: 'Delivered 40+ projects across various domains',
      impact: '95%+ client satisfaction rate'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            9+ years of professional growth, leadership, and technical excellence
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  
                  {/* Content */}
                  <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-blue-600 mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key <span className="gradient-text">Achievements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 mb-3">
                      {achievement.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full">
                      <span className="text-sm font-semibold text-blue-600">
                        {achievement.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;