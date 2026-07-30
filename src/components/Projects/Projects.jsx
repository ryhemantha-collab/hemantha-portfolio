import "./Projects.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";


function Projects() {


   const projects = [

    {
        image: project1,
        title:"Weather App",
        description:
        "Real-time weather dashboard using the OpenWeather API.",
        tags:["React","API"]
    },


    {
        image: project2,
        title:"Portfolio Website",
        description:
        "A responsive personal portfolio showcasing my skills, projects, and contact details.",
        tags:["HTML","CSS","JavaScript"]
    },


    {
        image: project3,
        title:"To-Do List App",
        description:
        "A task management application to add, edit, delete, and organize daily tasks.",
        tags:["JavaScript","HTML","CSS"]
    }

];



    return (

        <section 
            id="Projects" 
            className="projects-section"
        >


            <h2>
                My Projects
            </h2>



            <div className="projects-grid">


                {
                    projects.map((project,index)=>(


                        <article 
                            className="project-card" 
                            key={index}
                        >


                            <img
                                src={project.image}
                                alt={project.title}
                            />



                            <h3>
                                {project.title}
                            </h3>



                            <p>
                                {project.description}
                            </p>




                            <div className="project_tags">


                                {
                                    project.tags.map((tag,i)=>(

                                        <span key={i}>
                                            {tag}
                                        </span>

                                    ))
                                }


                            </div>





                            <a href="#">
                                Live Demo
                            </a>


                            <a href="#">
                                GitHub
                            </a>



                        </article>


                    ))
                }



            </div>



        </section>

    );

}


export default Projects;