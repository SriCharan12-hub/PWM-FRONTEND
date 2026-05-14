import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Trendify - E-Commerce Platform',
    description: 'A production-ready MERN Stack E-Commerce application with secure authentication, role-based access control, and live Razorpay payment integration. Features dynamic product search, category filtering, cart management, order tracking, and admin portal.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'JWT', 'OAuth'],
    demoUrl: 'https://mern-frontend-m18p.vercel.app/',
    githubUrl: 'https://github.com/SriCharan12-hub/Using-Mern'
  },
  {
    id: 2,
    title: 'Chatify - Real-Time Chat & Video Platform',
    description: 'A full-stack real-time communication platform built with MERN + Stream.io and Zustand. Features one-to-one chat, video calling, email OTP & Google OAuth authentication, media sharing, and production-level backend security.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/019/908/166/small_2x/phone-chatting-conversation-png.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stream.io', 'Zustand', 'JWT'],
    demoUrl: 'https://chat-frontend-theta-tawny.vercel.app',
    githubUrl: 'https://github.com/SriCharan12-hub/Chat-application'
  },
  {
    id: 3,
    title: 'AI Inbox Automation System',
    description: 'An AI-powered Gmail automation system using n8n and Google Gemini for intelligent email classification. Automatically detects and filters transaction-related emails, removes unnecessary messages, and performs scheduled Spam/Trash cleanup.',
    image: 'https://cdn-icons-png.flaticon.com/512/12636/12636009.png',
    tags: ['n8n', 'Google Gemini', 'Gmail API', 'Workflow Automation', 'AI Integration'],
    demoUrl: '#',
    githubUrl: 'https://github.com/SriCharan12-hub/n8n-project'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-slate-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4"
            >
              Our Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Featured Work
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-zinc-400"
            >
              Explore a selection of our recent projects. We take pride in delivering robust, scalable, and visually stunning applications.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 dark:text-white bg-white dark:bg-zinc-800 border border-slate-200 dark:border-white/10 rounded-lg hover:bg-slate-50 dark:hover:bg-zinc-700 transition-colors shrink-0"
          >
            View All Projects
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl bg-white dark:bg-zinc-900 border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  {/* Overlay content removed to avoid redundancy with the new action icons below */}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-zinc-400 mb-6 grow line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-4 mb-6">
                  {project.demoUrl !== '#' && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 hover:scale-110 active:scale-95"
                      title="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white flex items-center justify-center hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all shadow-lg hover:scale-110 active:scale-95"
                      title="View GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
