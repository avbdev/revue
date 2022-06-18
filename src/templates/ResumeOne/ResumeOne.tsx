import React from "react";
import { ActivitySection } from "./ActivitySection";
import { EducationSection } from "./EducationSection";
import { IntroSection } from "./IntroSection";
import { NameSection } from "./NameSection";
import { ProjectSection } from "./ProjectSection";
import { SkillSection } from "./SkillsSection";
import { WorkSection } from "./WorkSection";
// import "./ResumeOne.css"

const ResumeOne: React.FC = () => {

    return <div id="template-resume-one">

        <div id="resume-content">
            <NameSection />
            <WorkSection />
            <ProjectSection />
            <ActivitySection />
        </div>

        <div id="resume-sidebar">
            <IntroSection />
            <EducationSection />
            <SkillSection />
        </div>

    </div>

}

export default ResumeOne