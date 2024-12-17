"use client"
import Link from 'next/link'
import { Github, Linkedin, Menu } from 'lucide-react'
import { useState } from 'react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-gray-100 text-lg font-semibold">Parsa Bazrpash</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Resume', 'Projects'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="inline-flex items-center px-1 pt-1 text-gray-100 hover:text-custom-blue"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="https://www.linkedin.com/in/parsa-bazrpash-amalgar/" target="_blank">
              <Linkedin className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
            </Link>
            <Link href="https://github.com/ParsaBazrpash" target="_blank">
              <Github className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {['Home', 'About', 'Resume', 'Projects'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block py-2 text-gray-100 hover:text-custom-blue"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2">
              <Link href="https://www.linkedin.com/in/parsa-bazrpash-amalgar/" target="_blank">
                <Linkedin className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
              </Link>
              <Link href="https://github.com/ParsaBazrpash" target="_blank">
                <Github className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}