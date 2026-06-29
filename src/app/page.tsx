"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, ChevronRight, ChevronLeft, Star, ArrowUpRight, MessageCircle,
  Clock, Navigation, Sparkles, Shield, Award, Sparkle, Heart, Flame, X
} from "lucide-react";

// Custom Instagram Icon SVG Component
const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const salonDetails = {
  name: "The Glam Unisex Salon",
  logo: "/the-glam-logo.jpeg",
  address: "MIG E 828, Barra 8, Barra World Bank, Barra, Kanpur",
  addressLines: [
    "MIG E 828, Barra 8,",
    "Barra World Bank,",
    "Barra, Kanpur - 208027",
  ],
  phone: "9696468827",
  phones: [
    { label: "+91 9696468827", href: "tel:+919696468827" },
    { label: "+91 8299788516", href: "tel:+918299788516" },
  ],
  instagramHandle: "@theglamunisexsalonkanpur",
  instagramUrl: "https://instagram.com/theglamunisexsalonkanpur",
  whatsappUrl: "https://wa.me/919696468827",
  hours: "Open Daily • 10:00 AM – 9:00 PM",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.4913251268685!2d80.26732367520448!3d26.407421881729094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47c5d4efd8c1%3A0xe54d9c7cd49df9c4!2sMIG-E-828%2C%20Barra%20World%20Bank%20Rd%2C%20Sector%20E%2C%20Barra%208%2C%20Barra%2C%20Kanpur%2C%20Uttar%20Pradesh%20208027!5e0!3m2!1sen!2sin!4v1719124000000!5m2!1sen!2sin",
};

// Signature highlight services to showcase on Homepage
const signatureServices = [
  {
    id: 1,
    name: "Precision Cuts & Blowouts",
    startingPrice: "199",
    duration: "45 mins",
    image: "/service_haircut.png",
    description: "Bespoke styling and structural cuts from our master stylists.",
    popularChips: ["Advanced Cut", "Blow Dry", "Hair Wash"]
  },
  {
    id: 2,
    name: "Luxury Beard Styling",
    startingPrice: "149",
    duration: "30 mins",
    image: "/service_beard.png",
    description: "Sharp neck lining, razor trim, and organic beard conditioning.",
    popularChips: ["Beard Setting", "Razor Trim", "Hot Towel Shave"]
  },
  {
    id: 3,
    name: "Premium Facials & Therapy",
    startingPrice: "499",
    duration: "60 mins",
    image: "/service_facial.png",
    description: "Vortex exfoliation and deep tissue nourishment for brilliant skin.",
    popularChips: ["Hydra Facial", "Glow Facial", "Skin Nourishing"]
  },
  {
    id: 4,
    name: "Nourishing Hair Spa Treatments",
    startingPrice: "999",
    duration: "60 mins",
    image: "/service_hair_spa.png",
    description: "Molecular protein repair therapies and hot-oil hair massage.",
    popularChips: ["Keratin Spa", "Loreal Protein", "Matrix Spa"]
  },
  {
    id: 5,
    name: "Bridal & Groom Makeovers",
    startingPrice: "2000",
    duration: "120 mins",
    image: "/service_bridal.png",
    description: "Ultra-HD airbrush styling for your special life milestones.",
    popularChips: ["Bridal Makeup", "Party Makeup", "Groom Styling"]
  },
  {
    id: 6,
    name: "Elite Nail Extensions & Art",
    startingPrice: "499",
    duration: "45 mins",
    image: "/service_nails.png",
    description: "Sleek poly-gel modeling and precision hand-painted graphics.",
    popularChips: ["Poly-gel Art", "Nail Extension", "Gel Polish"]
  }
];

const galleryImages = [
  { id: 1, src: "/service_haircut.png", category: "Hair Design", alt: "Modern Hair Styling", size: "tall" },
  { id: 2, src: "/client_1.png", category: "Happy Clients", alt: "Satisfied Salon Client", size: "normal" },
  { id: 3, src: "/service_facial.png", category: "Skin Care", alt: "Hydrating Facial Treatment", size: "wide" },
  { id: 4, src: "/client_2.png", category: "Men Grooming", alt: "Sharp Men Styling", size: "normal" },
  { id: 5, src: "/service_beard.png", category: "Grooming", alt: "Precision Beard Setting", size: "normal" },
  { id: 6, src: "/service_hair_spa.png", category: "Spa Therapy", alt: "Relaxing Hair Spa", size: "tall" },
  { id: 7, src: "/service_nails.png", category: "Nail Art", alt: "Chic Nail Polish Extensions", size: "normal" },
  { id: 8, src: "/transform_after.png", category: "Transformations", alt: "Styling Transformation After", size: "normal" }
];

const testimonials = [
  { 
    id: 1, 
    name: "Aisha Sharma", 
    role: "Regular Guest",
    review: "An absolute luxury! The hair spa and coloring are world-class. The attention to detail and relaxing black & gold ambiance make it Kanpur's finest destination.", 
    rating: 5,
    image: "/client_1.png" 
  },
  { 
    id: 2, 
    name: "Rohan Kapoor", 
    role: "Club Member",
    review: "The advanced haircut and beard setting are immaculate. They understand modern aesthetics and deliver crisp, tailored results with high-end tools.", 
    rating: 5,
    image: "/client_2.png" 
  }
];



export default function SalonLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeLightbox, setActiveLightbox] = useState<typeof galleryImages[0] | null>(null);

  const reelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollReels = (direction: "left" | "right") => {
    if (reelsRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      reelsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Direct WhatsApp service inquiry handler
  const handleWhatsAppInquiry = (serviceName?: string) => {
    let waText = "";
    if (serviceName) {
      waText = encodeURIComponent(
        `Hello The Glam Unisex Salon,\n\n` +
        `I am interested in:\n` +
        `Service: ${serviceName}\n\n` +
        `Please share more details regarding pricing and availability.`
      );
    } else {
      waText = encodeURIComponent(
        `Hello The Glam Unisex Salon,\n\n` +
        `I would like to inquire about your premium luxury salon services. Please share details regarding pricing and slot availability.`
      );
    }
    window.open(`https://wa.me/919696468827?text=${waText}`, "_blank");
  };

  return (
    <div className="relative w-full bg-[#050505] text-white selection:bg-[#cba876]/30 selection:text-white overflow-x-hidden">
      
      {/* Decorative radial glows */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#cba876]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[-150px] w-[600px] h-[600px] bg-[#cba876]/3 blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-150px] w-[600px] h-[600px] bg-[#cba876]/4 blur-[130px] rounded-full pointer-events-none z-0"></div>

      {/* Premium Floating Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? "bg-black/80 backdrop-blur-2xl py-4 border-b border-[#cba876]/10" : "bg-transparent py-8"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a href="#home" className="group flex items-center gap-4">
            <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#cba876]/40 bg-white transition-all duration-500 group-hover:scale-105 group-hover:border-[#cba876] shadow-[0_0_20px_rgba(203,168,118,0.15)]">
              <Image src={salonDetails.logo} alt={`${salonDetails.name} logo`} fill className="object-cover" sizes="44px" />
            </span>
            <span className="leading-none">
              <span className="block text-base md:text-xl font-serif tracking-widest uppercase text-white font-medium">
                The <span className="italic text-[#cba876] font-light">Glam</span>
              </span>
              <span className="block text-[7px] tracking-[0.38em] text-gray-500 mt-1 font-sans font-bold">UNISEX SALON</span>
            </span>
          </a>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-10 text-[9px] uppercase tracking-[0.25em] font-medium text-gray-400">
            <a href="#experience" className="hover:text-[#cba876] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#cba876] hover:after:w-full after:transition-all after:duration-300">Experience</a>
            <a href="#services" className="hover:text-[#cba876] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#cba876] hover:after:w-full after:transition-all after:duration-300">Services</a>
            <Link href="/pricing" className="hover:text-[#cba876] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#cba876] hover:after:w-full after:transition-all after:duration-300">Price List</Link>
            <a href="#gallery" className="hover:text-[#cba876] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#cba876] hover:after:w-full after:transition-all after:duration-300">Gallery</a>
            <a href="#testimonials" className="hover:text-[#cba876] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#cba876] hover:after:w-full after:transition-all after:duration-300">Testimonials</a>
            <a href="#contact-location" className="hover:text-[#cba876] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#cba876] hover:after:w-full after:transition-all after:duration-300">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleWhatsAppInquiry()}
              className="hidden sm:inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] font-semibold border-b border-[#cba876] pb-1 text-white hover:text-[#cba876] transition-colors"
            >
              WhatsApp Now
            </button>
            <a href="tel:+919696468827" className="bg-transparent border border-[#cba876]/40 hover:bg-[#cba876] hover:text-black hover:border-[#cba876] transition-all duration-300 px-4 py-2.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-semibold">
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* 1. Cinematic Hero Section */}
      <section id="home" className="relative h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-black">
        
        {/* Left Side Details & Content */}
        <div className="w-full lg:w-5/12 h-full flex flex-col justify-center px-6 md:px-16 lg:px-20 xl:px-28 relative z-20 pt-28 lg:pt-0 bg-black">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#cba876]"></span>
                <p className="text-[#cba876] text-[10px] md:text-xs uppercase tracking-[0.35em] font-medium">
                  Premium Luxury Salon
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif leading-[1] uppercase text-white tracking-wide">
                The <br />
                <span className="italic text-gray-400 font-light text-glow">Glam</span>
              </h1>
            </div>

            <p className="text-[#cba876] font-serif italic text-lg md:text-xl border-l-2 border-[#cba876]/30 pl-4 py-1 leading-relaxed">
              &quot;Unleash your true beauty with our expert touch.&quot;
            </p>

            <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed max-w-sm">
              Step into Kanpur&apos;s ultimate destination for global salon refinement. Dedicated styling, elite aesthetics, and an ambiance that whispers pure indulgence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button 
                onClick={() => handleWhatsAppInquiry()}
                className="premium-solid-btn px-8 py-4.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-center flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle size={15} /> WhatsApp Now
              </button>
              <a href="tel:+919696468827" className="premium-outline-btn px-8 py-4.5 text-[10px] uppercase tracking-[0.25em] font-semibold text-center flex items-center justify-center gap-3">
                <Phone size={15} /> Call Now
              </a>
            </div>

            {/* Quick Hero Address/Insta Footer */}
            <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-6 sm:gap-12 text-[10px] text-gray-500 font-light leading-relaxed">
              <div>
                <span className="block text-[#cba876] font-semibold uppercase tracking-[0.1em] mb-1">Location</span>
                <span>Barra 8 Main Road, Kanpur</span>
              </div>
              <div>
                <span className="block text-[#cba876] font-semibold uppercase tracking-[0.1em] mb-1">Follow Us</span>
                <a href={salonDetails.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  {salonDetails.instagramHandle}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side Parallax Visual Backdrop */}
        <div className="absolute inset-0 lg:relative lg:w-7/12 h-full">
          <div className="absolute inset-0 bg-black/60 lg:bg-black/20 z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent lg:hidden z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent hidden lg:block z-10 pointer-events-none"></div>
          
          <motion.div 
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image 
              src="/hero_salon_bg.png" 
              alt="Luxury Salon Interior Backdrop" 
              fill
              className="object-cover object-center grayscale-[10%]"
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Value & Privilege */}
      <section id="experience" className="py-28 md:py-36 px-6 bg-[#050505] relative border-b border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Details Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <p className="text-[#cba876] text-[10px] uppercase tracking-[0.3em] font-semibold">The Standard</p>
              <h2 className="text-3xl md:text-5xl font-serif leading-[1.15] text-white">
                Bespoke Luxury for <br />
                <span className="italic text-[#cba876] font-light">Every Identity</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 font-light text-sm leading-relaxed max-w-lg">
              <p>
                At The Glam Unisex Salon, we curate sensory styling journeys. We believe grooming is a high art form, which is why we blend professional international techniques with premium formulas to define your personal aesthetic.
              </p>
              <p>
                Step into a masterfully designed sanitary space with custom gold paneling, private washing suites, and an experienced panel of styling specialists who listen and create.
              </p>
            </div>
            
            {/* Elegant Brand Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/5">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#cba876] font-semibold block">Artisanal Cut & Colour</span>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">Precision styles customized to your facial structure and hair textures.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#cba876] font-semibold block">Elite Hair Spa Therapy</span>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">Deep molecular fiber reconstruction for permanent shine and vitality.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#cba876] font-semibold block">Advanced Aesthetics</span>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">Vortex dermis renewal, clarifying hydration, and advanced skincare.</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#cba876] font-semibold block">Signature Bridal Makeovers</span>
                <p className="text-[11px] text-gray-400 font-light leading-relaxed">Luxury HD airbrush formulations curated for milestone occasions.</p>
              </div>
            </div>
          </div>
          
          {/* Aesthetic Image Frame */}
          <div className="lg:w-1/2 relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] group rounded-2xl overflow-hidden border border-[#cba876]/15">
            <div className="absolute inset-0 bg-[#cba876]/5 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
            <Image 
              src="/service_bridal.png" 
              alt="Premium Styling Experience at The Glam" 
              fill 
              className="object-cover grayscale-[20%] opacity-90 transition-transform duration-1000 group-hover:scale-103"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-white/5 m-4 pointer-events-none z-20"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass backdrop-blur-md border border-white/5 text-center">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#cba876] font-semibold">Bridal & Makeovers Suite</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Before/After Transformation Slider */}
      <section className="py-28 md:py-36 bg-[#0a0a0a] border-b border-white/5 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[#cba876] text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">Styling Artistry</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Before & After <span className="italic text-gray-400 font-light">Reveal</span></h2>
            </div>
            <p className="text-gray-400 font-light text-xs md:text-sm max-w-xs md:text-right leading-relaxed">
              Drag the golden central divider slider to witness the high-impact coloring and styling results created by our specialists.
            </p>
          </div>
          
          <div className="relative w-full aspect-[4/5] md:aspect-[21/9] overflow-hidden rounded-3xl border border-[#cba876]/15 group">
            <Image src="/transform_after.png" alt="Transformation Hair Setting After" fill className="object-cover grayscale-[5%]" sizes="100vw" />
            
            <div 
              className="absolute top-0 left-0 bottom-0 overflow-hidden" 
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-[100vw] h-full">
                <Image src="/transform_before.png" alt="Transformation Hair Setting Before" fill className="object-cover grayscale-[10%]" sizes="100vw" />
              </div>
            </div>
            
            <input 
              type="range" min="0" max="100" value={sliderPosition} 
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize z-20 w-full"
            />
            
            {/* Custom Interactive Divider */}
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-[#cba876] pointer-events-none z-10 shadow-[0_0_15px_#cba876]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-black border border-[#cba876] rounded-full flex items-center justify-center text-white backdrop-blur-md shadow-[0_0_15px_rgba(203,168,118,0.3)]">
                <ChevronLeft size={14} className="text-[#cba876] opacity-80" />
                <ChevronRight size={14} className="text-[#cba876] opacity-80" />
              </div>
            </div>

            <div className="absolute top-6 left-6 bg-black/75 border border-white/5 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-gray-300 rounded-full z-10 pointer-events-none font-semibold">Before Treatment</div>
            <div className="absolute top-6 right-6 bg-[#cba876]/95 text-black px-4 py-2 text-[8px] uppercase tracking-[0.25em] z-10 pointer-events-none font-bold rounded-full">After Reveal</div>
          </div>
        </div>
      </section>

      {/* 4. Signature Services Highlights Grid */}
      <section id="services" className="py-28 md:py-36 px-6 bg-[#050505] relative">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center mb-20 space-y-4">
            <p className="text-[#cba876] text-[10px] uppercase tracking-[0.35em] font-semibold">Curated Collections</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white tracking-wide uppercase">Signature Services</h2>
            <div className="h-[1px] w-24 bg-[#cba876]/20 mx-auto"></div>
          </div>
          
          {/* Services Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {signatureServices.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-[28px] border border-white/5 hover:border-[#cba876]/30 bg-[#0a0a0a] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.7),_0_0_30px_rgba(203,168,118,0.08)]"
              >
                {/* Large Service Image (16:9 ratio) */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-black/40">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[15%] opacity-85 group-hover:opacity-100" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-grow p-6 md:p-8 space-y-5 justify-between">
                  <div className="space-y-4">
                    {/* Service Name */}
                    <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide group-hover:text-[#cba876] transition-colors leading-tight">
                      {service.name}
                    </h3>
                    
                    {/* Short 1-Line Description */}
                    <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed line-clamp-1">
                      {service.description}
                    </p>

                    {/* Price and Duration Details Row */}
                    <div className="flex items-center justify-between pt-1 gap-2">
                      <div className="space-y-0.5">
                        <span className="block text-[8px] md:text-[9px] uppercase tracking-wider text-gray-500 font-medium">Starting From</span>
                        <span className="text-xl md:text-2xl font-bold font-serif text-[#cba876] tracking-wide">
                          ₹{service.startingPrice}
                        </span>
                      </div>
                      {service.duration && (
                        <div className="flex items-center gap-1.5 text-gray-400 text-[10px] md:text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full shrink-0">
                          <Clock size={12} className="text-[#cba876]" />
                          <span>{service.duration}</span>
                        </div>
                      )}
                    </div>

                    {/* Popular Chips Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.popularChips.map((chip, idx) => (
                        <span 
                          key={idx} 
                          className="text-[9px] md:text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-gray-300 px-2.5 py-1 rounded-full font-medium"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Book on WhatsApp Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => handleWhatsAppInquiry(service.name)}
                      className="w-full premium-solid-btn py-3.5 text-[10px] uppercase tracking-[0.25em] font-bold flex items-center justify-center gap-2 rounded-xl cursor-pointer"
                    >
                      <MessageCircle size={14} className="shrink-0" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium Complete Price List Section */}
          <div className="mt-24 max-w-4xl mx-auto text-center px-6">
            <div className="bg-gradient-to-b from-[#0a0a0a] to-[#030303] border border-[#cba876]/20 p-8 md:p-12 rounded-[32px] shadow-2xl relative overflow-hidden group">
              {/* Subtle background glows */}
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#cba876]/5 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#cba876]/5 blur-[80px] rounded-full pointer-events-none"></div>
              <div className="absolute -inset-px rounded-[32px] bg-gradient-to-b from-[#cba876]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cba876]/10 border border-[#cba876]/20 mx-auto">
                  <Sparkles size={12} className="text-[#cba876]" />
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#cba876] font-semibold">Treatment Catalogue</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-white tracking-wide uppercase">
                  Complete Price List
                </h3>
                
                <p className="text-gray-400 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                  Browse our comprehensive, interactive pricing menu featuring over 50+ bespoke luxury grooming and therapeutic treatments tailored to your precise styling needs.
                </p>

                <div className="pt-4">
                  <Link 
                    href="/pricing"
                    className="inline-flex items-center gap-3 bg-[#cba876] hover:bg-[#e0c194] text-black font-semibold text-xs md:text-sm uppercase tracking-[0.25em] px-10 py-5 rounded-full shadow-[0_10px_25px_rgba(203,168,118,0.2)] hover:shadow-[0_15px_35px_rgba(203,168,118,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>View Full Price List</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Masonry Gallery with Lightbox */}
      <section id="gallery" className="py-28 md:py-36 bg-[#0a0a0a] border-y border-white/5 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-[#cba876] text-[10px] uppercase tracking-[0.35em] font-semibold mb-3">Visual Diary</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">The Glam <span className="italic text-gray-400 font-light">Gallery</span></h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-light">Click images to zoom in</span>
              <div className="hidden sm:flex gap-2">
                <button onClick={() => scrollReels("left")} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#cba876] hover:text-black transition-colors">
                  <ChevronLeft size={14} />
                </button>
                <button onClick={() => scrollReels("right")} className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#cba876] hover:text-black transition-colors">
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Masonry Layout Grid */}
          <div className="masonry-grid min-h-[600px] mb-12">
            {galleryImages.map((image) => {
              let gridClass = "relative overflow-hidden rounded-2xl border border-white/5 cursor-zoom-in group bg-black/60";
              if (image.size === "tall") gridClass += " masonry-item-tall";
              if (image.size === "wide") gridClass += " masonry-item-wide";
              
              return (
                <div 
                  key={image.id}
                  onClick={() => setActiveLightbox(image)}
                  className={gridClass}
                >
                  <Image 
                    src={image.src} 
                    alt={image.alt} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-103 grayscale-[10%] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-400"></div>
                  
                  {/* Subtle info on hover */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-10">
                    <span className="text-[7px] uppercase tracking-[0.25em] text-[#cba876] font-semibold">{image.category}</span>
                    <h4 className="text-sm font-serif text-white tracking-wide mt-1">{image.alt}</h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Horizontal scrollable reels for mobile/tablet */}
          <div className="mt-8 border-t border-white/5 pt-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#cba876] mb-6 font-semibold">Featured Looks</p>
            <div 
              ref={reelsRef}
              className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-4"
            >
              {galleryImages.map((img) => (
                <div 
                  key={`reel-${img.id}`} 
                  onClick={() => setActiveLightbox(img)}
                  className="relative min-w-[240px] md:min-w-[280px] aspect-[9/16] snap-start rounded-2xl overflow-hidden cursor-pointer group border border-white/5"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-103 grayscale-[10%]" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-3 bg-black/60 rounded-full border border-[#cba876]/40 text-[#cba876]">
                      <Instagram size={18} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <a
                href={salonDetails.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 border border-[#cba876]/20 bg-black/40 px-6 py-3.5 rounded-xl text-[#cba876] transition-all duration-500 hover:border-[#cba876]/60 hover:bg-[#cba876]/5"
              >
                <Instagram size={16} />
                <span className="text-[9px] uppercase tracking-[0.25em] text-white">
                  Follow {salonDetails.instagramHandle}
                </span>
                <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <span className="text-[8px] text-gray-600 uppercase tracking-widest font-sans font-semibold">Instagram Diary</span>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeLightbox && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            >
              <button 
                onClick={() => setActiveLightbox(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:text-[#cba876] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96 }}
                className="relative max-w-[850px] w-full max-h-[85vh] aspect-[4/5] md:aspect-[3/2] overflow-hidden rounded-2xl border border-[#cba876]/20 shadow-[0_0_50px_rgba(203,168,118,0.2)] bg-black"
              >
                <Image 
                  src={activeLightbox.src} 
                  alt={activeLightbox.alt} 
                  fill 
                  className="object-contain" 
                  sizes="(max-width: 1024px) 100vw, 850px"
                />
                
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col md:flex-row justify-between md:items-end gap-3 pointer-events-none">
                  <div>
                    <span className="text-[8px] uppercase tracking-[0.25em] text-[#cba876] font-semibold">{activeLightbox.category}</span>
                    <h3 className="text-lg font-serif text-white tracking-wide mt-1">{activeLightbox.alt}</h3>
                  </div>
                  <span className="text-[8px] uppercase tracking-[0.15em] text-gray-500 font-sans">{salonDetails.name}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 6. Testimonials Section */}
      <section id="testimonials" className="py-28 md:py-36 px-6 bg-[#050505] relative">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <p className="text-[#cba876] text-[10px] uppercase tracking-[0.35em] font-semibold mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-20 text-white">Voices of Elegance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                className="p-10 md:p-12 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:border-[#cba876]/20 transition-all duration-500 relative group flex flex-col justify-between"
              >
                <div className="absolute top-0 right-10 text-[6rem] font-serif text-[#cba876]/5 pointer-events-none group-hover:text-[#cba876]/10 transition-colors">&ldquo;</div>
                
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={11} fill="#cba876" stroke="none" />
                    ))}
                  </div>
                  <p className="text-gray-300 font-serif italic text-base md:text-lg leading-relaxed font-light">
                    &quot;{t.review}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-5 mt-10 pt-6 border-t border-white/5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#cba876]/20 grayscale">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[10px] uppercase tracking-[0.2em] text-white">{t.name}</h5>
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest block mt-1 font-sans">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 8. Booking Form (REPLACED WITH BRAND SHOWCASE), Contacts & Google Maps */}
      <section id="contact-location" className="relative overflow-hidden bg-[#030303] px-6 py-28 border-t border-white/5">
        
        {/* Decorative Grid Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#cba876]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 h-72 w-full bg-[radial-gradient(circle_at_20%_80%,rgba(203,168,118,0.05),transparent_40%)] pointer-events-none"></div>

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[1.1fr_1fr] xl:gap-24 items-start">
          
          {/* Left Side: Brand Benefits Showcase */}
          <div className="bg-[#0a0a0a]/90 p-8 md:p-12 rounded-[32px] border border-[#cba876]/15 shadow-2xl glass-premium space-y-8">
            <div className="space-y-2">
              <span className="text-[8px] uppercase tracking-[0.3em] text-[#cba876] font-bold">Why The Glam?</span>
              <h2 className="text-2xl md:text-4xl font-serif text-white tracking-wide uppercase">The Luxury Experience</h2>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                We believe that grooming is an expression of luxury, hygiene, and design. Step in to enjoy a standard of service built for the discerning individual.
              </p>
            </div>

            {/* Premium Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:border-[#cba876]/30 transition-all duration-300">
                <span className="p-3 bg-[#cba876]/10 rounded-xl text-[#cba876] shrink-0">
                  <Award size={18} />
                </span>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-white tracking-wide">Certified Masters</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">Our styling directors hold international training credentials.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:border-[#cba876]/30 transition-all duration-300">
                <span className="p-3 bg-[#cba876]/10 rounded-xl text-[#cba876] shrink-0">
                  <Shield size={18} />
                </span>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-white tracking-wide">100% Hygienic</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">Surgical-grade sterilization protocols for all tools.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:border-[#cba876]/30 transition-all duration-300">
                <span className="p-3 bg-[#cba876]/10 rounded-xl text-[#cba876] shrink-0">
                  <Sparkles size={18} />
                </span>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-white tracking-wide">Premium Products</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">Authorized partners of L&apos;Oréal, Wella, and Matrix treatments.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5 flex gap-4 items-start group hover:border-[#cba876]/30 transition-all duration-300">
                <span className="p-3 bg-[#cba876]/10 rounded-xl text-[#cba876] shrink-0">
                  <Sparkle size={18} />
                </span>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-white tracking-wide">Personal Care</h4>
                  <p className="text-[11px] text-gray-400 font-light leading-relaxed">Consultative approach tailored around your unique hair & skin type.</p>
                </div>
              </div>

            </div>

            {/* Call To Action Buttons */}
            <div className="pt-6 border-t border-white/5 space-y-4">
              <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#cba876] font-semibold">Connect With Our Desk</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleWhatsAppInquiry()}
                  className="premium-solid-btn w-full py-4 text-[10px] uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-3 cursor-pointer"
                >
                  <MessageCircle size={15} /> WhatsApp Now
                </button>
                <a 
                  href="tel:+919696468827"
                  className="premium-outline-btn w-full py-4 text-[10px] uppercase tracking-[0.3em] font-semibold flex items-center justify-center gap-3 text-center"
                >
                  <Phone size={15} /> Call Now
                </a>
              </div>
            </div>

          </div>

          {/* Right Side: Google Maps & Contacts Card */}
          <div className="space-y-12">
            
            {/* Salon Details Block */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[#cba876] text-[10px] uppercase tracking-[0.3em] font-semibold block">Contact Details</span>
                <h3 className="text-3xl font-serif text-white uppercase tracking-wide">Get in Touch</h3>
              </div>
              
              <p className="text-gray-400 font-light text-sm leading-relaxed max-w-md">
                We are situated at a premium locality in Barra 8, Kanpur. Come experience luxury grooming or call our desk directly for inquiries.
              </p>

              <div className="space-y-6 border-l border-[#cba876]/20 pl-6">
                
                {/* Address block */}
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#cba876] font-bold flex items-center gap-2">
                    <MapPin size={13} /> Location Address
                  </span>
                  <address className="not-italic text-sm text-gray-300 leading-relaxed font-light">
                    {salonDetails.address}
                  </address>
                </div>

                {/* Hours block */}
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#cba876] font-bold flex items-center gap-2">
                    <Clock size={13} /> Operational Hours
                  </span>
                  <div className="text-sm text-gray-300 font-light">
                    {salonDetails.hours}
                  </div>
                </div>

                {/* Phones */}
                <div className="space-y-2">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#cba876] font-bold flex items-center gap-2">
                    <Phone size={13} /> Telephone Desk
                  </span>
                  <div className="flex flex-col gap-1 text-sm font-light">
                    {salonDetails.phones.map((phone) => (
                      <a key={phone.href} href={phone.href} className="w-fit text-gray-300 hover:text-[#cba876] transition-colors">
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Box Frame */}
            <div className="space-y-4">
              <div className="flex justify-between items-end text-[9px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
                <span>Google Maps View</span>
                <span>Barra World Bank Rd</span>
              </div>
              
              <div className="relative rounded-[28px] overflow-hidden border border-[#cba876]/15 bg-black/60 aspect-[4/3] w-full shadow-2xl group">
                <iframe
                  src={salonDetails.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Glam Unisex Salon detailed directions map"
                  className="w-full h-full grayscale invert-[0.9] contrast-[1.1] brightness-[0.8] transition-all duration-700 group-hover:scale-[1.01]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/5"></div>
                <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/5 bg-black/80 px-4 py-2 text-[8px] uppercase tracking-[0.2em] text-gray-400 backdrop-blur-md">
                  <Navigation size={10} className="text-[#cba876]" /> Directions Enabled
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Branding Area */}
      <footer className="bg-[#020202] px-6 py-16 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_0.8fr] gap-12 pb-12 border-b border-white/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative h-12 w-12 overflow-hidden rounded-full border border-[#cba876]/30 bg-white">
                  <Image src={salonDetails.logo} alt={`${salonDetails.name} logo`} fill className="object-cover" sizes="48px" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-white tracking-wide">{salonDetails.name}</h3>
                  <span className="block text-[7px] tracking-[0.3em] text-[#cba876] font-bold">PREMIUM LUXURY SALON</span>
                </div>
              </div>
              <p className="max-w-xs text-xs font-light leading-relaxed text-gray-500">
                Experience high-end unisex hair styling, professional aesthetics, and customized spa therapies in Kanpur&apos;s ultimate salon environment.
              </p>
            </div>

            <div className="space-y-4 text-xs font-light text-gray-400">
              <span className="text-[#cba876] text-[9px] uppercase tracking-[0.2em] font-semibold block">Salon Location</span>
              <address className="not-italic leading-relaxed">
                MIG E 828, Barra 8,<br />
                Barra World Bank, Barra,<br />
                Kanpur, Uttar Pradesh - 208027
              </address>
              <div className="pt-2 text-[9px] uppercase tracking-[0.2em]">
                {salonDetails.hours}
              </div>
            </div>

            <div className="space-y-4 text-xs font-light text-gray-400 md:text-right">
              <span className="text-[#cba876] text-[9px] uppercase tracking-[0.2em] font-semibold block md:text-right">Contact Desk</span>
              <div className="flex flex-col gap-1.5 md:items-end">
                {salonDetails.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="hover:text-[#cba876] transition-colors">{phone.label}</a>
                ))}
              </div>
              
              <div className="pt-4 flex gap-6 text-[8px] uppercase tracking-[0.25em] md:justify-end">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <Link href="/pricing" className="hover:text-white transition-colors">Price List</Link>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-gray-600">
            <p>&copy; {new Date().getFullYear()} {salonDetails.name}. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href={salonDetails.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[#cba876] transition-colors">Instagram</a>
              <span>&bull;</span>
              <a href={salonDetails.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-[#cba876] transition-colors">WhatsApp Concierge</a>
            </div>
          </div>

        </div>
      </footer>


      {/* Mobile Sticky CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-black/85 backdrop-blur-lg border-t border-[#cba876]/15 py-3.5 px-6 flex items-center justify-between z-30 lg:hidden">
        <div>
          <span className="block text-[7px] uppercase tracking-[0.25em] text-[#cba876] font-semibold">Concierge Desk</span>
          <span className="block text-xs font-serif text-white font-medium">Unleash Your Beauty</span>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => handleWhatsAppInquiry()}
            className="bg-[#25D366] text-white px-4 py-2 rounded-xl text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-1.5 cursor-pointer shadow-[0_0_10px_rgba(37,211,102,0.3)]"
          >
            <MessageCircle size={11} /> WhatsApp
          </button>
          <a 
            href="tel:+919696468827" 
            className="bg-[#cba876] text-black px-4 py-2 rounded-xl text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-1.5"
          >
            <Phone size={11} /> Call Now
          </a>
        </div>
      </div>

    </div>
  );
}
