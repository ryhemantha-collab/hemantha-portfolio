import { useEffect, useState } from "react";
import "./Hero.css";


function Hero() {

    const [greeting, setGreeting] = useState("");


    useEffect(() => {

        const hour = new Date().getHours();


        if (hour < 12) {

            setGreeting("Good Morning");

        } 
        else if (hour < 17) {

            setGreeting("Good Afternoon");

        } 
        else {

            setGreeting("Good Evening");

        }


    }, []);



    return (

        <section id="hero" className="hero-section">


            <h1>

                {greeting}, I'm R Hemantha 👋

            </h1>



            <p className="tagline">

                <strong>
                    I'm a passionate Web Developer from Bengaluru.
                </strong>

            </p>



            <div className="hero-button">


                <a href="#Projects">

                    View My Work

                </a>



                <a href="#Contact">

                    Contact Me

                </a>


            </div>


        </section>

    );

}


export default Hero;