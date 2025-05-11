"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeIn } from "@/lib/animations";
import { motion } from "framer-motion";

interface PricingTier {
  name: string;
  description: string;
  price: {
    monthly: string;
    annually: string;
  };
  features: Array<{
    text: string;
    included: boolean;
  }>;
  highlighted?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: {
      monthly: "$29",
      annually: "$290",
    },
    features: [
      { text: "Up to 5,000 events/mo", included: true },
      { text: "Basic analytics dashboard", included: true },
      { text: "3 user seats", included: true },
      { text: "Email support", included: true },
      { text: "Custom reports", included: false },
      { text: "Advanced segmentation", included: false },
      { text: "Data retention (30 days)", included: true },
      { text: "API access", included: false },
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Professional",
    description: "For growing teams and businesses",
    price: {
      monthly: "$79",
      annually: "$790",
    },
    features: [
      { text: "Up to 100,000 events/mo", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "10 user seats", included: true },
      { text: "Priority email & chat support", included: true },
      { text: "Custom reports", included: true },
      { text: "Advanced segmentation", included: true },
      { text: "Data retention (90 days)", included: true },
      { text: "API access", included: true },
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    price: {
      monthly: "$299",
      annually: "$2,990",
    },
    features: [
      { text: "Unlimited events", included: true },
      { text: "Enterprise dashboard & controls", included: true },
      { text: "Unlimited user seats", included: true },
      { text: "24/7 phone, email & chat support", included: true },
      { text: "Custom reports", included: true },
      { text: "Advanced segmentation", included: true },
      { text: "Data retention (12 months)", included: true },
      { text: "API access & dedicated support", included: true },
    ],
    cta: "Contact Sales",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <Badge variant="outline" className="mb-3">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for your business. All plans include a
              30-day free trial with no credit card required.
            </p>
          </AnimatedSection>
        </div>

        <Tabs defaultValue="monthly" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annually">
                Annually <Badge className="ml-2 bg-primary/20 text-primary">Save 20%</Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <AnimatedSection
                  key={tier.name}
                  variants={fadeIn("up", i * 0.1)}
                  className="h-full"
                >
                  <PricingCard tier={tier} billingPeriod="monthly" />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annually" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <AnimatedSection
                  key={tier.name}
                  variants={fadeIn("up", i * 0.1)}
                  className="h-full"
                >
                  <PricingCard tier={tier} billingPeriod="annually" />
                </AnimatedSection>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <AnimatedSection className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include core features:
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              "Unlimited projects",
              "Free updates",
              "Data export",
              "SSL encryption",
              "GDPR compliant",
            ].map((feature) => (
              <div key={feature} className="flex items-center text-sm">
                <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                {feature}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  billingPeriod,
}: {
  tier: PricingTier;
  billingPeriod: "monthly" | "annually";
}) {
  return (
    <Card
      className={`h-full flex flex-col ${
        tier.highlighted
          ? "border-primary shadow-lg shadow-primary/10 relative"
          : ""
      }`}
    >
      {tier.highlighted && (
        <div className="absolute -top-5 left-0 right-0 flex justify-center">
          <Badge className="bg-primary text-primary-foreground px-3 py-1">
            Most Popular
          </Badge>
        </div>
      )}
      <CardHeader className={tier.highlighted ? "pt-8" : ""}>
        <CardTitle className="text-2xl">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold">
            {tier.price[billingPeriod]}
          </span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>

        <ul className="space-y-3">
          {tier.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {feature.included ? (
                <CheckIcon className="mr-2 h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              ) : (
                <XIcon className="mr-2 h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              )}
              <span
                className={
                  feature.included ? "" : "text-muted-foreground"
                }
              >
                {feature.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className={`w-full ${
            tier.highlighted ? "bg-primary" : ""
          }`}
          variant={tier.highlighted ? "default" : "outline"}
        >
          {tier.cta}
        </Button>
      </CardFooter>
    </Card>
  );
}