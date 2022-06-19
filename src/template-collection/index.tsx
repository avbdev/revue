import React from "react";
import ResumeOne from "./ResumeOne";

export enum TemplateTypes {
    ResumeOne = "ResumeOne"
}

export interface ITemplateType {
    type : TemplateTypes
}

const AvailableTemplates = {
    ResumeOne : <ResumeOne />
};

const TemplatePicker:React.FC<ITemplateType> = ({type}) => {

    return AvailableTemplates[type];
}

export default TemplatePicker;