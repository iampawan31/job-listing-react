import React from 'react'

const Header = ({ keywords, deleteKeyword, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>
            <button onClick={() => deleteKeyword(keyword)} key={index}>
              {keyword}
            </button>
          </li>
        ))}
        <li>
          <button onClick={clearAll}>Clear All</button>
        </li>
      </ul>
    </div>
  )
}

export default Header
