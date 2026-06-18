'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  MapPin,
  Trophy,
  Linkedin,
  Github,
  Youtube,
  Send,
  ExternalLink,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { RotatingBadge } from './components/RotatingBadge';
import { TechStackIcons } from './components/TechStackIcons';

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const projects = [
    {
      title: 'NexTrip',
      description:
        'NexTrip is a modern travel expense tracker that helps users plan trips and manage their spending effortlessly. Users can create trips, track expenses, upload receipts with autofill, and visualize routes on an interactive map.',
      image: '/images/NexTrip.png',
      demo: 'https://nextripai.vercel.app/',
      github: '',
      skills: 'Next.js/TypeScript/React/Tailwind CSS',
      date: 'April 2026',
      sortDate: '2026-04-01',
      tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'BizTrack',
      description:
        'BizTrack is a lead management platform built to help sales teams close more deals with less admin work. It gives you a fast, spreadsheet-style CRM to track prospects, prioritize opportunities, update pipeline status in real time, and keep your team aligned across desktop and mobile.',
      image: '/images/biz-track.png',
      demo: 'https://biz-trackai.vercel.app/signup',
      github: '',
      skills: 'Next.js/TypeScript/React/Tailwind CSS/CRM/Product Design',
      date: 'March 2026',
      sortDate: '2026-03-01',
      tags: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    },
    {
      title: 'MirrorAPI',
      description:
        "MirrorAPI is an AI-powered web-application that compares two API endpoints, detects changes, and generates detailed documentation using NVIDIA's Nemotron Agentic AI. Built with Next.js & TypeScript it streamlines API version control and automates developer insights.",
      image: '/images/mirrorapi.png',
      demo: 'https://www.youtube.com/watch?v=zJ3Deft3lVo&t=1s',
      github: 'https://github.com/ParsaBazrpash/MirrorAPI',
      skills: 'Next.js/JavaScript/TypeScript/Python/OAuth/NVIDIA Nemotron/AI/RAG/ML',
      date: 'November 2025 – 1st Place Winner – HackUTD 2025 (State Farm Challenge)',
      sortDate: '2025-11-01',
      tags: ['Next.js', 'TypeScript', 'Python', 'AI'],
    },
    {
      title: 'Connect',
      description:
        'Connect is a web-based video chatting platform that enables hearing-impaired and hearing people to communicate more effectively. It uses a machine learning model to recognize sign language gestures and convert them into text in real-time.',
      image: '/images/connect.png',
      demo: 'https://www.youtube.com/watch?v=QEH0Zvk0bAg&t=1s',
      github: 'https://github.com/ParsaBazrpash/Connect',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS/Firebase/Python/ML/Flask/WebRTC',
      date: 'April 2025 - 1st Place Winner – HACKAI Hackathon',
      sortDate: '2025-04-01',
      tags: ['Next.js', 'TypeScript', 'Python', 'Firebase', 'ML'],
    },
    {
      title: 'VitalPlate',
      description:
        'A full-stack web application that empowers users to manage their health with innovative technology. It features a chatbot for symptom assessment and personalized dietary recommendations, a calorie finder, and a dashboard for logging meals and moods.',
      image: '/images/VitalPlate.png',
      demo: 'https://vital-plate-11.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/VitalPlate',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS, Firebase',
      date: 'February 2025 - Axxess Hackathon',
      sortDate: '2025-02-01',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
    },
    {
      title: 'DocAlert',
      description:
        'Developed a web-based full-stack application that streamlines the scheduling and managing of medical appointments. Implemented a user-friendly interface for patients to find healthcare providers, book visits, and receive appointment reminders.',
      image: '/images/docalert.png',
      demo: 'https://doc-alert.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/DocAlert',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS, Firebase',
      date: 'October 2024 - January 2025',
      sortDate: '2024-10-01',
      tags: ['Next.js', 'TypeScript', 'Firebase'],
    },
    {
      title: 'LuxDrive',
      description:
        'A modern, responsive web application built with React, TypeScript, and Tailwind CSS that allows users to browse cars, view detailed specifications, and manage their appointments.',
      image: '/images/lux-drive.png',
      demo: 'https://lux-drive-tau.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/Lux-Drive',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS',
      date: 'December 2024',
      sortDate: '2024-12-01',
      tags: ['React', 'TypeScript', 'Next.js'],
    },
    {
      title: 'CashDash',
      description:
        'CashDash is a personal finance tracker that lets you manage your money in any currency. Add your daily transactions and see your income and expenses come to life through interactive charts.',
      image: '/images/CashDashProject.png',
      demo: 'https://cashdash-one.vercel.app/',
      github: 'https://github.com/ParsaBazrpash/CashDash',
      skills: 'React.js/Next.js/TypeScript/JavaScript/Tailwind CSS',
      date: 'December 2024',
      sortDate: '2024-12-01',
      tags: ['Next.js', 'TypeScript', 'React'],
    },
  ];

  const sortedProjects = [...projects].sort((a, b) =>
    sortOrder === 'desc'
      ? b.sortDate.localeCompare(a.sortDate)
      : a.sortDate.localeCompare(b.sortDate)
  );

  const experiences = [
    {
      logo: '/logos/van.png',
      company: 'Vanguard',
      position: 'Software Engineer',
      period: '06/2026 - Present',
      status: 'Current',
      responsibilities: [] as string[],
    },
    {
      logo: '/logos/CNC.jpeg',
      company: 'Click n close',
      position: 'Software Engineer',
      period: '02/2026 - 06/2026',
      status: 'Completed',
      responsibilities: [] as string[],
    },
    {
      logo: '/logos/Stores.png',
      company: 'Stores.com (Mercatalyst)',
      position: 'Software Engineer',
      period: '05/2025 - 10/2025',
      status: 'Completed',
      responsibilities: [] as string[],
    },
    {
      logo: '/logos/AIMD.webp',
      company: 'AIMD',
      position: 'Software Engineer',
      period: '10/2024 - 02/2025',
      status: 'Completed',
      responsibilities: [] as string[],
    },
  ];

  const moreExperiences = [
    {
      logo: '/logos/starbucks.png',
      company: 'Starbucks',
      position: 'Barista',
      period: '01/2024 - 02/2026',
      status: 'Completed',
      responsibilities: [] as string[],
    },
    {
      logo: '/logos/icode.jpeg',
      company: 'iCode School Franchise',
      position: 'Computer Science Instructor',
      period: '03/2024 - 08/2024',
      status: 'Completed',
      responsibilities: [] as string[],
    },
  ];

  const education = [
    {
      logo: '/logos/utdlogo.png',
      school: 'University of Texas at Dallas',
      degree: "Bachelor's, Software Engineering",
      period: '08/2024 - 12/2026',
      gpa: '3.63',
      status: 'Current',
    },
    {
      logo: '/logos/dallascollege.png',
      school: 'Dallas College',
      degree: 'Relevant Credit Coursework in Software Engineering',
      period: '08/2022 - 08/2024',
      gpa: '3.96',
      status: 'Completed',
    },
    {
      logo: '/logos/alborz.jpeg',
      school: 'Alborz High School',
      degree: 'High School Diploma, Mathematics',
      period: '07/2015 - 06/2021',
      note: 'The first modern and largest high school in Asia and the Middle East',
      status: 'Completed',
    },
  ];

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'C#', 'C++', 'Python'],
    },
    {
      category: 'Web Technologies',
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'ASP.NET'],
    },
    {
      category: 'Testing',
      skills: ['Mocha', 'Puppeteer', 'JUnit', 'xUnit'],
    },
    {
      category: 'Database & Tools',
      skills: ['SQL/MySQL', 'MongoDB', 'Redis', 'Firebase', 'Git/GitHub', 'Figma', 'npm/pm2', 'Microsoft Azure', 'Azure DevOps'],
    },
  ];

  const achievements = [
    {
      title: '1st Place - HackUTD 2025',
      description: 'State Farm Challenge Winner',
      project: 'MirrorAPI',
      date: 'November 2025',
      icon: Trophy,
      color: 'text-yellow-400',
      linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7394119067223138304/',
      imageUrl: '/images/HACKUTD.jpeg',
    },
    {
      title: '1st Place - HACKAI Hackathon',
      description: 'Winner for innovative AI solution',
      project: 'Connect',
      date: 'April 2025',
      icon: Trophy,
      color: 'text-accent-light',
      linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7320514737706778626/',
      imageUrl: '/images/HACKAI.jpeg',
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* ─── Hero ─── */}
      <section id="home" className="min-h-screen pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col justify-center min-h-[calc(100vh-5rem)]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-0">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-xs tracking-[0.25em] text-muted uppercase">
                Hello, I&apos;m 👋
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Parsa Bazrpash
              </h1>
              <h2 className="text-xl sm:text-2xl text-accent font-medium">
                Software Engineer
              </h2>
              <p className="text-muted leading-relaxed max-w-lg text-sm sm:text-base">
                Passionate about building efficient, scalable, and user-friendly applications.
                Experienced in full-stack development with a focus on clean code and modern
                technologies.
              </p>
              <Link
                href="#projects"
                className="inline-flex items-center gap-3 px-6 py-3 border border-accent text-accent text-xs tracking-[0.2em] font-medium hover:bg-accent/10 transition-colors group"
              >
                VIEW MY WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Content — Profile */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              {/* Location */}
              <div className="absolute top-0 right-0 lg:right-8 z-10 text-right">
                <p className="text-[10px] tracking-[0.2em] text-muted uppercase">Based in</p>
                <p className="text-sm font-semibold tracking-wider">DALLAS, TX</p>
              </div>

              <div className="relative flex items-center gap-4 mt-8">
                {/* Image Frame */}
                <div className="relative">
                  <div className="p-1 bg-accent clip-image-frame">
                    <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 clip-image-frame overflow-hidden bg-accent">
                      <Image
                        src="/images/linkedin-prof2.png"
                        alt="Parsa Bazrpash"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Rotating Badge */}
                <div className="hidden sm:block">
                  <RotatingBadge />
                </div>
              </div>

              {/* Learning Card */}
              <div className="absolute -bottom-2 right-0 lg:right-4 border border-accent/60 px-4 py-3 bg-black/90 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.2em] text-muted uppercase mb-1">
                  Currently Working At
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Vanguard</span>
                  <ArrowUpRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack + Quote */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pt-12 pb-8 border-t border-border-subtle mt-8">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-4 mb-5">
                <p className="text-[10px] tracking-[0.25em] text-muted uppercase whitespace-nowrap">
                  Tech Stack
                </p>
                <div className="flex-1 h-px bg-border-subtle" />
              </div>
              <TechStackIcons />
            </div>
            <div className="flex items-center gap-4 max-w-xs">
              <div className="w-px h-10 bg-accent flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-accent uppercase mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Who Am I?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">
                I&apos;m a Software Engineering student at The University of Texas at Dallas,
                passionate about full-stack development and user-friendly applications. Skilled in
                C++, Java, Python, and modern web technologies like JavaScript, React.js, Next.js,
                TypeScript, Node.js, and MongoDB. I bring a strong foundation in both front-end and
                back-end development, with a growing interest in AI.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Info</h3>
              <div className="space-y-3 text-muted">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>prsawork1@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Dallas, Texas, United States</span>
                </div>
                <p>Education: University of Texas at Dallas</p>
                <p>Languages: English, Persian</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-accent uppercase mb-3">Resume</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Experience & Education</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-border-subtle">
                Professional Experience
              </h3>
              {[...experiences, ...(showAll ? moreExperiences : [])].map((exp) => (
                <div
                  key={exp.company}
                  className="border border-border-subtle p-5 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0 border border-border-subtle">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <h4 className="font-semibold text-sm">{exp.position}</h4>
                          <p className="text-muted text-sm">{exp.company}</p>
                        </div>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-medium tracking-wider flex-shrink-0 ${
                            exp.status === 'Current'
                              ? 'border border-accent text-accent'
                              : 'border border-border-subtle text-muted'
                          }`}
                        >
                          {exp.status}
                        </span>
                      </div>
                      <p className="text-muted text-xs">{exp.period}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 border border-border-subtle text-sm text-muted hover:border-accent/50 hover:text-white transition-colors"
              >
                {showAll ? 'See Less ▲' : 'See More (+2) ▼'}
              </button>
            </div>

            {/* Education */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-border-subtle">
                Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="border border-border-subtle p-5 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0 border border-border-subtle">
                      <Image
                        src={edu.logo}
                        alt={`${edu.school} Logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div>
                          <h4 className="font-semibold text-sm">{edu.school}</h4>
                          <p className="text-muted text-sm">{edu.degree}</p>
                        </div>
                        <span
                          className={`px-2 py-0.5 text-[10px] font-medium tracking-wider flex-shrink-0 ${
                            edu.status === 'Current'
                              ? 'border border-accent text-accent'
                              : 'border border-border-subtle text-muted'
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                      <p className="text-muted text-xs mb-2">{edu.period}</p>
                      {edu.gpa && (
                        <span className="inline-block px-2 py-0.5 text-xs border border-accent text-accent">
                          GPA: {edu.gpa}
                        </span>
                      )}
                      {'note' in edu && edu.note && (
                        <p className="text-muted text-xs mt-2 italic border-l-2 border-accent/40 pl-3">
                          {edu.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-5">
              <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-border-subtle">
                Skills & Expertise
              </h3>
              {skillCategories.map((cat) => (
                <div
                  key={cat.category}
                  className="border border-border-subtle p-5 hover:border-accent/30 transition-colors"
                >
                  <h4 className="font-medium text-sm mb-3">{cat.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs border border-border-subtle text-muted"
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

      {/* ─── Projects ─── */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-accent uppercase mb-3">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold">My Projects</h2>
          </div>

          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted">Sort by date:</span>
              <button
                onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                className="px-4 py-2 text-sm border border-border-subtle text-muted hover:border-accent/50 hover:text-white transition-colors"
              >
                {sortOrder === 'desc' ? 'Newest → Oldest' : 'Oldest → Newest'}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <div
                key={project.title}
                className="border border-border-subtle hover:border-accent/30 transition-all group overflow-hidden"
              >
                <Link href={project.demo} target="_blank">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW PROJECT
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted text-sm mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] tracking-wider border border-border-subtle text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-accent text-sm hover:text-accent-light transition-colors"
                    >
                      GitHub Repository →
                    </Link>
                  )}
                  <p className="text-xs text-muted mt-3">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Achievements ─── */}
      <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] tracking-[0.25em] text-accent uppercase mb-3">Recognition</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Achievements & Awards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="border border-border-subtle p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 border border-border-subtle ${achievement.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-muted text-sm mb-1">{achievement.description}</p>
                      <p className="text-accent text-sm font-medium">{achievement.project}</p>
                      <p className="text-muted text-xs mt-1">{achievement.date}</p>
                    </div>
                  </div>
                  {achievement.linkedinPost && achievement.imageUrl && (
                    <div className="border-t border-border-subtle pt-4">
                      <Link
                        href={achievement.linkedinPost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative w-full overflow-hidden group"
                      >
                        <div className="relative w-full aspect-video">
                          <Image
                            src={achievement.imageUrl}
                            alt={`LinkedIn post for ${achievement.title}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <Linkedin className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </Link>
                      <Link
                        href={achievement.linkedinPost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm mt-3 justify-center"
                      >
                        <Linkedin className="w-4 h-4" />
                        View on LinkedIn
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-[10px] tracking-[0.25em] text-accent uppercase mb-3">Reach Out</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-border-subtle">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a
                      href="mailto:prsawork1@gmail.com"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      prsawork1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 border border-border-subtle">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-muted text-xs uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-sm">Dallas, Texas, United States</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase text-muted">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {[
                    {
                      href: 'https://www.linkedin.com/in/parsa-bazrpash-amalgar/',
                      icon: Linkedin,
                    },
                    { href: 'https://github.com/ParsaBazrpash', icon: Github },
                    { href: 'https://www.youtube.com/@ParsaBazrpash', icon: Youtube },
                  ].map(({ href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      target="_blank"
                      className="p-3 border border-border-subtle text-muted hover:border-accent hover:text-accent transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-border-subtle p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-3">Let&apos;s Work Together</h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
              <a
                href="mailto:prsawork1@gmail.com?subject=Let%27s%20Connect"
                className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent text-sm tracking-wider hover:bg-accent/10 transition-colors w-fit"
              >
                <Send className="w-4 h-4" />
                SEND EMAIL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Parsa Bazrpash. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
