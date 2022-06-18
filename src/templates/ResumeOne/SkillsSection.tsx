import React from "react";
import { sampleData } from "./data";

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
                        {skill.customSkills.map((customSkill, index) => {

                            return <p key={`${skill.skillId}-${index}}`}>{customSkill}</p>
                        })}
                    </code>
                </div>
            </div>
        })}
    </div>
}