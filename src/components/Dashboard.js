import React from 'react'
import CreateProjectButton from './Project/CreateProjectButton'
import ProjectItem from './Project/ProjectItem'
import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { getProjects } from '../actions/projectActions';

const Dashboard = () => {
    const projects = useSelector(state => state.projects.projects);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjects());
    },[]);

    return (
        <div>
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center mt-4">Projects</h1>
                            <br />
                            <CreateProjectButton />
                            <br />
                            <hr />
                            {
                                projects.map(project => (
                                    <ProjectItem key={project.id} project={project}/>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
