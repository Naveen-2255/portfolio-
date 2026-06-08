import React from 'react';
import { motion } from 'framer-motion';
import QRCodeComponent from 'react-qr-code';
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const QRCode = QRCodeComponent.default || QRCodeComponent.QRCode || QRCodeComponent;

export default function Connect() {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/Naveen-2255' },
    { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/naveen-joseph-8b122b270' },
    { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/nvn_.jsf/' },
    { name: 'X / Twitter', icon: <FaTwitter />, href: 'https://x.com/NaveenJosephv' }
  ];

  return (
    <section id="connect" className="py-24 bg-white border-t border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
              Let's<br />
              <span className="text-indigo-500">Connect.</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed mb-10">
              Prefer a quick chat or want to save my contact info? Scan the QR code or drop a message on WhatsApp.
            </p>
            
            <motion.a 
              href="https://wa.me/919895780376" 
              target="_blank" rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-medium transition-all shadow-sm"
            >
              <FaWhatsapp size={18} className="text-emerald-500" />
              Start a Conversation
            </motion.a>
          </motion.div>

          {/* Right Side - QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.a 
              href="https://linktr.ee/naveenjosephv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center cursor-pointer"
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <QRCode 
                  value="https://linktr.ee/naveenjosephv" 
                  size={180} 
                  fgColor="#1e293b" 
                  bgColor="transparent" 
                />
              </div>
            </motion.a>
          </motion.div>

        </div>

        {/* Social Links Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
              className="flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-slate-600 hover:text-slate-900 transition-all shadow-sm"
            >
              {React.cloneElement(link.icon, { size: 18 })}
              <span className="font-medium tracking-wide text-sm">{link.name}</span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
