import React from 'react'
import Job from './Job'

const Jobs = ({ data, setKeywords }) => {
  return (
    <div className="jobs">
      {data.map((job, index) => (
        <Job key={index} job={job} setKeywords={setKeywords} />
      ))}
    </div>
  )
}

export default Jobs
