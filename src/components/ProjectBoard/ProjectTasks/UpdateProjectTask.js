import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { updateProjectTask, getProjectTask, updateProjectTaskState } from '../../../actions/backlogAction';
import classNames from 'classnames';

const UpdateProjectTask = (props) => {
    
    const { backlog_id, pt_id } = props.match.params;
    
    const projectTask = useSelector(state => state.backlog.project_task);
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProjectTask(backlog_id, pt_id,props.history));
    },[]);
    const onChange = (event) => {
        dispatch(updateProjectTaskState({ ...projectTask,[event.currentTarget.name]: event.currentTarget.value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(updateProjectTask(backlog_id, pt_id, projectTask, props.history));
    }

    return (
        <div className="add-PBI">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">

                        <div class="d-grid gap-2 d-md-flex justify-content-md-between">
                            <Link to={`/projectBoard/${backlog_id}`} className="btn btn-sm mt-3 mb-2" style={{border:"3px solid #f3715a"}}>
                                <i class="fas fa-chevron-circle-left"> Back to Project Board</i>
                            </Link>
                            {/*<Link to={`/projectBoard/${backlog_id}`} className="btn btn-sm mt-3 mb-2" style={{border:"3px solid #f3715a"}}>
                            <i class="fas fa-calendar-check"> Work Log</i>
                            </Link>*/
                            }
                        </div>
                    
                        <div className="display-5 text-center">Update Project Task</div>
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

                            <div className="form-group">
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

export default UpdateProjectTask
