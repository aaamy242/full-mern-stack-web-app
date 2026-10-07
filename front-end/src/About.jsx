import { useEffect, useState } from 'react'

const About = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5002/about')
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error('Error fetching About Us data:', error))
  }, [])

  if (!aboutData) {
    return <p>Loading...</p>
  }

  return (
    <div className="About">
      <h1>{aboutData.title}</h1>

      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}

      <img
        src={aboutData.imageUrl}
        alt="Amy"
        style={{ width: '300px' }}
      />
    </div>
  )
}

export default About