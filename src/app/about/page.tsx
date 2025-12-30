"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, ArrowRight,HandshakeIcon,ComputerIcon,Globe,LucideMapPinCheckInside } from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "100+", label: "Students Enrolled", icon: Users },
    { number: "75%", label: "Job Placement Rate", icon: Target },
    { number: "10+", label: "Partner Companies", icon: Award },
    { number: "50+", label: "Expert Instructors", icon: Heart }
  ];

  const team = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Founder & CEO",
      bio: "Former Google engineer with 15+ years in tech education. PhD in Computer Science from Stanford.",
      image: "/team1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Curriculum",
      bio: "Ex-Microsoft architect who designed curricula for top tech bootcamps. Specializes in full-stack development.",
      image: "/team2.jpg"
    },
    {
      name: "Dr. Lisa Wang",
      role: "AI/ML Director",
      bio: "Former Tesla AI researcher with expertise in machine learning and data science education.",
      image: "/team3.jpg"
    },
    {
      name: "David Rodriguez",
      role: "Career Services Director",
      bio: "Former tech recruiter at Amazon and Facebook. Helped 1000+ developers land their dream jobs.",
      image: "/team4.jpg"
    }
  ];

  const values = [
    {
      title: "Accessibility First",
      description: "Education should be free and accessible to everyone, regardless of background or financial situation.",
      icon: <Globe/>
    },
    {
      title: "Industry Relevance",
      description: "Our curriculum is constantly updated to match current industry demands and emerging technologies.",
      icon:<LucideMapPinCheckInside/>
    },
    {
      title: "Practical Learning",
      description: "Learn by building real projects that you can showcase to potential employers.",
      icon: <ComputerIcon/>
    },
    {
      title: "Community Support",
      description: "Join a supportive community of learners, mentors, and industry professionals.",
      icon: <HandshakeIcon/>
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6">
            About MindCraft
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to democratize tech education and bridge the gap between 
            learning and employment. Founded in 2020, MindCraft Academy has helped thousands 
            of students transform their careers through our comprehensive, industry-aligned programs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 text-center">
                <CardContent className="p-6">
                  <IconComponent className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Target className="w-6 h-6 text-yellow-400" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                To provide world-class, accessible tech education that empowers individuals 
                to build successful careers in technology. We believe that with the right 
                guidance and support, anyone can master the skills needed to thrive in the 
                digital economy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-400" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed">
                To become the global leader in practical tech education, creating a world 
                where geographical location, financial background, or previous experience 
                never limits someone's ability to build a successful career in technology.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-yellow-500 justify-center mx-auto">{value.icon}</div>
                  <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Meet Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
                <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 flex items-center justify-center">
                  <Users className="w-16 h-16 text-yellow-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                  <p className="text-yellow-300 font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-4">
            <p>
              MindCraft Academy was born from a simple observation: traditional education wasn't 
              keeping pace with the rapidly evolving tech industry. Our founder, Dr. Sarah Mitchell, 
              noticed that many talented individuals were being left behind due to barriers like 
              cost, location, and outdated curricula.
            </p>
            <p>
              Starting with just 50 students in our first cohort, we've grown to serve over 10,000 
              learners worldwide. Our success is measured not just in numbers, but in the lives 
              we've transformed - from career changers landing their first tech jobs to experienced 
              professionals advancing to senior roles.
            </p>
            <p>
              Today, we partner with leading tech companies to ensure our graduates are job-ready 
              from day one. Our unique combination of free courses and paid internships creates a 
              clear pathway from learning to earning, making tech careers accessible to everyone.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with MindCraft Academy. 
            Your future in tech starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-3xl hover:scale-105 transition-transform">
              Start Learning Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="bg-transparent text-white border-2 border-yellow-400 font-bold px-8 py-4 text-lg rounded-3xl hover:bg-yellow-400/20 transition-all">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
