'use client'
import { useState, useEffect } from 'react';

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Coffee, Code, GraduationCap, Trophy, Linkedin, Github, Youtube, Send, ExternalLink } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { GitHubContributions } from './components/GitHubContributions';





export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [showFidelityCard, setShowFidelityCard] = useState(true);
  const [fidelityClosing, setFidelityClosing] = useState(false);
  const [githubContributions, setGithubContributions] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'MirrorAPI',
      description: "MirrorAPI is an AI-powered web-application that compares two API endpoints, detects changes, and generates detailed documentation using NVIDIA's Nemotron Agentic AI. Built with Next.js & TypeScript it streamlines API version control and automates developer insights.",
      image: '/images/mirrorapi.png',
      demo: 'https://www.youtube.com/watch?v=zJ3Deft3lVo&t=1s',
      github: 'https://github.com/ParsaBazrpash/MirrorAPI',
      skills: 'Next.js/JavaScript/TypeScript/Python/OAuth/NVIDIA Nemotron/AI/RAG/ML',
      date: 'November 2025 – 1st Place Winner – HackUTD 2025 (State Farm Challenge)',
      sortDate: '2025-11-01',
      tags: ['Next.js', 'TypeScript', 'Python', 'AI']
    },
    {
      title: 'Connect',
      description: 'Connect is a web-based video chatting platform that enables hearing-impaired and hearing people to communicate more effectively. It uses a machine learning model to recognize sign language gestures and convert them into text in real-time and on the other end, spoken words are transcribed into text instantly, ensuring the conversation flows both ways.',
      image: '/images/connect.png',
      demo: 'https://www.youtube.com/watch?v=QEH0Zvk0bAg&t=1s',
      github: 'https://github.com/ParsaBazrpash/Connect',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS/Firebase/Python/ML/Flask/WebRTC',
      date: 'April 2025 - 1st Place Winner – HACKAI Hackathon',
      sortDate: '2025-04-01',
      tags: ['Next.js', 'TypeScript', 'Python', 'Firebase', 'ML']
    },
    {
      title: 'VitalPlate',
      description: 'A full-stack web application that empowers users to manage their health with innovative technology. It features a chatbot for symptom assessment and personalized dietary recommendations, a calorie finder that analyzes meal photos to estimate nutritional content, and a dashboard for logging meals and moods, providing clear insights into nutritional trends.',
      image: '/images/VitalPlate.png',
      demo: 'https://vital-plate-11.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/VitalPlate',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS, Firebase',
      date: 'February 2025 - Axxess Hackathon',
      sortDate: '2025-02-01',
      tags: ['Next.js', 'TypeScript', 'Firebase']
    },
    {
      title: 'DocAlert',
      description: 'Developed a web-based full-stack application that streamlines the scheduling and managing of medical appointments. Implemented a user-friendly interface for patients to find healthcare providers, book visits, and receive appointment reminders—Integrated Firebase for authentication, database, and real-time notifications.',
      image: '/images/docalert.png',
      demo: 'https://doc-alert.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/DocAlert',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS, Firebase',
      date: 'October 2024 - January 2025',
      sortDate: '2024-10-01',
      tags: ['Next.js', 'TypeScript', 'Firebase']
    },
    {
      title: 'LuxDrive',
      description: 'A modern, responsive web application built with React, TypeScript, and Tailwind CSS that allows users to browse cars, view detailed specifications, and manage their appointments.',
      image: '/images/lux-drive.png',
      demo: 'https://lux-drive-tau.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/Lux-Drive',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS',
      date: 'December 2024',
      sortDate: '2024-12-01',
      tags: ['React', 'TypeScript', 'Next.js']
    },
    {
      title: 'CashDash',
      description: 'CashDash is a personal finance tracker that lets you manage your money in any currency. Add your daily transactions and see your income and expenses come to life through interactive charts, helping you understand your spending patterns with charts and breakdown across different time periods.',
      image: '/images/CashDashProject.png',
      demo: 'https://cashdash-one.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/CashDash',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS',
      date: 'December 2024',
      sortDate: '2024-12-01',
      tags: ['Next.js', 'TypeScript', 'React']
    }
  ];

  const sortedProjects = [...projects].sort((a, b) =>
    sortOrder === 'desc' ? b.sortDate.localeCompare(a.sortDate) : a.sortDate.localeCompare(b.sortDate)
  );

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch('/api/github-contributions');
        const data = await response.json();
        if (data.totalContributions) {
          setGithubContributions(data.totalContributions);
        }
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
      }
    };

    fetchContributions();
  }, []);
  
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
                  src="/images/Parsa%20Profile.png"
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
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-100">My Resume</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
        
        {/* Professional Experience Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-100">Professional Experience</h3>
          {showFidelityCard && (
            <button
              onClick={() => {
                setFidelityClosing(true);
                setTimeout(() => setShowFidelityCard(false), 450);
              }}
              className={`w-full bg-gray-900 border border-emerald-700/70 rounded-xl shadow-lg shadow-emerald-500/20 p-4 text-left transition-all duration-500 ease-in-out ${
                fidelityClosing ? 'opacity-0 -translate-y-3 scale-95' : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-emerald-800/60">
                  <Image
                    src="https://s.yimg.com/zb/imgv1/d6a66ba8-49ae-388d-afaf-af32ef9d1291/t_500x300"
                    alt="Fidelity internship announcement"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-300">Summer 2026</p>
                  <p className="text-sm font-semibold text-gray-100">Joining Fidelity as SWE Intern</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-2">
                Excited to join Fidelity Investments as a Software Engineering Intern in Summer 2026 and contribute to impactful fintech solutions.
              </p>
              <p className="mt-3 text-xs text-emerald-200">Click to dismiss</p>
            </button>
          )}
          
          {/* Always visible experiences */}
          {[
            {
              logo: "/logos/starbucks.png",
              company: "Starbucks",
              position: "Barista",
              period: "01/2024 - Present",
              status: "Current",
              responsibilities: [
                "Served 100+ customers daily while maintaining high service standards in fast-paced shifts",
                "Collaborated closely with teammates to streamline peak-hour operations"
              ]
            },
            {
              logo: "/logos/mercatalyst.png",
              company: "Mercatalyst",
              position: "Software Engineer Intern",
              period: "05/2025 - 10/2025",
              status: "Completed",
              responsibilities: []
            },
            {
              logo: "/logos/aiaa logo new.avif",
              company: "AIAA UT Dallas",
              position: "Frontend Web Developer",
              period: "02/2025 - 05/2025",
              status: "Completed",
              responsibilities: []
            }
          ].map((exp) => (
            <div
              key={exp.company}
              className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image 
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">{exp.position}</h4>
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      exp.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  
                  {exp.responsibilities.length > 0 && (
                    <ul className="list-disc ml-4 text-gray-400 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Expandable section */}
          <div
            className={`transition-all duration-500 overflow-hidden ${
              showAll ? 'max-h-[3000px]' : 'max-h-0'
            }`}
          >
            <div className="space-y-6">
              {[
                {
                  logo: "/logos/NebulaLabs.png",
                  company: "Nebula Labs",
                  position: "UI/UX Designer",
                  period: "10/2024 - 02/2025",
                  status: "Completed",
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
                  responsibilities: [
                    "Taught 200+ K–12 students coding, robotics, game development (Scratch, Python), and digital media skills, including green screen, video editing, and 3D design."
                  ]
                }
              ].map((exp) => (
                <div
                  key={exp.company}
                  className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                      <Image 
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-100">{exp.position}</h4>
                          <p className="text-gray-300 font-medium">{exp.company}</p>
                        </div>
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-700 text-gray-400">
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                      
                      {exp.responsibilities.length > 0 && (
                        <ul className="list-disc ml-4 text-gray-400 space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm">{resp}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* See More / See Less Button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full px-6 py-3 bg-gray-900 hover:bg-gray-700 text-gray-100 font-medium rounded-lg transition-colors duration-300 border border-gray-700 hover:border-gray-600"
          >
            {showAll ? 'See Less ▲' : 'See More (+3) ▼'}
          </button>
        </div>

        {/* Education Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-100">Education</h3>
          
          {[
            {
              logo: "/logos/utdlogo.png",
              school: "University of Texas at Dallas",
              degree: "Bachelor's, Software Engineering",
              period: "08/2024 - 05/2026",
              gpa: "3.67",
              status: "Current"
            },
            {
              logo: "/logos/dallascollege.png",
              school: "Dallas College",
              degree: "Associate's, Software Engineering",
              period: "08/2022 - 08/2024",
              gpa: "3.96",
              status: "Completed"
            },
            {
              logo: "/logos/alborz.jpeg",
              school: "Alborz High School",
              degree: "High School Diploma, Mathematics",
              period: "07/2015 - 06/2021",
              note: "The first modern and largest high school in Asia and the Middle East",
              status: "Completed"
            }
          ].map((edu) => (
            <div
              key={edu.school}
              className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image 
                    src={edu.logo}
                    alt={`${edu.school} Logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">{edu.school}</h4>
                      <p className="text-gray-300 font-medium">{edu.degree}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-gray-700 text-gray-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  
                  {edu.gpa && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-gray-400 text-sm">GPA:</span>
                      <span className="px-3 py-1 bg-custom-blue text-white font-bold text-sm rounded">
                        {edu.gpa}
                      </span>
                    </div>
                  )}
                  
                  {edu.note && (
                    <p className="text-gray-400 text-sm mt-3 italic border-l-2 border-gray-700 pl-3">
                      {edu.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Column */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 text-gray-100">Skills & Expertise</h3>
          
          {[
            {
              category: "Programming Languages",
              skills: ['Java', 'C#', 'C++', 'Python']
            },
            {
              category: "Web Technologies",
              skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js']
            },
            {
              category: "Database & Tools",
              skills: ['SQL/MySQL', 'MongoDB', 'Redis', 'Firebase', 'Git/GitHub', 'Figma', 'npm/pm2']
            }
          ].map((category) => (
            <div
              key={category.category}
              className="bg-gray-900 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold text-gray-100 mb-4">{category.category}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
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
            <h3 className="text-4xl font-bold text-custom-blue">
              {githubContributions !== null 
                ? `${githubContributions.toLocaleString()}+` 
                : '700+'}
            </h3>
          </div>
          <p className="text-gray-300">Github Contributions</p>
        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-center">
        <GitHubContributions />
      </div>
    </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">My Projects</h2>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-300">Sort by date:</span>
              <button
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                className="px-3 py-2 rounded-lg text-sm border border-gray-700 bg-gray-900 text-gray-200 hover:border-gray-500"
              >
                {sortOrder === 'desc' ? 'Newest → Oldest' : 'Oldest → Newest'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProjects.map((project) => (
              <div key={project.title} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
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
                  <p className="text-sm text-gray-200 mt-4">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Achievements & Awards</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                id: 'hackutd',
                title: "1st Place - HackUTD 2025",
                description: "State Farm Challenge Winner",
                project: "MirrorAPI",
                date: "November 2025",
                icon: Trophy,
                color: "text-yellow-400",
                linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7394119067223138304/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQFOwsfziwrv0A/feedshare-shrink_2048_1536/B56Zp0wGr6I0A0-/0/1762895361122?e=1767225600&v=beta&t=OBIRuWx7vSrlFkDFl8LcC-oUQhnB4tl63F6bSfWhbiY"
              },
              {
                id: 'hackai',
                title: "1st Place - HACKAI Hackathon",
                description: "Winner for innovative AI solution",
                project: "Connect",
                date: "April 2025",
                icon: Trophy,
                color: "text-blue-400",
                linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7320514737706778626/",
                imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQGKYBaSi8rVWg/feedshare-shrink_800/B56ZZexWgjGUAg-/0/1745346720974?e=1767225600&v=beta&t=yTvcayzEMZeC_n5WLh53l8J1c0KKkR2UKnRdstL4qgc"
              }
            ].map((achievement, index) => {
              const Icon = achievement.icon;
              const imageUrl = achievement.imageUrl;
              
              return (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:-translate-y-1 border border-gray-700"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gray-900 ${achievement.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-100 mb-1">{achievement.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{achievement.description}</p>
                      <p className="text-custom-blue text-sm font-medium mb-1">{achievement.project}</p>
                      <p className="text-gray-400 text-xs">{achievement.date}</p>
                    </div>
                  </div>
                  
                  {/* LinkedIn Post Image */}
                  {achievement.linkedinPost && imageUrl && (
                    <div className="mt-4 border-t border-gray-700 pt-4">
                      <div className="space-y-3">
                        <Link
                          href={achievement.linkedinPost}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block relative w-full rounded-lg overflow-hidden group"
                        >
                          <div className="relative w-full aspect-video bg-gray-900">
                            <Image
                              src={imageUrl}
                              alt={`LinkedIn post image for ${achievement.title}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <Linkedin className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          </div>
                        </Link>
                        <Link
                          href={achievement.linkedinPost}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-custom-blue hover:text-blue-300 transition-colors text-sm font-medium justify-center"
                        >
                          <Linkedin className="w-4 h-4" />
                          View on LinkedIn
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <Mail className="w-5 h-5 text-custom-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:prsawork1@gmail.com" className="text-gray-100 hover:text-custom-blue transition-colors">
                      prsawork1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <MapPin className="w-5 h-5 text-custom-blue" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-100">Dallas, Texas, United States</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-100 mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  <Link
                    href="https://www.linkedin.com/in/parsa-bazrpash-amalgar/"
                    target="_blank"
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-custom-blue transition-colors" />
                  </Link>
                  <Link
                    href="https://github.com/ParsaBazrpash"
                    target="_blank"
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-custom-blue transition-colors" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@ParsaBazrpash"
                    target="_blank"
                    className="p-3 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors group"
                  >
                    <Youtube className="w-6 h-6 text-gray-400 group-hover:text-custom-blue transition-colors" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Let&apos;s Work Together</h3>
              <p className="text-gray-400 mb-6">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <a
                href="mailto:prsawork1@gmail.com?subject=Let%27s%20Connect"
                className="inline-flex items-center gap-2 px-6 py-3 bg-custom-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
              >
                <Send className="w-5 h-5" />
                Send Email
              </a>
            </div>
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
