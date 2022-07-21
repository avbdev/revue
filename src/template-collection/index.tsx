import React from "react";
import ResumeOne from "./ResumeOne";
import { Resume } from "./ResumeOne/Interfaces";

export enum TemplateTypes {
    ResumeOne = "ResumeOne"
}

export interface ITemplateType {
    type: TemplateTypes
    data: Resume
}

const AvailableTemplates = (data: Resume) => {
    return { ResumeOne: <ResumeOne data={data} /> }
};

const TemplatePicker: React.FC<ITemplateType> = ({ type, data }) => {

    return AvailableTemplates(data)[type];
}

export default TemplatePicker;