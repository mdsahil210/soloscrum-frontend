import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { addProjectTask } from '../../../actions/backlogAction';
import classNames from 'classnames';

const AddProjectTask = (props) => {

    const { id } = props.match.params;

    const initialState = {
        summary: "",
        acceptanceCriteria: "",
        dueDate: "",
        priority: "",
        status: "",
        projectIdentifier: id
    }

    const dispatch = useDispatch();

    const [projectTask, setProjectTask] = useState(initialState);

    const errors = useSelector(state => state.errors);

    const onChange = (event) => {
        setProjectTask({ ...projectTask,[event.currentTarget.name]: event.currentTarget.value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(addProjectTask(id,projectTask,props.history));
        setProjectTask({});
    }

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to={`/projectBoard/${id}`} className="btn btn-sm mt-3 mb-2" style={{border:"3px solid #f3715a"}}>
                            <i class="fas fa-chevron-circle-left"> Back to Project Board</i>
                        </Link>
                        
                        <div className="display-5 text-center">Add Project Task</div>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-2">
                                <input type="text" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.summary
                                })} name="summary" placeholder="Project Task summary"
                                value={projectTask.summary} onChange={onChange}
                                />
                                {errors.summary && (
                                    <div className="invalid-feedback">{errors.summary}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"
                                value={projectTask.acceptanceCriteria} onChange={onChange}></textarea>
                            </div>
                            <h6>Due Date</h6>
                            <div className="form-group mb-2">
                                <input type="date" className="form-control form-control-lg" name="dueDate" 
                                value={projectTask.dueDate} onChange={onChange}/>
                            </div>
                            <div className="form-group mb-2">
                                <select className="form-control form-control-lg" name="priority" value={projectTask.priority} onChange={onChange}>
                                    <option value={0}>Select Priority</option>
                                    <option value={1}>High</option>
                                    <option value={2}>Medium</option>
                                    <option value={3}>Low</option>
                                </select>
                            </div>

                            <div className="form-group mb-2">
                                <select className="form-control form-control-lg" name="status" value={projectTask.status} onChange={onChange}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>

                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProjectTask
