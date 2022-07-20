import React from "react";
// import { sampleData } from "./data";
import { Badge, Group } from '@mantine/core';
import { IResumeTemplate } from ".";

export const SkillSection: React.FC<IResumeTemplate> = ({ data: sampleData }) => {

    return <div className="skills">
        <div id="skills-title-header">
            <h2>Technical Skills</h2>
        </div>

        {sampleData.skills.map((skill, index) => {
            return <div key={skill.skillId} style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div key={`${skill.skillId}-skill-category`} style={{
                    marginTop: '1rem',
                    alignItems: 'center',
                    display: 'flex'
                }}>
                    <p><strong>{skill.skillCategory}</strong></p>

                </div>

                <div key={`${skill.skillId}-skill-name`} style={{
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <code>
                        <Group>
                            {skill.customSkills.map((customSkill, index) => {

                                // return <p key={`${skill.skillId}-${index}}`}>{customSkill}</p>
                                return <Badge key={`${skill.skillId}-${index}-badge`} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>{customSkill}</Badge>
                            })}
                        </Group>
                    </code>
                </div>
            </div>
        })}
    </div>
}