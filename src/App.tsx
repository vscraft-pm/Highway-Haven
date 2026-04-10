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
  Menu as MenuIcon,
  X,
  Sparkles
} from "lucide-react";
import React, { useState } from "react";



const RoadDivider = () => {
  return (
    <div className="h-10 bg-dhaba-dark relative overflow-hidden flex items-center shadow-xl">
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

  const ReviewItem = ({ text, author }: { text: string, author: string }) => (
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
    <div className="bg-dhaba-red py-24 overflow-hidden relative border-y-4 border-dhaba-red shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
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
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRetailOpen, setMobileRetailOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white text-dhaba-dark border-b-4 border-dhaba-mustard shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img src="/hh-logo.png" alt="Highway Haven Logo" className="h-16 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-sans font-bold text-sm tracking-widest">
            <a href="#groups" className="hover:text-dhaba-red transition-colors">Group bookings</a>
            <a href="#brands" className="hover:text-dhaba-red transition-colors">F&b</a>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-dhaba-red transition-colors">
                Retail <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56 transition-all z-50">
                <div className="bg-white border-2 border-dhaba-dark rounded-xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden">
                  <a href="#brands" className="px-4 py-3 hover:bg-dhaba-mustard rounded-lg transition-colors text-xs font-bold tracking-widest border-b border-dhaba-dark/5 last:border-0 hover:text-dhaba-dark text-dhaba-dark/80">Leather 360</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-dhaba-red transition-colors">
                Services <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-4 hidden group-hover:block w-56 transition-all z-50">
                <div className="bg-white border-2 border-dhaba-dark rounded-xl shadow-2xl p-2 flex flex-col gap-1 overflow-hidden">
                  <a href="#highlights" className="px-4 py-3 hover:bg-dhaba-mustard rounded-lg transition-colors text-xs font-bold tracking-widest border-b border-dhaba-dark/5 last:border-0 hover:text-dhaba-dark text-dhaba-dark/80">Ev charging</a>
                  <a href="#brands" className="px-4 py-3 hover:bg-dhaba-mustard rounded-lg transition-colors text-xs font-bold tracking-widest border-b border-dhaba-dark/5 last:border-0 hover:text-dhaba-dark text-dhaba-dark/80">Guardian pharmacy</a>
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
          <a href="#brands" className="text-dhaba-dark hover:text-dhaba-red" onClick={() => setIsOpen(false)}>F&b</a>
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
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Premium Stopover Ambiance" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dhaba-dark/90 via-dhaba-dark/60 to-dhaba-dark/20"></div>
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
          <p className="font-display text-dhaba-mustard text-center text-3xl leading-tight">OPEN<br/>24/7</p>
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
    <section id="highlights" className="py-24 bg-dhaba-cream relative overflow-hidden">
      <div className="dhaba-pattern absolute inset-0 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="font-serif italic text-dhaba-red text-2xl">Why Stop Here?</span>
          <h2 className="font-display text-5xl md:text-7xl text-dhaba-dark mt-2 tracking-tight">WORLD-CLASS COMFORT</h2>
          <div className="w-32 h-1.5 bg-dhaba-red mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {highlights.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[40px] overflow-hidden border-4 border-dhaba-dark shadow-2xl group relative"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-dhaba-red/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute top-52 left-8 bg-dhaba-mustard p-4 rounded-2xl border-2 border-dhaba-dark shadow-lg text-dhaba-dark z-10 transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="p-10 pt-14">
                <h3 className="font-display text-3xl mb-4 text-dhaba-red uppercase tracking-tight">{item.title}</h3>
                <p className="text-dhaba-dark/80 text-lg font-sans leading-relaxed">{item.desc}</p>
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
    { name: "Business Center", icon: <Briefcase />, desc: "Work on the go" }
  ];

  return (
    <section id="lounge" className="py-24 bg-dhaba-red text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-10">
        <Sparkles size={200} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-5xl md:text-7xl mb-8 tracking-tight">THE EXCLUSIVE <span className="text-dhaba-mustard font-serif italic">LOUNGE</span></h2>
            <p className="text-dhaba-cream/80 text-xl mb-12 leading-relaxed font-light max-w-lg">
              Experience our premium sanctuary designed for the discerning traveler. A place to rest, work, and dine in absolute luxury.
            </p>
            
            <div className="relative mt-16 max-w-lg">
              <div className="grid grid-cols-2 gap-y-12 gap-x-0 items-start">
                {facilities.map((f, idx) => (
                  <div key={idx} className={`flex flex-col items-start text-left group w-full ${idx % 2 === 1 ? 'pl-6' : 'pr-4'}`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl mb-3">
                      {React.cloneElement(f.icon as React.ReactElement, { size: 28, strokeWidth: 1.2 })}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display text-sm md:text-base text-dhaba-mustard leading-tight uppercase tracking-widest whitespace-nowrap">{f.name}</h4>
                      <p className="text-dhaba-cream/40 text-[9px] md:text-[10px] leading-none whitespace-nowrap">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative p-1 bg-[repeating-linear-gradient(45deg,#B91C1C,#B91C1C_10px,#EAB308_10px,#EAB308_20px)] rounded-[44px] shadow-2xl overflow-hidden">
              <div className="rounded-[40px] overflow-hidden relative h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Luxury Lounge Preview" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dhaba-dark/40 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="font-display text-4xl text-dhaba-mustard mb-2 tracking-widest">NOW OPEN</p>
                    <p className="font-serif italic text-xl md:text-2xl text-white">Experience Highway Luxury</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GroupBookings = () => {
  return (
    <section id="groups" className="py-24 bg-dhaba-mustard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dhaba-red text-white rounded-[50px] p-12 md:p-20 border-4 border-dhaba-dark shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <Users size={48} className="text-dhaba-mustard" />
                <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter">GROUP BOOKINGS</h2>
              </div>
              <p className="text-xl text-dhaba-cream/80 mb-10 leading-relaxed font-sans">
                Traveling with a large group? Whether it's a family reunion, corporate outing, or a tourist bus, we have dedicated spaces and customized packages to make your stop seamless and enjoyable.
              </p>
              <ul className="space-y-4 mb-10">
                {["Dedicated Seating Areas", "Customized Group Menus", "Priority Service", "Special Bus Parking"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-display text-lg text-dhaba-mustard">
                    <div className="w-2 h-2 bg-dhaba-mustard rounded-full"></div> {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-dhaba-red px-10 py-4 rounded-xl font-display text-xl hover:bg-dhaba-mustard hover:text-dhaba-dark transition-all border-2 border-dhaba-dark shadow-xl">
                ENQUIRE NOW
              </button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=500&auto=format&fit=crop" 
                className="rounded-3xl border-2 border-white shadow-lg h-48 w-full object-cover" 
                alt="Group Event"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500&auto=format&fit=crop" 
                className="rounded-3xl border-2 border-white shadow-lg h-48 w-full object-cover mt-8" 
                alt="Family Gathering"
                referrerPolicy="no-referrer"
              />
            </div>
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
      className="relative w-full aspect-[4/5] bg-dhaba-dark rounded-[30px] overflow-hidden group cursor-pointer border-4 border-dhaba-mustard/20 hover:border-dhaba-mustard/60 transition-colors shadow-2xl flex-shrink-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img 
          src={brand.logo} 
          alt={brand.name} 
          className="w-full h-full object-cover opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dhaba-dark via-dhaba-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-7 flex flex-col justify-end pointer-events-none text-left">
        <motion.div 
          className="transition-transform duration-500"
        >
          {/* Fixed height container for the title ensures baseline alignment */}
          <div className="min-h-[4rem] flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-2 mb-1">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white drop-shadow-2xl leading-tight tracking-tight">
              {brand.name}
            </h4>
          </div>
          
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

const BrandStack = ({ brands }: { brands: Brand[] }) => {
  const [index, setIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const stackRef = React.useRef<HTMLDivElement>(null);

  const handleSwipe = () => {
    setIndex((prev) => (prev + 1) % brands.length);
  };

  React.useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const handleManualWheel = (e: WheelEvent) => {
      // When hovering over the stack, we capture the scroll
      if (Math.abs(e.deltaY) > 5) {
        e.preventDefault();
        
        if (!isScrolling && e.deltaY > 20) {
          setIsScrolling(true);
          handleSwipe();
          setTimeout(() => setIsScrolling(false), 800);
        }
      }
    };

    el.addEventListener('wheel', handleManualWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleManualWheel);
  }, [isScrolling]);

  return (
    <div 
      ref={stackRef}
      className="relative h-[520px] w-full max-w-[340px] mx-auto mt-6"
    >
      <AnimatePresence initial={false}>
        {[2, 1, 0].map((offset) => {
          const brandIndex = (index + offset) % brands.length;
          const brand = brands[brandIndex];
          const isFront = offset === 0;

          return (
            <motion.div
              key={brand.name}
              style={{
                zIndex: 10 - offset,
                cursor: isFront ? "grab" : "default"
              }}
              drag={isFront ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragDirectionLock
              onDragEnd={(_, info) => {
                if (info.offset.y < -80 || info.velocity.y < -400) {
                  handleSwipe();
                }
              }}
              initial={{ 
                scale: 0.9, 
                y: 20, 
                opacity: 0 
              }}
              animate={{ 
                scale: 1 - offset * 0.05, 
                y: offset * 25, 
                x: offset * 8,
                rotate: offset * -2,
                opacity: 1 - offset * 0.15,
                filter: isFront ? "blur(0px)" : "blur(0.5px)"
              }}
              exit={{ 
                y: -600, 
                opacity: 0, 
                scale: 0.95
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="absolute inset-0"
            >
              <BrandCard brand={brand} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

const Brands = () => {
  const brands = [
    { 
      name: "Blue Tokai Coffee", 
      logo: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Freshly roasted specialty coffee"
    },
    { 
      name: "Naivedyam", 
      logo: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Authentic South Indian dining."
    },
    { 
      name: "Chaayos", 
      logo: "https://images.unsplash.com/photo-1576091160550-2173bdd99611?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Experiments with Chai."
    },
    { 
      name: "Uttham", 
      logo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Supreme Indian flavors and sweets."
    },
    { 
      name: "Three Sixty Lux", 
      logo: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Luxury lounge and bar."
    },
    { 
      name: "Chokhi Dhani", 
      logo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Rajasthani cultural dining."
    },
    { 
      name: "Guardian Pharmacy", 
      logo: "https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=1000&auto=format&fit=crop", 
      subtitle: "Your trusted wellness partner."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-dhaba-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-serif italic text-dhaba-red text-2xl">Premium Amenities</span>
          <h2 className="font-display text-4xl md:text-7xl text-dhaba-dark mt-4 tracking-tight leading-none">WORLD-CLASS BRANDS</h2>
          <div className="w-48 h-2 bg-dhaba-mustard mx-auto mt-8 rounded-full shadow-lg"></div>
        </div>
        
        {/* Mobile View: Swipable Stack */}
        <div className="md:hidden flex flex-col items-center">
          <BrandStack brands={brands} />
          <div className="mt-12 flex items-center gap-3 text-dhaba-dark/30 font-display text-[10px] uppercase tracking-[0.3em]">
            <div className="w-8 h-[1px] bg-current"></div>
            <span>Swipe up for next</span>
            <div className="w-8 h-[1px] bg-current"></div>
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {brands.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-dhaba-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-4 border-dhaba-dark rounded-[50px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 md:p-20">
            <h2 className="font-display text-4xl md:text-6xl mb-12 text-dhaba-red">VISIT HIGHWAY HAVEN</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="bg-dhaba-red text-white p-4 rounded-2xl h-fit border-2 border-dhaba-dark shadow-lg">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="font-display text-xl mb-1">OUR LOCATION</p>
                  <p className="text-dhaba-dark/70 text-lg leading-relaxed">NH-1, 64th Milestone, Ganaur, Sonipat, Haryana 131101</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-dhaba-mustard text-dhaba-dark p-4 rounded-2xl h-fit border-2 border-dhaba-dark shadow-lg">
                  <Clock size={32} />
                </div>
                <div>
                  <p className="font-display text-xl mb-1">OPENING HOURS</p>
                  <p className="text-dhaba-dark/70 text-lg">Open 24 Hours, 7 Days a Week</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-dhaba-teal text-white p-4 rounded-2xl h-fit border-2 border-dhaba-dark shadow-lg">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="font-display text-xl mb-1">CONTACT US</p>
                  <p className="text-dhaba-dark/70 text-lg">+91 98765 43210 | info@highwayhaven.co.in</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <a 
                href="https://www.google.com/maps/place/HIGHWAY+HAVEN/@29.1562933,77.0342687,17z/data=!3m1!4b1!4m6!3m5!1s0x390dc900750c276f:0x3848e514f5da0fc4!8m2!3d29.1562933!4d77.0342687!16s%2Fg%2F11wwhd7gjp?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-dhaba-mustard text-dhaba-dark py-5 rounded-2xl font-display text-xl border-2 border-dhaba-dark hover:bg-dhaba-red hover:text-white transition-all shadow-xl flex items-center justify-center"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 h-[500px] lg:h-auto bg-gray-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.284301299278!2d77.0342687!3d29.156293299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc900750c276f%3A0x3848e514f5da0fc4!2sHIGHWAY%20HAVEN!5e0!3m2!1sen!2sin!4v1775284336139!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale" 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-l-4 border-dhaba-dark"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dhaba-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-2">
            <div className="flex items-center mb-8">
              <img src="/hh-logo.png" alt="Highway Haven Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-dhaba-cream/60 max-w-md text-lg leading-relaxed mb-10">
              Redefining the Indian highway experience. We provide a premium sanctuary for travelers, blending traditional hospitality with modern luxury.
            </p>
            <div className="flex gap-6">
              {[1,2,3,4].map(i => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-dhaba-red hover:scale-110 transition-all border border-white/10">
                  <Star size={24} className="text-dhaba-mustard" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-2xl mb-8 text-dhaba-mustard uppercase tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-5 font-sans font-bold text-dhaba-cream/70 text-lg">
              <li><a href="#highlights" className="hover:text-dhaba-red transition-colors">Highlights</a></li>
              <li><a href="#lounge" className="hover:text-dhaba-red transition-colors">Lounge</a></li>
              <li><a href="#groups" className="hover:text-dhaba-red transition-colors">Group Bookings</a></li>
              <li><a href="#location" className="hover:text-dhaba-red transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-2xl mb-8 text-dhaba-mustard uppercase tracking-wider">CONNECT</h4>
            <p className="text-dhaba-cream/60 mb-6 text-lg">Stay updated with our latest facilities and offers.</p>
            <div className="flex flex-col gap-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-xl hover:text-dhaba-red transition-colors">
                <Phone size={20} /> +91 98765 43210
              </a>
              <a href="mailto:info@highwayhaven.co.in" className="flex items-center gap-3 text-xl hover:text-dhaba-red transition-colors">
                <Briefcase size={20} /> info@highwayhaven.co.in
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-dhaba-cream/40 font-sans font-medium">
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
    <div className="min-h-screen font-sans selection:bg-dhaba-red selection:text-white overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Brands />
        <ReviewsMarquee />
        <RoadDivider />
        <Highlights />
        <RoadDivider />
        <LoungeSection />
        <RoadDivider />
        <GroupBookings />
        <RoadDivider />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
