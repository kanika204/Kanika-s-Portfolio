function Experience() {
  const experiences = [
    {
      role: 'Member',
      organization: 'Innogeeks — Development Club, KIET',
      duration: '2024 – Present',
      type: 'Club',
      description:
        'Active member of Innogeeks, the official development club of KIET. Collaborate with fellow developers on real-world tech projects and attend workshops.',
      skills: ['Web Development', 'Collaboration', 'Problem Solving'],
      color: '#a78bfa',
      icon: '💻',
    },
    {
      role: 'Student Coordinator',
      organization: 'NSS Club — KIET Group of Institutions',
      duration: '2025 – Present',
      type: 'Leadership',
      description:
        'Organizing community events, coordinating volunteers, and leading social initiatives on campus as Student Coordinator of NSS Club.',
      skills: ['Leadership', 'Event Management', 'Communication'],
      color: '#34d399',
      icon: '🌱',
    },
    {
      role: 'Graphics Team Coordinator',
      organization: 'NSS Club — KIET Group of Institutions',
      duration: '2026 – Present',
      type: 'Creative',
      description:
        'Leading the graphics team for NSS Club, designing posters and all visual content for club events and social media.',
      skills: ['Graphic Design', 'Canva', 'Visual Communication'],
      color: '#f472b6',
      icon: '🎨',
    },
  ]

  return (
    <section
      id="experience"
      className="py-24 px-6"
      // style={{ backgroundColor: '#0f0f1a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-10">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(167,139,250,0.15)',
              border: '1px solid rgba(167,139,250,0.3)',
              color: '#a78bfa'
            }}
          >
            Experience
          </span>
          <h2 className="text-3xl font-bold" style={{ color: '#e2e8f0' }}>
            Where I've Contributed
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl flex flex-col md:flex-row md:items-start gap-5 transition-all duration-300"
              style={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #2a2a50',
                borderLeft: `3px solid ${exp.color}`
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e1e35'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1a1a2e'}
            >

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  backgroundColor: `${exp.color}20`,
                  border: `1px solid ${exp.color}40`
                }}
              >
                {exp.icon}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">

                {/* Top Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold" style={{ color: '#e2e8f0' }}>
                      {exp.role}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: exp.color }}>
                      {exp.organization}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${exp.color}15`,
                        border: `1px solid ${exp.color}40`,
                        color: exp.color
                      }}
                    >
                      {exp.type}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: '#94a3b8' }}
                    >
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${exp.color}15`,
                        border: `1px solid ${exp.color}40`,
                        color: '#e2e8f0'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience