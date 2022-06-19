import { FC, useEffect, useState } from "react";
import { sampleData } from "../../../template-collection/ResumeOne/data";
import { WorkExperience } from "../../../template-collection/ResumeOne/Interfaces";
import { AppInput } from "../../Molecules/AppInput";
import "./Profiles.css"

export enum WorkExperienceInputTypes {
    role = "role",
    startDate = "startDate",
    endDate = "endDate",
    company = "company",
    location = "location",
}

export const WorkExperienceStep: FC = () => {

    const [selectedExperience, setSelectedExperience] = useState<Partial<WorkExperience>>();

    const handleChange = (ev?: any, inputType?: WorkExperienceInputTypes) => {

        const inputKey = inputType ? WorkExperienceInputTypes[inputType] : undefined;

        setSelectedExperience((prevState) => {

            return inputKey ? { ...prevState, [inputKey]: ev?.target.value } : prevState;
        })

    }

    const inputData = [
        {
            label: "Company",
            value: selectedExperience ? selectedExperience.company?.name : "",
            description: "",
            placeholder: "XYZ Company Inc",
            // errorMessage:"",
            type: WorkExperienceInputTypes.company,
            onChange: (ev?: any) => handleChange(ev, WorkExperienceInputTypes.company)
        },
        {
            label: "Role",
            value: selectedExperience ? selectedExperience.role : "",
            description: '',//`Your role at ${selectedExperience?.company?.name}`,
            placeholder: "Software Engineer",
            // errorMessage:"",
            type: WorkExperienceInputTypes.role,
            onChange: (ev?: any) => handleChange(ev, WorkExperienceInputTypes.role)
        },
        {
            label: "Start Date",
            value: selectedExperience ? selectedExperience.startDate : "",
            description: "Enter the month-year when you started working here",
            placeholder: "Aug 2020",
            // errorMessage:"",
            type: WorkExperienceInputTypes.startDate,
            onChange: (ev?: any) => handleChange(ev, WorkExperienceInputTypes.startDate)
        },
        {
            label: "End Date",
            value: selectedExperience ? selectedExperience.endDate : "",
            description: "",
            placeholder: "Jan 2022",
            // errorMessage:"",
            type: WorkExperienceInputTypes.endDate,
            onChange: (ev?: any) => handleChange(ev, WorkExperienceInputTypes.endDate)
        },
        {
            label: "City",
            value: selectedExperience && selectedExperience.location ? selectedExperience.location.city : "",
            description: "",
            placeholder: "Seattle, WA, 98052",
            // errorMessage:"",
            type: WorkExperienceInputTypes.location,
            onChange: (ev?: any) => handleChange(ev, WorkExperienceInputTypes.location)
        }
    ];


    useEffect(() => {
        setSelectedExperience(sampleData.workExperience[0]);
    }, []);

    return <div id="work-experience-container" className="grid-items">


        {inputData.map((data, index) => {

            const inputClassName = index === inputData.length - 1 && index % 2 !== 0 ? "grid-item" : "grid-item-wide";
            return <div className={"grid-item"}>
                <AppInput
                    key={`profile-input-${data.type}-${index}`}
                    label={data.label}
                    value={data.value}
                    description={data.description}
                    // errorMessge={data.errorMessage}
                    placeholder={data.placeholder}
                    onChange={data.onChange}
                />
            </div>
        })}
    </div>
}