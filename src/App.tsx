import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "motion/react";
import {
  MapPin,
  Clock,
  Phone,
  Star,
  ParkingCircle,
  Zap,
  Bath,
  Coffee,
  Users,
  Briefcase,
  Bed,
  UtensilsCrossed,
  ChevronRight,
  ChevronDown,
  X,
  Menu as MenuIcon,
  Sparkles,
  ChefHat,
  Flame,
  FlameKindling,
  Drumstick,
  Soup,
  Truck,
  Car
} from "lucide-react";
import React, { useState } from "react";



const RoadDivider = () => {
  return (
    <div className="h-12 bg-dhaba-dark relative overflow-hidden flex items-center shadow-xl">
      {/* Edge lines */}
      <div className="absolute top-0 w-full h-[1px] bg-white/10" />
      <div className="absolute bottom-0 w-full h-[1px] bg-white/10" />

      {/* Center dash lines */}
      <div className="w-full flex justify-center gap-10 md:gap-14 items-center px-4 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="w-12 md:w-16 h-1 bg-dhaba-mustard/90 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.4)] flex-shrink-0"
          />
        ))}
      </div>

      {/* Moving Vehicles */}
      <motion.div
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 0 }}
        className="absolute z-10 text-dhaba-mustard/30"
      >
        <Truck size={24} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 5 }}
        className="absolute z-10 text-white/20"
      >
        <Car size={20} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ x: ["-100%", "100vw"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 10 }}
        className="absolute z-10 text-dhaba-mustard/20"
      >
        <Car size={20} fill="currentColor" />
      </motion.div>

      {/* Road grain effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:4px_4px]" />
    </div>
  );
};

const ReviewsMarquee = () => {
  const reviewsRow1 = [
    { text: "Best stop on NH-1! Cleanest bathrooms ever.", author: "Rahul Sharma" },
    { text: "Loved the Blue Tokai coffee! A true luxury stop.", author: "Priya Singh" },
    { text: "Super fast EV charging. Very convenient!", author: "Amit Verma" },
    { text: "Ample parking and great security. Safe for family.", author: "Sonia G." },
  ];

  const reviewsRow2 = [
    { text: "The lounge facilities are world-class. Worth every penny.", author: "Vikram R." },
    { text: "Authentic Naivedyam taste right on the highway!", author: "Anjali K." },
    { text: "Professional staff and premium atmosphere.", author: "Deepak S." },
    { text: "Best place for a break between Delhi and Chandigarh.", author: "Karan P." },
  ];

  const ReviewItem: React.FC<{ text: string; author: string }> = ({ text, author }) => (
    <div className="flex items-center gap-4 bg-white/[0.08] md:bg-white/5 md:backdrop-blur-sm px-6 py-4 rounded-3xl border border-white/10 shadow-2xl transition-all">
      <div className="flex gap-0.5 text-dhaba-mustard">
        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <div>
        <p className="text-white font-sans text-sm md:text-base font-medium">"{text}"</p>
        <span className="text-white/60 md:text-white/40 text-[10px] uppercase tracking-[0.2em] font-display mt-1 block">— {author}</span>
      </div>
    </div>
  );

  return (
    <section className="relative py-24 md:py-32 overflow-visible">
      {/* Tilted Top Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundColor: "#a41c1c",
          clipPath: "polygon(0 4rem, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-4rem"
        }}
      />
      
      <div className="relative z-10 pt-4 md:pt-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mb-20 text-center">
        <span className="font-serif italic text-dhaba-mustard text-2xl mb-4 block">Experiences That Speak for Themselves</span>
        <h2 className="font-display text-xl md:text-2xl text-white/80 tracking-tight leading-snug max-w-2xl mx-auto uppercase">
          Discover why travelers choose us for comfort, convenience, and a <span className="text-dhaba-mustard">refined stopover.</span>
        </h2>
        <div className="w-20 h-1 bg-dhaba-mustard/30 mx-auto mt-8 rounded-full" />
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] pointer-events-none" />

      <div className="flex flex-col gap-10 pointer-events-none">
        {/* Row 1 */}
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[...reviewsRow1, ...reviewsRow1, ...reviewsRow1].map((r, i) => (
              <ReviewItem key={i} text={r.text} author={r.author} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="relative">
          <motion.div
            animate={{ x: [-1920, 0] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-10"
          >
            {[...reviewsRow2, ...reviewsRow2, ...reviewsRow2].map((r, i) => (
              <ReviewItem key={i} text={r.text} author={r.author} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Side gradients to fade out reviews */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-48 bg-gradient-to-r from-dhaba-red via-dhaba-red/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-48 bg-gradient-to-l from-dhaba-red via-dhaba-red/80 to-transparent z-10" />
      </div>
    </section>
  );
};

const fbBrands = [
  "Chokhi Dhani",
  "Three Sixty Lux",
  "Uttham",
  "Chaayos",
  "Naivedyam",
  "Blue Tokai Coffee",
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRetailOpen, setMobileRetailOpen] = useState(false);
  const [mobileFbOpen, setMobileFbOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-dhaba-dark border-b-4 border-dhaba-mustard shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img src="/hh-logo.png" alt="Highway Haven Logo" className="h-16 w-auto object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8 font-sans font-bold text-sm tracking-widest">
            <a href="#groups" className="hover:text-dhaba-red transition-colors">Group bookings</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-dhaba-red transition-colors">
                F&B <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white border-2 border-dhaba-dark/10 rounded-2xl shadow-2xl p-3 w-64 flex flex-col gap-0.5 overflow-hidden backdrop-blur-sm">
                  {fbBrands.map((brand, i) => (
                    <a
                      key={brand}
                      href="#brands"
                      className="px-4 py-2.5 hover:bg-dhaba-mustard/20 hover:pl-6 rounded-xl transition-all duration-200 text-xs font-bold tracking-widest text-dhaba-dark/70 hover:text-dhaba-red border-b border-dhaba-dark/5 last:border-0"
                      style={{ animationDelay: `${i * 40}ms` }}
                    >
                      {brand}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-dhaba-red transition-colors">
                Retail <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white border-2 border-dhaba-dark/10 rounded-2xl shadow-2xl p-3 w-56 flex flex-col gap-0.5 overflow-hidden">
                  <a href="#brands" className="px-4 py-2.5 hover:bg-dhaba-mustard/20 hover:pl-6 rounded-xl transition-all duration-200 text-xs font-bold tracking-widest text-dhaba-dark/70 hover:text-dhaba-red">Leather 360</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-dhaba-red transition-colors">
                Services <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white border-2 border-dhaba-dark/10 rounded-2xl shadow-2xl p-3 w-56 flex flex-col gap-0.5 overflow-hidden">
                  <a href="#highlights" className="px-4 py-2.5 hover:bg-dhaba-mustard/20 hover:pl-6 rounded-xl transition-all duration-200 text-xs font-bold tracking-widest text-dhaba-dark/70 hover:text-dhaba-red border-b border-dhaba-dark/5">Ev charging</a>
                  <a href="#brands" className="px-4 py-2.5 hover:bg-dhaba-mustard/20 hover:pl-6 rounded-xl transition-all duration-200 text-xs font-bold tracking-widest text-dhaba-dark/70 hover:text-dhaba-red">Guardian pharmacy</a>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dhaba-mustard text-dhaba-dark px-6 py-2 rounded-full font-display hover:bg-dhaba-red hover:text-white transition-all border-2 border-dhaba-dark shadow-md flex items-center justify-center"
            >
              Get directions
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <MenuIcon size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t-4 border-dhaba-mustard p-4 flex flex-col gap-4 font-display text-xl text-center shadow-xl"
        >
          <a href="#groups" className="text-dhaba-dark hover:text-dhaba-red" onClick={() => setIsOpen(false)}>Group bookings</a>
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={() => setMobileFbOpen(!mobileFbOpen)}
              className="flex items-center gap-2 text-dhaba-dark hover:text-dhaba-red"
            >
              F&B <ChevronDown size={20} className={mobileFbOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            <AnimatePresence>
              {mobileFbOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col gap-3 bg-dhaba-cream/30 p-4 rounded-2xl w-full overflow-hidden"
                >
                  {fbBrands.map((brand) => (
                    <a key={brand} href="#brands" className="text-base font-bold text-dhaba-dark/70 hover:text-dhaba-red" onClick={() => setIsOpen(false)}>{brand}</a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={() => setMobileRetailOpen(!mobileRetailOpen)}
              className="flex items-center gap-2 text-dhaba-dark hover:text-dhaba-red"
            >
              Retail <ChevronDown size={20} className={mobileRetailOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            <AnimatePresence>
              {mobileRetailOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="flex flex-col gap-3 bg-dhaba-cream/30 p-4 rounded-2xl w-full overflow-hidden"
                >
                  <a href="#brands" className="text-base font-bold text-dhaba-dark/70 hover:text-dhaba-red" onClick={() => setIsOpen(false)}>Leather 360</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-2 text-dhaba-dark hover:text-dhaba-red"
            >
              Services <ChevronDown size={20} className={mobileServicesOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="flex flex-col gap-3 bg-dhaba-cream/30 p-4 rounded-2xl w-full overflow-hidden"
                >
                  <a href="#highlights" className="text-base font-bold text-dhaba-dark/70 hover:text-dhaba-red" onClick={() => setIsOpen(false)}>Ev charging</a>
                  <a href="#brands" className="text-base font-bold text-dhaba-dark/70 hover:text-dhaba-red" onClick={() => setIsOpen(false)}>Guardian pharmacy</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dhaba-mustard text-dhaba-dark px-6 py-3 rounded-xl border-2 border-dhaba-dark hover:bg-dhaba-red hover:text-white transition-all shadow-md flex items-center justify-center"
          >
            Get directions
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const slides = [
    "/hero-bg.webp",
    "/banner-2.jpeg",
    "/banner-3.jpeg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slider with Overlay */}
      <div className="absolute inset-0 z-0 bg-dhaba-dark">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-dhaba-dark/95 via-dhaba-dark/70 to-dhaba-dark/30 z-1"></div>
        <div className="absolute inset-0 bg-black/40 z-1"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1400px]"
        >
          <div className="inline-flex items-center gap-2 bg-dhaba-red text-white px-4 py-1 rounded-full font-display text-sm mb-6 border-2 border-dhaba-mustard shadow-lg uppercase tracking-wider">
            <Zap size={16} className="text-dhaba-mustard fill-dhaba-mustard" /> Fast EV Charging Available
          </div>
          <h1 className="font-display text-6xl md:text-8xl text-white leading-none mb-6 tracking-tighter">
            THE ULTIMATE <span className="text-dhaba-mustard font-serif italic">HIGHWAY</span> PITSTOP
          </h1>
          <p className="font-sans text-xl text-dhaba-cream/90 mb-10 max-w-xl leading-relaxed">
            Forget dusty stops. Welcome to a sanctuary of comfort, premium brands, and world-class amenities right on NH-1.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-dhaba-mustard text-dhaba-dark px-8 py-4 rounded-xl font-display text-xl border-2 border-dhaba-dark hover:scale-105 transition-all flex items-center gap-2 group shadow-xl">
              EXPLORE AMENITIES <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3 text-dhaba-mustard">
              <div className="bg-dhaba-red p-2 rounded-lg border border-dhaba-mustard">
                <ParkingCircle size={24} />
              </div>
              <span className="font-display text-white text-lg">Ample Parking</span>
            </div>
            <div className="flex items-center gap-3 text-dhaba-mustard">
              <div className="bg-dhaba-red p-2 rounded-lg border border-dhaba-mustard">
                <Bath size={24} />
              </div>
              <span className="font-display text-white text-lg">Pristine Bathrooms</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 hidden lg:block"
      >
        <div className="bg-dhaba-red p-8 rounded-full shadow-2xl shadow-dhaba-red/20 transform rotate-6">
          <p className="font-display text-dhaba-mustard text-center text-3xl leading-tight">OPEN<br />24/7</p>
        </div>
      </motion.div>
    </section>
  );
};

const Highlights = () => {
  const highlights = [
    {
      title: "Ample Parking",
      icon: <ParkingCircle size={48} />,
      desc: "Large, secure parking area designed for cars, buses, and modern travelers. 24/7 surveillance for your peace of mind.",
      img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "EV Charging",
      icon: <Zap size={48} />,
      desc: "Ultra-fast DC charging stations for all electric vehicles. Recharge your car while you recharge yourself.",
      img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Pristine Bathrooms",
      icon: <Bath size={48} />,
      desc: "Exceptionally clean, hotel-quality washrooms designed for maximum comfort during your journey.",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="highlights" className="py-24 bg-dhaba-mustard relative overflow-hidden">
      <div className="dhaba-pattern absolute inset-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="font-serif italic text-dhaba-red text-2xl">Why Stop Here?</span>
          <h2 className="font-display text-5xl md:text-7xl text-dhaba-dark mt-2 tracking-tight uppercase">WORLD CLASS COMFORT & AMENITIES</h2>
          <div className="w-32 h-1.5 bg-dhaba-red mx-auto mt-6 rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden border-4 border-dhaba-red shadow-2xl group relative"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-dhaba-red/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute top-36 left-8 bg-dhaba-red p-4 rounded-2xl border-2 border-dhaba-dark shadow-lg text-white z-10 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="p-8 pt-10">
                <h3 className="font-display text-2xl mb-3 text-dhaba-red uppercase tracking-tight">{item.title}</h3>
                <p className="text-dhaba-dark/80 text-sm md:text-base font-sans leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LoungeSection = () => {
  const facilities = [
    { name: "Gourmet Buffet", icon: <UtensilsCrossed />, desc: "Breakfast, Lunch & Dinner" },
    { name: "Wash & Change", icon: <Bath />, desc: "Fresh up for the journey" },
    { name: "Nap Facility", icon: <Bed />, desc: "Quick rest in luxury" },
    { name: "Business Center", icon: <Briefcase />, desc: "Work on the go" },
    { name: "Private Dining", icon: <ChefHat />, desc: "Exclusive meal space" }
  ];

  return (
    <section id="lounge" className="py-24 bg-gradient-to-br from-[#B91C1C] via-dhaba-red to-[#991B1B] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <Sparkles size={200} />
      </div>
      <div className="absolute inset-0 opacity-10 dhaba-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 tracking-tight leading-[1.1] text-white">
              <span className="block lg:whitespace-nowrap uppercase">FIRST HIGHWAY PITSTOP</span>
              <span className="block lg:whitespace-nowrap uppercase">TO OFFER A <span className="text-dhaba-mustard font-serif italic lowercase">lounge</span></span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-dhaba-mustard text-dhaba-dark px-5 py-2 rounded-full font-display text-xs mb-6 border border-dhaba-dark/20 shadow-xl uppercase tracking-[0.2em]">
              GT Road First Airport Style Lounge
            </div>
            <p className="text-dhaba-cream/80 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              Experience our premium sanctuary designed for the discerning traveler. A place to rest, work, and dine in absolute luxury.
            </p>

            <div className="mt-12 max-w-3xl mx-auto lg:mx-0">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {facilities.map((f, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-[32px] bg-white/5 border border-white/10 flex flex-col items-start text-left group transition-all hover:bg-white/10 shadow-xl hover:-translate-y-1"
                  >
                    <div className="text-dhaba-mustard mb-4">
                      {React.cloneElement(f.icon as React.ReactElement, { size: 28, strokeWidth: 2 })}
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white mb-1">{f.name}</h4>
                      <p className="text-dhaba-mustard/60 text-[9px] uppercase tracking-wider font-bold">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden relative h-[600px] shadow-2xl border-2 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Lounge Preview"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const JugniSection = () => {
  return (
    <section id="jugni" className="py-24 bg-dhaba-mustard text-dhaba-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dhaba-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 order-2 lg:order-1 hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-dhaba-red/10 rounded-[48px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-[40px] overflow-hidden border-8 border-dhaba-dark/10 shadow-2xl aspect-square">
                <img
                  src="https://i0.wp.com/experiencesofagastronomad.com/wp-content/uploads/2013/04/Robibarer-Murgir-Jhol-1-of-1-2.jpg?resize=650%2C979&ssl=1"
                  alt="Jugni Specialty Non-Veg"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dhaba-dark/60 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 hidden md:block">
                  <p className="font-serif italic text-white text-2xl drop-shadow-lg">Traditional Recipes,</p>
                  <p className="font-display text-4xl text-dhaba-red tracking-widest uppercase drop-shadow-2xl">Modern Flavor</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-dhaba-red text-white px-5 py-2 rounded-full font-display text-xs mb-8 border border-dhaba-dark/20 shadow-xl uppercase tracking-[0.2em]">
              <Flame size={14} className="fill-white" /> Legend of NH-1
            </div>
            <h2 className="font-display text-7xl md:text-9xl mb-8 tracking-tighter leading-none text-dhaba-dark drop-shadow-sm">JUGNI</h2>
            <p className="text-dhaba-dark/70 text-lg md:text-xl mb-12 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
              Discover the soul of North Indian meat artistry. Jugni is our dedicated sanctuary for non-veg aficionados, serving legendary slow-cooked curries and sizzling charcoal grills & All Time Favourite Parathas
            </p>

            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
              <div className="p-7 rounded-[32px] bg-white/40 border border-dhaba-dark/5 flex flex-col items-center lg:items-start text-center lg:text-left shadow-sm hover:bg-white transition-all">
                <div className="p-4 bg-dhaba-red text-white rounded-2xl shadow-lg mb-5">
                  <UtensilsCrossed size={24} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-widest text-dhaba-dark mb-1">Hand-Pounded</h4>
                  <p className="text-dhaba-red/60 text-[10px] uppercase font-bold tracking-wider">Spices and Masalas</p>
                </div>
              </div>
              <div className="p-7 rounded-[32px] bg-white/40 border border-dhaba-dark/5 flex flex-col items-center lg:items-start text-center lg:text-left shadow-sm hover:bg-white transition-all">
                <div className="p-4 bg-dhaba-red text-white rounded-2xl shadow-lg mb-5">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-widest text-dhaba-dark mb-1">Premium Cuts</h4>
                  <p className="text-dhaba-red/60 text-[10px] uppercase font-bold tracking-wider">Farm to Highway</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const JugniFoodGallery = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const foodImages = [
    "/foods/GALLERY2.jpg",
    "/foods/GALLERY5.jpg",
    "/foods/GALLERY8.jpg",
    "/foods/download (1).jpg",
    "/foods/download (3).jpg",
    "/foods/download (5).jpg",
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % foodImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-24 md:py-40 overflow-visible"
    >
      {/* Tilted Background Layer */}
      <div 
        className="absolute inset-0 -skew-y-2 origin-left z-0"
        style={{ backgroundColor: "#EAB308" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Circular Overlapping Images with Auto-Rotation */}
          <div className="relative order-2 lg:order-1 h-[450px] md:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-[550px] aspect-square scale-90 md:scale-100">
              {/* Circle 1 */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[60%] aspect-square rounded-full overflow-hidden border-8 border-[#EAB308] z-10 shadow-2xl bg-[#EAB308]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={foodImages[imgIndex]}
                    src={foodImages[imgIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              {/* Circle 2 */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[55%] aspect-square rounded-full overflow-hidden border-8 border-[#EAB308] z-20 shadow-2xl bg-[#EAB308]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={foodImages[(imgIndex + 1) % foodImages.length]}
                    src={foodImages[(imgIndex + 1) % foodImages.length]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
              {/* Circle 3 */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] aspect-square rounded-full overflow-hidden border-8 border-[#EAB308] z-30 shadow-2xl bg-[#EAB308]">
                <AnimatePresence mode="popLayout">
                  <motion.img
                    key={foodImages[(imgIndex + 2) % foodImages.length]}
                    src={foodImages[(imgIndex + 2) % foodImages.length]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
            {/* Text Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl md:text-6xl text-dhaba-dark uppercase tracking-tight mb-8">
                  DHABA <span className="text-dhaba-red">SOUL</span>
                </h2>
                <p className="text-dhaba-dark/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  A dhaba by heart and soul, Highway Haven presents a profound selection of delicious desi and videshi dishes. Famous for our hand-stretched "parathas" topped with melting creamy butter and served with a steaming cup of hot chai, we bring you the ultimate highway comfort food experience.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
};

const GroupBookings = () => {
  return (
    <section id="groups" className="py-24 md:py-32 bg-dhaba-red text-white relative overflow-hidden border-y-4 border-dhaba-dark">
      {/* Texture & Glow */}
      <div className="absolute inset-0 opacity-10 dhaba-pattern pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />

      <div className="w-full px-6 md:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-16 lg:gap-24">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-2xl">
            <div className="mb-10">
              <span className="font-serif italic text-dhaba-mustard text-xl md:text-2xl block mb-4 underline decoration-dhaba-mustard decoration-2 underline-offset-8 w-fit">Unforgettable Celebrations</span>
              <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none text-white">GROUP BOOKINGS</h2>
            </div>

            <p className="text-lg md:text-2xl text-dhaba-cream/80 mb-12 leading-relaxed font-medium">
              Whether it's a Milestone Birthday, an exclusive Kitty Party, or a Corporate stopover, we offer a sanctuary of privacy and hospitality tailored for your group.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-16">
              {[
                { name: "Birthdays & Kitty Parties", icon: <Sparkles size={18} /> },
                { name: "Dedicated Seating Areas", icon: <MapPin size={18} /> },
                { name: "Customized Group Menus", icon: <UtensilsCrossed size={18} /> },
                { name: "Priority Service", icon: <Zap size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-dhaba-mustard/10 flex items-center justify-center text-dhaba-mustard group-hover:bg-dhaba-mustard group-hover:text-dhaba-dark transition-all border border-dhaba-mustard/20">
                    {item.icon}
                  </div>
                  <span className="font-display text-base md:text-xl uppercase tracking-wider text-white font-bold">{item.name}</span>
                </div>
              ))}
            </div>

            <button className="w-full md:w-fit bg-white text-dhaba-red px-12 py-5 rounded-none font-display text-xl md:text-2xl hover:bg-dhaba-mustard hover:text-dhaba-dark transition-all shadow-2xl flex items-center justify-center gap-6 uppercase tracking-[0.2em] group border-2 border-transparent">
              ENQUIRE NOW <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Immersive Images */}
          <div className="lg:w-1/2 relative max-w-3xl">
            <div className="relative z-10 space-y-8">
              <div className="relative rounded-none overflow-hidden border-8 border-white/10 shadow-3xl transform rotate-2 hover:rotate-0 transition-all duration-700 aspect-video md:w-[700px]">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Group Event"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative rounded-none overflow-hidden border-8 border-white/10 shadow-3xl transform -rotate-1 translate-x-12 -translate-y-12 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 transition-all duration-700 aspect-video md:w-[700px] hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
                  className="w-full h-full object-cover"
                  alt="Family Gathering"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -inset-20 bg-dhaba-mustard/5 rounded-full blur-[150px] -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface Brand {
  name: string;
  logo: string;
  subtitle: string;
}

interface BrandCardProps {
  brand: Brand;
  key?: React.Key;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse tilt effect calculation - reduced values for less wobbliness
  const mouseRotateX = useTransform(y, [-150, 150], [12, -12]);
  const mouseRotateY = useTransform(x, [-150, 150], [-12, 12]);

  const springConfig = { damping: 20, stiffness: 200 };
  const springRotateX = useSpring(mouseRotateX, springConfig);
  const springRotateY = useSpring(mouseRotateY, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Set values relative to center of the card
    x.set(mouseX - width / 2);
    y.set(mouseY - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        rotateX: springRotateX,
        rotateY: springRotateY,
      }}
      className="relative w-full aspect-[4/5] bg-dhaba-dark rounded-[30px] overflow-hidden group cursor-pointer border-4 border-dhaba-red transition-all duration-300 shadow-2xl flex-shrink-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dhaba-dark via-dhaba-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end pointer-events-none text-left">
        <motion.div
          className="transition-transform duration-500"
        >
          <div
            className="opacity-100 mt-2 transition-all duration-500"
          >
            <p className="font-sans text-white/70 text-xs sm:text-sm leading-tight max-w-[90%]">
              {brand.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};


const Brands = () => {
  const brands = [
    {
      name: "Blue Tokai Coffee",
      logo: "/Blue tokai HHd6.png",
      subtitle: "Freshly roasted specialty coffee"
    },
    {
      name: "Naivedyam",
      logo: "/Naivedyam HHd5.png",
      subtitle: "Authentic South Indian dining."
    },
    {
      name: "Chaayos",
      logo: "/Chaayos HHd4.png",
      subtitle: "Experiments with Chai."
    },
    {
      name: "Uttham",
      logo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop",
      subtitle: "Supreme Indian flavors and sweets."
    },
    {
      name: "Three Sixty Lux",
      logo: "/three sixty HHd3.png",
      subtitle: "Luxury lounge and bar."
    },
    {
      name: "Chokhi Dhani",
      logo: "/Chokhi dhani HHd2.png",
      subtitle: "Rajasthani cultural dining."
    },
    {
      name: "Guardian Pharmacy",
      logo: "/gUARDIAN PHARMA d1.png",
      subtitle: "Your trusted wellness partner."
    }
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#a41c1c" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-serif italic text-dhaba-mustard text-2xl">Premium Amenities</span>
          <h2 className="font-display text-4xl md:text-7xl text-white mt-4 tracking-tight leading-none uppercase">WORLD-CLASS BRANDS</h2>
          <div className="w-48 h-2 bg-dhaba-mustard mx-auto mt-8 rounded-full shadow-lg"></div>
        </div>

        {/* Mobile View: Dual Row Auto Marquee */}
        <div className="md:hidden -mx-4 overflow-hidden flex flex-col gap-6 py-10">
          {/* Row 1: Left to Right */}
          <motion.div
            animate={{ x: [-1400, 0] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-4 px-4"
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={`row1-${brand.name}-${i}`} className="w-[200px] flex-shrink-0">
                <BrandCard brand={brand} />
              </div>
            ))}
          </motion.div>

          {/* Row 2: Right to Left */}
          <motion.div
            animate={{ x: [0, -1400] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-4 px-4"
          >
            {[...brands.reverse(), ...brands].map((brand, i) => (
              <div key={`row2-${brand.name}-${i}`} className="w-[200px] flex-shrink-0">
                <BrandCard brand={brand} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop View: Flexbox (Centered) */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 lg:gap-8">
          {brands.map((brand, i) => (
            <div key={brand.name} className="w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)] max-w-[320px]">
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; const Location = () => {
  return (
    <section id="location" className="bg-dhaba-mustard pt-16 pb-0 md:py-24 text-dhaba-dark overflow-hidden border-t-4 md:border-y-4 border-dhaba-dark">
      <div className="w-full px-6 md:px-24 pb-0 md:pb-0">
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-12 md:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 max-w-2xl mb-12 lg:mb-0">
            <div className="mb-10 md:mb-12">
              <h2 className="font-display text-4xl md:text-8xl tracking-tight uppercase leading-none text-dhaba-dark">
                GET IN <span className="text-dhaba-red">TOUCH</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
              <div className="border-l-4 border-dhaba-red pl-4 md:pl-5">
                <h4 className="font-display text-[10px] md:text-xs tracking-[0.2em] text-dhaba-red uppercase mb-2 md:mb-3 font-bold">Location</h4>
                <p className="text-sm md:text-2xl font-bold leading-tight text-dhaba-dark">64th Milestone, Ganaur,<br /> Sonipat, Haryana</p>
              </div>
              <div className="border-l-4 border-dhaba-red pl-4 md:pl-5">
                <h4 className="font-display text-[10px] md:text-xs tracking-[0.2em] text-dhaba-red uppercase mb-2 md:mb-3 font-bold">Connect</h4>
                <p className="text-sm md:text-2xl font-bold leading-tight text-dhaba-dark">+91 98765 43210<br />info@highwayhaven.in</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 md:gap-6 bg-dhaba-red text-white px-8 md:px-12 py-4 md:py-5 rounded-none font-display text-lg md:text-2xl hover:bg-dhaba-dark transition-all shadow-2xl uppercase tracking-[0.2em] group w-full md:w-fit"
            >
              NAVIGATE <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Map Container - Full width and touches footer on mobile */}
          <div className="w-screen lg:w-auto -mx-6 md:mx-0 mt-0">
            <div className="w-full h-[500px] md:w-[850px] md:h-[550px] border-t-8 border-b-0 md:border-8 border-dhaba-red/20 shadow-3xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.284301299278!2d77.0342687!3d29.156293299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc900750c276f%3A0x3848e514f5da0fc4!2sHIGHWAY+HAVEN!5e0!3m2!1sen!2sin!4v1775284336139!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale saturate-50 hover:grayscale-0 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#BC3030] text-white py-20 relative overflow-hidden">
      {/* Decorative pulse for red background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <div className="flex items-center mb-8">
              <img src="/hh-logo.png" alt="Highway Haven Logo" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-white/80 max-w-md text-lg leading-relaxed mb-10 font-medium">
              Redefining the Indian highway experience. We provide a premium sanctuary for travelers, blending traditional hospitality with modern luxury.
            </p>
            <div className="flex gap-6">
              {[1, 2, 3, 4].map(i => (
                <a key={i} href="#" className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-white/20">
                  <Star size={24} className="text-dhaba-mustard fill-dhaba-mustard" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-8 text-dhaba-mustard uppercase tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-5 font-sans font-bold text-white/70 text-lg">
              <li><a href="#highlights" className="hover:text-white transition-colors">Highlights</a></li>
              <li><a href="#lounge" className="hover:text-white transition-colors">Lounge</a></li>
              <li><a href="#groups" className="hover:text-white transition-colors">Group Bookings</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-8 text-dhaba-mustard uppercase tracking-wider">CONNECT</h4>
            <p className="text-white/80 mb-6 text-lg font-medium">Stay updated with our latest facilities and offers.</p>
            <div className="flex flex-col gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-xl hover:text-dhaba-mustard transition-colors font-bold">
                <Phone size={20} /> +91 98765 43210
              </a>
              <a href="mailto:info@highwayhaven.co.in" className="flex items-center gap-3 text-xl hover:text-dhaba-mustard transition-colors font-bold">
                <Briefcase size={20} /> info@highwayhaven.co.in
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 font-sans font-medium">
          <p>© 2026 Highway Haven. NH-1's Premium Stopover. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-dhaba-red selection:text-white overflow-x-hidden">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <RoadDivider />
        <LoungeSection />
        <RoadDivider />
        <Highlights />
        <RoadDivider />
        <Brands />
        <JugniFoodGallery />
        <ReviewsMarquee />
        <RoadDivider />
        <JugniSection />
        <GroupBookings />
        <RoadDivider />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
