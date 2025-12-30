"use client";
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Award, Star, Filter } from "lucide-react";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = ["All", "Web Development", "Data Science", "Mobile Development", "Cloud & DevOps", "AI & Machine Learning"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      description: "Master React, Node.js, MongoDB, and modern web development practices",
      category: "Web Development",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      students: 2847,
      rating: 4.9,
      price: "Free",
      instructor: "Sarah Mitchell",
      modules: 45,
      projects: 8,
      image: "/web-dev.jpg"
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      description: "Python, Pandas, Scikit-learn, TensorFlow, and real-world data projects",
      category: "Data Science",
      level: "Intermediate",
      duration: "16 weeks",
      students: 1923,
      rating: 4.8,
      price: "Free",
      instructor: "Dr. Michael Chen",
      modules: 52,
      projects: 12,
      image: "/data-science.jpg"
    },
    {
      id: 3,
      title: "React Native Mobile Development",
      description: "Build cross-platform mobile apps with React Native and Expo",
      category: "Mobile Development",
      level: "Beginner",
      duration: "10 weeks",
      students: 1456,
      rating: 4.7,
      price: "Free",
      instructor: "Emma Rodriguez",
      modules: 38,
      projects: 6,
      image: "/mobile-dev.jpg"
    },
    {
      id: 4,
      title: "Cloud Computing with AWS",
      description: "Master AWS services, Docker, Kubernetes, and cloud architecture",
      category: "Cloud & DevOps",
      level: "Advanced",
      duration: "14 weeks",
      students: 987,
      rating: 4.9,
      price: "Free",
      instructor: "David Kim",
      modules: 48,
      projects: 10,
      image: "/cloud.jpg"
    },
    {
      id: 5,
      title: "AI & Deep Learning Fundamentals",
      description: "Neural networks, deep learning, and AI applications with PyTorch",
      category: "AI & Machine Learning",
      level: "Intermediate",
      duration: "18 weeks",
      students: 756,
      rating: 4.8,
      price: "Free",
      instructor: "Dr. Lisa Wang",
      modules: 56,
      projects: 15,
      image: "/ai.jpg"
    },
    {
      id: 6,
      title: "Frontend Development Mastery",
      description: "HTML5, CSS3, JavaScript ES6+, and modern frontend frameworks",
      category: "Web Development",
      level: "Beginner",
      duration: "8 weeks",
      students: 3421,
      rating: 4.6,
      price: "Free",
      instructor: "James Wilson",
      modules: 32,
      projects: 5,
      image: "/frontend.jpg"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const categoryMatch = selectedCategory === "All" || course.category === selectedCategory;
    const levelMatch = selectedLevel === "All" || course.level.includes(selectedLevel);
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Free Online Courses
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master in-demand skills with our comprehensive, industry-aligned courses. 
            Learn from experts and build real-world projects.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">Category:</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 text-white border border-yellow-400/30 rounded-lg px-3 py-1"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">Level:</span>
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-white/10 text-white border border-yellow-400/30 rounded-lg px-3 py-1"
            >
              {levels.map(level => (
                <option key={level} value={level} className="bg-gray-800">
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="bg-white/10 backdrop-blur-sm border-yellow-400/30 hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-yellow-600/20 to-yellow-500/20 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-yellow-400" />
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full">
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-white text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-gray-300 text-sm">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{course.modules} modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>{course.projects} projects</span>
                  </div>
                </div>

                <div className="border-t border-yellow-400/20 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-300 text-sm">Instructor: {course.instructor}</span>
                    <span className="text-2xl font-bold text-green-400">{course.price}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with our courses. 
            All courses are completely free and include lifetime access.
          </p>
          <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-bold px-8 py-4 text-lg rounded-3xl hover:scale-105 transition-transform">
            Browse All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
