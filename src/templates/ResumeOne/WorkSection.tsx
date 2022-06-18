import React from "react";
import { sampleData } from "./data";
import { Timeline, Text } from '@mantine/core';
import { GitBranch, GitPullRequest, GitCommit, MessageDots } from 'tabler-icons-react';

const IconComp = [GitBranch, GitPullRequest, GitCommit, MessageDots];

export const WorkSection: React.FC = () => {

    return <div className="work-experience">
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
                return <Timeline.Item key={wex.wexId} bullet={<IconNow size={12} />} title={wex.companyName}>
                    <Text key={`${wex.wexId}-company-details`} color="dimmed" size="sm">{wex.role}, {wex.startDate} - {wex.endDate}</Text>
                    <Text key={`${wex.wexId}-location-details`} size="xs" mt={4}>{wex.location.city}, {wex.location.state}, {wex.location.country}</Text>
                </Timeline.Item>
            })}

        </Timeline>

    </div>
}
