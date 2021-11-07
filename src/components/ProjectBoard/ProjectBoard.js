import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import Backlog from './Backlog';

import { getBacklog } from '../../actions/backlogAction';

const ProjectBoard = (props) => {

    const { id } = props.match.params;

    const project_tasks = useSelector(state => state.backlog.project_tasks);
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBacklog(id));
    },[]);

    const boardAlgorithm = (error, project_tasks) => {
        if(project_tasks.length < 1){
            if(errors.projectNotFound){
                return(
                    <div className="alert alert-danger text-center" role="alert">
                        {errors.projectNotFound}
                    </div>
                );
               
            } else if(errors.projectIdentifier){
                return(
                    <div className="alert alert-danger text-center" role="alert">
                        {errors.projectIdentifier}
                    </div>
                ); 
            } else {
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No Project Tasks on this board
                    </div>
                );
            }
        } else {
            return <Backlog project_tasks={project_tasks}/>
        }

    };

    const BoardContent = boardAlgorithm(errors,project_tasks);

    return (
        <div className="container">
            <div className="ms-3">
                <Link to={`/addProjectTask/${id}`} className="btn mb-2 mt-5" style={{border:"3px solid #f3715a"}}>
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
            </div>
            <br />
            <hr />
            {BoardContent}
        </div>
    )
}

export default ProjectBoard
