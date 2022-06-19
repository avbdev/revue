import { FC, useEffect, useState } from "react";
import { sampleData } from "../../../template-collection/ResumeOne/data";
import { EducationDetail, Skill } from "../../../template-collection/ResumeOne/Interfaces";
import { AppInput } from "../../Molecules/AppInput";
import "./Profiles.css";

export enum SkillsInputTypes {
  type = "type",
  skillCategory = "skillCategory",
  customSkills = "customSkills",
}

export const SkillsStep: FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Partial<Skill>>();

  const handleChange = (ev?: any, inputType?: SkillsInputTypes) => {
    const inputKey = inputType ? SkillsInputTypes[inputType] : undefined;

    setSelectedSkill((prevState) => {
      return inputKey ? { ...prevState, [inputKey]: ev?.target.value } : prevState;
    });
  };

  const inputData = [
    // {
    //     label: "Type",
    //     value: selectedSkill ? selectedSkill.type : "",
    //     description: "",
    //     placeholder: "",
    //     // errorMessage:"",
    //     type: SkillsInputTypes.type,
    //     onChange: (ev?: any) => handleChange(ev, SkillsInputTypes.type)
    // },
    {
      label: "Skill Category",
      value: selectedSkill ? selectedSkill.skillCategory : "",
      description: "", //`Your role at ${selectedExperience?.company?.name}`,
      placeholder: "Database",
      // errorMessage:"",
      type: SkillsInputTypes.skillCategory,
      onChange: (ev?: any) => handleChange(ev, SkillsInputTypes.skillCategory),
    },
    {
      label: "Skills",
      value: selectedSkill ? selectedSkill.customSkills : "",
      description: "",
      placeholder: "MS SQL, MySQL, MongoDB",
      // errorMessage:"",
      type: SkillsInputTypes.customSkills,
      onChange: (ev?: any) => handleChange(ev, SkillsInputTypes.customSkills),
    },
  ];

  useEffect(() => {
    setSelectedSkill(sampleData.skills[0]);
  }, []);

  useEffect(() => {
    console.log("Selected Skill", selectedSkill);
  }, [selectedSkill]);

  return (
    <div id="work-experience-container" className="grid-items">
      {inputData.map((data, index) => {
        const inputClassName = index === inputData.length - 1 && index % 2 !== 0 ? "grid-item" : "grid-item-wide";
        return (
          <div key={`skills-input-${data.type}-${index}-container`} className={"grid-item"}>
            <AppInput
              key={`skills-input-${data.type}-${index}`}
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
