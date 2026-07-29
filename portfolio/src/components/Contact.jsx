import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import OSWindow from './OSWindow';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/naveenjosephvadakkel@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-6">
      <OSWindow 
        path="C:\> contact.exe" 
        bodyClassName="p-6 md:p-10 relative"
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-black mb-8">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Yellow Sticky Note + Linktree QR Card (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fef08a] border-2 border-black hard-shadow p-6 sm:p-8 font-sans rotate-[-1.5deg] relative">
              {/* Tape Graphic */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/80 border border-black/40 rotate-1 opacity-90 shadow-xs"></div>
              
              <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-black leading-snug my-4">
                "Let's build something amazing together."
              </h3>
              <p className="font-mono text-right font-bold text-sm text-slate-800 mt-6">
                — NJ
              </p>
            </div>

            {/* Retro Linktree QR Code Box */}
            <a 
              href="https://linktr.ee/naveenjosephv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block border-2 border-black hard-shadow bg-white p-5 font-mono text-center space-y-4 hover:bg-slate-50 transition-colors group cursor-pointer"
              title="Click to visit Linktree"
            >
              <div className="flex items-center justify-center gap-2 border-b-2 border-black pb-2 text-xs font-bold text-black uppercase">
                <SiLinktree className="text-[#34cb4f]" size={18} />
                <span>LINKTREE QR CODE</span>
              </div>
              
              <div className="bg-[#f8f5f2] border-2 border-black p-3 inline-block hard-shadow-sm group-hover:border-black transition-all">
                <img 
                  src="/qr.png" 
                  alt="Naveen Joseph Linktree QR Code" 
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain mx-auto border-2 border-black bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="pt-1">
                <span className="inline-block bg-[#3f4d34] group-hover:bg-[#2e3927] text-white border border-black px-3 py-1.5 text-xs font-bold hard-shadow-sm transition-colors">
                  Click or scan to open Linktree ↗
                </span>
              </div>
            </a>
          </div>

          {/* Contact Details & Form (Right Column) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Info List */}
            <div className="border-2 border-black hard-shadow-sm bg-stone-50 p-4 space-y-3 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0">
                  <Mail size={16} />
                </div>
                <span className="font-semibold text-black break-all">naveenjosephvadakkel@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0">
                  <Phone size={16} />
                </div>
                <span className="font-semibold text-black">+91 9895780376</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="font-semibold text-black">Kerala, India</span>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="border-2 border-black hard-shadow bg-white p-6">
              {status === 'success' ? (
                <div className="text-center py-6 space-y-3 font-mono">
                  <CheckCircle size={36} className="text-[#3f4d34] mx-auto" />
                  <h4 className="font-bold text-lg text-black">Message Received!</h4>
                  <p className="text-xs text-slate-600">I will get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-bold underline uppercase"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div>
                    <label className="block font-bold text-black mb-1 uppercase">Name:</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Enter your name" 
                      className="w-full bg-[#f8f5f2] border-2 border-black p-2.5 font-sans text-sm focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1 uppercase">Email:</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="Enter your email address" 
                      className="w-full bg-[#f8f5f2] border-2 border-black p-2.5 font-sans text-sm focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1 uppercase">Message:</label>
                    <textarea 
                      name="message" 
                      rows="3" 
                      required 
                      placeholder="Type your message here..." 
                      className="w-full bg-[#f8f5f2] border-2 border-black p-2.5 font-sans text-sm focus:bg-white focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-2">
                      <a 
                        href="https://linktr.ee/naveenjosephv" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 border border-black bg-emerald-100 hover:bg-emerald-200 text-black font-bold"
                        title="Linktree"
                      >
                        <SiLinktree size={14} />
                      </a>
                      <a 
                        href="https://github.com/Naveen-2255" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 border border-black bg-white hover:bg-slate-100"
                        title="GitHub"
                      >
                        <FaGithub size={14} />
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="p-2 border border-black bg-white hover:bg-slate-100"
                        title="LinkedIn"
                      >
                        <FaLinkedin size={14} />
                      </a>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="inline-flex items-center gap-2 bg-[#3f4d34] text-white border-2 border-black hard-shadow px-5 py-2.5 font-mono text-xs font-bold hover:bg-[#2e3927] transition-all"
                    >
                      {status === 'sending' ? 'Sending...' : '> send me a message'} <Send size={12} />
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>

        </div>
      </OSWindow>
    </section>
  );
}
