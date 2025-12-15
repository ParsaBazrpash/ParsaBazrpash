"use client"
import Link from 'next/link'
import { Github, Linkedin, Menu, Youtube } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const isHomePage = pathname === '/'
  
  const navItems = ['Home', 'Resume', 'Projects', 'Achievements', 'Contact'].map(item => ({
    name: item,
    href: isHomePage ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`
  }))

  return (
    <nav className="fixed top-0 w-full bg-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-gray-100 text-lg font-semibold hover:text-custom-blue"
            >
              Parsa Bazrpash
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="inline-flex items-center px-1 pt-1 text-gray-100 hover:text-custom-blue"
              >
                {item.name}
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
            <Link href="https://www.youtube.com/@ParsaBazrpash" target="_blank">
              <Youtube className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
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
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="block py-2 text-gray-100 hover:text-custom-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex space-x-4 pt-2">
              <Link href="https://www.linkedin.com/in/parsa-bazrpash-amalgar/" target="_blank">
                <Linkedin className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
              </Link>
              <Link href="https://github.com/ParsaBazrpash" target="_blank">
                <Github className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
              </Link>
              <Link href="https://www.youtube.com/@ParsaBazrpash" target="_blank">
                <Youtube className="w-6 h-6 text-gray-100 hover:text-custom-blue" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
