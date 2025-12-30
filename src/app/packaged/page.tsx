"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    { q: "Are the courses really free?", a: "Yes! All our courses are completely free with lifetime access. We believe education should be accessible to everyone, regardless of financial background." },
    { q: "Do I get a certificate after completing a course?", a: "Absolutely! You'll receive an industry-recognized certificate upon successful completion of any course, which you can add to your LinkedIn profile and resume." },
    { q: "How do I apply for internships program?", a: "Clicks on Apply now ! Fill out forms and clicks submit we'll send you confirmation email ." },
    { q: "Are there any other opportunities in Mindcraft ?", a: "Yes of course ! there are many opportunities include Paid Internship , Jobs , Scholarships Opportunities and Connections ." },
    { q: "Can I learn while working full-time?", a: "Yes! Our courses are designed for flexibility. You can learn at your own pace with recorded lectures, downloadable materials, and weekend live sessions." },
    { q: "Do you provide job placement assistance?", a: "We offer comprehensive career support including resume reviews, interview preparation, salary negotiation guidance, and direct connections with hiring partners." },
    { q: "What if I have no prior programming experience?", a: "Perfect! Many of our courses start from absolute beginner level. We provide foundational knowledge and gradually build up to advanced concepts." },
    { q: "How long does it take to complete a course?", a: "Course duration varies from 4-18 weeks depending on the program. You can complete them faster or slower based on your schedule and learning pace." }
  ];

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center mb-8">
          Frequently Asked Questions
        </h1>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 px-6">
              <AccordionTrigger className="text-white font-semibold text-lg hover:text-yellow-300 hover:cursor-pointer transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQPage;