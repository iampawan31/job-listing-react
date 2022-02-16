import React from 'react'

const Header = ({ keywords, deleteKeyword, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((keyword, index) => (
          <li>
            <button onClick={() => deleteKeyword(keyword)} key={index}>
              {keyword}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
