import React from "react";
import { sampleData } from "./data";
import { Badge, Group } from '@mantine/core';

export const SkillSection: React.FC = () => {

    return <div className="skills">
        <div id="skills-title-header">
            <h2>Technical Skills</h2>
        </div>

        {sampleData.skills.map((skill, index) => {
            return <div key={skill.skillId}>
                <div key={`${skill.skillId}-skill-category`}>
                    <p><strong>{skill.skillCategory}</strong></p>

                </div>

                <div key={`${skill.skillId}-skill-name`}>
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