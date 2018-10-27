import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Dane kontaktowe</h2>
            <dl className="alt">
                <dt>Adres</dt>
                <dd>ul. Obrzeżna 1D/177 &bull; 02-691, Warszawa &bull; Polska</dd>
                <dt>NIP</dt>
                <dd>797-174-35-23</dd>
                <dt>Email</dt>
                <dd><a href="#">biuro@pz-solutions.pl</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
            </ul>
        </section>
        <p className="copyright">&copy; PZ Solutions. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
