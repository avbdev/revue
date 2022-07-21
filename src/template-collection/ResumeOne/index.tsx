import React from "react";
import { ActivitySection } from "./ActivitySection";
import { EducationSection } from "./EducationSection";
import { IntroSection } from "./IntroSection";
import { NameSection } from "./NameSection";
import { ProjectSection } from "./ProjectSection";
import { SkillSection } from "./SkillsSection";
import { WorkSection } from "./WorkSection";
import "./index.css"
import { Resume } from "./Interfaces";

export interface IResumeTemplate {
    data: Resume
}

const ResumeOne: React.FC<IResumeTemplate> = ({ data }) => {

    return <div id="template-resume-one" className="resume-container">

        <div id="resume-content" className="resume-content-container">
            <NameSection data={data} />
            <WorkSection data={data} />
            {/* <ProjectSection data={data} /> */}
            <ActivitySection data={data} />
        </div>

        <div id="resume-sidebar" className="resume-sidebar-container">
            <IntroSection data={data} />
            <EducationSection data={data} />
            <SkillSection data={data} />
        </div>

    </div>

}

export default ResumeOne