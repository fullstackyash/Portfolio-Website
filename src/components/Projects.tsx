import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PatientsLikeMe.com & WomenLikeMe.com',
      company: 'WebMobi Technologies',
      description: 'Headless project in the healthcare domain with 20+ custom API endpoints. Improved performance/SEO for multiple websites by 40%.',
      technologies: ['WordPress', 'Headless CMS', 'REST API', 'Performance Optimization'],
      achievements: [
        { icon: TrendingUp, text: '40% Performance Improvement' },
        { icon: Zap, text: '20+ Custom API Endpoints' }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'CIO.com Migration',
      company: 'Infobeans',
      description: 'Migrated from OneCMS to WordPress VIP and revamped site by building custom Gutenberg blocks, improving performance & SEO by 45%.',
      technologies: ['WordPress VIP', 'Gutenberg', 'OneCMS Migration', 'SEO Optimization'],
      achievements: [
        { icon: TrendingUp, text: '45% Performance & SEO Boost' },
        { icon: Zap, text: 'Complete Platform Migration' }
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Multicollab Plugin',
      company: 'Multidots',
      description: 'Google Docs-like WordPress plugin for real-time collaboration within Gutenberg. Implemented real-time collaboration feature, boosting feature usage by 60%.',
      technologies: ['WordPress Plugin', 'Gutenberg', 'Real-time Collaboration', 'JavaScript'],
      achievements: [
        { icon: Users, text: '60% Feature Usage Increase' },
        { icon: Zap, text: 'Real-time Collaboration' }
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing impactful projects that demonstrate technical excellence and business value
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Project Info */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="flex items-center mb-4">
                        <div className={`w-4 h-4 bg-gradient-to-r ${project.gradient} rounded-full mr-3`}></div>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                          {project.company}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center">
                            <div className={`inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-lg mr-3`}>
                              <achievement.icon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">
                              {achievement.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative"
                      >
                        <div className={`w-full h-64 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="relative z-10 text-center text-white">
                            <div className="text-4xl font-bold mb-2">
                              {project.achievements[0].text.split(' ')[0]}
                            </div>
                            <div className="text-lg opacity-90">
                              {project.achievements[0].text.split(' ').slice(1).join(' ')}
                            </div>
                          </div>
                          
                          {/* Decorative Elements */}
                          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;