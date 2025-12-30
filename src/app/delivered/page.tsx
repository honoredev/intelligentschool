import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Handshake } from "lucide-react";

const PartnersPage = () => {
  const partners = [
    { name: "TechCorp Solutions", category: "Software Development", image: "/1.png", employees: "5000+", internships: "50+" },
    { name: "DataFlow Analytics", category: "Data Science", image: "/2.png", employees: "2500+", internships: "30+" },
    { name: "CloudSys Infrastructure", category: "Cloud Computing", image: "/3.png", employees: "3000+", internships: "40+" },
    { name: "MobileFirst Studios", category: "Mobile Development", image: "/4.png", employees: "1500+", internships: "25+" },
    { name: "AI Innovations Lab", category: "Artificial Intelligence", image: "/5.png", employees: "800+", internships: "15+" },
    { name: "FinTech Solutions", category: "Financial Technology", image: "/6.png", employees: "2000+", internships: "35+" }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center mb-4">
          Our Industry Partners
        </h1>
        <p className="text-gray-300 text-center mb-8 text-lg">
          Partnering with leading tech companies to provide real-world internship opportunities
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                  <img src={partner.image} alt={partner.name} className="w-12 h-12" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{partner.name}</h3>
                <p className="text-yellow-300 text-sm mb-3">{partner.category}</p>
                
                <div className="flex justify-between text-sm text-gray-300 mb-4">
                  <span>{partner.employees} employees</span>
                  <span>{partner.internships} internships</span>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold hover:from-yellow-700 hover:to-yellow-600 hover:cursor-pointer">
                  View Opportunities <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-yellow-400/30">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Want to Partner with Us?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Join our network of industry partners and help shape the next generation of tech talent
            </p>
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-3 text-lg hover:cursor-pointer hover:scale-105 transition-transform">
              Become a Partner <Handshake className="ml-2 w-5 h-5"></Handshake>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnersPage;