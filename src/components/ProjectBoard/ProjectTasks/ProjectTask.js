import React from 'react';
import {Link} from 'react-router-dom';
import { deleteProjectTask } from '../../../actions/backlogAction';
import { useDispatch} from "react-redux";

const ProjectTask = ({project_task}) => {

    const dispatch = useDispatch();
    const onDeleteClick = () => {
        dispatch(deleteProjectTask(project_task.projectIdentifier,project_task.projectSequence));
    }

    let priorityString;
    let priorityClass;

    if(project_task.priority === 1){
        priorityClass = "bg-danger text-light"
        priorityString = "HIGH"
    }
    if(project_task.priority === 2){
        priorityClass = "bg-warning text-light"
        priorityString = "MEDIUM"
    }
    if(project_task.priority === 3){
        priorityClass = "bg-info text-light"
        priorityString = "LOW"
    }
    return (
        <div className="card mb-2 bg-light" style={{background: "#F0FFFF", border:"1px solid #84C5F7"}}>

            <div className={`card-header text-primary ${priorityClass}`}>
                ID: {project_task.projectSequence} -- Priority: {priorityString}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{project_task.summary}</h5>
                <p className="card-text text-truncate ">
                    {project_task.acceptanceCriteria}
                </p>
                <Link to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`} className="btn btn-primary">
                    View / Update
                </Link>

                <button className="btn btn-danger ms-4" onClick={onDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ProjectTask
