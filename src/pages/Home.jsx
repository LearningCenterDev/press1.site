// import React from 'react'
// import Hero from '../components/Hero'
// import Services from '../components/Services'
// import Portfolio from '../components/Portfolio'
// import About from '../components/About'
// import Contact from '../components/Contact'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// const Home = () => {
//     return (
//         <div>
//             <Navbar />
//             <Hero />
//             <Services />
//             <Portfolio />
//             <About />
//             <Contact />
//             <Footer />
//         </div>
//     )
// }

// export default Home

import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../../src/css/Home.css";

const Home = () => {
    return (
        <div className="page">
            <Navbar />


            <main className="page-main">
                <Hero />

                <section className="section">
                    <Services />
                </section>

                <section className="section">
                    <Portfolio />
                </section>

                <section className="section">
                    <About />
                </section>

                <section className="section">
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
