import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch} from "react-redux";
import { createProject } from '../../actions/projectActions';
import classNames from 'classnames';

const AddProject = (props) => {

    const initialProject = {
        projectName: "",
        projectIdentifier: "",
        description: "",
        start_date: "",
        end_date: ""
    }

    const [project,setProject] = useState({initialProject});

    const errors = useSelector(state => state.errors);

    const dispatch = useDispatch();

    const onChange = (event) => {
        setProject({ ...project,[event.currentTarget.name]: event.currentTarget.value });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(createProject(project,props.history));
        setProject({});
    }

    return (
        <div>
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Project form</h5>
                            <hr />
                            <form onSubmit={onSubmit}>
                                <div className="form-group mb-2">
                                    <input type="text" className={classNames("form-control form-control-lg",{
                                        "is-invalid": errors.projectName
                                    })} placeholder="Project Name" name="projectName" value={project.projectName} onChange={onChange}/>
                                
                                    {errors.projectName && (
                                        <div className="invalid-feedback">{errors.projectName}</div>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <input type="text" className={classNames("form-control form-control-lg",{
                                        "is-invalid": errors.projectIdentifier
                                    })} placeholder="Unique Project ID" name="projectIdentifier" value={project.projectIdentifier} onChange={onChange}/>
                                    {errors.projectIdentifier && (
                                        <div className="invalid-feedback">{errors.projectIdentifier}</div>
                                    )}
                                </div>
                                <div className="form-group mb-2">
                                    <textarea className={classNames("form-control form-control-lg",{
                                        "is-invalid": errors.description
                                    })} placeholder="Project Description" name="description" value={project.description} onChange={onChange}></textarea>
                                    {errors.description && (
                                        <div className="invalid-feedback">{errors.description}</div>
                                    )}
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group mb-2">
                                    <input type="date" className="form-control form-control-lg" name="start_date" value={project.start_date} onChange={onChange}/>
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
        </div>
    )
}

export default AddProject;
