"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Smartphone, Globe, Brain, Server } from "lucide-react";
import Link from "next/link";

const LearnPage = () => {
  const languages = [
    {
      id: "javascript",
      name: "JavaScript",
      description: "Build interactive websites and web applications",
      icon: <Globe className="w-12 h-12" />,
      color: "from-yellow-500 to-orange-500",
      difficulty: "Beginner Friendly",
      duration: "4-6 weeks",
      projects: 8
    },
    {
      id: "python",
      name: "Python",
      description: "Data science, AI, and backend development",
      icon: <Code className="w-12 h-12" />,
      color: "from-blue-500 to-green-500",
      difficulty: "Beginner Friendly",
      duration: "5-7 weeks",
      projects: 10
    },
    {
      id: "react",
      name: "React",
      description: "Build modern user interfaces and SPAs",
      icon: <Globe className="w-12 h-12" />,
      color: "from-cyan-500 to-blue-500",
      difficulty: "Intermediate",
      duration: "6-8 weeks",
      projects: 12
    },
    {
      id: "nodejs",
      name: "Node.js",
      description: "Server-side JavaScript and APIs",
      icon: <Server className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      difficulty: "Intermediate",
      duration: "5-7 weeks",
      projects: 9
    },
    {
      id: "sql",
      name: "SQL",
      description: "Database management and data analysis",
      icon: <Database className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      difficulty: "Beginner Friendly",
      duration: "3-4 weeks",
      projects: 6
    },
    {
      id: "java",
      name: "Java",
      description: "Enterprise applications and Android development",
      icon: <Smartphone className="w-12 h-12" />,
      color: "from-red-500 to-orange-500",
      difficulty: "Intermediate",
      duration: "8-10 weeks",
      projects: 15
    }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select a programming language to start your coding journey. Each path is designed to take you from beginner to advanced level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language) => (
            <Card key={language.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-all duration-300 overflow-hidden group">
              <CardHeader className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${language.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  {language.icon}
                </div>
                <CardTitle className="text-white text-2xl mb-2">{language.name}</CardTitle>
                <p className="text-gray-300 text-sm">{language.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Difficulty:</span>
                    <span className="text-yellow-400">{language.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-yellow-400">{language.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projects:</span>
                    <span className="text-yellow-400">{language.projects}</span>
                  </div>
                </div>

                <Link href={`/learn/${language.id}`}>
                  <Button className={`w-full bg-gradient-to-r ${language.color} text-white font-bold hover:scale-105 transition-transform`}>
                    Start Learning {language.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We recommend starting with JavaScript or Python if you're completely new to programming.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/learn/javascript">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4">
                Start with JavaScript
              </Button>
            </Link>
            <Link href="/learn/python">
              <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold px-8 py-4">
                Start with Python
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;