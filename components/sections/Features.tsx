"use client";

import { BarChart2, LineChart, PieChart, Settings, Zap, RefreshCw, Database, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeIn, scaleIn } from "@/lib/animations";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: "Real-time Analytics",
    description: "Track your business metrics in real-time to make quick, data-driven decisions.",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    title: "Comprehensive Reports",
    description: "Generate detailed reports with customizable metrics and visualization options.",
    icon: <BarChart2 className="h-6 w-6" />,
  },
  {
    title: "User Behavior Insights",
    description: "Understand how users interact with your product through heat maps and user journeys.",
    icon: <PieChart className="h-6 w-6" />,
  },
  {
    title: "Advanced Segmentation",
    description: "Segment your audience based on demographics, behavior, and custom attributes.",
    icon: <Settings className="h-6 w-6" />,
  },
  {
    title: "Performance Optimization",
    description: "Identify bottlenecks and optimize your application performance with automated suggestions.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Automated Workflows",
    description: "Create custom workflows that trigger based on specific events or conditions.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
  {
    title: "Data Integration",
    description: "Connect with over 100+ tools and platforms to consolidate your data in one place.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Enterprise Security",
    description: "Keep your data secure with enterprise-grade encryption and compliance controls.",
    icon: <Shield className="h-6 w-6" />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <Badge variant="outline" className="mb-3">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need to scale your business
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform provides comprehensive tools and insights to help you
              make data-driven decisions and grow your business.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              variants={scaleIn}
              delay={index * 0.1}
              className="bg-card hover:bg-card/80 border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection
          className="mt-20 bg-card border border-border rounded-xl overflow-hidden shadow-lg"
          variants={fadeIn("up")}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4">
                Why Choose Us
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Data-driven decisions with powerful visualizations
              </h3>
              <p className="text-muted-foreground mb-6">
                Our intuitive dashboard brings your data to life with interactive
                charts, graphs, and customizable widgets. Spot trends, identify
                opportunities, and make informed decisions faster than ever
                before.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Interactive data visualization tools",
                  "Customizable dashboard layouts",
                  "Export reports in multiple formats",
                  "Share insights with your team",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full bg-muted overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7688454/pexels-photo-7688454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Dashboard visualization"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}