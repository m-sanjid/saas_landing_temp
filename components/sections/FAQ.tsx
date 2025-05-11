"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { fadeIn } from "@/lib/animations";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the 30-day free trial work?",
    answer:
      "Our 30-day free trial gives you full access to all features of your selected plan with no credit card required. You can explore the platform, set up your dashboards, and evaluate if FlowVision is right for your business. At the end of the trial, you can choose to subscribe or your account will automatically downgrade to a limited free version.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be immediately available and we'll prorate your billing. When downgrading, the change will take effect at the start of your next billing cycle.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "If you cancel your subscription, you'll have 30 days to export your data. After that period, we'll permanently delete all your data from our servers in accordance with our data retention policy and privacy regulations.",
  },
  {
    question: "Is there a limit to how much data I can track?",
    answer:
      "Each plan has specific limits on the number of events you can track monthly. The Starter plan includes up to 5,000 events/mo, Professional up to 100,000 events/mo, and Enterprise offers unlimited events. If you exceed your plan's limits, you'll have the option to upgrade or purchase additional capacity.",
  },
  {
    question: "Do you offer custom solutions for enterprise needs?",
    answer:
      "Absolutely. Our Enterprise plan is highly customizable to meet the specific needs of large organizations. We offer dedicated account managers, custom integrations, on-premise deployment options, and tailored training sessions. Contact our sales team to discuss your requirements.",
  },
  {
    question: "How secure is my data on FlowVision?",
    answer:
      "Security is our top priority. We implement industry-leading security measures including end-to-end encryption, regular security audits, and compliance with SOC 2, GDPR, and HIPAA regulations. All data is stored in secure, redundant data centers with 99.9% uptime guarantee.",
  },
  {
    question: "Can I integrate FlowVision with my existing tools?",
    answer:
      "Yes, FlowVision integrates seamlessly with 100+ popular business tools including CRM systems, marketing platforms, e-commerce solutions, and more. We offer native integrations, a comprehensive API, and webhooks to ensure flexibility for your tech stack.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "Our support varies by plan: Starter includes email support with 24-hour response time, Professional adds priority email and chat support with 4-hour response time, and Enterprise offers 24/7 phone, email, and chat support with a dedicated account manager and 1-hour guaranteed response for critical issues.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <Badge variant="outline" className="mb-3">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about FlowVision, pricing,
              security, and more.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection
            variants={fadeIn("up")}
            className="border rounded-xl overflow-hidden"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="py-5 px-5 text-left hover:no-underline data-[state=open]:font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">
              Still have questions?
            </p>
            <p className="font-medium">
              Contact our support team at{" "}
              <a
                href="mailto:support@flowvision.com"
                className="text-primary hover:underline"
              >
                support@flowvision.com
              </a>
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}