function Projects() {
  const projects = [
    {
      title: 'FloraNourish – Smart Crop Monitoring System',
      status: 'Ongoing',
      description:
        'An IoT-based smart crop monitoring system that captures real-time environmental data and predicts irrigation needs using machine learning.',
      points: [
        'Built an IoT pipeline using ESP32 sensors to capture 4+ real-time parameters — soil moisture, temperature, humidity, and light.',
        'Automated sensor data transmission to Firebase cloud via Wi-Fi, enabling remote monitoring from any device.',
        'Trained a Python ML model on historical crop data to predict irrigation needs and reduce water wastage.',
        'Designed a JavaScript/HTML dashboard to visualize live sensor data and remotely trigger smart irrigation controls.',
      ],
      tech: [
        'ESP8266',
        'Python',
        'ML',
        'Firebase',
        'HTML',
        'CSS',
        'JavaScript',
        'MQTT',
      ],
      color: '#a78bfa',
      github: 'https://github.com',
      live: null,
    },
    {
  title: 'Personal Portfolio Website',
  status: 'Completed',
  description:
    'A modern, responsive personal portfolio website to showcase my projects, skills, and achievements as a developer.',
  points: [
    'Built a fully responsive portfolio using React.js and Tailwind CSS with a custom dark elegant theme.',
    'Designed reusable components for each section — Hero, About, Skills, Projects, Education, Certifications, Achievements, and Contact.',
    'Implemented smooth scroll navigation, hover animations, and gradient UI for a premium user experience.',
    'Deployed on Netlify with a live public URL for recruiters and collaborators to access anytime.',
  ],
  tech: ['React.js', 'Tailwind CSS', 'Vite', 'JavaScript', 'Netlify'],
  color: '#34d399',
  github: 'https://github.com',
  live: 'https://yourportfolio.netlify.app',
},
{
  title: 'Sales Performance Dashboard',
  status: 'Completed',
  description:
    'An interactive Power BI dashboard analysing sales trends, profitability, and operational insights using the Sample Superstore dataset.',
  points: [
    'Developed a 3-page interactive Power BI dashboard analysing sales trends and profitability by sub-category.',
    'Processed and visualised 9,994 records to extract actionable business insights across regions and categories.',
    'Identified loss-making categories and analysed discount-profit correlation using 15+ visualisations.',
  ],
  tech: ['Power BI', 'Data Analytics', 'Data Visualisation', 'Sample Superstore Dataset'],
  color: '#60a5fa',
  github: 'https://github.com',
  live: null,
},
  ]

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ backgroundColor: '#13132a' }}
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
            Projects
          </span>

          <h2
            className="text-3xl font-bold"
            style={{ color: '#e2e8f0' }}
          >
            What I've Built
          </h2>

         </div>

        {/* Projects */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #2a2a50',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  project.color)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor =
                  '#2a2a50')
              }
            >
              {/* Top */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">

                {/* Title */}
                <div className="flex flex-wrap items-center gap-3">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: '#e2e8f0' }}
                  >
                    {project.title}
                  </h3>

                  {project.status && (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor:
                          'rgba(52,211,153,0.15)',
                        border:
                          '1px solid rgba(52,211,153,0.3)',
                        color: '#34d399',
                      }}
                    >
                      {project.status}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        border: '1px solid #2a2a50',
                        color: '#94a3b8',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor =
                          project.color
                        e.target.style.color =
                          project.color
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor =
                          '#2a2a50'
                        e.target.style.color =
                          '#94a3b8'
                      }}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200"
                      style={{
                        background:
                          'linear-gradient(135deg, #a78bfa, #60a5fa)',
                        color: '#0f0f1a',
                      }}
                    >
                      Live ↗
                    </a>
                  )}

                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: '#94a3b8' }}
              >
                {project.description}
              </p>

              {/* Points */}
              <ul className="flex flex-col gap-2 mb-6">
                {project.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-sm flex gap-2"
                    style={{ color: '#cbd5e1' }}
                  >
                    <span style={{ color: project.color }}>
                      •
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor:
                        'rgba(255,255,255,0.05)',
                      color: '#94a3b8',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects 