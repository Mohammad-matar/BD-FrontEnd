import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import "./style.css";

export default function LatestWork() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getall();
    }, []);

    const getall = () => {
        axios
            .get("https://badawi-api.onrender.com/project")
            .then((res) => {
                setData(res.data.data);
                // console.log(res.data.data)
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="latestwork_container" id="project">
            <div className="servicesTitle">Project</div>

            <div className="Project_description">
                {isLoading ? (
                    <Loading />
                ) : (
                    data.map((project) => {
                        return (
                            <div className="project_cards">
                                <div className="project_image_container">
                                    <img src={project.image} alt="projectimg" />
                                    <div className="overlay_product">
                                        <div className="view_more_project_button">
                                            <button>
                                                <a href={project.linkTo} target="_blank" rel="noreferrer" className="viewTheDemo">
                                                    View the Demo
                                                </a>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="project_title_name">
                                        {project.title}
                                    </p>
                                    <p> {project.appName}</p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
