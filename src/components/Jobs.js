import { useEffect, useState } from 'react'
import Job from './Job'

const Jobs = ({ data, keywords }) => {
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    const searchFunc = () => {
      if (keywords.length > 0) {
        const newData = filteredData.filter((d) => {
          return d.position.toLowerCase().includes(keywords)
        })

        setFilteredData(newData)
      } else {
        setFilteredData(data)
      }
    }

    searchFunc()
  }, [keywords])

  return (
    <div className="jobs">
      {filteredData.map((job, index) => (
        <Job key={index} job={job} />
      ))}
    </div>
  )
}

export default Jobs
