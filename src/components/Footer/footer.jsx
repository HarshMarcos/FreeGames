import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-main">

                <section className="top">
                    <ul>
                        <li>
                            <h3>Pagination</h3>
                            <Link to="/">Home</Link>
                            <Link to="/categories">Categories</Link>
                            <Link to="/catalogue">Catalogue</Link>
                        </li>
                        <li>
                            <h3>Resources</h3>
                            <Link to="https://www.freetogame.com/terms-of-use" target='_blank'>API Usage</Link>
                            <Link to="https://www.freetogame.com/api-doc" target='_blank'>API Docs</Link>
                            <Link to="https://www.freetogame.com/faq" target='_blank'>API Support</Link>
                        </li>
                        <li>
                            <h3>Development</h3>
                            <Link to="/about">About Us</Link>
                            <Link target='_blank'>Project</Link>
                            <Link to="https://react.dev" target='_blank'>React Docs</Link>
                        </li>
                        <li>
                            <h3>Social Media</h3>
                            <Link target='_blank'>GitHub</Link>
                            <Link >Linkedin</Link>
                            <Link >Instagram</Link>
                        </li>
                    </ul>
                </section>

                <section className="bottom">
                    <span>© 2024 Way to Game</span>
                </section>
            </div>

        </footer>
    );
}

export default Footer;