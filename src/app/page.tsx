import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Coffee, Code, GraduationCap } from 'lucide-react';
import { Navbar } from './components/Navbar';


export default function Home() {
  
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
              I&apos;m a Software Engineering student at the University of Texas at Dallas,
              passionate about full-stack development and UI/UX design. Proficient in 
              C++, Java, and Python, I&apos;m expanding my expertise in modern web technologies
              including React.js, Next.js, TypeScript, and JavaScript. My journey in
              web development has given me strong foundations in HTML/CSS, while I continually
              embrace new technologies and best practices.
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
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Professional Experience</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">Frontend Web Developer</h4>
                  <p className="text-gray-400">AIAA UT Dallas – 02/2025 - Present</p>


                  
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">UI/UX Designer</h4>
                  <p className="text-gray-400">Nebula Labs – 10/2024 - 02/2025</p>
                  <ul className="list-disc ml-4 mt-2 text-gray-400">
                    <li>Collaborating with students to design intuitive interfaces</li>
                    <li>Utilizing Figma for responsive designs</li>
                    <li>Working with developers on implementation</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">Software Engineer</h4>
                  <p className="text-gray-400">AIMD – 10/2024 - 02/2025</p>
                  <ul className="list-disc ml-4 mt-2 text-gray-400">
                    <li>Developing and creating a full-stack web application named &quot;DocAlert&quot; which you can schedule appointments with your doctor.</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">Barista</h4>
                  <p className="text-gray-400">Starbucks – 01/2024 - Present</p>
                  <ul className="list-disc ml-4 mt-2 text-gray-400">
                    <li>Excel in precision, building genuine customer connections, maintaining efficiency and organization</li>
                    <li>Thrive in fast-paced environments, collaborating effectively with the team to ensure every visit is a memorable experience</li>
                  </ul>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">Computer Science Instructor</h4>
                  <p className="text-gray-400">iCode School Franchise – 03/2024 - 08/2024</p>
                  <ul className="list-disc ml-4 mt-2 text-gray-400">
                    <li>Teaching how to create 2D games using the Scratch programming language, including games like PacMan, Flappy Bird, and various ball games</li>
                    <li>How to create YouTube content, including using green screens, editing, and recording videos</li>
                    <li>Robotics, 3D design, and Python programming language</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-100">Education</h3>
              <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">University of Texas at Dallas</h4>
                  <p className="text-gray-400">Bachelor&apos;s, Software Engineering</p>
                  <p className="text-gray-400">08/2024 - 05/2026</p>
                  <p className="text-gray-400 mt-2">GPA: 3.75</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">Dallas College</h4>
                  <p className="text-gray-400">Associate&apos;s, Software Engineering</p>
                  <p className="text-gray-400">08/2022 - 08/2024</p>
                  <p className="text-gray-400 mt-2">GPA: 3.96</p>
                </div>
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold text-gray-100">Alborz High School</h4>
                  <p className="text-gray-400">High School Diploma, Mathematics</p>
                  <p className="text-gray-400">07/2015 - 06/2021</p>
                  <p className="text-gray-400 mt-2">The first modern and largest high school in Asia and the Middle East</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">Skills</h3>
            <div className="space-y-4">
              {[
                { name: 'Java', level: 70 },
                { name: 'C#', level: 65 },
                { name: 'C++', level: 60 },
                { name: 'Python', level: 50 },
                { name: 'SQL/MySQL', level: 50 },
                { name: 'HTML/CSS/Tailwind CSS', level: 80 },
                { name: 'JavaScript', level: 50 },
                { name: 'TypeScript', level: 50 },
                { name: 'React.js', level: 60 },
                { name: 'Next.js', level: 55 },
                { name: 'Git', level: 65 },
                { name: 'Figma', level: 90 },
              ].map((skill) => (
                <div key={skill.name} className="text-gray-400">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
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
            <h3 className="text-4xl font-bold text-custom-blue">3.75</h3>
          </div>
          <p className="text-gray-300">GPA</p>
        </div>
        <div className="p-6 rounded-lg bg-gray-800 shadow-lg text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Code className="w-8 h-8 text-custom-blue" />
            <h3 className="text-4xl font-bold text-custom-blue">100+</h3>
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
          <p>&copy; 2024 Parsa Bazrpash Amalgar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
