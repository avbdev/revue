import React from "react";
// import { sampleData } from "./data";
import { Timeline, Text } from '@mantine/core';
import { GitBranch, GitPullRequest, GitCommit, MessageDots } from 'tabler-icons-react';
import { IResumeTemplate } from ".";

const IconComp = [GitBranch, GitPullRequest, GitCommit, MessageDots, MessageDots];

export const WorkSection: React.FC<IResumeTemplate> = ({ data: sampleData }) => {

    return <div className="work-experience" style={{ fontSize: '70%' }}>
        <div id="work-title-header">
            <h2> Work Experience</h2>
        </div>

        {/* {sampleData.workExperience.map((wex, index) => {

            return <div key={wex.wexId}>
                <div key={`${wex.wexId}-company-details`}>
                    <p><strong>{wex.companyName}:</strong> {wex.role}, {wex.startDate} - {wex.endDate}</p>

                </div>

                <div key={`${wex.wexId}-location-details`}>
                    <code>
                        {wex.location.city}, {wex.location.state}, {wex.location.country}
                    </code>
                </div>
            </div>
        })} */}

        <Timeline active={1} bulletSize={24} lineWidth={2}>
            {sampleData.workExperience.map((wex, index) => {

                const IconNow = IconComp[index];
                return <Timeline.Item key={wex.wexId} bullet={<IconNow size={12} />} title={wex.company.name}>
                    <Text key={`${wex.wexId}-company-details`} color="dimmed" size="sm">{wex.role}, {wex.startDate} - {wex.endDate}</Text>
                    <Text key={`${wex.wexId}-location-details`} size="xs" mt={4}>{wex.location.city}, {wex.location.state}, {wex.location.country}</Text>

                    {wex.projects.map((project, index) => {
                        return (
                            <div key={project.projectId}>
                                <div key={`${project.projectId}-project-name`} style={{}}>
                                    <h3>
                                        <strong>{project.projectName}</strong>
                                    </h3>
                                </div>

                                <div key={`${project.projectId}-project-role`} style={{}}>
                                    <code>Role: {project.role}</code>
                                </div>

                                <div key={`${project.projectId}-project-activities`} style={{}}>
                                    <code>Activities:</code>

                                    <ul style={{}}>
                                        {project.activities.map((activity, index) => {
                                            return (
                                                <li key={`${project.projectId}-${index}-project-activity`} style={{/** lineHeight: "2rem",**/ marginLeft: "2.2rem", fontSize: "70%" }}>
                                                    {activity.activityDescription}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </Timeline.Item>
            })}

        </Timeline>

    </div>
}
