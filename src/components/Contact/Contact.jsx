import { useState } from "react";
import "./Contact.css";


function Contact() {

    const [sent, setSent] = useState(false);


    const handleSubmit = (e) => {

        e.preventDefault();


        setSent(true);


        e.target.reset();


        setTimeout(() => {

            setSent(false);

        }, 3000);

    };


    return (

        <section 
            id="Contact" 
            className="contact-section"
        >

            <h2>
                Get In Touch
            </h2>


            <form onSubmit={handleSubmit}>


                <div className="contact-form">

                    <label htmlFor="name">
                        Name
                    </label>

                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        required
                    />

                </div>



                <div className="contact-form">

                    <label htmlFor="email">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        required
                    />

                </div>




                <div className="contact-form">

                    <label htmlFor="number">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        id="number"
                        placeholder="Enter your phone number"
                    />

                </div>




                <div className="contact-form">

                    <label htmlFor="message">
                        Message
                    </label>

                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Enter your message"
                        required
                    ></textarea>

                </div>




                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sent}
                >

                    {sent ? "Message Sent ✅" : "Send Message"}

                </button>


            </form>


        </section>

    );

}


export default Contact;