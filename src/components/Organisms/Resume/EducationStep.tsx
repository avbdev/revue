import { FC, useEffect, useState } from "react";
import { sampleData } from "../../../template-collection/ResumeOne/data";
import { EducationDetail } from "../../../template-collection/ResumeOne/Interfaces";
import { AppInput } from "../../Molecules/AppInput";
import "./Profiles.css";

export enum EducationStepInputTypes {
  type = "type",
  title = "title",
  institute = "institute",
  majors = "majors",
  startDate = "startDate",
  endDate = "endDate",
  summary = "summary",
  location = "location",
}

export const EducationStep: FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Partial<EducationDetail>>();

  const handleChange = (ev?: any, inputType?: EducationStepInputTypes) => {
    const inputKey = inputType ? EducationStepInputTypes[inputType] : undefined;

    setSelectedExperience((prevState) => {
      return inputKey ? { ...prevState, [inputKey]: ev?.target.value } : prevState;
    });
  };

  const inputData = [
    {
      label: "Type",
      value: selectedExperience ? selectedExperience.type : "",
      description: "",
      placeholder: "Bachelor's, Masters, Ph.D, High School",
      // errorMessage:"",
      type: EducationStepInputTypes.type,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.type),
    },
    {
      label: "Majors",
      value: selectedExperience ? selectedExperience.majors : "",
      description: "", //`Your role at ${selectedExperience?.company?.name}`,
      placeholder: "Computer Science",
      // errorMessage:"",
      type: EducationStepInputTypes.majors,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.majors),
    },
    {
      label: "Title",
      value: selectedExperience ? selectedExperience.title : "",
      description: "",
      placeholder: "Applied Computer Science",
      // errorMessage:"",
      type: EducationStepInputTypes.title,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.title),
    },
    {
      label: "Institute",
      value: selectedExperience ? selectedExperience.institute : "",
      description: "",
      placeholder: "Northwest Missouri State University",
      // errorMessage:"",
      type: EducationStepInputTypes.title,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.title),
    },
    {
      label: "Start Date",
      value: selectedExperience ? selectedExperience.startDate : "",
      description: "",
      placeholder: "Aug 2020",
      // errorMessage:"",
      type: EducationStepInputTypes.startDate,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.startDate),
    },
    {
      label: "End Date",
      value: selectedExperience ? selectedExperience.endDate : "",
      description: "",
      placeholder: "Jan 2022",
      // errorMessage:"",
      type: EducationStepInputTypes.endDate,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.endDate),
    },
    {
      label: "City",
      value: selectedExperience && selectedExperience.location ? selectedExperience.location.city : "",
      description: "",
      placeholder: "Seattle, WA, 98052",
      // errorMessage:"",
      type: EducationStepInputTypes.location,
      onChange: (ev?: any) => handleChange(ev, EducationStepInputTypes.location),
    },
  ];

  useEffect(() => {
    setSelectedExperience(sampleData.educationDetails[0]);
  }, []);

  return (
    <div id="work-experience-container" className="grid-items">
      {inputData.map((data, index) => {
        const inputClassName = index === inputData.length - 1 && index % 2 !== 0 ? "grid-item" : "grid-item-wide";
        return (
          <div key={`edu-input-${data.type}-${index}-container`} className={"grid-item"}>
            <AppInput
              key={`edu-input-${data.type}-${index}`}
              label={data.label}
              value={data.value}
              description={data.description}
              // errorMessge={data.errorMessage}
              placeholder={data.placeholder}
              onChange={data.onChange}
            />
          </div>
        );
      })}
    </div>
  );
};
