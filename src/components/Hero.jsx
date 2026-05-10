function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-20"
      style={{
        background:
          'radial-gradient(ellipse at 30% 50%, rgba(167,139,250,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(96,165,250,0.08) 0%, transparent 50%)',
        backgroundColor: '#0f0f1a',
      }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="flex flex-col gap-5">

          {/* Tag */}
          {/* <span
            className="w-fit text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(167,139,250,0.15)',
              border: '1px solid rgba(167,139,250,0.3)',
              color: '#a78bfa',
            }}
          >
            Computer Science Student
          </span> */}
                    <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full"
  style={{
    backgroundColor: 'rgba(52,211,153,0.1)',
    border: '1px solid rgba(52,211,153,0.3)'
  }}
>
  {/* Pulsing dot */}
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
      style={{ backgroundColor: '#34d399' }}
    ></span>
    <span className="relative inline-flex h-2 w-2 rounded-full"
      style={{ backgroundColor: '#34d399' }}
    ></span>
  </span>
  <span className="text-xs font-semibold" style={{ color: '#34d399' }}>
    Open to Work
  </span>
</div>

          {/* Heading */}
          <h1
            className="text-5xl font-bold leading-tight"
            style={{ color: '#e2e8f0' }}
          >
            Hi, I'm <br />
            <span className="gradient-text">Kanika Goyal</span>
          </h1>

          {/* Role */}
          <p
            className="text-lg font-medium"
            style={{ color: '#60a5fa' }}
          >
            Aspiring Software Developer & AI Enthusiast
          </p>



          {/* Bio */}
          <p
            className="text-sm leading-relaxed max-w-md"
            style={{ color: '#94a3b8' }}
          >
            Second-year B.Tech. student at KIET with a 9.50 CGPA, focusing on building real-world solutions 
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-2 flex-wrap">

            <a
              href="#projects"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background:
                  'linear-gradient(135deg, #a78bfa, #60a5fa)',
                color: '#0f0f1a',
              }}
              onMouseEnter={(e) =>
                (e.target.style.opacity = '0.85')
              }
              onMouseLeave={(e) =>
                (e.target.style.opacity = '1')
              }
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                border: '1px solid #a78bfa',
                color: '#a78bfa',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor =
                  'rgba(167,139,250,0.15)'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
              }}
            >
              Contact Me
            </a>

          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-2 flex-wrap">

            <a
              href="https://github.com/kanika204"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium transition-all duration-200"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) =>
                (e.target.style.color = '#a78bfa')
              }
              onMouseLeave={(e) =>
                (e.target.style.color = '#94a3b8')
              }
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/kanika-goyal-8b2311328/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium transition-all duration-200"
              style={{ color: '#94a3b8' }}
              onMouseEnter={(e) =>
                (e.target.style.color = '#60a5fa')
              }
              onMouseLeave={(e) =>
                (e.target.style.color = '#94a3b8')
              }
            >
              LinkedIn ↗
            </a>
            {/* LeetCode 👇 */}
  
            <a href="https://leetcode.com/u/Kanika_010705/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium transition-all duration-200"
              style={{color: '#94a3b8'}}
              onMouseEnter={e => e.target.style.color = '#f59e0b'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
           >
            LeetCode ↗
          </a>
            {/* Resume Download — add this 👇 */}
  
            <a href="/resume.pdf"
              download="Kanika_Goyal_Resume.pdf"
              className="text-xs font-medium transition-all duration-200"
              style={{color: '#94a3b8'}}
              onMouseEnter={e => e.target.style.color = '#34d399'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
              Resume ↓
            </a>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center">
          <div className="relative">

            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30"
              style={{
                background:
                  'linear-gradient(135deg, #a78bfa, #60a5fa)',
              }}
            ></div>

            {/* Image */}
            <img
              src="/me.jpeg"
              alt="Kanika Goyal"
              className="relative rounded-full overflow-hidden"
              style={{
                width: '300px',
                height: '300px',
                border:
                  '3px solid rgba(167,139,250,0.5)',
              }}
            />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero