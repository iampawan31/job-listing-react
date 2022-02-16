import { useEffect, useState } from 'react'
import Job from './Job'

const Jobs = ({ data, keywords, setKeywords }) => {
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const modifiedData = () => {
      if (keywords.length > 0) {
        const newData = filteredData.filter((d) => {
          return keywords.every((k) => {
            return (
              d.role === k ||
              d.level === k ||
              d.languages.includes(k) ||
              d.tools.includes(k)
            )
          })
        })
        setFilteredData(newData)
      } else {
        setFilteredData(data)
      }
    }
    modifiedData()
  }, [keywords, filteredData, data])

  return (
    <div className="jobs">
      {filteredData.map((job, index) => (
        <Job key={index} job={job} setKeywords={setKeywords} />
      ))}
    </div>
  )
}

export default Jobs
