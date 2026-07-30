import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import OSWindow from './OSWindow';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.target;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const response = await fetch('https://formsubmit.co/ajax/naveenjosephvadakkel@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _captcha: 'false',
          _subject: `New Portfolio Message from ${name}`
        })
      });

      const resData = await response.json();
      if (response.ok || resData.success === 'true' || resData.success === true) {
        setStatus('success');
        form.reset();
      } else {
        window.open(`mailto:naveenjosephvadakkel@gmail.com?subject=Contact%20From%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`, '_blank');
        setStatus('success');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      window.open(`mailto:naveenjosephvadakkel@gmail.com?subject=Contact%20From%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(email)}`, '_blank');
      setStatus('success');
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
          
          {/* Yellow Sticky Note + Linktree QR (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fef08a] border-2 border-black hard-shadow p-6 font-sans rotate-[-1.5deg] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-amber-200/80 border border-black/40 rotate-1 opacity-90 shadow-xs"></div>
              
              <h3 className="font-serif italic text-2xl sm:text-3xl font-bold text-black leading-snug my-3">
                "Let's build something amazing together."
              </h3>
              <p className="font-mono text-right font-bold text-sm text-slate-800 mt-4">
                — NJ
              </p>
            </div>

            {/* Retro Linktree QR Code Box */}
            <a 
              href="https://linktr.ee/naveenjosephv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block border-2 border-black hard-shadow bg-white p-4 font-mono text-center space-y-3 hover:bg-slate-50 transition-colors group cursor-pointer"
              title="Click to visit Linktree"
            >
              <div className="flex items-center justify-center gap-2 border-b-2 border-black pb-2 text-xs font-bold text-black uppercase">
                <SiLinktree className="text-[#34cb4f]" size={18} />
                <span>LINKTREE QR CODE</span>
              </div>
              
              <div className="bg-[#f8f5f2] border-2 border-black p-2.5 inline-block hard-shadow-sm group-hover:border-black transition-all">
                <img 
                  src="/qr.png" 
                  alt="Naveen Joseph Linktree QR Code" 
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain mx-auto border-2 border-black bg-white p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <span className="inline-block bg-[#3f4d34] group-hover:bg-[#2e3927] text-white border border-black px-3 py-1.5 text-xs font-bold hard-shadow-sm transition-colors">
                  Click or scan to open Linktree ↗
                </span>
              </div>
            </a>
          </div>

          {/* Contact Details, Form & Status Badge (Right Column) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Info List */}
            <div className="border-2 border-black hard-shadow-sm bg-stone-50 p-4 space-y-3 font-mono text-xs sm:text-sm">
              <a 
                href="mailto:naveenjosephvadakkel@gmail.com" 
                className="flex items-center gap-3 group hover:underline text-black cursor-pointer"
                title="Send Email"
              >
                <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0 group-hover:bg-[#2e3927] transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-semibold text-black break-all group-hover:text-[#3f4d34]">
                  naveenjosephvadakkel@gmail.com
                </span>
              </a>

              <a 
                href="tel:+919895780376" 
                className="flex items-center gap-3 group hover:underline text-black cursor-pointer"
                title="Call Phone Number"
              >
                <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0 group-hover:bg-[#2e3927] transition-colors">
                  <Phone size={16} />
                </div>
                <span className="font-semibold text-black group-hover:text-[#3f4d34]">
                  +91 9895780376
                </span>
              </a>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#3f4d34] text-white border border-black shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="font-semibold text-black">Chengannur, Kerala, India</span>
              </div>
            </div>

            {/* Compact Form (No artificial tall stretching!) */}
            <div className="border-2 border-black hard-shadow bg-white p-5">
              {status === 'success' ? (
                <div className="text-center py-6 space-y-3 font-mono">
                  <CheckCircle size={36} className="text-[#3f4d34] mx-auto animate-bounce" />
                  <h4 className="font-bold text-lg text-black">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-700">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-3 py-1.5 bg-[#3f4d34] text-white border-2 border-black text-xs font-bold uppercase hover:bg-[#2e3927] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
                  <div>
                    <label className="block font-bold text-black mb-1 uppercase">NAME:</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="Enter your name" 
                      className="w-full bg-[#f8f5f2] border-2 border-black p-2 font-sans text-sm focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1 uppercase">EMAIL:</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="Enter your email address" 
                      className="w-full bg-[#f8f5f2] border-2 border-black p-2 font-sans text-sm focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-black mb-1 uppercase">MESSAGE:</label>
                    <textarea 
                      name="message" 
                      rows="3" 
                      required 
                      placeholder="Type your message here..." 
                      className="w-full bg-[#f8f5f2] border-2 border-black p-2 font-sans text-sm focus:bg-white focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex gap-1.5">
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
                      className="inline-flex items-center gap-2 bg-[#3f4d34] text-white border-2 border-black hard-shadow px-4 py-2 font-mono text-xs font-bold hover:bg-[#2e3927] transition-all cursor-pointer disabled:opacity-70"
                    >
                      {status === 'sending' ? 'Sending...' : '> send me a message'} <Send size={12} />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Status Banner */}
            <div className="border-2 border-black hard-shadow-sm bg-[#3f4d34] text-white p-3 font-mono text-xs flex items-center justify-between">
              <span className="font-bold text-yellow-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping inline-block" />
                STATUS: AVAILABLE FOR HIRE
              </span>
              <span className="text-[10px] bg-black px-2 py-0.5 border border-white/30 font-bold">2026</span>
            </div>

          </div>

        </div>

        {/* Retro OS bottom prompt indicator */}
        <div className="mt-8 pt-6 border-t-2 border-black flex justify-between items-center">
          <span className="font-mono text-xs text-slate-600 font-semibold">
            CONTACT_HANDLER: ACTIVE
          </span>
          <div className="bg-[#3f4d34] text-yellow-300 font-mono text-xs px-2.5 py-1 border border-black hard-shadow-sm font-bold">
            C:\&gt;
          </div>
        </div>
      </OSWindow>
    </section>
  );
}
