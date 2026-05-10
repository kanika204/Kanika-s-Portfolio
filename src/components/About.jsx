function About() {
  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ backgroundColor: '#13132a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(167,139,250,0.15)',
              border: '1px solid rgba(167,139,250,0.3)',
              color: '#a78bfa'
            }}
          >
            About Me
          </span>
          <h2 className="text-3xl font-bold" style={{ color: '#e2e8f0' }}>
            Who I Am
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              I'm Kanika Goyal, a tech enthusiast and aspiring software developer who is feverently passionate about building impactful solutions. I have a strong interest in innovation and new trends, and I'm always looking for ways to investigate, pick up, and use cutting-edge technologies to solve real-world problems. </p>
            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              I work best in dynamic settings where creativity and purpose are combined, whether that be working forward-thinking professionals or getting my hands dirty on practical projects.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              Contributing to open-source projects, participating in hackathons, and collaborating with like-minded individuals are some of the ways I enjoy learning and growing in the tech community.
            </p>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                { label: 'Degree', value: 'B.Tech CSE' },
                { label: 'College', value: 'KIET, Ghaziabad' },
                { label: 'Year', value: '2nd Year (2024–2028)' },
              ].map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 p-3 rounded-xl"
                  style={{
                    backgroundColor: '#1a1a2e',
                    border: '1px solid #2a2a50'
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#a78bfa' }}>
                    {fact.label}
                  </span>
                  <span className="text-sm font-medium" style={{ color: '#e2e8f0' }}>
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats */}
          <div className="flex flex-col gap-6">

            {/* Stat Cards */}
            {[
              { number: '9.50', label: 'CGPA', color: '#a78bfa' },
              { number: '95%', label: 'Class XII Score', color: '#60a5fa' },
              { number: '99%', label: 'Class X Score', color: '#34d399' },
              { number: '3+', label: 'Projects Built', color: '#f472b6' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #2a2a50'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = stat.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a50'}
              >
                <span
                  className="text-4xl font-bold"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </span>
                <span className="text-sm font-medium" style={{ color: '#94a3b8' }}>
                  {stat.label}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default About