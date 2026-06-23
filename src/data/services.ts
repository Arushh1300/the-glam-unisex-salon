export interface ServiceItem {
  name: string;
  price: number;
  description?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "hair-men",
    name: "Hair Essentials Men",
    description: "Tailored cuts and grooming services designed specifically for the modern man.",
    items: [
      { name: "Hair Cut (Basic)", price: 99, description: "Classic trim and simple styling by our junior artists." },
      { name: "Hair Wash (Basic)", price: 99, description: "Refreshing cleanse and condition with standard care." },
      { name: "Hair Wash (Advanced)", price: 199, description: "Deep scalp massage and premium nourishing wash." },
      { name: "Hair Cut (Advanced)", price: 199, isPopular: true, description: "Style consultation, precision cut, and blow dry styling." },
      { name: "Beard Setting", price: 149, description: "Sharp detailing, trimming, and essential beard oil application." },
      { name: "Clean Shave", price: 99, description: "Smooth traditional shave with hot towel treatment." },
      { name: "Blow Dryer", price: 99, description: "Professional volume and quick blow dry setting." },
      { name: "Highlights Basic", price: 199, description: "Top crown highlights for a subtle modern lift." },
      { name: "Highlights Advanced", price: 199, description: "Multi-tonal highlights with professional hair protection." }
    ]
  },
  {
    id: "hair-ladies",
    name: "Hair Essentials Ladies",
    description: "Premium cutting, styling, and washing designed to complement feminine aesthetics.",
    items: [
      { name: "Hair Cut Basic", price: 199, description: "Standard trim to refresh split ends and keep shape." },
      { name: "Hair Wash Basic", price: 199, description: "Cleanse, conditioning, and light rough dry." },
      { name: "Hair Wash Advanced", price: 299, description: "Deep hydration mask treatment, scalp massage, and blast dry." },
      { name: "Hair Cut Advanced", price: 299, isPopular: true, description: "Complete restyle, signature layering, and professional blow dry styling." },
      { name: "Highlights Basic", price: 249, description: "Classic face-framing streaks to illuminate features." },
      { name: "Highlights Advanced", price: 399, description: "Advanced dimensional highlights for volume and depth." }
    ]
  },
  {
    id: "hair-coloring",
    name: "Hair Coloring",
    description: "Bespoke color treatments, root touch-ups, and global transformations.",
    items: [
      { name: "Men Basic", price: 999, description: "Grey coverage or full global coloration for short hair." },
      { name: "Men Advanced", price: 1299, description: "Fashion shades and creative multi-tonal coloring." },
      { name: "Root Touchup", price: 999, description: "Precise color matching and coverage of new root growth." },
      { name: "Global Colour", price: 2499, isPopular: true, description: "Full-length deep rich global shade shift using premium colors." },
      { name: "Global Highlights", price: 2999, description: "Full-head dimensional highlights customized to your skin tone." },
      { name: "Baylas Hair Highlights", price: 3999, description: "Hand-painted balayage technique for a seamless sun-kissed blend." }
    ]
  },
  {
    id: "hair-spa",
    name: "Hair Spa & Therapy",
    description: "Nourishing, relaxing spa rituals to restore shine and hair fiber vitality.",
    items: [
      { name: "Keratin Spa", price: 2000, isPopular: true, description: "Intense smoothing and reconstructing treatment for frizzy hair." },
      { name: "Loreal Protein Spa", price: 1300, description: "Strengthening treatment to rebuild weak and brittle shafts." },
      { name: "Wella Professional Spa", price: 1199, description: "Moisture balance and color protection spa therapy." },
      { name: "Matrix Spa", price: 999, description: "Deep nourishing crème bath with customized concentrates." },
      { name: "Schwarzkopf Spa", price: 1000, description: "Fiber Clinix repair and renewal spa experience." }
    ]
  },
  {
    id: "hair-treatment",
    name: "Scalp & Hair Treatment",
    description: "Targeted clinical treatments for specialized scalp conditions and hair health.",
    items: [
      { name: "Dandruff Treatment", price: 1200, description: "Exfoliating and purifying scalp treatment to eliminate flakes." },
      { name: "Hair Fall Treatment", price: 1199, description: "Follicle stimulation therapy to reduce hair fall and strengthen roots." },
      { name: "Breakage & Strength Loss", price: 1800, description: "Intense peptide-infused bonding treatment to stop breakage." },
      { name: "Ola Plex Treatment", price: 2000, isPopular: true, description: "Patented active bond rebuilder to repair severely damaged hair." }
    ]
  },
  {
    id: "facial-treatment",
    name: "Facial Treatment",
    description: "Luxury skin care therapies, glow-boosting treatments, and advanced hydra-facials.",
    items: [
      { name: "Fruit Facial", price: 499, description: "Natural vitamins and enzymes for gentle skin refreshment." },
      { name: "Glow Facial", price: 599, description: "Instantly brightens dull skin for a radiant, picture-ready finish." },
      { name: "FYC Hydra Boost Facial", price: 1199, description: "Deep moisture infusion for parched and dry skin types." },
      { name: "Hydra Facial", price: 2999, isPopular: true, description: "Advanced multi-step vortex skin resurfacing and hydration therapy." },
      { name: "Whitening Facial", price: 2499, description: "Complexion balancing and dark spot reduction treatment." },
      { name: "Anti Aging Facial", price: 1499, description: "Collagen-rich firming treatment to reduce fine lines and wrinkles." }
    ]
  },
  {
    id: "makeup",
    name: "Makeup Artistry",
    description: "Bespoke beauty styling for parties, bridal events, and special occasions.",
    items: [
      { name: "Party Makeup", price: 1500, description: "Flawless HD makeup tailored for evening and festive events." },
      { name: "Engagement Makeup", price: 4000, description: "Sophisticated and long-lasting camera-ready styling." },
      { name: "Bridal Makeup", price: 9999, isPopular: true, description: "Ultra-premium airbrush/HD makeup with eyelash extensions, draping, and hair styling." },
      { name: "Reception Makeup", price: 8000, description: "Glamorous and luxury cocktail look with premium styling." },
      { name: "Groom Makeup", price: 2000, description: "Natural, camera-ready grooming and light touch-ups for the groom." }
    ]
  },
  {
    id: "nail-art",
    name: "Nail Art & Extensions",
    description: "Expressive nail artistry, gel polishes, and extensions from expert techicians.",
    items: [
      { name: "Gel Polish", price: 499, description: "Long-lasting high gloss gel overlay in a wide palette of shades." },
      { name: "Art with Polish", price: 799, description: "Custom hand-painted nail art combined with standard gel polish." },
      { name: "Nail Extension", price: 999, isPopular: true, description: "Full set of durable acrylic or gel tip extensions with custom shape." },
      { name: "Poly Gel Extension", price: 1000, description: "Lightweight and flexible polygel sculpting for natural-looking length." }
    ]
  },
  {
    id: "body-services",
    name: "Body Services & Spas",
    description: "Restorative massages, body polishes, and complete body wellness rituals.",
    items: [
      { name: "Full Body Massage Basic", price: 999, description: "Relaxing Swedish massage to relieve daily muscular tension." },
      { name: "Full Body Massage Advanced", price: 1400, description: "Deep tissue therapy utilizing warm aromatherapeutic luxury oils." },
      { name: "Full Body Polishing Basic", price: 1599, description: "Exfoliating scrub and hydration wrap for smooth skin tone." },
      { name: "Full Body Polishing Advanced", price: 2000, isPopular: true, description: "Premium multi-step body exfoliation, skin whitening pack, and luxury cream massage." },
      { name: "Full Body Spa Basic", price: 1499, description: "Total wellness experience with steam, massage, and hot towel packs." },
      { name: "Full Body Spa Advanced", price: 1999, description: "Royal spa treatment featuring premium mud wraps and essential oils." }
    ]
  }
];
