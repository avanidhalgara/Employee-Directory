import React from 'react'
import "../style/header.css";
// import Jumbotron from 'react-bootstrap'

function Header () {
    return (
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 text-white ">Employee Directory</h1>
        <p className="lead text-white ">Click on carets to filter by heading or use the search box to narrow your results.</p>
      </div>
    </div>
    )
  }

export default Header;


