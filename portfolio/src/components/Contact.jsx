import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiFileText, FiUser, FiEdit2, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link as LinkIcon } from 'lucide-react';

export default function Contact() {
  const infoItems = [
    { icon: <FiPhone />, label: 'Call', text: '+91 9895780376' },
    { icon: <FiMail />, label: 'Email', text: 'naveenjosephvadakkel@gmail.com' },
    { icon: <FiMapPin />, label: 'Location', text: 'Mundakayam, Kerala' },
    { icon: <FiFileText />, label: 'Resume', text: 'Download PDF', href: '/resume.pdf', download: 'Naveen_Joseph_Resume.pdf' }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout - Send Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="text-indigo-500 font-mono text-sm mb-6 tracking-widest flex items-center gap-4">
              <div className="h-[1px] w-8 bg-indigo-500/30"></div>
              <span>CONTACT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Send Me<br />
              <span className="text-indigo-500">a Message.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out and let's build something amazing together.
            </p>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <form action="https://formsubmit.co/naveenjosephvadakkel@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition-all"
                />
                <FiUser className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition-all"
                />
                <FiMail className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
              <div className="relative">
                <textarea 
                  name="message"
                  rows="4"
                  placeholder="Message" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition-all resize-none"
                ></textarea>
                <FiEdit2 className="absolute right-5 top-5 text-slate-400" size={18} />
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex justify-end">
                <motion.button 
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full shadow-lg shadow-indigo-500/20 transition-all"
                >
                  Send Message
                  <FiSend size={16} />
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>

        {/* Info Grid (Moved below Form) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-500 shadow-sm mb-1">
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{item.label}</p>
              {item.href ? (
                <a 
                  href={item.href} 
                  download={item.download} 
                  className="text-base font-medium text-black hover:text-slate-800 transition-colors cursor-pointer flex items-center justify-center gap-1 break-all"
                >
                  {item.text}
                </a>
              ) : (
                <p className="text-base font-medium text-slate-800 break-all">{item.text}</p>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
