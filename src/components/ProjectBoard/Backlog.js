import React from 'react'
import ProjectTask from './ProjectTasks/ProjectTask'

const Backlog = ({project_tasks}) => {

    const tasks = project_tasks.map(project_task => (
        <ProjectTask key={project_task.id} project_task={project_task}/>
    ));

    const todoItems = [];
    const inProgressItems = [];
    const doneItems = [];

    for(let i=0;i<tasks.length;i++){
        const status = tasks[i].props.project_task.status;
        if(status === "TO_DO") todoItems.push(tasks[i]);
        else if(status === "IN_PROGRESS") inProgressItems.push(tasks[i]);
        else doneItems.push(tasks[i]);
    }
    
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>
                    {todoItems}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {inProgressItems}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {doneItems}
                    
                </div>
            </div>
        </div>
    )
}

export default Backlog
