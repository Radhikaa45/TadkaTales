import React from 'react';
// In a typical React project, you would import the styles like this:
import './Footer.css';

const Footer = () => (
    <footer className="app-footer"> {/* Links to the .app-footer CSS selector */}
        <div className="footer-content"> {/* Links to the .footer-content CSS selector */}
            {/* Light text color for contrast */}
            <p className="footer-text"> {/* Links to the .footer-text CSS selector */}
                &copy; {new Date().getFullYear()} Tadka Tales Indian Cuisine Explorer. All rights reserved.
            </p>
            <div className="footer-links"> {/* Links to the .footer-links CSS selector */}
                {/* Gold hover accent - link styles are handled by the selector in CSS */}
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    </footer>
);

export default Footer;
