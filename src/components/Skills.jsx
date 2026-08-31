function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      color: '#a78bfa',
      skills: [ 'C', 'C++', 'Python', 'Java', 'JavaScript'],
    },
    {
      title: 'Frontend',
      color: '#60a5fa',
      skills: ['React.js', 'Redux Toolkit',   'Tailwind CSS', 'HTML5', 'CSS3'],
    },
    {
      title: 'Backend APIs',
      color: '#34d399',
      skills: ['Node.js', 'Express.js', 'Flask', 'REST API Design', 'JWT Authentication', 'Postman'],
    },
    {
      title: 'Databases and Cloud',
      color: '#f472b6',
      skills: ['MongoDB', 'MySQL', 'Firebase', 'AWS'],
    },
    {
      title: 'AI / ML',
      color: '#fb923c',
      skills: ['Machine Learning', 'OpenCV', 'Mediapipe', 'NLP', 'Scikit-learn', 'TensorFlow', 'Keras', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn'],
    },
    {
      title: 'Generative AI',
      color: '#38bdf8',
      skills: ['LLM API Integration', 'Prompt Engineering', 'Retrieval-Augmented Generation'],
    },
    {
      title: 'Tools and Analytics',
      color: '#d4b316',
      skills: ['Git/GitHub', 'Tableau,', 'PowerBI' , 'MS Excel', 'Arduino IDE', 'Figma', 'VS Code', 'Jupyter Notebook', 'Canva', 'AutoCAD'],
    },
        {
      title: 'CS Fundamentals',
      color: '#13b8a6',
      skills: ['DSA', 'OS', 'DBMS', 'OOP', 'CN'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-24 px-6"
      // style={{ backgroundColor: '#0f0f1a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor: 'rgba(96,165,250,0.15)',
              border: '1px solid rgba(96,165,250,0.3)',
              color: '#60a5fa'
            }}
          >
            Technical Skills
          </span>
          <h2 className="text-3xl font-bold" style={{ color: '#e2e8f0' }}>
            What I Work With
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
              style={{
                backgroundColor: '#1a1a2e',
                border: '1px solid #2a2a50'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = category.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2a50'}
            >
              {/* Category Title */}
              <h3
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      backgroundColor: `${category.color}15`,
                      border: `1px solid ${category.color}40`,
                      color: '#e2e8f0'
                    }}
                  >
                    {skill}
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

export default Skills