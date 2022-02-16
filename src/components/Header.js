import React from 'react'
import close from './images/icon-remove.svg'

const Header = ({ keywords, deleteKeyword, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((keyword, index) => (
          <li key={index}>
            <span key={index}>
              {keyword}
              <img
                onClick={() => deleteKeyword(keyword)}
                src={close}
                className="close"
                alt={`Clear ${keyword}`}
              />
            </span>
          </li>
        ))}
        <li className="clear">
          <span onClick={clearAll}>Clear</span>
        </li>
      </ul>
    </div>
  )
}

export default Header
