function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology — Computer Science & Engineering',
      institution: 'KIET Group of Institutions, Ghaziabad',
      year: '2024 – 2028 (Expected)',
      score: 'CGPA: 9.38',
      description:
        'Focused on Data Structures, Algorithms, OOP, DBMS, and AI fundamentals. Actively involved in development clubs and NSS.',
      color: '#a78bfa',
    },
    {
      degree: 'Class XII — CBSE (Senior Secondary)',
      institution: "St. Paul's Sr. Sec. School, Etah",
      year: '2023',
      score: '95%',
      description:
        'Completed senior secondary education with distinction, building a strong foundation in Mathematics and Science.',
      color: '#60a5fa',
    },
    {
      degree: 'Class X — CBSE (Secondary)',
      institution: "St. Paul's Sr. Sec. School, Etah",
      year: '2021',
      score: '99%',
      description:
        'Achieved an outstanding score of 99% in secondary school, demonstrating academic excellence across all subjects.',
      color: '#34d399',
    },
  ]

  return (
    <section
      id="education"
      className="py-24 px-6"
      // style={{ backgroundColor: '#13132a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(52,211,153,0.15)',
              border: '1px solid rgba(52,211,153,0.3)',
              color: '#34d399'
            }}
          >
            Education
          </span>
          <h2 className="text-3xl font-bold" style={{ color: '#e2e8f0' }}>
            My Academic Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">

          {/* Vertical Line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
            style={{ backgroundColor: '#2a2a50' }}
          ></div>

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 pb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div
                className="absolute left-6 w-3 h-3 rounded-full -translate-x-1/2 mt-6 md:left-1/2 z-10"
                style={{
                  backgroundColor: edu.color,
                  boxShadow: `0 0 10px ${edu.color}80`
                }}
              ></div>

              {/* Card — alternates left/right on desktop */}
              <div
                className={`ml-16 md:ml-0 md:w-[45%] p-6 rounded-2xl transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}
                style={{
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #2a2a50'
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = edu.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a50'}
              >
                {/* Year Badge */}
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${edu.color}15`,
                    border: `1px solid ${edu.color}40`,
                    color: edu.color
                  }}
                >
                  {edu.year}
                </span>

                {/* Degree */}
                <h3
                  className="text-base font-bold mt-3 mb-1"
                  style={{ color: '#e2e8f0' }}
                >
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: edu.color }}
                >
                  {edu.institution}
                </p>

                {/* Score */}
                <p
                  className="text-xs font-semibold mb-3"
                  style={{ color: '#94a3b8' }}
                >
                  {edu.score}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Education