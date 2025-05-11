"use client";

import { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { fadeIn, staggerContainer } from "@/lib/animations";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth Inc.",
    avatarUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "FlowVision has completely transformed our marketing analytics. We've seen a 40% increase in conversion rates since implementing their platform. The real-time dashboard has become an essential part of our daily operations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateSphere",
    avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "As a tech leader, I'm impressed by FlowVision's architecture and performance. The platform handles our enterprise-scale data with ease, and the insights we've gained have directly contributed to our product roadmap.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    company: "StyleTrend",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "The customer segmentation tools in FlowVision helped us identify a completely new target audience. We've tailored our campaigns to this segment and seen remarkable engagement. The ROI has been exceptional.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Patel",
    role: "Growth Lead",
    company: "SaaSMaster",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "FlowVision provided exactly what we needed to scale our user acquisition strategy. The integration was seamless, and their support team was exceptional throughout the process. Highly recommended!",
    rating: 5,
  },
  {
    id: 5,
    name: "Lisa Nakamura",
    role: "Analytics Manager",
    company: "DataDriven Co.",
    avatarUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "I've used many analytics platforms, but FlowVision stands out with its intuitive interface and powerful capabilities. Our team was up and running quickly, and we discovered insights we had missed for years.",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const itemsPerPage = {
    mobile: 1,
    desktop: 3,
  };

  const totalPages = Math.ceil(
    testimonials.length / itemsPerPage.desktop
  );

  // Navigation functions
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? totalPages - 1 : prev - 1
    );
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
    resetAutoplayTimer();
  };

  // Autoplay functionality
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    if (autoplayIntervalRef.current) return;
    autoplayIntervalRef.current = setInterval(() => {
      if (!isPaused) {
        next();
      }
    }, 5000); // Change slide every 5 seconds
  };

  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  };

  const resetAutoplayTimer = () => {
    stopAutoplay();
    startAutoplay();
  };

  const pauseAutoplay = () => setIsPaused(true);
  const resumeAutoplay = () => setIsPaused(false);

  const getVisibleTestimonials = () => {
    const startIndex = activeIndex * itemsPerPage.desktop;
    return testimonials.slice(
      startIndex,
      startIndex + itemsPerPage.desktop
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => { next(); resetAutoplayTimer(); },
    onSwipedRight: () => { prev(); resetAutoplayTimer(); },
    trackMouse: true,
  });

  return (
    <section 
      id="testimonials" 
      className="py-24 relative bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <Badge variant="outline" className="mb-3 px-4 py-1.5 text-sm font-medium">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Loved by forward-thinking teams
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              FlowVision empowers companies to unlock actionable insights and scale with confidence.
            </p>
          </AnimatedSection>
        </div>

        {/* Desktop */}
        <div 
          className="hidden md:block relative"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, i) => (
                <motion.div
                  key={`${activeIndex}-${testimonial.id}`}
                  variants={fadeIn("up", i * 0.1)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 opacity-70 hover:opacity-100 shadow-lg bg-background"
            onClick={() => { prev(); resetAutoplayTimer(); }}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 opacity-70 hover:opacity-100 shadow-lg bg-background"
            onClick={() => { next(); resetAutoplayTimer(); }}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center items-center mt-12 gap-4">
            <div className="flex space-x-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  className={`h-2.5 w-10 rounded-full cursor-pointer transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div 
          className="md:hidden" 
          {...swipeHandlers}
          onTouchStart={pauseAutoplay}
          onTouchEnd={resumeAutoplay}
        >
          <AnimatedSection>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard testimonial={testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>
          
          <div className="flex justify-center mt-8 gap-4">
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  className={`h-2.5 w-6 rounded-full cursor-pointer transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-primary"
                      : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <AnimatedSection className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
          {[
            ["500+", "Happy Customers"],
            ["99.9%", "Uptime"],
            ["35%", "Avg. ROI Increase"],
            ["24/7", "Customer Support"],
          ].map(([value, label], i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-4xl font-bold text-primary mb-2">{value}</p>
              <p className="text-muted-foreground">{label}</p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="h-full backdrop-blur-sm bg-white/70 dark:bg-black/50 rounded-2xl shadow-xl border border-border p-6 relative overflow-hidden"
    >
      <Quote className="absolute right-2 top-2 text-primary/10 h-20 w-20 rotate-12" />
      
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground italic mb-6 relative z-10">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-3 border-2 border-primary/20">
          <AvatarImage src={testimonial.avatarUrl} />
          <AvatarFallback className="bg-primary/10 text-primary font-medium">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}