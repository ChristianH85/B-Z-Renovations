import React from 'react'
import { Link } from 'gatsby'
// import useWindowSize from './useWindowSize';
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }
  
  componentDidMount=()=>{
    // const { width, height } = useWindowSize();
 
// console.log(width, height);
    // console.log(this.props.windowWidth)
  }
  toggleHamburger = () => {
    
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container" style={{position:"fixed", top:"0", backgroundColor:"rgba(0, 0, 0, 0.84)", color: "white"}}>
          <div className="navbar-brand" >
            <Link to="/" className="navbar-item" title="Logo" style={{margin:"0em", padding:0}}>
              {/* <img src={logo} alt="B and Z Renovations" style={{width:'100%', height:'100%'}}/> */}
              <div style={{color:"rgba(255, 255, 255, 0.93)"}}>
                <span style={{fontSize: '1.5em', fontWeight:"700"}}>B&#38;Z</span> <span style={{fontSize: '1.25em', fontWeight:"500"}}>Renovations</span>
              </div>
              {/* <img src="{logo} "alt="B & Z Renovations" style={{ width: '88px' }} /> */}
            </Link>
            {/* Hamburger menu */}
            <div
            style={{color:"rgba(255, 255, 255, 0.93)", fontSize:"2em"}}
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              {/* <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link> */}
              {/* <Link className="navbar-item col s4 offset-s4 " >
                <button>
                  <a href="mailto:chenry5724@gmail.com?" style={{color:"#01040a"}}>Contact</a>
                </button>
              </Link> */}
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                // href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  {/* <img src={github} alt="Github" /> */}
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
