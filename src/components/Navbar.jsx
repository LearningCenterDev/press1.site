import React, { useEffect, useState } from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900) setOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const prev = document.body.style.overflow;
        if (open) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const closeMenu = () => setOpen(false);

    return (
        <>
            <header className={`nav ${open ? "nav-open" : ""}`}>
                <div className="nav-inner container">
                    <Link className="nav-brand" to="/" onClick={closeMenu}>
                        <img src={logo} className="nav-logo" alt="Press 1 Technologies" />
                    </Link>

                    {/* Desktop menu (unchanged) */}
                    <nav className="nav-pill">
                        <a className="nav-link" href="/#services">Services</a>
                        <a className="nav-link" href="/#portfolio">Portfolio</a>
                        <a className="nav-link" href="/#about">About</a>
                        <a className="nav-link" href="/#contact">Contact</a>
                        <Link className="nav-link" to="/career">Career</Link>
                    </nav>

                    <div className="nav-right">
                        <a className="nav-cta nav-cta-desktop" href="/#contact">Let's Talk</a>

                        {/* ✅ Premium burger */}
                        <button
                            className={`nav-burger ${open ? "is-open" : ""}`}
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            aria-controls="nav-drawer"
                            onClick={() => setOpen((v) => !v)}
                            type="button"
                        >
                            <span className="line l1" />
                            <span className="line l2" />
                            <span className="line l3" />
                        </button>
                    </div>
                </div>
            </header>

            <div
                className={`nav-backdrop ${open ? "open" : ""}`}
                onClick={closeMenu}
                aria-hidden={!open}
            />

            <aside
                id="nav-drawer"
                className={`nav-drawer ${open ? "open" : ""}`}
                aria-hidden={!open}
            >
                <div className="nav-drawer-top">
                    <span className="nav-drawer-title">Menu</span>
                    <button className="nav-x" onClick={closeMenu} aria-label="Close menu">
                        ✕
                    </button>
                </div>

                <nav className="nav-drawer-links">
                    <a className="nav-d-link" href="/#services" onClick={closeMenu}>
                        <span>Services</span><span className="nav-d-arrow">↗</span>
                    </a>
                    <a className="nav-d-link" href="/#portfolio" onClick={closeMenu}>
                        <span>Portfolio</span><span className="nav-d-arrow">↗</span>
                    </a>
                    <a className="nav-d-link" href="/#about" onClick={closeMenu}>
                        <span>About</span><span className="nav-d-arrow">↗</span>
                    </a>
                    <a className="nav-d-link" href="/#contact" onClick={closeMenu}>
                        <span>Contact</span><span className="nav-d-arrow">↗</span>
                    </a>
                    <Link className="nav-d-link" to="/career" onClick={closeMenu}>
                        <span>Career</span><span className="nav-d-arrow">↗</span>
                    </Link>
                </nav>

                <a className="nav-d-cta" href="/#contact" onClick={closeMenu}>
                    Let’s Talk
                </a>

                <div className="nav-drawer-foot">
                    <span className="nav-d-badge">Press 1 Technologies</span>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
