import React from "react";
import { ActivitySection } from "./ActivitySection";
import { EducationSection } from "./EducationSection";
import { IntroSection } from "./IntroSection";
import { NameSection } from "./NameSection";
import { ProjectSection } from "./ProjectSection";
import { SkillSection } from "./SkillsSection";
import { WorkSection } from "./WorkSection";
import "./index.css"

const ResumeOne: React.FC = () => {

    return <div id="template-resume-one" className="resume-container">

        <div id="resume-content" className="resume-content-container">
            <NameSection />
            <WorkSection />
            <ProjectSection />
            <ActivitySection />
        </div>

        <div id="resume-sidebar" className="resume-sidebar-container">
            <IntroSection />
            <EducationSection />
            <SkillSection />
        </div>

    </div>

}

export default ResumeOne