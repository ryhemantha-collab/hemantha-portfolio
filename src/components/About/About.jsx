import "./About.css";
import profileImage from "../../assets/profilepic.png";


function About() {


    return (

        <section id="About" className="about-section">


            <h2>
                About Me
            </h2>



            <figure className="profile-picture">


                <img
                    src={profileImage}
                    alt="R Hemantha"
                    width="250"
                    height="300"
                />


                <figcaption>

                    R Hemantha - Web Developer

                </figcaption>


            </figure>



            <p>

                <em>

                    I transform complex problems into sleek, intuitive, and responsive web applications using HTML, CSS, and JavaScript. Focused on clean code and performance, I build digital experiences that users love to interact with.

                </em>

            </p>


        </section>

    );

}


export default About;