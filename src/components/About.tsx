import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, Target, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Trophy, value: '40+', label: 'Projects Delivered' },
    { icon: Users, value: '10+', label: 'Team Members Mentored' },
    { icon: Target, value: '100%', label: 'Sprint Success Rate' },
    { icon: Zap, value: '95%+', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experienced WordPress developer with expertise in building optimized, 
            SEO-friendly, scalable solutions for global clients.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate About Creating Digital Excellence
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over 9 years of experience in WordPress development, I specialize in 
                plugin and theme development, Gutenberg blocks, WooCommerce, and CI/CD deployment. 
                As a Certified Scrum Master (CSM®), I bring both technical expertise and 
                leadership skills to every project.
              </p>
              <p>
                I'm skilled in front-end and back-end web development, collaborating effectively 
                in Agile teams, and ensuring software development lifecycle best practices. 
                My experience spans across various domains including healthcare, media, and 
                collaboration tools.
              </p>
              <p>
                Currently serving as a WordPress Development Lead, I focus on building 
                high-performance, scalable solutions while mentoring team members and 
                maintaining excellence in project delivery.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <a
                href="mailto:yashchoprasmail@gmail.com"
                className="btn-primary inline-flex items-center"
              >
                Let's Work Together
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;