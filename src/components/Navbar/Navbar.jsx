import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleTheme = () => {
        document.body.classList.toggle("dark-mode");
        setDarkMode((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="logo">
                    RH
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li>
                        <a href="#About" onClick={closeMenu}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#Skills" onClick={closeMenu}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#Projects" onClick={closeMenu}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#Contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="nav-buttons">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle Navigation"
                    >
                        ☰
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;