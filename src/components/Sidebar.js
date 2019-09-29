import React from 'react'
import { Link } from 'gatsby'
import './../../App.css';



const Sidebar = class extends React.Component {
  render() {
    return (
      <section className=" has-text-white-ter" style={{position:"fixed", zIndex:99}}>
        <div className="content has-text-centered has-text-white-ter" style={{ height: '100vh', backgroundColor:"#1e1615" }}>
          <div className="line1"style={{ fontSize: '3em', color: "white", marginBottom: "0em"}}>
            B &#38; Z 
          </div>
          <div className="line2">
            Renovations
          </div>
        
        {/* <div className="content has-text-centered has-background-#2929aaaf has-text-white-ter"> */}
          {/* <div className="container has-background-black has-text-white-ter"> */}
            {/* <div className="columns"> */}
              {/* <div className="column is-4"> */}
                {/* <section className="menu"> */}
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                {/* </section> */}
              {/* </div> */}
              {/* <div className="column is-4">
                <section> */}
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                {/* </section>
              </div>
              */}
                
              
            {/* </div> */}
          {/* </div> */}
        {/* // </div> */}
        </div>
      </section>
    )
  }
}

export default Sidebar
