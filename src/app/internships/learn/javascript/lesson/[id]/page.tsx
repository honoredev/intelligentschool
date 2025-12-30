"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Play, Code, Trophy } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const LessonPage = () => {
  const params = useParams();
  const lessonId = parseInt(params.id as string);
  const [currentStep, setCurrentStep] = useState(0);
  const [userCode, setUserCode] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const lessons = {
    1: {
      title: "Introduction to JavaScript",
      type: "lesson",
      duration: "15 min",
      steps: [
        {
          title: "What is JavaScript?",
          content: "JavaScript is a programming language that makes websites interactive. It's used by 97% of all websites!",
          code: `// This is your first JavaScript comment
console.log("Hello, World!");`,
          explanation: "The console.log() function displays messages in the browser's console."
        },
        {
          title: "Running JavaScript",
          content: "JavaScript can run in browsers and on servers. Let's start with the basics.",
          code: `// Try changing this message
console.log("Welcome to JavaScript!");`,
          explanation: "Change the text inside the quotes and see what happens!"
        },
        {
          title: "Your First Program",
          content: "Now it's your turn! Write a program that displays your name.",
          code: `// Write your code here
`,
          explanation: "Use console.log() to display your name",
          interactive: true,
          solution: `console.log("My name is John");`
        }
      ]
    },
    2: {
      title: "Variables and Data Types",
      type: "lesson",
      duration: "20 min",
      steps: [
        {
          title: "What are Variables?",
          content: "Variables are containers that store data values. Think of them as labeled boxes.",
          code: `let name = "Alice";
let age = 25;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);`,
          explanation: "We use 'let' to create variables that can change their values."
        },
        {
          title: "Different Data Types",
          content: "JavaScript has several data types: strings (text), numbers, and booleans (true/false).",
          code: `let message = "Hello World";  // String
let count = 42;               // Number
let isActive = false;         // Boolean

console.log(typeof message);
console.log(typeof count);
console.log(typeof isActive);`,
          explanation: "The 'typeof' operator tells us what type of data we're working with."
        },
        {
          title: "Practice: Create Variables",
          content: "Create three variables: your favorite color, your age, and whether you like pizza.",
          code: `// Create your variables here
`,
          explanation: "Remember to use descriptive names for your variables!",
          interactive: true,
          solution: `let favoriteColor = "blue";
let myAge = 20;
let likesPizza = true;

console.log(favoriteColor);
console.log(myAge);
console.log(likesPizza);`
        }
      ]
    }
  };

  const currentLesson = lessons[lessonId as keyof typeof lessons];
  const currentStepData = currentLesson?.steps[currentStep];

  const handleNext = () => {
    if (currentStep < currentLesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const runCode = () => {
    try {
      // In a real implementation, you'd use a code execution service
      console.log("Code executed:", userCode);
      alert("Code executed! Check the console for output.");
    } catch (error) {
      alert("Error in code: " + error);
    }
  };

  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-transparent py-8 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Lesson Not Found</h1>
          <Link href="/learn/javascript">
            <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Back to Course
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-transparent py-8 px-4 flex items-center justify-center">
        <Card className="bg-white/10 backdrop-blur-sm border-green-500/30 max-w-2xl w-full">
          <CardContent className="text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-4">Lesson Complete!</h1>
            <p className="text-gray-300 mb-6">
              Great job completing "{currentLesson.title}". You're making excellent progress!
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/learn/javascript">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  Back to Course
                </Button>
              </Link>
              {lessonId < 24 && (
                <Link href={`/learn/javascript/lesson/${lessonId + 1}`}>
                  <Button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    Next Lesson
                  </Button>
                </Link>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/learn/javascript">
            <Button variant="outline" className="border-yellow-400/30 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Course
            </Button>
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">{currentLesson.title}</h1>
            <p className="text-gray-300 text-sm">{currentLesson.duration} • Step {currentStep + 1} of {currentLesson.steps.length}</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / currentLesson.steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Content */}
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <CardTitle className="text-white text-xl">{currentStepData.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{currentStepData.content}</p>
              {currentStepData.explanation && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-300 text-sm">{currentStepData.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Code Editor */}
          <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Code Editor
                </CardTitle>
                <Button 
                  onClick={runCode}
                  size="sm"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Run
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                {currentStepData.interactive ? (
                  <textarea
                    value={userCode}
                    onChange={(e) => setUserCode(e.target.value)}
                    placeholder={currentStepData.code}
                    className="w-full h-32 bg-transparent text-green-400 resize-none outline-none"
                  />
                ) : (
                  <pre className="text-green-400 whitespace-pre-wrap">{currentStepData.code}</pre>
                )}
              </div>
              {currentStepData.interactive && currentStepData.solution && (
                <Button 
                  onClick={() => setUserCode(currentStepData.solution || "")}
                  size="sm"
                  variant="outline"
                  className="mt-4 border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/10"
                >
                  Show Solution
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            variant="outline"
            className="border-yellow-400/30 text-white hover:bg-white/10 disabled:opacity-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button 
            onClick={handleNext}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:scale-105 transition-transform"
          >
            {currentStep === currentLesson.steps.length - 1 ? "Complete Lesson" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;