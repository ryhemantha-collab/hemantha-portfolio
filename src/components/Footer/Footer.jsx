import "./Footer.css";


function Footer() {


    return (

        <footer className="site-footer">


            <p>

                <strong>
                    Email :
                </strong>


                <a href="mailto:ryhemantha@gmail.com">

                    ryhemantha@gmail.com

                </a>


            </p>




            <p>

                <strong>
                    LinkedIn :
                </strong>


                <a
                    href="https://www.linkedin.com/in/r-hemantha-710700414"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    R Hemantha

                </a>


            </p>




            <p>

                <strong>
                    GitHub :
                </strong>


                <a
                    href="https://github.com/ryhemantha-collab"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    github.com/hemantha

                </a>


            </p>




            <p className="footer-year">

                &copy; {new Date().getFullYear()} R Hemantha. All Rights Reserved.

            </p>


        </footer>

    );


}


export default Footer;