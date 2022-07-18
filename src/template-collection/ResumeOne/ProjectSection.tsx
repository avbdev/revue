import React from "react";
import { sampleData } from "./data";

export const ProjectSection: React.FC = () => {

    return <div className="projects">
        <div id="project-title-header">
            <h2>Projects</h2>
        </div>
        {sampleData.projects.map((project, index) => {
            return <div key={project.projectId}>
                <div key={`${project.projectId}-project-name`}>
                    <p><strong>{project.projectName}</strong></p>

                </div>

                <div key={`${project.projectId}-project-role`}>
                    <code>
                        Role: {project.role}
                    </code>
                </div>

                <div key={`${project.projectId}-project-activities`}>
                    <code>
                        Activities:
                    </code>

                    <ul>
                        {
                            project.activities.map((activity, index) => {

                                return <li key={`${project.projectId}-${index}-project-activity`}>
                                    {activity.activityDescription}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        })
        }

    </div>

}