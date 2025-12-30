"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Play, Clock, Trophy, Code } from "lucide-react";
import Link from "next/link";

const PythonPath = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const courses = [
    {
      id: 1,
      title: "Python Basics",
      level: "Beginner",
      lessons: [
        { id: 1, title: "Introduction to Python", duration: "15 min", type: "lesson" },
        { id: 2, title: "Variables and Data Types", duration: "20 min", type: "lesson" },
        { id: 3, title: "Basic Input/Output", duration: "25 min", type: "practice" },
        { id: 4, title: "Build a Simple Calculator", duration: "45 min", type: "project" }
      ],
      description: "Learn Python fundamentals and syntax",
      color: "from-blue-500 to-green-500"
    },
    {
      id: 2,
      title: "Control Structures",
      level: "Beginner",
      lessons: [
        { id: 5, title: "If Statements", duration: "20 min", type: "lesson" },
        { id: 6, title: "Loops in Python", duration: "25 min", type: "lesson" },
        { id: 7, title: "Practice: Logic Problems", duration: "30 min", type: "practice" },
        { id: 8, title: "Build a Password Generator", duration: "40 min", type: "project" }
      ],
      description: "Master decision making and loops",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Data Structures",
      level: "Intermediate",
      lessons: [
        { id: 9, title: "Lists and Tuples", duration: "25 min", type: "lesson" },
        { id: 10, title: "Dictionaries and Sets", duration: "30 min", type: "lesson" },
        { id: 11, title: "List Comprehensions", duration: "25 min", type: "lesson" },
        { id: 12, title: "Practice: Data Processing", duration: "35 min", type: "practice" },
        { id: 13, title: "Build a Contact Manager", duration: "60 min", type: "project" }
      ],
      description: "Work with Python's powerful data structures",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Functions & Modules",
      level: "Intermediate",
      lessons: [
        { id: 14, title: "Defining Functions", duration: "20 min", type: "lesson" },
        { id: 15, title: "Function Parameters", duration: "25 min", type: "lesson" },
        { id: 16, title: "Modules and Packages", duration: "30 min", type: "lesson" },
        { id: 17, title: "Practice: Code Organization", duration: "40 min", type: "practice" },
        { id: 18, title: "Build a Text Analyzer", duration: "90 min", type: "project" }
      ],
      description: "Organize code with functions and modules",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Advanced Python",
      level: "Advanced",
      lessons: [
        { id: 19, title: "Object-Oriented Programming", duration: "35 min", type: "lesson" },
        { id: 20, title: "File Handling", duration: "30 min", type: "lesson" },
        { id: 21, title: "Error Handling", duration: "25 min", type: "lesson" },
        { id: 22, title: "Working with APIs", duration: "40 min", type: "lesson" },
        { id: 23, title: "Practice: Advanced Concepts", duration: "50 min", type: "practice" },
        { id: 24, title: "Build a Data Analysis Tool", duration: "120 min", type: "project" }
      ],
      description: "Master advanced Python concepts and real-world applications",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const isLessonUnlocked = (lessonId: number) => {
    if (lessonId === 1) return true;
    return completedLessons.includes(lessonId - 1);
  };

  const getLessonIcon = (lesson: any) => {
    if (completedLessons.includes(lesson.id)) {
      return <CheckCircle className="w-5 h-5 text-green-400" />;
    }
    if (!isLessonUnlocked(lesson.id)) {
      return <Lock className="w-5 h-5 text-gray-500" />;
    }
    
    switch (lesson.type) {
      case "project":
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case "practice":
        return <Code className="w-5 h-5 text-blue-400" />;
      default:
        return <Play className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent mb-4">
            Python Learning Path
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn Python from scratch to advanced level. Perfect for data science, web development, and automation.
          </p>
          <div className="flex justify-center gap-8 mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>5-7 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>10 projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>24 lessons</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {courses.map((course) => (
            <Card key={course.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl mb-2">{course.title}</CardTitle>
                    <p className="text-gray-300">{course.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${course.color} text-white text-sm font-medium`}>
                    {course.level}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  {course.lessons.map((lesson) => {
                    const isUnlocked = isLessonUnlocked(lesson.id);
                    const isCompleted = completedLessons.includes(lesson.id);
                    
                    return (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                          isCompleted
                            ? "bg-green-500/10 border-green-500/30"
                            : isUnlocked
                            ? "bg-white/5 border-yellow-400/20 hover:bg-white/10"
                            : "bg-gray-500/10 border-gray-500/20"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          {getLessonIcon(lesson)}
                          <div>
                            <h4 className={`font-medium ${isUnlocked ? "text-white" : "text-gray-500"}`}>
                              {lesson.title}
                            </h4>
                            <div className="flex items-center gap-4 text-sm text-gray-400">
                              <span>{lesson.duration}</span>
                              <span className="capitalize">{lesson.type}</span>
                            </div>
                          </div>
                        </div>

                        {isUnlocked && !isCompleted && (
                          <Button 
                            size="sm" 
                            className={`bg-gradient-to-r ${course.color} text-white hover:scale-105 transition-transform`}
                          >
                            {lesson.type === "project" ? "Build" : "Start"}
                          </Button>
                        )}

                        {isCompleted && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                          >
                            Review
                          </Button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm border-yellow-400/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start?</h3>
            <p className="text-gray-300 mb-6">
              Begin your Python journey and unlock the power of one of the world's most popular programming languages.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-transform">
              Start First Lesson
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonPath;