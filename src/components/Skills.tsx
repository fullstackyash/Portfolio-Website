import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Settings, 
  Users,
  Zap,
  Heart
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'WordPress Development',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      skills: [
        'Theme & Plugin Development',
        'WooCommerce',
        'Gutenberg Block Development',
        'WordPress VIP',
        'Full-Stack Development'
      ]
    },
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-purple-500 to-purple-600',
      skills: [
        'JavaScript (ES6)',
        'React',
        'AJAX',
        'jQuery',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-green-600',
      skills: [
        'PHP',
        'MySQL',
        'MariaDB',
        'REST API',
        'Custom API Endpoints'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      color: 'from-orange-500 to-orange-600',
      skills: [
        'GIT',
        'CI/CD (Travis, CircleCI)',
        'VIP CLI',
        'Jira',
        'Trello',
        'Asana'
      ]
    },
    {
      title: 'Performance & SEO',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      skills: [
        'SEO',
        'Page Speed Optimization',
        'Web Vitals',
        'Lighthouse'
      ]
    },
    {
      title: 'Software Practices',
      icon: Users,
      color: 'from-pink-500 to-pink-600',
      skills: [
        'Agile',
        'Scrum',
        'Coding Standards',
        'Technical Documentation'
      ]
    },
    {
      title: 'Leadership',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      skills: [
        'Team Leadership',
        'Communication',
        'Problem Solving',
        'Adaptability',
        'Attention to Detail'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built over 9+ years of professional development experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center text-gray-600"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Professional Certification</h3>
            <p className="text-xl mb-2">Certified Scrum Master (CSM®)</p>
            <p className="text-blue-100">Scrum Alliance</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;