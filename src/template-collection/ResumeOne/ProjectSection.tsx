import React from "react";
import { sampleData } from "./data";

export const ProjectSection: React.FC = () => {
  return (
    <div className="projects">
      <div id="project-title-header">
        <h2>Projects</h2>
      </div>
      {sampleData.projects.map((project, index) => {
        return (
          <div key={project.projectId}>
            <div key={`${project.projectId}-project-name`} style={{ marginTop: "3rem" }}>
              <h3>
                <strong>{project.projectName}</strong>
              </h3>
            </div>

            <div key={`${project.projectId}-project-role`} style={{ marginTop: "1rem" }}>
              <code>Role: {project.role}</code>
            </div>

            <div key={`${project.projectId}-project-activities`} style={{ marginTop: "0.5rem" }}>
              <code>Activities:</code>

              <ul style={{ marginTop: "0.5rem" }}>
                {project.activities.map((activity, index) => {
                  return (
                    <li key={`${project.projectId}-${index}-project-activity`} style={{ lineHeight: "2rem", marginLeft: "2.2rem" }}>
                      {activity.activityDescription}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
