import { useEffect, useRef } from "react";
import "./Skill.css";


function Skills() {


    const progressRef = useRef([]);



    useEffect(() => {


        const observer = new IntersectionObserver(

            (entries) => {


                entries.forEach((entry) => {


                    if(entry.isIntersecting){


                        const value = 
                        entry.target.dataset.progress;


                        entry.target.style.width = value + "%";


                    }


                });


            },

            {
                threshold:0.4
            }


        );



        progressRef.current.forEach((bar)=>{


            if(bar){

                observer.observe(bar);

            }


        });



        return () => {

            progressRef.current.forEach((bar)=>{

                if(bar){

                    observer.unobserve(bar);

                }

            });

        };


    },[]);




    const skills = [

        {
            name:"HTML",
            percentage:90
        },

        {
            name:"CSS",
            percentage:85
        },

        {
            name:"JavaScript",
            percentage:80
        },

        {
            name:"React",
            percentage:75
        }

    ];




    return (


        <section 
            id="Skills" 
            className="skill-section"
        >


            <h2>
                My Skills
            </h2>



            <div className="skill-grid">


                {skills.map((skill,index)=>(


                    <div 
                        className="skill-item" 
                        key={index}
                    >


                        <div className="skill-header">


                            <span>

                                {skill.name}

                            </span>


                            <span>

                                {skill.percentage}%

                            </span>


                        </div>




                        <div className="progress-bar">


                            <div

                                className="progress"

                                data-progress={skill.percentage}

                                ref={(element)=>
                                    progressRef.current[index]=element
                                }

                            >

                            </div>


                        </div>



                    </div>


                ))}



            </div>



        </section>


    );


}


export default Skills;