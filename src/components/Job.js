import { useState, useEffect } from 'react'

const Job = ({ job }) => {
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

  useEffect(() => {
    const importSvgs = () => {
      import(`${logo}`).then((d) => {
        setIcon(d.default)
      })
    }

    importSvgs()
  }, [logo])

  const keywords = [role, level, ...languages, ...tools]

  return (
    <div className={featured ? 'job-container left-border' : 'job-container'}>
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
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="part2">
        {keywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </div>
    </div>
  )
}

export default Job
