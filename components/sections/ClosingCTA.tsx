"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedSection } from "@/components/ui/animated-section";
import { cn } from "@/lib/utils";

export function ClosingCTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-xl relative z-10">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-2xl -z-10">
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full"
              animate={{
                y: [0, 10, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your business with data?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join over 10,000 companies using FlowVision to make better
              decisions and drive growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
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
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <img
                      src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-medium">Trusted by 10,000+</p>
                <p className="text-muted-foreground">companies worldwide</p>
              </div>
            </div>

            <div className="h-8 w-px bg-border hidden md:block" />

            <div className="flex items-center gap-2">
              <div className="bg-primary/10 rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
              <div className="text-sm">
                <p className="font-medium">30-day free trial</p>
                <p className="text-muted-foreground">No credit card required</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-16 flex flex-wrap justify-center gap-8 opacity-80">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.img
              key={i}
              src={`https://images.pexels.com/photos/${5000000 + i}/pexels-photo-${5000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
              alt="Client logo"
              className="h-8 max-w-[120px] object-contain"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}