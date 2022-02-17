import { useState } from 'react'

import data from './data.json'
import Jobs from './components/Jobs'
import Search from './components/Search'

const App = () => {
  const [filterKeywords, setFilterKeywords] = useState('')

  const setSearchKeyword = (data) => {
    setFilterKeywords(data)
  }

  return (
    <div className="App">
      <div className="header"></div>
      <Search setSearchKeyword={setSearchKeyword} />
      <Jobs data={data} keywords={filterKeywords} />
    </div>
  )
}

export default App
