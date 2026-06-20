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
  Briefcase,
  GraduationCap,
  Zap,
  Code2,
  Globe,
  Shield,
  Database,
  Plus,
  Quote,
  LayoutGrid,
  ArrowDownUp,
  Award,
  Calendar,
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { RotatingBadge } from './components/RotatingBadge';
import { TechStackIcons } from './components/TechStackIcons';
import { SkillTag } from './components/SkillTag';
import { HeroMapBackground } from './components/HeroMapBackground';
import { AmbientBackground } from './components/AmbientBackground';
import { VisitorCount } from './components/VisitorCount';

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
      icon: Code2,
      skills: ['Java', 'C#', 'C++', 'Python'],
    },
    {
      category: 'Web Technologies',
      icon: Globe,
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Node.js', 'ASP.NET'],
    },
    {
      category: 'Testing',
      icon: Shield,
      skills: ['Mocha', 'Puppeteer', 'JUnit', 'xUnit'],
    },
    {
      category: 'Database & Tools',
      icon: Database,
      skills: ['SQL/MySQL', 'MongoDB', 'Redis', 'Firebase', 'Git/GitHub', 'Figma', 'npm/pm2', 'Microsoft Azure', 'Azure DevOps'],
    },
  ];

  const achievements = [
    {
      title: 'HackUTD 2025',
      placement: '1st Place',
      description: 'State Farm Challenge Winner',
      project: 'MirrorAPI',
      date: 'November 2025',
      theme: 'gold' as const,
      linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7394119067223138304/',
      imageUrl: '/images/HACKUTD.jpeg',
    },
    {
      title: 'HACKAI Hackathon',
      placement: '1st Place',
      description: 'Winner for innovative AI solution',
      project: 'Connect',
      date: 'April 2025',
      theme: 'accent' as const,
      linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7320514737706778626/',
      imageUrl: '/images/HACKAI.jpeg',
    },
  ];

  return (
    <main className="relative min-h-screen text-foreground overflow-x-hidden">
      <AmbientBackground />

      <Navbar />

      {/* ─── Hero ─── */}
      <section
        id="home"
        className="relative lg:min-h-screen pt-24 sm:pt-28 lg:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center lg:min-h-[calc(100vh-5rem)]">
          <div className="relative">
            <HeroMapBackground />
            <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-8 items-center py-6 sm:py-12 lg:py-0">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-left">
              <p className="text-xs sm:text-sm tracking-[0.25em] text-accent uppercase">
                Hello, I&apos;m
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Parsa Bazrpash
              </h1>
              <h2 className="text-base sm:text-xl md:text-2xl text-accent font-medium">
                Software Engineer
              </h2>
              <p className="text-muted leading-relaxed max-w-lg text-sm sm:text-base">
                Software Engineering student at The University of Texas at Dallas and Application
                Engineer at Vanguard, with internship experience in full-stack development, backend
                systems, cloud services, and enterprise software. Skilled in Java, C#, C++, Python,
                JavaScript, TypeScript, React.js, Next.js, Node.js, MongoDB, and PostgreSQL.
                Passionate about building reliable, user-friendly applications and exploring the
                intersection of software engineering, financial technology, and AI.
              </p>
              <div className="flex flex-row gap-3 pt-1 lg:hidden">
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-light text-white text-xs font-medium hover:opacity-90 transition-opacity group flex-1"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border-subtle text-foreground text-xs font-medium hover:border-accent transition-colors flex-1"
                >
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Link>
              </div>
              <Link
                href="#projects"
                className="hidden lg:inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-light text-white text-xs tracking-[0.2em] font-medium hover:opacity-90 transition-opacity group"
              >
                VIEW MY WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Content — Profile */}
            <div className="relative order-1 lg:order-2 flex flex-col items-center lg:items-end gap-4 sm:gap-6 w-full max-w-sm sm:max-w-none mx-auto lg:mx-0 lg:max-w-none">
              {/* Location — desktop only */}
              <div className="hidden lg:flex w-full justify-end lg:absolute lg:top-0 lg:right-8 z-10">
                <div className="text-right">
                  <p className="text-[10px] tracking-[0.2em] text-muted uppercase">Based in</p>
                  <p className="text-sm font-semibold tracking-wider">DALLAS, TX</p>
                </div>
              </div>

              <div className="relative flex items-center justify-center gap-2 sm:gap-4 w-full">
                {/* Image Frame */}
                <div className="relative flex-shrink-0">
                  <div className="hero-profile-glow" aria-hidden />
                  <div className="p-1 bg-accent clip-image-frame relative z-[1]">
                    <div className="relative w-52 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 clip-image-frame overflow-hidden bg-accent">
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

                {/* Rotating Badge — desktop only */}
                <div className="hidden lg:flex flex-shrink-0">
                  <RotatingBadge />
                </div>
              </div>

              {/* Info cards — mobile only */}
              <div className="grid grid-cols-2 gap-3 w-full lg:hidden">
                <div className="p-3 rounded-lg border border-border-subtle/60 bg-surface/40">
                  <MapPin className="w-4 h-4 text-accent mb-2" />
                  <p className="text-[10px] tracking-[0.2em] text-accent uppercase mb-1">
                    Based In
                  </p>
                  <p className="text-sm font-semibold">Dallas, TX</p>
                </div>
                <div className="p-3 rounded-lg border border-border-subtle/60 bg-surface/40">
                  <Briefcase className="w-4 h-4 text-accent mb-2" />
                  <p className="text-[10px] tracking-[0.2em] text-accent uppercase mb-1">
                    Currently Working At
                  </p>
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-sm font-semibold">Vanguard</p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                  </div>
                </div>
              </div>

              {/* Working card — desktop only */}
              <div className="hidden lg:block w-full sm:w-auto px-4 py-3 rounded-lg bg-surface border border-border-subtle/60 card-surface lg:absolute lg:-bottom-2 lg:right-4">
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
          </div>

          {/* Tech Stack + Quote */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8 pt-6 sm:pt-12 pb-6 sm:pb-8 border-t border-border-subtle mt-4 sm:mt-8">
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 justify-center lg:justify-start">
                <div className="flex-1 h-px bg-border-subtle lg:hidden" />
                <p className="text-[10px] tracking-[0.25em] text-muted uppercase whitespace-nowrap">
                  Tech Stack
                </p>
                <div className="flex-1 h-px bg-border-subtle" />
              </div>
              <TechStackIcons />
              <div className="flex justify-center lg:hidden mt-4">
                <Link
                  href="#experience"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border-subtle text-xs text-muted hover:border-accent hover:text-accent transition-colors"
                >
                  + More
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-px h-10 bg-accent flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Experience ─── */}
      <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Experience &{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-muted text-sm sm:text-base mt-3 max-w-xl mx-auto lg:mx-0">
              My professional journey, academic background, and technical strengths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {/* Professional Experience */}
            <div className="resume-column-card">
              <div className="flex items-center gap-2.5 mb-5">
                <Briefcase className="w-5 h-5 text-accent" />
                <h3 className="text-base sm:text-lg font-semibold">Professional Experience</h3>
              </div>
              <div className="space-y-3">
                {[...experiences, ...(showAll ? moreExperiences : [])].map((exp) => (
                  <div
                    key={exp.company}
                    className={`resume-entry-card ${exp.status === 'Current' ? 'resume-entry-card--active' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 relative rounded-lg overflow-hidden flex-shrink-0 bg-surface-elevated border border-white/[0.06]">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="font-semibold text-sm leading-snug">{exp.position}</h4>
                            <p className="text-muted text-xs sm:text-sm mt-0.5">{exp.company}</p>
                          </div>
                          <span
                            className={`resume-status-badge flex-shrink-0 ${
                              exp.status === 'Current'
                                ? 'resume-status-badge--current'
                                : 'resume-status-badge--completed'
                            }`}
                          >
                            <span className="resume-status-dot" />
                            {exp.status}
                          </span>
                        </div>
                        <p className="text-muted text-xs mt-1.5">{exp.period}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="resume-see-more-btn mt-4"
              >
                <Plus className="w-4 h-4" />
                {showAll ? 'See Less' : 'See More (+2)'}
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>
            </div>

            {/* Education */}
            <div className="resume-column-card">
              <div className="flex items-center gap-2.5 mb-5">
                <GraduationCap className="w-5 h-5 text-accent" />
                <h3 className="text-base sm:text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.school}
                    className={`resume-entry-card ${edu.status === 'Current' ? 'resume-entry-card--active' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 relative rounded-lg overflow-hidden flex-shrink-0 bg-surface-elevated border border-white/[0.06]">
                        <Image
                          src={edu.logo}
                          alt={`${edu.school} Logo`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h4 className="font-semibold text-sm leading-snug">{edu.school}</h4>
                            <p className="text-muted text-xs sm:text-sm mt-0.5">{edu.degree}</p>
                          </div>
                          <span
                            className={`resume-status-badge flex-shrink-0 ${
                              edu.status === 'Current'
                                ? 'resume-status-badge--current'
                                : 'resume-status-badge--completed'
                            }`}
                          >
                            <span className="resume-status-dot" />
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-muted text-xs mt-1.5">{edu.period}</p>
                        {edu.gpa && (
                          <span className="inline-block mt-2 px-2.5 py-0.5 text-[11px] font-medium rounded-md border border-accent/40 text-accent bg-accent/10">
                            GPA: {edu.gpa}
                          </span>
                        )}
                        {'note' in edu && edu.note && (
                          <div className="flex gap-2 mt-3 pt-2 border-t border-white/[0.06]">
                            <Quote className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <p className="text-muted text-xs italic leading-relaxed">{edu.note}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="resume-column-card md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <Zap className="w-5 h-5 text-accent" />
                <h3 className="text-base sm:text-lg font-semibold">Skills & Expertise</h3>
              </div>
              <div className="space-y-5">
                {skillCategories.map((cat) => {
                  const CategoryIcon = cat.icon;
                  return (
                    <div key={cat.category}>
                      <div className="flex items-center gap-2 mb-3">
                        <CategoryIcon className="w-4 h-4 text-accent/80" />
                        <h4 className="font-medium text-sm text-muted">{cat.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <SkillTag key={skill} name={skill} variant="chip" />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              My{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-muted text-sm sm:text-base mt-3 max-w-xl mx-auto lg:mx-0">
              Applications, hackathon winners, and personal builds showcasing full-stack development.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <LayoutGrid className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{sortedProjects.length} Projects</span>
            </div>
            <button
              onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
              className="project-sort-btn"
            >
              <ArrowDownUp className="w-4 h-4" />
              {sortOrder === 'desc' ? 'Newest → Oldest' : 'Oldest → Newest'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {sortedProjects.map((project) => (
              <article key={project.title} className="project-card group">
                <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="project-card-overlay">
                      <span className="text-sm font-medium tracking-wide">View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <SkillTag key={tag} name={tag} variant="chip" />
                    ))}
                  </div>
                  <div className="flex items-end justify-between gap-3 pt-4 border-t border-white/[0.06]">
                    <p className="text-[11px] text-muted leading-relaxed line-clamp-2 flex-1">
                      {project.date}
                    </p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-icon-btn"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      )}
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-icon-btn project-icon-btn--primary"
                        title="View Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Achievements ─── */}
      <section id="achievements" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-14 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Achievements &{' '}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Awards
              </span>
            </h2>
            <p className="text-muted text-sm sm:text-base mt-3 max-w-xl mx-auto lg:mx-0">
              Hackathon wins and recognition for building innovative, impactful solutions.
            </p>
          </div>

          <div className="flex items-center gap-2.5 mb-8 justify-center lg:justify-start">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">{achievements.length} Awards</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 max-w-5xl mx-auto lg:mx-0">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className={`achievement-card group achievement-card--${achievement.theme}`}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className={`achievement-trophy achievement-trophy--${achievement.theme}`}>
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`achievement-badge achievement-badge--${achievement.theme}`}>
                        {achievement.placement}
                      </span>
                      <h3 className="font-semibold text-lg mt-2 mb-1">{achievement.title}</h3>
                      <p className="text-muted text-sm mb-2">{achievement.description}</p>
                      <p className="text-accent-light text-sm font-medium mb-2">
                        Project: {achievement.project}
                      </p>
                      <div className="flex items-center gap-1.5 text-muted text-xs">
                        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </div>

                {achievement.linkedinPost && achievement.imageUrl && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    <Link
                      href={achievement.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full overflow-hidden rounded-xl achievement-image-link"
                    >
                      <div className="relative w-full aspect-video">
                        <Image
                          src={achievement.imageUrl}
                          alt={`LinkedIn post for ${achievement.title}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="achievement-image-overlay">
                          <Linkedin className="w-8 h-8" style={{ color: '#0A66C2' }} />
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={achievement.linkedinPost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achievement-linkedin-btn mt-3"
                    >
                      <Linkedin className="w-4 h-4" style={{ color: '#0A66C2' }} />
                      View on LinkedIn
                      <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-border-subtle">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 sm:mb-16 text-center">
            <p className="text-[10px] tracking-[0.25em] text-accent uppercase mb-3">Reach Out</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-5">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-border-subtle">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-muted text-xs uppercase tracking-wider mb-0.5">Email</p>
                    <a
                      href="mailto:prsawork1@gmail.com"
                      className="text-sm hover:text-accent transition-colors break-all"
                    >
                      prsawork1@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-border-subtle">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="min-w-0">
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

            <div className="border border-border-subtle p-5 sm:p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-3">Let&apos;s Work Together</h3>
              <p className="text-muted text-sm mb-6 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
              <a
                href="mailto:prsawork1@gmail.com?subject=Let%27s%20Connect"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent to-accent-light text-white text-sm tracking-wider hover:opacity-90 transition-opacity w-fit"
              >
                <Send className="w-4 h-4" />
                SEND EMAIL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted text-xs sm:text-sm">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Parsa Bazrpash. All rights reserved.</p>
          <VisitorCount />
        </div>
      </footer>
    </main>
  );
}
