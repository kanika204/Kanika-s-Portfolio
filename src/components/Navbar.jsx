import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={
        scrolled
          ? { backgroundColor: 'rgba(15,15,26,0.85)' }
          : {}
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold pr-25"
          style={{ color: '#a78bfa' }}
        >
          Turning Ideas into Reality
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 mx-auto">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium transition-all duration-200"
                style={{ color: '#94a3b8' }}
                onMouseEnter={(e) =>
                  (e.target.style.color = '#a78bfa')
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = '#94a3b8')
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{ backgroundColor: '#a78bfa' }}
          ></span>

          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
            style={{ backgroundColor: '#a78bfa' }}
          ></span>

          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{ backgroundColor: '#a78bfa' }}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{
            backgroundColor: 'rgba(15,15,26,0.95)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-all duration-200"
              style={{ color: '#94a3b8' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar