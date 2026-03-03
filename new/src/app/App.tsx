import React, { useState, useRef } from "react";
import svgPaths from "../imports/svg-wcuc713lql"; // used by HeroLogo
import imgInstrument from "../assets/a5203f8195ca1216151edf70e6b31ae2c67dbd39.png";
import imgCrowd from "../assets/aa5a45a364067f6bf69c8bc86296ae4bc63b855b.png";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { SiteHeader, SiteFooter } from "./layout";

function HeroLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-[417px] ${className}`} style={{ aspectRatio: '417/112' }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 417 112">
        <path clipRule="evenodd" d={svgPaths.p36e07ff0} fill="#1E1E1E" fillRule="evenodd" />
      </svg>
    </div>
  );
}

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "I want to join the movement. Send me emails. "
  });

  const scrollToForm = (addInviteText: boolean = false) => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
    
    if (addInviteText) {
      const inviteSuffix = " I'd also like an invitation to try UN-001, because: ";
      if (!formData.message.includes(inviteSuffix)) {
        setFormData(prev => ({
          ...prev,
          message: prev.message + inviteSuffix
        }));
      }
      // Focus the textarea after a small delay to allow scrolling
      setTimeout(() => {
        messageInputRef.current?.focus();
      }, 800);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <SiteHeader
        onClickInstruments={() => document.getElementById('instruments')?.scrollIntoView({ behavior: 'smooth' })}
        onClickJoin={() => scrollToForm(false)}
      />

      {/* Hero Section */}
      <section className="pt-52 pb-20 max-w-[1280px] mx-auto px-8 md:px-[33px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <HeroLogo className="mb-8" />
            <h1 className="text-4xl md:text-6xl lg:text-[48px] font-bold tracking-tight leading-[1.1]">
              music workflow lab
            </h1>
          </div>
          <div className="w-full md:w-[50%] aspect-3/2 rounded-2xl overflow-hidden relative shrink-0">
            <ImageWithFallback 
              src={imgCrowd} 
              alt="Crowd at a festival" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 max-w-[1280px] mx-auto px-8 md:px-[33px]">
        <h2 className="text-4xl md:text-[40px] font-medium mb-4">Vision</h2>
        <div className="border-t border-black pt-8">
          <div className="space-y-8 text-2xl md:text-[32px] leading-[1.1] tracking-tight max-w-5xl">
            <p>
              There is an unstoppable movement in electronic music:<br/> 
              music creation and live performance becoming one.
            </p>
            <p>
              Untz exists at the forefront of this movement. Our mission is to make music creation intuitive and fast enough to bring composing and performing together into a single motion—whether on a festival stage or on the couch.
            </p>
            <p>
              The instruments we design and engineer strive to collaborate with you as ideas turn into music in realtime. Together, you keep things moving, staying in the flow and in the moment.
            </p>
            <p>
              Because the real magic of music is in that moment. When a musician connects to the whispers of the universe and creates something true. The truth to magical moments: on dance floors, at concert venues, in homes.
            </p>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section id="instruments" className="py-12 max-w-[1280px] mx-auto px-8 md:px-[33px]">
        <h2 className="text-3xl md:text-[40px] font-medium mb-4">Instruments</h2>
        <div className="border-t border-black pt-8 flex flex-col gap-8 items-start">
          <div className="w-full max-w-[278px] aspect-square rounded-2xl overflow-hidden">
            <ImageWithFallback 
              src={imgInstrument} 
              alt="UN-001 Prototype" 
              className="object-cover w-full h-full scale-110"
            />
          </div>
          <div className="space-y-2 text-xl md:text-[20px] leading-[1.1] tracking-tight">
            <h3 className="font-bold">UN-001</h3>
            <p>Prototype instrument</p>
            <p>Apple iPad</p>
            <button 
              onClick={() => scrollToForm(true)}
              className="block text-xl md:text-[20px] mt-6 underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer text-left"
            >
              Request invite
            </button>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section ref={formRef} className="py-12 max-w-[1280px] mx-auto px-8 md:px-[33px] mb-32">
        <h2 className="text-3xl md:text-[40px] font-medium mb-4">Join the movement</h2>
        <div className="border-t border-black pt-8">
          <form action="https://submit-form.com/UONAOPvK" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full h-[62px] px-6 bg-[#f1f1f1] rounded-2xl text-lg  placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
            </div>
            <div className="relative">
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full h-[62px] px-6 bg-[#f1f1f1] rounded-2xl text-lg placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
              />
            </div>
            <div className="hidden md:block"></div> {/* Spacer for 3rd column alignment */}
            
            <div className="md:col-span-2 flex flex-col gap-4">
              <textarea 
                ref={messageInputRef}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                rows={4}
                className="w-full p-6 bg-[#f1f1f1] rounded-2xl text-lg placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
              />
              <button 
                type="submit"
                className="w-full h-[62px] bg-black text-white rounded-2xl text-lg font-bold hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>

  );
}
