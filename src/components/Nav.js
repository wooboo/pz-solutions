import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['founder', 'services', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="founder">
                    <a href="#">Założyciel</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="services">
                    <a href="#">Usługi</a>
                </Scroll>
            </li>
            {/* <li>
                <Scroll type="id" element="second">
                    <a href="#">Second Section</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Get Started</a>
                </Scroll>
            </li> */}
        </Scrollspy>
    </nav>
)

export default Nav
