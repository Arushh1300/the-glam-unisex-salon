"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, Calendar, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { servicesData, ServiceItem, ServiceCategory } from "@/data/services";

export default function PricingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    return [
      { id: "all", name: "All Services" },
      ...servicesData.map(cat => ({ id: cat.id, name: cat.name }))
    ];
  }, []);

  const filteredServices = useMemo(() => {
    return servicesData.map(category => {
      // If we filtered by category, and it's not "all" and doesn't match, return empty items
      if (selectedCategory !== "all" && category.id !== selectedCategory) {
        return { ...category, items: [] };
      }

      // Filter items within category by search query
      const items = category.items.filter(item => {
        const matchesName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDesc = item.description?.toLowerCase().includes(searchQuery.toLowerCase()) || false;
        return matchesName || matchesDesc;
      });

      return { ...category, items };
    }).filter(category => category.items.length > 0); // Keep category only if it has matching items
  }, [searchQuery, selectedCategory]);

  const totalFilteredCount = useMemo(() => {
    return filteredServices.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredServices]);

  const handleWhatsAppBook = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello The Glam Unisex Salon,\n\n` +
      `I am interested in:\n` +
      `Service: ${serviceName}\n\n` +
      `Please share more details regarding pricing and availability.`
    );
    window.open(`https://wa.me/919696468827?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#cba876]/30 selection:text-white pb-20 relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#cba876]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#cba876]/5 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Floating Header */}
      <header className="sticky top-0 z-40 bg-black/60 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-medium text-gray-400 hover:text-[#cba876] transition-colors">
            <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Home
          </Link>
          
          <div className="text-right">
            <span className="block text-sm font-serif tracking-widest uppercase text-white font-semibold">The <span className="italic font-light">Glam</span></span>
            <span className="block text-[7px] tracking-[0.3em] text-[#cba876] font-sans">UNISEX SALON</span>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#cba876] text-xs uppercase tracking-[0.4em] mb-4 font-medium">Bespoke Treatments</p>
          <h1 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wide mb-6">
            Our Pricing <span className="italic font-light text-gray-400">Menu</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl mx-auto leading-relaxed">
            Explore our curated selection of high-end salon treatments. From custom hair styling to luxurious body spas, find the perfect experience tailored just for you.
          </p>
        </motion.div>
      </div>

      {/* Controls: Search and Filters */}
      <div className="max-w-[1200px] mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col gap-8 bg-[#0a0a0a] border border-[#cba876]/10 p-6 md:p-8 rounded-[24px] glass-premium">
          
          {/* Search Input */}
          <div className="relative w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#cba876] opacity-60" size={18} />
            <input
              type="text"
              placeholder="Search for haircuts, facials, coloring, makeup..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-black/60 border border-[#cba876]/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#cba876] transition-all text-sm font-light shadow-inner"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white uppercase tracking-[0.1em] font-medium"
              >
                Clear
              </button>
            )}
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="w-full">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#cba876] mb-4 font-medium">Filter By Category</p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 snap-x">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`snap-start px-5 py-3 text-[10px] uppercase tracking-[0.2em] font-medium border rounded-full transition-all duration-300 shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-[#cba876] text-black border-[#cba876] shadow-[0_0_18px_rgba(203,168,118,0.3)]"
                        : "bg-transparent text-gray-400 border-white/10 hover:border-gray-500 hover:text-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Services Listing */}
      <main className="max-w-[1200px] mx-auto px-6 relative z-10">
        <AnimatePresence mode="popLayout">
          {totalFilteredCount === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-[#0a0a0a]/50"
            >
              <p className="text-gray-400 font-light text-base mb-2">No matching services found</p>
              <p className="text-xs text-gray-600 font-light">Try checking your spelling or selecting another filter category</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#cba876] border-b border-[#cba876] pb-0.5 hover:text-[#e0c194] transition-colors"
              >
                Reset Search Filters
              </button>
            </motion.div>
          ) : (
            <div className="space-y-16">
              {filteredServices.map((category) => (
                <motion.section
                  key={category.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Category Title */}
                  <div className="border-b border-[#cba876]/10 pb-4">
                    <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide uppercase">{category.name}</h2>
                    <p className="text-gray-500 font-light text-xs mt-1 max-w-2xl leading-relaxed">{category.description}</p>
                  </div>

                  {/* Category Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
                        className="group relative bg-[#0a0a0a] border border-white/5 hover:border-[#cba876]/30 p-6 md:p-8 rounded-[20px] transition-all duration-500 flex flex-col justify-between hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),_0_0_20px_rgba(203,168,118,0.03)]"
                      >
                        {/* Popular Badge */}
                        {item.isPopular && (
                          <div className="absolute top-4 right-6 bg-[#cba876]/10 border border-[#cba876]/30 text-[#cba876] text-[7px] font-sans uppercase tracking-[0.25em] py-1 px-3 rounded-full font-semibold">
                            Guest Favorite
                          </div>
                        )}

                        <div className="space-y-3 pr-20">
                          <h3 className="font-serif text-lg md:text-xl text-white tracking-wide group-hover:text-[#cba876] transition-colors">
                            {item.name}
                          </h3>
                          {item.description && (
                            <p className="text-gray-400 font-light text-xs leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>

                        <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5">
                          <div className="text-xl font-serif text-white flex items-baseline">
                            <span className="text-[#cba876] text-sm mr-1 font-sans">₹</span>
                            {item.price}
                          </div>
                          
                          <button
                            onClick={() => handleWhatsAppBook(item.name)}
                            className="bg-transparent border border-[#cba876]/40 hover:bg-[#cba876] hover:text-black hover:border-[#cba876] text-[#cba876] px-5 py-2.5 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(203,168,118,0.03)]"
                          >
                            WhatsApp Now <ArrowUpRight size={10} />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Helper Info */}
      <footer className="max-w-[1200px] mx-auto px-6 mt-24 pt-8 border-t border-white/5 text-center text-gray-500 font-light text-xs space-y-4">
        <p>Prices are subject to change based on hair length, texture, and personalized consultation upgrades.</p>
        <p className="text-[10px] text-[#cba876]/60 tracking-[0.15em] uppercase font-sans">
          The Glam Unisex Salon &copy; {new Date().getFullYear()} &bull; Professional Luxury Experience
        </p>
      </footer>
    </div>
  );
}
