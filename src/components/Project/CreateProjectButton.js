import React from 'react'
import { Link } from 'react-router-dom';

const CreateProjectButton = () => {
    return (
        <div className="ms-4">
            <Link to="/addProject" className="btn" style={{border:"3px solid #f3715a"}}>
                <i className="fas fa-plus-circle"> Create a Project</i>
            </Link>
        </div>
    )
}

export default CreateProjectButton
