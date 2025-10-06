'use client'
import { useState } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Coffee, Code, GraduationCap } from 'lucide-react';
import { Navbar } from './components/Navbar';





export default function Home() {
  const [showAll, setShowAll] = useState(false);
  
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      
      <Navbar />
      <section id="home" className="pt-24 px-4 py-24">
        <div className="max-w-7xl mx-auto mt-16">
          <h1 className="text-4xl font-bold text-center text-gray-100">Parsa Bazrpash Amalgar</h1>
          <h2 className="text-2xl text-center mt-2 text-custom-blue">Software Engineering Student</h2>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden ring-4 ring-custom-blue">
                <Image
                  src="/images/Prof1.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-100">Who Am I?</h3>
              <p className="text-gray-400">
              I&apos;m a Software Engineering student at The University of Texas at Dallas,
                passionate about full-stack development and user-friendly applications.
                Skilled in C++, Java, Python, and modern web technologies like JavaScript,
                React.js, Next.js, TypeScript, Node.js, and MongoDB. I bring a strong foundation
                in both front-end and back-end development, with a growing interest in AI.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-100">Personal Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>prsawork1@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Dallas, Texas, United States</span>
                </div>
                <p>Education: University of Texas at Dallas</p>
                <p>Languages: English, Persian</p>
                <br></br>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">My Resume</h2>
        <div className="grid md:grid-cols-3 gap-12">
        

{/* Professional Experience Column */}
<div className="space-y-8 relative">
  {/* Animated background elements */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-10 left-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="relative z-10">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-blue-500 rounded-full"></div>
      <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text">
        Professional Experience
      </h3>
    </div>
    
    <div className="space-y-8 relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 rounded-full opacity-30"></div>
      
      {/* Always visible experiences */}
      {[
        {
          logo: "/logos/starbucks.png",
          company: "Starbucks",
          position: "Barista",
          period: "01/2024 - Present",
          status: "Current",
          color: "from-green-600 to-teal-500",
          glowColor: "shadow-green-600/20",
          responsibilities: [
            "Served 100+ customers daily while maintaining high service standards in fast-paced shifts",
            "Collaborated closely with teammates to streamline peak-hour operations"
          ]
        },{
          logo: "/logos/mercatalyst.png",
          company: "Mercatalyst",
          position: "Software Engineer Intern",
          period: "05/2025 - 10/2025",
          status: "Completed",
          color: "from-blue-500 to-cyan-500",
          glowColor: "shadow-blue-500/20",
          responsibilities: []
        },
        {
          logo: "/logos/aiaa logo new.avif",
          company: "AIAA UT Dallas",
          position: "Frontend Web Developer",
          period: "02/2025 - 05/2025",
          status: "Completed",
          color: "from-blue-500 to-cyan-500",
          glowColor: "shadow-blue-500/20",
          responsibilities: []
        }
      ].map((exp, index) => (
        <div
          key={exp.company}
          className="relative group"
          style={{
            animationDelay: `${index * 200}ms`
          }}
        >
          {/* Timeline dot */}
          <div className={`absolute left-4 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-2 border-gray-900 group-hover:scale-125 transition-all duration-300 z-20`}></div>
          
          {/* Experience card */}
          <div className={`ml-14 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:${exp.glowColor} hover:transform hover:scale-[1.02]`}>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
            </div>
            
            {/* Status badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                exp.status === 'Current' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {exp.status}
              </span>
            </div>
            
            <div className="flex items-start gap-4 relative z-10">
              {/* Logo */}
              <div className={`w-16 h-16 relative rounded-xl overflow-hidden ring-2 ring-gray-600 group-hover:ring-opacity-50 transition-all duration-300`}>
                <Image 
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 pr-20">
                  {exp.position}
                </h4>
                <p className="text-gray-300 font-medium mt-1">{exp.company}</p>
                <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                
                {/* Responsibilities */}
                {exp.responsibilities.length > 0 && (
                  <ul className="list-disc ml-4 mt-3 text-gray-400 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
          </div>
        </div>
      ))}

      {/* Expandable section */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          showAll ? 'max-h-[3000px]' : 'max-h-0'
        }`}
      >
        <div className="space-y-8 pt-2">
          {[
            {
              logo: "/logos/NebulaLabs.png",
              company: "Nebula Labs",
              position: "UI/UX Designer",
              period: "10/2024 - 02/2025",
              status: "Completed",
              color: "from-purple-500 to-pink-500",
              glowColor: "shadow-purple-500/20",
              responsibilities: [
                "Designed responsive UI/UX for Trends, a website for the UTD student community to select the best professors and compare them using Figma, collaborating with developers to improve usability for 2,000+ users."
              ]
            },
            {
              logo: "/logos/AIMD.webp",
              company: "AIMD",
              position: "Full Stack Developer",
              period: "10/2024 - 02/2025",
              status: "Completed",
              color: "from-indigo-500 to-purple-500",
              glowColor: "shadow-indigo-500/20",
              responsibilities: [
                "Developed a full-stack web-based medical appointment app named (Doc Alert) with secure login, real-time reminders, and provider search, streamlining scheduling and communication for patients."
              ]
            },
            {
              logo: "/logos/icode.jpeg",
              company: "iCode School Franchise",
              position: "Computer Science Instructor",
              period: "03/2024 - 08/2024",
              status: "Completed",
              color: "from-orange-500 to-red-500",
              glowColor: "shadow-orange-500/20",
              responsibilities: [
                "Taught 200+ K–12 students coding, robotics, game development (Scratch, Python), and digital media skills, including green screen, video editing, and 3D design."
              ]
            }
          ].map((exp, index) => (
            <div
              key={exp.company}
              className="relative group"
              style={{
                animationDelay: `${(index + 3) * 200}ms`
              }}
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-2 border-gray-900 group-hover:scale-125 transition-all duration-300 z-20`}></div>
              
              {/* Experience card */}
              <div className={`ml-14 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:${exp.glowColor} hover:transform hover:scale-[1.02]`}>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
                </div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    exp.status === 'Current' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {exp.status}
                  </span>
                </div>
                
                <div className="flex items-start gap-4 relative z-10">
                  {/* Logo */}
                  <div className={`w-16 h-16 relative rounded-xl overflow-hidden ring-2 ring-gray-600 group-hover:ring-opacity-50 transition-all duration-300`}>
                    <Image 
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 pr-20">
                      {exp.position}
                    </h4>
                    <p className="text-gray-300 font-medium mt-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                    
                    {/* Responsibilities */}
                    {exp.responsibilities.length > 0 && (
                      <ul className="list-disc ml-4 mt-3 text-gray-400 space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm">{resp}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* See More / See Less Button */}
      <div className="ml-14">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center justify-center gap-2 w-full px-6 py-4 
                     bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 active:from-gray-800 active:to-gray-700
                     text-white font-medium rounded-2xl
                     transition-all duration-300 ease-in-out
                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
                     shadow-lg hover:shadow-xl hover:shadow-gray-500/20 hover:transform hover:scale-[1.02]
                     border border-gray-600/50 hover:border-gray-500"
        >
          <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
            {showAll ? 'See Less ▲' : 'See More (+3) ▼'}
          </span>
        </button>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span>Professional Growth Journey</span>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  </div>
</div>


          {/* Education Column */}

<div className="space-y-8 relative">
  {/* Animated background elements */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="relative z-10">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
      <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text">
        Educational Journey
      </h3>
    </div>
    
    <div className="space-y-8 relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
      
      {[
        {
          logo: "/logos/utdlogo.png",
          school: "University of Texas at Dallas",
          degree: "Bachelor's, Software Engineering",
          period: "08/2024 - 05/2026",
          gpa: "3.67",
          status: "Current",
          color: "from-orange-500 to-red-500",
          glowColor: "shadow-orange-500/20"
        },
        {
          logo: "/logos/dallascollege.png",
          school: "Dallas College",
          degree: "Associate's, Software Engineering",
          period: "08/2022 - 08/2024",
          gpa: "3.96",
          status: "Completed",
          color: "from-blue-500 to-cyan-500",
          glowColor: "shadow-blue-500/20"
        },
        {
          logo: "/logos/alborz.jpeg",
          school: "Alborz High School",
          degree: "High School Diploma, Mathematics",
          period: "07/2015 - 06/2021",
          note: "The first modern and largest high school in Asia and the Middle East",
          status: "Completed",
          color: "from-green-500 to-emerald-500",
          glowColor: "shadow-green-500/20"
        }
      ].map((edu, index) => (
        <div
          key={edu.school}
          className="relative group"
          style={{
            animationDelay: `${index * 200}ms`
          }}
        >
          {/* Timeline dot */}
          <div className={`absolute left-4 w-4 h-4 bg-gradient-to-r ${edu.color} rounded-full border-2 border-gray-900 group-hover:scale-125 transition-all duration-300 z-20`}></div>
          
          {/* Education card */}
          <div className={`ml-14 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:${edu.glowColor} hover:transform hover:scale-[1.02]`}>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
            </div>
            
            {/* Status badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                edu.status === 'Current' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}>
                {edu.status}
              </span>
            </div>
            
            <div className="flex items-start gap-4 relative z-10">
              {/* Logo */}
              <div className={`w-16 h-16 relative rounded-xl overflow-hidden ring-2 ring-gray-600 group-hover:ring-opacity-50 transition-all duration-300`}>
                <Image 
                  src={edu.logo}
                  alt={`${edu.school} Logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 pr-20">
                  {edu.school}
                </h4>
                <p className="text-gray-300 font-medium mt-1">{edu.degree}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
                
                {/* GPA Display */}
                {edu.gpa && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-gray-400 text-sm">GPA:</span>
                    <div className={`px-3 py-1 bg-gradient-to-r ${edu.color} rounded-full`}>
                      <span className="text-white font-bold text-sm">{edu.gpa}</span>
                    </div>
                  </div>
                )}
                
                {/* Special note */}
                {edu.note && (
                  <p className="text-gray-400 text-sm mt-3 italic border-l-2 border-gray-600 pl-3">
                    {edu.note}
                  </p>
                )}
              </div>
            </div>
            
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Decorative elements */}
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <span>Academic Excellence Journey</span>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  </div>
</div>

{/* Skills Column */}
<div className="space-y-8 relative">
  {/* Animated background elements */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-10 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="relative z-10">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-12 bg-gradient-to-b from-purple-400 to-cyan-500 rounded-full"></div>
      <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-cyan-500 to-blue-500 bg-clip-text">
        Skills & Expertise
      </h3>
    </div>
    
    <div className="space-y-8 relative">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-500 to-blue-500 rounded-full opacity-30"></div>
      
      {[
        {
          category: "Programming Languages",
          skills: [
            { name: 'Java', color: 'from-orange-500 to-red-500' },
            { name: 'C#', color: 'from-purple-500 to-indigo-500' },
            { name: 'C++', color: 'from-blue-500 to-cyan-500' },
            { name: 'Python', color: 'from-yellow-400 to-green-500' }
          ],
          color: "from-orange-500 to-red-500",
          glowColor: "shadow-orange-500/20",
          icon: "💻"
        },
        {
          category: "Web Technologies",
          skills: [
            { name: 'HTML/CSS', color: 'from-pink-500 to-rose-500' },
            { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
            { name: 'TypeScript', color: 'from-blue-600 to-indigo-600' },
            { name: 'React.js', color: 'from-cyan-400 to-blue-500' },
            { name: 'Next.js', color: 'from-gray-800 to-gray-600' },
            { name: 'Node.js', color: 'from-green-800 to-green-600' }
          ],
          color: "from-cyan-500 to-blue-500",
          glowColor: "shadow-cyan-500/20",
          icon: "🌐"
        },
        {
          category: "Database & Tools",
          skills: [
            { name: 'SQL/MySQL', color: 'from-teal-400 to-blue-500' },
            { name: 'MongoDB', color: 'from-green-800 to-green-600' },
            { name: 'Redis', color: 'from-red-500 to-orange-500' },
            { name: 'Firebase', color: 'from-orange-900 to-orange-600' },
            { name: 'Git/GitHub', color: 'from-purple-500 to-purple-500' },
            { name: 'Figma', color: 'from-blue-400 to-blue-400' },
            { name: 'npm/pm2', color: 'from-yellow-400 to-orange-500' },
          ],
          color: "from-teal-500 to-green-500",
          glowColor: "shadow-teal-500/20",
          icon: "🛠️"
        }
      ].map((category, index) => (
        <div
          key={category.category}
          className="relative group"
          style={{
            animationDelay: `${index * 200}ms`
          }}
        >
          {/* Timeline dot */}
          <div className={`absolute left-4 w-4 h-4 bg-gradient-to-r ${category.color} rounded-full border-2 border-gray-900 group-hover:scale-125 transition-all duration-300 z-20`}></div>
          
          {/* Skills card */}
          <div className={`ml-14 relative overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:${category.glowColor} hover:transform hover:scale-[1.02]`}>
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 w-20 h-20 border border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              {/* Category header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h4 className="text-lg font-bold text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {category.category}
                </h4>
              </div>
              
              {/* Skills grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`
                      relative group/skill cursor-pointer
                      bg-gradient-to-br ${skill.color}
                      rounded-xl p-[1px] 
                      hover:scale-105
                      transition-all duration-300 ease-out
                      hover:shadow-lg
                    `}
                    style={{
                      animationDelay: `${(index * 200) + (skillIndex * 100)}ms`
                    }}
                  >
                    <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 h-full flex items-center justify-center relative overflow-hidden">
                      {/* Skill name */}
                      <span className="text-white font-medium text-xs text-center z-10 group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:from-white group-hover/skill:to-gray-200 group-hover/skill:bg-clip-text transition-all duration-300">
                        {skill.name}
                      </span>
                      
                      {/* Hover glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover/skill:opacity-20 rounded-xl transition-opacity duration-300`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hover gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Decorative elements */}
    <div className="mt-12 flex justify-center">
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span>Technical Mastery Path</span>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>


      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 rounded-lg bg-gray-800 shadow-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Coffee className="w-8 h-8 text-custom-blue" />
            <h3 className="text-4xl font-bold text-custom-blue">900+</h3>
          </div>
          <p className="text-gray-300">Hours Studied</p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 shadow-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <GraduationCap className="w-8 h-8 text-custom-blue" />
            <h3 className="text-4xl font-bold text-custom-blue">3.67</h3>
          </div>
          <p className="text-gray-300">GPA</p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 shadow-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code className="w-8 h-8 text-custom-blue" />
            <h3 className="text-4xl font-bold text-custom-blue">600+</h3>
          </div>
          <p className="text-gray-300">Github Contributions</p>
        </div>
      </div>
    </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                  title: 'Connect',
                  description: 'Connect is a web-based video chatting platform that enables hearing-impaired and hearing people to communicate more effectively. It uses a machine learning model to recognize sign language gestures and convert them into text in real-time and on the other end, spoken words are transcribed into text instantly, ensuring the conversation flows both ways.',
                  image: '/images/connect.png',
                  demo: 'https://www.youtube.com/watch?v=QEH0Zvk0bAg&t=1s',
                  github: 'https://github.com/ParsaBazrpash/Connect',
                  skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS/Firebase/Python/ML/Flask/WebRTC',
                  date: 'April 2025 - 1st Place Winner – HACKAI Hackathon'
                },
                {
                title: 'VitalPlate',
                description: 'A full-stack web application that empowers users to manage their health with innovative technology. It features a chatbot for symptom assessment and personalized dietary recommendations, a calorie finder that analyzes meal photos to estimate nutritional content, and a dashboard for logging meals and moods, providing clear insights into nutritional trends.',
                image: '/images/VitalPlate.png',
                demo: 'https://vital-plate-11.vercel.app/',
                github: 'https://github.com/ParsaBazrpash/VitalPlate',
                skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS, Firebase',
                date: 'February 2025 - Axxess Hackathon'
              },
                {
                title: 'DocAlert',
                description: 'Developed a web-based full-stack application that streamlines the scheduling and managing of medical appointments. Implemented a user-friendly interface for patients to find healthcare providers, book visits, and receive appointment reminders—Integrated Firebase for authentication, database, and real-time notifications.',
                image: '/images/docalert.png',
                demo: 'https://doc-alert.vercel.app/',
                github: 'https://github.com/ParsaBazrpash/DocAlert',
                skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS, Firebase',
                date: 'October 2024 - January 2025'
              },
                {
                title: 'LuxDrive',
                description: 'A modern, responsive web application built with React, TypeScript, and Tailwind CSS that allows users to browse cars, view detailed specifications, and manage their appointments.',
                image: '/images/lux-drive.png',
                demo: 'https://lux-drive-tau.vercel.app/',
                github: 'https://github.com/ParsaBazrpash/Lux-Drive',
                skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS',
                date: 'December 2024'
              },
                {
                title: 'CashDash',
                description: 'CashDash is a personal finance tracker that lets you manage your money in any currency. Add your daily transactions and see your income and expenses come to life through interactive charts, helping you understand your spending patterns with charts and breakdown across different time periods.',
                image: '/images/CashDashProject.png',
                demo: 'https://cashdash-one.vercel.app/',
                github: 'https://github.com/ParsaBazrpash/CashDash',
                skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS',
                date: 'December 2024'
              },
              {
                title: 'ReLeaf',
                description: 'ReLeaf is a property management web application that provides and simplifies carbon emission and energy consumption data and analytics at the click of a few buttons. It includes a properties dashboard that combines the metrics of all of the users properties as well as the individual properties dashboard, data input & analytics, pie charts, bar graphs, a built-in carbon emission calculator, and personalized recommendations for reducing carbon emissions and increasing cost-saving.',
                image: '/images/releaf.png',
                demo: 'https://releafutd.vercel.app/',
                github: 'https://github.com/hibamubeen/ReLeafApp',
                skills: 'React.js/TypeScript/JavaScript/Tailwind CSS',
                date: 'November 2024 - HACK UTD 2024 (Ripple Effect)'
              },
              {
                title: 'To Do List',
                description: 'Dynamic To-Do List application with due dates and task management',
                image: '/images/To Do List.png',
                demo: 'https://parsabazrpash.github.io/To-Do-List/',
                github: 'https://github.com/ParsaBazrpash/To-Do-List',
                skills: 'HTML/CSS/JavaScript',
                date: 'September 2024'
              },

            {
              title: 'Quiz Generator',
              description: 'My first website that I created to practice my skills. This website includes a question page with some basic questions about web development which you can read, and take the quiz, and see your grade at the end of that.',
              image: '/images/quiz-website-image.png',
              demo: 'https://parsabazrpash.github.io/Quiz-Website/home.html',
              github: 'https://github.com/ParsaBazrpash/Quiz-Website',
              skills: 'HTML/CSS/JavaScript',
              date: 'December 2023'
            },
            {
              title: 'Rock Paper Scissors Game',
              description: 'Rock Paper Scissors is a popular hand game played between two people where each player simultaneously forms one of three shapes with their hand. The game has three possible outcomes and features a dark mode.',
              image: '/images/Rock Paper Scissors.png',
              demo: 'https://parsabazrpash.github.io/Rock-Paper-Scissors/game.html',
              github: 'https://github.com/ParsaBazrpash/Rock-Paper-Scissors',
              skills: 'HTML/CSS/JavaScript',
              date: 'February 2024'
            },
            {
              title: 'BMI Calculator',
              description: 'A lightweight BMI (Body Mass Index) calculator web app. Supports metric (kg, cm) and imperial (pounds, feet) units. Simple UI, easy to use. Ideal for quick BMI checks.',
              image: '/images/BMI Calc.png',
              demo: 'https://parsabazrpash.github.io/BMI-Calculator/home.html',
              github: 'https://github.com/ParsaBazrpash/BMI-Calculator',
              skills: 'HTML/CSS/JavaScript',
              date: 'January 2024'
            },
            {
              title: 'Calculator with Dark Mode',
              description: 'A minimalist web calculator built with HTML, CSS, and JavaScript. Features a responsive layout, dark mode toggle, and supports basic arithmetic operations. Great for integrating into web projects or standalone use.',
              image: '/images/Calculator.png',
              demo: 'https://parsabazrpash.github.io/Calculator-with-Dark-Mode/calc.html',
              github: 'https://github.com/ParsaBazrpash/Calculator-with-Dark-Mode',
              skills: 'HTML/CSS/JavaScript',
              date: 'February 2024'
            },
            {
              title: 'Theater Seat Map Booking',
              description: 'Design and develop a responsive user interface for booking seats in cinemas and theaters. The UI aims to enhance user experience across devices, enabling seamless seat reservations. Features include dynamic seat mapping, adaptive controls, and intuitive interaction.',
              image: '/images/theather.png',
              demo: 'https://parsabazrpash.github.io/Theater-Seat-Map-Booking/seatmap.html',
              github: 'https://github.com/ParsaBazrpash/Theater-Seat-Map-Booking',
              skills: 'HTML/CSS/JavaScript',
              date: 'February 2024'
            }
            ].map((project) => (
              <div key={project.title} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
                <Link href={project.demo} target="_blank">
                <div className="relative h-48">
                
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-custom-blue opacity-0 hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">Check the Website</span>
                  </div>
                </div>
                </Link>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 text-gray-100">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-400 mb-4">{project.skills}</p>
                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-custom-blue hover:text-blue-300 hover:underline"
                    >
                      GitHub Repository
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Parsa Bazrpash Amalgar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
