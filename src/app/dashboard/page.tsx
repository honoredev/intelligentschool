"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  FileText,
  UserCheck,
  Settings,
  TrendingUp,
  Award,
  Calendar,
  Star,
  AlertTriangle,
  Bell,
  Download,
  User,
  Thermometer,
  Video,
  School,
  ClipboardList,
  Plus,
  Menu,
  X
} from "lucide-react";
import EnvironmentStatus from "../../../components/EnvironmentStatus";
import ESP32Dashboard from "../../../components/ESP32Dashboard";
import LiveMonitoring from "../../../components/LiveMonitoring";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { title: "Total Students", value: "1,247", change: "+23", icon: GraduationCap, color: "text-blue-400" },
    { title: "Active Teachers", value: "89", change: "+5", icon: Users, color: "text-green-400" },
    { title: "Classes Today", value: "156", change: "+12", icon: BookOpen, color: "text-purple-400" },
    { title: "Attendance Rate", value: "94.2%", change: "+2.1%", icon: Award, color: "text-yellow-400" }
  ];

  const recentAlerts = [
    { message: "High temperature in Lab 3", type: "warning", time: "5 min ago" },
    { message: "Low attendance in Grade 10A", type: "info", time: "15 min ago" },
    { message: "Security camera offline", type: "error", time: "1 hour ago" }
  ];

  const recentActivities = [
    { student: "Alice Uwimana", activity: "Submitted Math Assignment", grade: "A", time: "10 min ago" },
    { student: "John Mugisha", activity: "Completed Physics Quiz", grade: "B+", time: "25 min ago" },
    { student: "Sarah Mukamana", activity: "Attended Chemistry Lab", grade: "A-", time: "1 hour ago" },
    { student: "David Nkurunziza", activity: "Submitted History Essay", grade: "B", time: "2 hours ago" }
  ];

  const performanceData = [
    { subject: "Mathematics", average: 85, trend: "+3%" },
    { subject: "Science", average: 78, trend: "+1%" },
    { subject: "English", average: 82, trend: "+5%" },
    { subject: "History", average: 76, trend: "-2%" },
    { subject: "Geography", average: 80, trend: "+4%" }
  ];

  const teacherPerformance = [
    { name: "Dr. Marie Uwase", subject: "Mathematics", rating: 4.8, students: 156 },
    { name: "Prof. Jean Hakizimana", subject: "Physics", rating: 4.6, students: 134 },
    { name: "Ms. Grace Mukamana", subject: "Chemistry", rating: 4.7, students: 142 },
    { name: "Mr. Paul Nshimiyimana", subject: "Biology", rating: 4.5, students: 128 }
  ];

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "students", label: "Students", icon: GraduationCap },
    { id: "teachers", label: "Teachers", icon: Users },
    { id: "classes", label: "Classes", icon: BookOpen },
    { id: "grades", label: "Grades", icon: Award },
    { id: "environment", label: "Environment", icon: Thermometer },
    { id: "monitoring", label: "Live Monitoring", icon: Video },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "users", label: "Users", icon: UserCheck },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm font-medium mt-1 ${stat.color}`}>{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <IconComponent className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EnvironmentStatus />
        
        {/* Subject Performance Chart */}
        <Card className="bg-white shadow-lg border-0 lg:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900 flex items-center justify-between">
              Subject Performance Overview
              <Button size="sm" variant="outline" className="text-gray-600">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{subject.subject}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{subject.average}%</span>
                      <span className={`text-sm font-medium ${
                        subject.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>{subject.trend}</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full">
                    <div 
                      className="h-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${subject.average}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Teacher Performance & System Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Teacher Performance */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900">Top Teachers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teacherPerformance.map((teacher, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{teacher.name}</p>
                    <p className="text-sm text-gray-600">{teacher.subject} • {teacher.students} students</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-gray-900">{teacher.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card className="bg-white shadow-lg border-0">
          <CardHeader className="pb-4">
            <CardTitle className="text-gray-900 flex items-center">
              <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
              System Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg border ${
                  alert.type === 'error' ? 'bg-red-50 border-red-200' :
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-blue-50 border-blue-200'
                }`}>
                  <div>
                    <p className="font-medium text-gray-900">{alert.message}</p>
                    <p className="text-sm text-gray-600">{alert.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.type === 'error' ? 'bg-red-100 text-red-800' :
                    alert.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {alert.type}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Student Activities */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-gray-900">Recent Student Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Student Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Activity</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Grade</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities.map((activity, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900">{activity.student}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.activity}</td>
                    <td className="py-3 px-4 font-medium text-gray-900">{activity.grade}</td>
                    <td className="py-3 px-4 text-gray-600">{activity.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPlaceholder = (title: string, icon: any) => {
    if (title === "Student Management") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </div>
          
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle>All Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Student ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Class</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Age</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Average Grade</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Attendance</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "STU001", name: "Alice Uwimana", class: "Grade 10A", age: 16, grade: "A", attendance: "96%", status: "Active" },
                      { id: "STU002", name: "John Mugisha", class: "Grade 10B", age: 15, grade: "B+", attendance: "92%", status: "Active" },
                      { id: "STU003", name: "Sarah Mukamana", class: "Grade 11A", age: 17, grade: "A-", attendance: "98%", status: "Active" },
                      { id: "STU004", name: "David Nkurunziza", class: "Grade 9C", age: 14, grade: "B", attendance: "89%", status: "Active" },
                      { id: "STU005", name: "Grace Uwase", class: "Grade 12A", age: 18, grade: "A+", attendance: "100%", status: "Active" },
                      { id: "STU006", name: "Paul Hakizimana", class: "Grade 10A", age: 16, grade: "C+", attendance: "85%", status: "Warning" },
                      { id: "STU007", name: "Marie Nyiramana", class: "Grade 11B", age: 17, grade: "B+", attendance: "94%", status: "Active" },
                      { id: "STU008", name: "Jean Nshimiyimana", class: "Grade 9A", age: 15, grade: "A-", attendance: "91%", status: "Active" }
                    ].map((student, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{student.id}</td>
                        <td className="py-3 px-4 text-gray-900">{student.name}</td>
                        <td className="py-3 px-4 text-gray-600">{student.class}</td>
                        <td className="py-3 px-4 text-gray-600">{student.age}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            student.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                            student.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {student.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{student.attendance}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            student.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    
    if (title === "Teacher Management") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Teacher Management</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Teacher
            </Button>
          </div>
          
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle>All Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Teacher ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Experience</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Classes</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Rating</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "TCH001", name: "Dr. Marie Uwase", subject: "Mathematics", experience: "8 years", classes: 5, rating: 4.8, status: "Active" },
                      { id: "TCH002", name: "Prof. Jean Hakizimana", subject: "Physics", experience: "12 years", classes: 4, rating: 4.6, status: "Active" },
                      { id: "TCH003", name: "Ms. Grace Mukamana", subject: "Chemistry", experience: "6 years", classes: 4, rating: 4.7, status: "Active" },
                      { id: "TCH004", name: "Mr. Paul Nshimiyimana", subject: "Biology", experience: "10 years", classes: 3, rating: 4.5, status: "Active" },
                      { id: "TCH005", name: "Mrs. Alice Nyiramana", subject: "English", experience: "15 years", classes: 6, rating: 4.9, status: "Active" },
                      { id: "TCH006", name: "Mr. David Mugisha", subject: "History", experience: "7 years", classes: 4, rating: 4.3, status: "On Leave" },
                      { id: "TCH007", name: "Ms. Sarah Uwimana", subject: "Geography", experience: "5 years", classes: 3, rating: 4.4, status: "Active" },
                      { id: "TCH008", name: "Dr. John Nkurunziza", subject: "Computer Science", experience: "9 years", classes: 5, rating: 4.7, status: "Active" }
                    ].map((teacher, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{teacher.id}</td>
                        <td className="py-3 px-4 text-gray-900">{teacher.name}</td>
                        <td className="py-3 px-4 text-gray-600">{teacher.subject}</td>
                        <td className="py-3 px-4 text-gray-600">{teacher.experience}</td>
                        <td className="py-3 px-4 text-gray-600">{teacher.classes}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="font-medium">{teacher.rating}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            teacher.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {teacher.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    
    if (title === "Class Management") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Class Management</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Class
            </Button>
          </div>
          
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle>All Classes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Class ID</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Class Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Teacher</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Students</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Schedule</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "CLS001", name: "Grade 10A - Mathematics", teacher: "Dr. Marie Uwase", subject: "Mathematics", students: 32, schedule: "Mon, Wed, Fri 9:00 AM", room: "Room 101" },
                      { id: "CLS002", name: "Grade 11B - Physics", teacher: "Prof. Jean Hakizimana", subject: "Physics", students: 28, schedule: "Tue, Thu 10:30 AM", room: "Lab 201" },
                      { id: "CLS003", name: "Grade 12A - Chemistry", teacher: "Ms. Grace Mukamana", subject: "Chemistry", students: 25, schedule: "Mon, Wed 2:00 PM", room: "Lab 202" },
                      { id: "CLS004", name: "Grade 9C - Biology", teacher: "Mr. Paul Nshimiyimana", subject: "Biology", students: 30, schedule: "Tue, Fri 11:00 AM", room: "Lab 203" },
                      { id: "CLS005", name: "Grade 10B - English", teacher: "Mrs. Alice Nyiramana", subject: "English", students: 35, schedule: "Daily 8:00 AM", room: "Room 102" },
                      { id: "CLS006", name: "Grade 11A - History", teacher: "Mr. David Mugisha", subject: "History", students: 27, schedule: "Mon, Thu 1:00 PM", room: "Room 103" },
                      { id: "CLS007", name: "Grade 12B - Geography", teacher: "Ms. Sarah Uwimana", subject: "Geography", students: 24, schedule: "Wed, Fri 3:00 PM", room: "Room 104" },
                      { id: "CLS008", name: "Grade 10A - Computer Science", teacher: "Dr. John Nkurunziza", subject: "Computer Science", students: 20, schedule: "Tue, Thu 2:30 PM", room: "Computer Lab" }
                    ].map((classItem, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-blue-600">{classItem.id}</td>
                        <td className="py-3 px-4 text-gray-900">{classItem.name}</td>
                        <td className="py-3 px-4 text-gray-600">{classItem.teacher}</td>
                        <td className="py-3 px-4 text-gray-600">{classItem.subject}</td>
                        <td className="py-3 px-4 text-gray-600">{classItem.students}</td>
                        <td className="py-3 px-4 text-gray-600">{classItem.schedule}</td>
                        <td className="py-3 px-4 text-gray-600">{classItem.room}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    
    if (title === "Grade Management") {
      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Grade Management</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Grade
            </Button>
          </div>
          
          <Card className="bg-white shadow-lg border-0">
            <CardHeader>
              <CardTitle>Recent Grades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Student</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Subject</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Assignment</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Grade</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Points</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Teacher</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { student: "Alice Uwimana", subject: "Mathematics", assignment: "Algebra Quiz", grade: "A", points: "95/100", date: "2024-01-15", teacher: "Dr. Marie Uwase" },
                      { student: "John Mugisha", subject: "Physics", assignment: "Motion Lab Report", grade: "B+", points: "87/100", date: "2024-01-14", teacher: "Prof. Jean Hakizimana" },
                      { student: "Sarah Mukamana", subject: "Chemistry", assignment: "Organic Chemistry Test", grade: "A-", points: "92/100", date: "2024-01-13", teacher: "Ms. Grace Mukamana" },
                      { student: "David Nkurunziza", subject: "Biology", assignment: "Cell Structure Essay", grade: "B", points: "83/100", date: "2024-01-12", teacher: "Mr. Paul Nshimiyimana" },
                      { student: "Grace Uwase", subject: "English", assignment: "Literature Analysis", grade: "A+", points: "98/100", date: "2024-01-11", teacher: "Mrs. Alice Nyiramana" },
                      { student: "Paul Hakizimana", subject: "History", assignment: "World War II Project", grade: "C+", points: "78/100", date: "2024-01-10", teacher: "Mr. David Mugisha" },
                      { student: "Marie Nyiramana", subject: "Geography", assignment: "Climate Change Report", grade: "B+", points: "88/100", date: "2024-01-09", teacher: "Ms. Sarah Uwimana" },
                      { student: "Jean Nshimiyimana", subject: "Computer Science", assignment: "Python Programming", grade: "A-", points: "91/100", date: "2024-01-08", teacher: "Dr. John Nkurunziza" }
                    ].map((grade, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{grade.student}</td>
                        <td className="py-3 px-4 text-gray-600">{grade.subject}</td>
                        <td className="py-3 px-4 text-gray-600">{grade.assignment}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                            grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {grade.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium text-gray-900">{grade.points}</td>
                        <td className="py-3 px-4 text-gray-600">{grade.date}</td>
                        <td className="py-3 px-4 text-gray-600">{grade.teacher}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }
    
    return (
      <div className="text-center py-12">
        {React.createElement(icon, { className: "w-16 h-16 text-gray-400 mx-auto mb-4" })}
        <h3 className="text-xl text-gray-700 mb-2">{title}</h3>
        <p className="text-gray-500">This section is under development...</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`w-64 bg-gray-900 text-white flex-shrink-0 fixed lg:relative inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:block`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-blue-400">Intelligent School</h1>
              <p className="text-gray-400 text-sm mt-1">Smart Academic Management</p>
            </div>
            <button 
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <nav className="mt-8">
          {sidebarItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-6 py-3 text-left transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-500 text-white font-medium"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <IconComponent className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button 
                className="lg:hidden mr-4 text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Intelligent School Academic Management System</h1>
                <p className="text-gray-600 mt-1 hidden sm:block">Empowering education through smart monitoring.</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Button variant="outline" size="sm" className="text-gray-600 hidden sm:flex">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm" className="text-gray-600 sm:hidden">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium hidden sm:block">Admin User</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6">
          {activeSection === "dashboard" && renderDashboard()}
          {activeSection === "students" && renderPlaceholder("Student Management", GraduationCap)}
          {activeSection === "teachers" && renderPlaceholder("Teacher Management", Users)}
          {activeSection === "classes" && renderPlaceholder("Class Management", BookOpen)}
          {activeSection === "grades" && renderPlaceholder("Grade Management", Award)}
          {activeSection === "environment" && <ESP32Dashboard />}
          {activeSection === "monitoring" && <LiveMonitoring />}
          {activeSection === "reports" && renderPlaceholder("Reports & Analytics", FileText)}
          {activeSection === "users" && renderPlaceholder("User Management", UserCheck)}
          {activeSection === "settings" && renderPlaceholder("System Settings", Settings)}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;