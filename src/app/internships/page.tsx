"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, Clock, Building, Users, Filter, Briefcase } from "lucide-react";

const InternshipsPage = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const types = ["All", "Frontend", "Backend", "Full-Stack", "Data Science", "Mobile", "DevOps", "AI/ML"];
  const locations = ["All", "Remote", "On-site", "Hybrid"];

  const internships = [
    {
      id: 1,
      company: "TechCorp Solutions",
      role: "Frontend Developer Intern",
      type: "Frontend",
      location: "Remote",
      duration: "3 months",
      stipend: "$1000/month",
      description: "Work on React.js applications, collaborate with senior developers, and contribute to real client projects.",
      requirements: ["React.js", "JavaScript", "HTML/CSS", "Git"],
      benefits: ["Mentorship", "Certificate", "Job Referral", "Flexible Hours"],
      spots: 5,
      applied: 127,
      logo: "/company1.png"
    },
    {
      id: 2,
      company: "DataFlow Analytics",
      role: "Data Science Intern",
      type: "Data Science",
      location: "Hybrid",
      duration: "4 months",
      stipend: "$1200/month",
      description: "Analyze large datasets, build ML models, and create data visualizations for business insights.",
      requirements: ["Python", "Pandas", "SQL", "Machine Learning"],
      benefits: ["Industry Projects", "AWS Credits", "Conference Access", "Full-time Offer"],
      spots: 3,
      applied: 89,
      logo: "/company2.png"
    },
    {
      id: 3,
      company: "CloudSys Infrastructure",
      role: "DevOps Engineer Intern",
      type: "DevOps",
      location: "Remote",
      duration: "6 months",
      stipend: "$1500/month",
      description: "Learn cloud infrastructure, CI/CD pipelines, and containerization technologies.",
      requirements: ["Docker", "Kubernetes", "AWS", "Linux"],
      benefits: ["Cloud Certifications", "24/7 Support", "Global Team", "Performance Bonus"],
      spots: 2,
      applied: 156,
      logo: "/company3.png"
    },
    {
      id: 4,
      company: "MobileFirst Studios",
      role: "React Native Developer Intern",
      type: "Mobile",
      location: "On-site",
      duration: "3 months",
      stipend: "$1100/month",
      description: "Develop cross-platform mobile applications and work with UX/UI designers.",
      requirements: ["React Native", "JavaScript", "Mobile UI/UX", "API Integration"],
      benefits: ["App Store Publishing", "Design Training", "Startup Experience", "Equity Options"],
      spots: 4,
      applied: 203,
      logo: "/company4.png"
    },
    {
      id: 5,
      company: "AI Innovations Lab",
      role: "Machine Learning Intern",
      type: "AI/ML",
      location: "Hybrid",
      duration: "5 months",
      stipend: "$1400/month",
      description: "Research and develop AI models, work on computer vision and NLP projects.",
      requirements: ["Python", "TensorFlow", "PyTorch", "Deep Learning"],
      benefits: ["Research Papers", "GPU Access", "PhD Mentorship", "Conference Presentations"],
      spots: 2,
      applied: 98,
      logo: "/company5.png"
    },
    {
      id: 6,
      company: "FinTech Solutions",
      role: "Full-Stack Developer Intern",
      type: "Full-Stack",
      location: "Remote",
      duration: "4 months",
      stipend: "$1300/month",
      description: "Build financial applications using modern web technologies and payment integrations.",
      requirements: ["Node.js", "React", "MongoDB", "Payment APIs"],
      benefits: ["FinTech Experience", "Security Training", "Compliance Knowledge", "Stock Options"],
      spots: 3,
      applied: 174,
      logo: "/company6.png"
    }
  ];

  const filteredInternships = internships.filter(internship => {
    const typeMatch = selectedType === "All" || internship.type === selectedType;
    const locationMatch = selectedLocation === "All" || internship.location === selectedLocation;
    return typeMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Paid Internship Programs
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gain real-world experience with our partner companies. Get paid while you learn 
            and build your professional network.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-gray-300">Active Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">95%</div>
            <div className="text-gray-300">Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">$1200</div>
            <div className="text-gray-300">Avg Monthly Stipend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">80%</div>
            <div className="text-gray-300">Full-time Offers</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Type:</span>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white/10 text-white border border-yellow-400/30 rounded-lg px-3 py-1"
            >
              {types.map(type => (
                <option key={type} value={type} className="bg-gray-800">
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Location:</span>
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="bg-white/10 text-white border border-yellow-400/30 rounded-lg px-3 py-1"
            >
              {locations.map(location => (
                <option key={location} value={location} className="bg-gray-800">
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredInternships.map((internship) => (
            <Card key={internship.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{internship.role}</CardTitle>
                      <CardDescription className="text-yellow-300 text-lg font-semibold">
                        {internship.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-lg">{internship.stipend}</div>
                    <div className="text-gray-300 text-sm">{internship.duration}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">{internship.description}</p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-yellow-400" />
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      internship.location === 'Remote' ? 'bg-green-500/20 text-green-400' : 
                      internship.location === 'On-site' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {internship.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{internship.spots} spots</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">{internship.applied} applied</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.requirements.map((req, index) => (
                      <span key={index} className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.benefits.map((benefit, index) => (
                      <span key={index} className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Application Process */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            How to Apply for Internships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Complete Courses</h3>
              <p className="text-gray-300 text-sm">Finish relevant courses and build your portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Submit Application</h3>
              <p className="text-gray-300 text-sm">Apply with your resume and project portfolio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Interview Process</h3>
              <p className="text-gray-300 text-sm">Technical and behavioral interviews with companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Start Internship</h3>
              <p className="text-gray-300 text-sm">Begin your paid internship and gain experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;
