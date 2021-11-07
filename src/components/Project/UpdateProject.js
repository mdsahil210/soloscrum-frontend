import React from 'react';
import { getProject, updateProject, createProject } from '../../actions/projectActions';
import { useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import classNames from 'classnames';

const UpdateProject = (props) => {

    const { id } = props.match.params;
    const project = useSelector(state => state.projects.project);
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProject(id,props.history));
    },[]);
    
    const onChange = (event) => {
        dispatch(updateProject({ ...project,[event.currentTarget.name]: event.currentTarget.value }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createProject(project,props.history));
    }
    
    return (
        <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h3 className="display-6 text-center">Update Project form</h3>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-2">
                                <input type="text" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.projectName 
                                })}
                                placeholder="Project Name" name="projectName" value={project.projectName} onChange={onChange}/>

                                {errors.projectName && (
                                    <div className="invalid-feedback">{errors.projectName}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID" name="projectIdentifier" value={project.projectIdentifier} 
                                    disabled />
                            </div>
                            <div className="form-group mb-2">
                                <textarea className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.description
                                })}
                                placeholder="Project Description" name="description" value={project.description} onChange={onChange}></textarea>

                                {errors.description && (
                                    <div className="invalid-feedback">{errors.description}</div>
                                )}
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group mb-2">
                                <input type="date" className="form-control form-control-lg" name="start_date" value={project.start_date} onChange={onChange} />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group mb-2">
                                <input type="date" className="form-control form-control-lg" name="end_date" value={project.end_date} onChange={onChange}/>
                            </div>

                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProject
