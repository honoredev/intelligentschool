"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Lock, Play, Clock, Trophy, Code } from "lucide-react";
import Link from "next/link";

const JavaScriptPath = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const courses = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      level: "Beginner",
      lessons: [
        { id: 1, title: "Introduction to JavaScript", duration: "15 min", type: "lesson" },
        { id: 2, title: "Variables and Data Types", duration: "20 min", type: "lesson" },
        { id: 3, title: "Basic Operations", duration: "25 min", type: "practice" },
        { id: 4, title: "Functions Basics", duration: "30 min", type: "lesson" },
        { id: 5, title: "Build a Calculator", duration: "45 min", type: "project" }
      ],
      description: "Learn the core concepts of JavaScript programming",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "Control Flow & Logic",
      level: "Beginner",
      lessons: [
        { id: 6, title: "Conditional Statements", duration: "20 min", type: "lesson" },
        { id: 7, title: "Loops and Iteration", duration: "25 min", type: "lesson" },
        { id: 8, title: "Practice: Logic Challenges", duration: "30 min", type: "practice" },
        { id: 9, title: "Build a Number Guessing Game", duration: "40 min", type: "project" }
      ],
      description: "Master decision making and repetition in code",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Arrays & Objects",
      level: "Intermediate",
      lessons: [
        { id: 10, title: "Working with Arrays", duration: "25 min", type: "lesson" },
        { id: 11, title: "Array Methods", duration: "30 min", type: "lesson" },
        { id: 12, title: "Objects and Properties", duration: "25 min", type: "lesson" },
        { id: 13, title: "Practice: Data Manipulation", duration: "35 min", type: "practice" },
        { id: 14, title: "Build a Todo List", duration: "60 min", type: "project" }
      ],
      description: "Handle complex data structures effectively",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "DOM Manipulation",
      level: "Intermediate",
      lessons: [
        { id: 15, title: "Understanding the DOM", duration: "20 min", type: "lesson" },
        { id: 16, title: "Selecting Elements", duration: "25 min", type: "lesson" },
        { id: 17, title: "Event Handling", duration: "30 min", type: "lesson" },
        { id: 18, title: "Practice: Interactive Elements", duration: "40 min", type: "practice" },
        { id: 19, title: "Build an Interactive Website", duration: "90 min", type: "project" }
      ],
      description: "Make your web pages interactive and dynamic",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Advanced JavaScript",
      level: "Advanced",
      lessons: [
        { id: 20, title: "Async Programming", duration: "35 min", type: "lesson" },
        { id: 21, title: "Promises and Fetch API", duration: "40 min", type: "lesson" },
        { id: 22, title: "ES6+ Features", duration: "45 min", type: "lesson" },
        { id: 23, title: "Practice: API Integration", duration: "50 min", type: "practice" },
        { id: 24, title: "Build a Weather App", duration: "120 min", type: "project" }
      ],
      description: "Master modern JavaScript and asynchronous programming",
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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-4">
            JavaScript Learning Path
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master JavaScript from basics to advanced concepts. Build real projects and gain practical experience.
          </p>
          <div className="flex justify-center gap-8 mt-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>4-6 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              <span>8 projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>24 lessons</span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {courses.map((course, courseIndex) => (
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
                  {course.lessons.map((lesson, lessonIndex) => {
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
                          <Link href={`/learn/javascript/lesson/${lesson.id}`}>
                            <Button 
                              size="sm" 
                              className={`bg-gradient-to-r ${course.color} text-white hover:scale-105 transition-transform`}
                            >
                              {lesson.type === "project" ? "Build" : "Start"}
                            </Button>
                          </Link>
                        )}

                        {isCompleted && (
                          <Link href={`/learn/javascript/lesson/${lesson.id}`}>
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                            >
                              Review
                            </Button>
                          </Link>
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
              Begin your JavaScript journey with the fundamentals and work your way up to advanced concepts.
            </p>
            <Link href="/learn/javascript/lesson/1">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-transform">
                Start First Lesson
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptPath;