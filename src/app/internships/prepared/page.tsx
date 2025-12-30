"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    { name: "Sarah Johnson", text: "MindCraft Academy's Full-Stack course changed my life! I went from zero coding experience to landing a $75k developer job in just 6 months. The mentorship was incredible!", avatar: "/1.png", role: "Full-Stack Developer", company: "TechCorp" },
    { name: "Michael Chen", text: "The Data Science program was exactly what I needed. The hands-on projects and real-world applications helped me secure an internship that turned into a full-time offer!", avatar: "/2.png", role: "Data Scientist", company: "DataFlow Inc" },
    { name: "Emma Rodriguez", text: "I completed the Mobile Development course while working full-time. The flexible schedule and expert instructors made it possible. Now I'm building apps professionally!", avatar: "/3.png", role: "Mobile Developer", company: "AppVenture" },
    { name: "David Kim", text: "The internship program at MindCraft Academy was a game-changer. I gained real industry experience and built a network that helped me land my dream job!", avatar: "/4.png", role: "DevOps Engineer", company: "CloudSys" },
    { name: "Lisa Thompson", text: "From housewife to software engineer in 8 months! MindCraft Academy's supportive community and comprehensive curriculum made my career transition smooth and successful.", avatar: "/5.png", role: "Software Engineer", company: "InnovateTech" },
    { name: "James Wilson", text: "The career support didn't end after graduation. MindCraft Academy helped me prepare for interviews and negotiate my salary. I'm now earning 3x my previous income!", avatar: "/6.png", role: "Senior Developer", company: "FutureSoft" }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center mb-8">
          Student Success Stories
        </h1>
        
        <div className="overflow-hidden">
        
          <div className="flex animate-scroll space-x-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 min-w-[350px] w-100 min-h-[320px] flex-shrink-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mr-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-yellow-300 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  <div className="flex mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsPage;