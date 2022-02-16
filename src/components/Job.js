import { useState, useEffect } from 'react'

const Job = ({ job, setKeywords }) => {
  const {
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job

  const [icon, setIcon] = useState(logo)

  const importSvgs = () => {
    const logoSvg = import(`${logo}`).then((d) => {
      setIcon(d.default)
    })
  }

  useEffect(() => {
    importSvgs()
  }, [logo])

  const keywords = [role, level, ...languages, ...tools]

  return (
    <div className="job-container">
      <div className="logo">
        <img src={icon} alt={company} />
      </div>
      <div className="part1">
        <div className="company">
          <div className="cname">{company}</div>
          {job.new && <span className="new">new!</span>}
          {featured && <span className="featured">featured!</span>}
        </div>
        <div className="position">{position}</div>
        <div className="details">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="part2">
        {keywords.map((keyword, index) => (
          <button onClick={() => setKeywords(keyword)} key={index}>
            {keyword}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Job
