import { useState } from 'react'

import data from './data.json'
import Jobs from './components/Jobs'
import Header from './components/Header'

const App = () => {
  const [filterKeywords, setFilterKeywords] = useState([])

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data])
    }
  }

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data)
    setFilterKeywords(newKeywords)
  }

  const clearAll = () => {
    setFilterKeywords([])
  }

  return (
    <div className="App">
      <div className="header"></div>
      {filterKeywords.length > 0 && (
        <Header
          keywords={filterKeywords}
          deleteKeyword={deleteKeyword}
          clearAll={clearAll}
        />
      )}
      <Jobs data={data} setKeywords={addFilterKeywords} />
    </div>
  )
}

export default App
