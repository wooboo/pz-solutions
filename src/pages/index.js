import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import ja from '../assets/images/ja.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="founder" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Piotr Żabówka</h2>
                </header>
                <p>Założył PZ Solutions w 2011 roku, ale już od 2001 roku wspiera wiele firm w realizacji projektów IT w Polsce i w Europie</p>
                <ul className="actions">
                  {/* <li><Link to="/about-me" className="button">Czytaj dalej...</Link></li> */}
                </ul>
              </div>
              <span className="image"><img src={ja} alt="" /></span>
            </div>
          </section>

          <section id="services" className="main special">
            <header className="major">
              <h2>Usługi</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>IT Architecture &amp; Development</h3>
                <p>Tworzenie architektur rozwiązań IT. Budowanie rozproszonej i skalowalnej infrastruktury dla projektów IT. Tworzenie oprogramowania w .net oraz javascript jako część zespołu jak i na indywidualne zamówienie.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Project Management</h3>
                <p>Zarządzania projektami w metodykach zwinnych. Prowadzenie projektów w zespołach scrum'owych.</p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>IT Management</h3>
                <p>Zarządzanie infrastruturą IT. Administracja systemów wspomagających.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                {/* <li><Link to="/services" className="button">Czytaj dalej...</Link></li> */}
              </ul>
            </footer>
          </section>
{/*
          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>
*/}
        </div>

      </Layout>
    )
  }
}

export default Index
