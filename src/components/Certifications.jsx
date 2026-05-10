function Certifications() {
const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2026',
      description:
        'Completed AWS Cloud Practitioner certification covering core AWS services, cloud concepts, security, architecture, and pricing.',
      color: '#f59e0b',
      link: null,
    },
    {
      title: 'Networking Essentials',
      issuer: 'Cisco',
      date: '2026',
      description:
        'Gained foundational knowledge of computer networking, protocols, IP addressing, and network security through Cisco\'s official program.',
      color: '#34d399',
      link: null,
    },
    {
      title: 'Human Computer Interaction',
      issuer: 'NPTEL — IIIT Delhi',
      date: '2026',
      description:
        'Studied principles of HCI including user-centered design, usability, interaction design patterns, and evaluation methods.',
      color: '#60a5fa',
      link: null,
    },
    {
      title: 'Programming with Generative AI',
      issuer: 'NPTEL — IIT Madras',
      date: '2025',
      description:
        'Completed a comprehensive course on Generative AI concepts, tools, and real-world applications offered by IIT Madras via NPTEL.',
      color: '#a78bfa',
      link: null,
    },
  ]

  return (
    <section
      id="certifications"
      className="py-24 px-6"
      style={{ backgroundColor: '#0f0f1a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(167,139,250,0.15)',
              border: '1px solid rgba(167,139,250,0.3)',
              color: '#a78bfa',
            }}
          >
            Certifications
          </span>

          <h2
            className="text-3xl font-bold"
            style={{ color: '#e2e8f0' }}
          >
            Certifications
          </h2>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
              style={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #2a2a50',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  cert.color)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  '#2a2a50')
              }
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-3">

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    backgroundColor: `${cert.color}20`,
                    border: `1px solid ${cert.color}40`,
                  }}
                >
                  🎓
                </div>

                {/* Date */}
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: `${cert.color}15`,
                    border: `1px solid ${cert.color}40`,
                    color: cert.color,
                  }}
                >
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-base font-bold leading-snug"
                style={{ color: '#e2e8f0' }}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p
                className="text-sm font-semibold"
                style={{ color: cert.color }}
              >
                {cert.issuer}
              </p>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: '#94a3b8' }}
              >
                {cert.description}
              </p>

              {/* Certificate Link */}
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold mt-auto w-fit px-4 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    border: `1px solid ${cert.color}`,
                    color: cert.color,
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      `${cert.color}20`)
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      'transparent')
                  }
                >
                  View Certificate ↗
                </a>
              ) : (
                <span
                  className="text-xs font-medium mt-auto w-fit px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor:
                      'rgba(148,163,184,0.1)',
                    color: '#94a3b8',
                  }}
                >
                  Certificate Earned ✓
                </span>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Certifications