import React from 'react'
import {Link} from 'react-router-dom';
import { deleteProject } from '../../actions/projectActions';
import { useDispatch} from "react-redux";

const ProjectItem = ({project}) => {
    const dispatch = useDispatch();
    const onDeleteClick = () => {
        dispatch(deleteProject(project.projectIdentifier));
    }
    return (
        <div>
            <div className="container">
                <div className="card card-body mb-3" style={{background: "#F0FFFF", border:"1px solid #84C5F7"}}>
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{project.projectIdentifier}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{project.projectName}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <Link to={`/projectBoard/${project.projectIdentifier}`}>
                                    <li className="list-group-item board">
                                        <i className="fas fa-tasks"> Project Board </i>
                                    </li>
                                </Link>
                                <Link to={`/updateProject/${project.projectIdentifier}`}>
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> Update Project Info</i>
                                    </li>
                                </Link>

                                <li className="list-group-item delete" onClick={onDeleteClick}>
                                    <i className="fa fa-minus-circle pr-1"> Delete Project</i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
