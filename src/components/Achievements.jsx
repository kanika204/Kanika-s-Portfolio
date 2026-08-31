function Achievements() {
  const achievements = [
      {
  title: 'Finalist, HackVega 2.0',
  description:
    'Selected as a finalist in HackVega 2.0, a National Engineering Hackathon organized by HirePro & MyCareernet.',
  category: 'Hackathon',
  icon: '🏆',
  color: '#f472b6',
      },
    {
      title: 'Academic Brilliance Award',
      description:
        'Awarded for outstanding academic performance in the First Year of B.Tech CSE at KIET Group of Institutions.',
      category: 'Academic',
      icon: '🏆',
      color: '#f59e0b',
    },
    {
      title: 'Finalist — Navonmesh 2025',
      description:
        'Selected as a finalist in the AKTU AIdea Challenge (Navonmesh 2025), a university-level AI innovation competition.',
      category: 'Competition',
      icon: '🚀',
      color: '#a78bfa',
    },
  ]

  return (
    <section
      id="achievements"
      className="py-24 px-6"
      // style={{ backgroundColor: '#13132a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#f59e0b'
            }}
          >
            Achievements
          </span>
          <h2 className="text-3xl font-bold" style={{ color: '#e2e8f0' }}>
            Milestones
          </h2>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
              style={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #2a2a50'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = item.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a50'}
            >

              {/* Top Row — Icon + Category */}
              <div className="flex items-center justify-between">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: `${item.color}20`,
                    border: `1px solid ${item.color}40`
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                    color: item.color
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold leading-snug"
                style={{ color: '#e2e8f0' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                {item.description}
              </p>

              {/* Bottom Accent Line */}
              <div
                className="h-0.5 w-12 rounded-full mt-auto"
                style={{ backgroundColor: item.color }}
              ></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements