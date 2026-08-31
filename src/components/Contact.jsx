import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

const handleSubmit = async (e) => {
  e.preventDefault()
  setLoading(true)

  const response = await fetch('https://formspree.io/f/mnjwdwww', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  setLoading(false)

  if (response.ok) {
    setSubmitted(true)
  } else {
    alert('Something went wrong, please try again!')
  }
}

  const contactItems = [
    {
      label: 'Email',
      value: 'goyalkanika204@gmail.com',
      href: 'mailto:goyalkanika204@gmail.com',
      icon: '📧',
      color: '#a78bfa',
    },
    {
      label: 'GitHub',
      value: 'github.com/kanika204',
      href: 'https://github.com/kanika204',
      icon: '💻',
      color: '#60a5fa',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kanika-goyal-8b2311328',
      href: 'https://www.linkedin.com/in/kanika-goyal-8b2311328/',
      icon: '🔗',
      color: '#34d399',
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-6"
      // style={{ backgroundColor: '#0f0f1a' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span
            className="text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{
              backgroundColor:
                'rgba(96,165,250,0.15)',
              border:
                '1px solid rgba(96,165,250,0.3)',
              color: '#60a5fa',
            }}
          >
            Contact
          </span>

          <h2
            className="text-3xl font-bold"
            style={{ color: '#e2e8f0' }}
          >
            Get In Touch
          </h2>

         </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div className="flex flex-col gap-6">

            <p
              className="text-sm leading-relaxed"
              style={{ color: '#94a3b8' }}
            >
              I'm currently open to internship
              opportunities, collaborations, and
              interesting projects. Feel free to
              reach out anytime.
            </p>

            {contactItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: '#1a1a2e',
                  border: '1px solid #2a2a50',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor =
                    item.color)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor =
                    '#2a2a50')
                }
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    backgroundColor:
                      `${item.color}20`,
                    border:
                      `1px solid ${item.color}40`,
                  }}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium transition-all duration-200"
                      style={{
                        color: '#e2e8f0',
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.color =
                          item.color)
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.color =
                          '#e2e8f0')
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: '#e2e8f0',
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: '#1a1a2e',
              border: '1px solid #2a2a50',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="text-5xl">🎉</div>

                <h3
                  className="text-xl font-bold"
                  style={{
                    color: '#e2e8f0',
                  }}
                >
                  Message Sent!
                </h3>

                <p
                  className="text-sm"
                  style={{
                    color: '#94a3b8',
                  }}
                >
                  Thanks for reaching out.
                  I'll get back soon.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      message: '',
                    })
                  }}
                  className="text-xs font-semibold px-5 py-2 rounded-full mt-2 transition-all duration-200"
                  style={{
                    border:
                      '1px solid #a78bfa',
                    color: '#a78bfa',
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    backgroundColor:
                      '#0f0f1a',
                    border:
                      '1px solid #2a2a50',
                    color: '#e2e8f0',
                  }}
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    backgroundColor:
                      '#0f0f1a',
                    border:
                      '1px solid #2a2a50',
                    color: '#e2e8f0',
                  }}
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    backgroundColor:
                      '#0f0f1a',
                    border:
                      '1px solid #2a2a50',
                    color: '#e2e8f0',
                  }}
                />

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                  style={{
                    background: loading
                      ? 'rgba(167,139,250,0.5)'
                      : 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                    color: '#0f0f1a',
                    cursor: loading
                      ? 'not-allowed'
                      : 'pointer',
                  }}
                >
                  {loading
                    ? 'Sending...'
                    : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact