"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Hero() {
  const [email, setEmail] = useState("");

  const highlights = [
    "30-day free trial",
    "No credit card required",
    "Cancel anytime",
  ];

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeIn("up")}
            className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6 flex items-center"
          >
            Introducing FlowVision 2.0
          </motion.span>

          <motion.h1
            variants={fadeIn("up", 0.1)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Transform Your Business with{" "}
            <span className="text-primary relative">
              Smart Analytics
              <motion.span
                className="absolute bottom-1 left-0 w-full h-[6px] bg-primary/20 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
          >
            Unlock actionable insights, optimize performance, and drive
            growth with our powerful analytics platform designed for modern
            businesses.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.3)}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mb-8"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              size="lg"
              className={cn(
                "h-12 transition-all duration-300",
                email ? "bg-primary" : "bg-muted-foreground"
              )}
              disabled={!email}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center text-sm text-muted-foreground"
              >
                <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 relative max-w-5xl mx-auto"
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="visible"
        >
          {/* Dashboard preview image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
            <img
              src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="FlowVision Dashboard"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* Overlay gradient for dark mode */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
          </div>

          {/* Floating stats cards */}
          <motion.div
            className="absolute -top-8 -right-4 md:right-4 bg-background/80 backdrop-blur-lg shadow-lg rounded-lg p-4 border border-border hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Conversion Rate</p>
                <p className="text-xl font-bold">+24.8%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 -left-4 md:left-4 bg-background/80 backdrop-blur-lg shadow-lg rounded-lg p-4 border border-border hidden md:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <ArrowRight className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium">Active Users</p>
                <p className="text-xl font-bold">12.4k</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-16 flex justify-center flex-wrap gap-8">
          <motion.img
            src="https://images.pexels.com/photos/13845302/pexels-photo-13845302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Trusted by"
            className="h-7 opacity-50 hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.img
            src="https://images.pexels.com/photos/13845302/pexels-photo-13845302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Trusted by"
            className="h-7 opacity-50 hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          />
          <motion.img
            src="https://images.pexels.com/photos/13845302/pexels-photo-13845302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Trusted by"
            className="h-7 opacity-50 hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
          <motion.img
            src="https://images.pexels.com/photos/13845302/pexels-photo-13845302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Trusted by"
            className="h-7 opacity-50 hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}