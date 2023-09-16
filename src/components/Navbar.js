import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar bg-${props.theme.bg} border-bottom border-body`} data-bs-theme={props.theme.bg}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
            <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={
                ()=>{
                    if (props.theme.bg === "light"){
                        props.setTheme({bg: "dark", color: "white"});
                    }else{
                        props.setTheme({bg: "light", color: "black"});
                    }
                }
            }/>
            <label className="form-check-label" forHtml="flexSwitchCheckDefault" style={{color:props.theme.color}}>Enable Dark Mode</label>
            </div>
        </ul>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title: "unknown",
}