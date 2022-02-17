import React from 'react'

const Search = ({ setSearchKeyword }) => {
  return (
    <div className="header-container">
      <ul>
        <input
          type="text"
          onChange={(e) => setSearchKeyword(e.target.value)}
          name="search"
        />
      </ul>
    </div>
  )
}

export default Search
