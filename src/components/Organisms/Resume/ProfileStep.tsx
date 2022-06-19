import { Input, InputWrapper } from "@mantine/core";
import { FC, useEffect, useState } from "react";
import { sampleData } from "../../../template-collection/ResumeOne/data";
import { Profile } from "../../../template-collection/ResumeOne/Interfaces";
import { AppInput } from "../../Molecules/AppInput";
import "./Profiles.css"

export enum ProfileInputTypes {
    preferredName = "preferredName",
    role = "role",
    phone = "phone",
    email = "email",
    location = "location"
}

export const ProfileStep: FC = () => {

    // const { city, state, country } = sampleData.profile.location;
    // const addressData = `${city}, ${state}, ${country}`;

    const [profileData, setProfileData] = useState<Partial<Profile>>();

    // const [preferredName, setPreferredName] = useState(sampleData.profile.preferredName != "" ? sampleData.profile.preferredName : sampleData.profile.fullName);
    // const [role, setRole] = useState(sampleData.profile.role);
    // const [phone, setPhone] = useState(sampleData.profile.phone);
    // const [email, setEmail] = useState(sampleData.profile.email);
    // const [address, setAddress] = useState(addressData);


    useEffect(() => {
        setProfileData(sampleData.profile);
    }, []);

    const handleChange = (ev?: any, inputType?: ProfileInputTypes) => {

        const inputKey = inputType ? ProfileInputTypes[inputType] : undefined;
        setProfileData((prevState) => {
            return inputKey ? { ...prevState, [inputKey]: ev?.target.value } : prevState;
        })

    }



    const inputData = [
        {
            label: "Preferred Name",
            value: profileData ? profileData.preferredName : "",
            description: "This name will be used to generate template",
            placeholder: "Name",
            // errorMessage:"",
            type: ProfileInputTypes.preferredName,
            onChange: (ev?: any) => handleChange(ev, ProfileInputTypes.preferredName)
        },
        {
            label: "Role",
            value: profileData ? profileData.role : "",
            description: "",
            placeholder: "Role",
            // errorMessage:"",
            type: ProfileInputTypes.role,
            onChange: (ev?: any) => handleChange(ev, ProfileInputTypes.role)
        },
        {
            label: "Phone",
            value: profileData ? profileData.phone : "",
            description: "",
            placeholder: "Phone Number",
            // errorMessage:"",
            type: ProfileInputTypes.phone,
            onChange: (ev?: any) => handleChange(ev, ProfileInputTypes.phone)
        },
        {
            label: "Email",
            value: profileData ? profileData.email : "",
            description: "",
            placeholder: "Email Address",
            // errorMessage:"",
            type: ProfileInputTypes.email,
            onChange: (ev?: any) => handleChange(ev, ProfileInputTypes.email)
        },
        {
            label: "City",
            value: profileData && profileData.location ? profileData.location.city : "",
            description: "",
            placeholder: "Seattle, WA, 98052",
            // errorMessage:"",
            type: ProfileInputTypes.location,
            onChange: (ev?: any) => handleChange(ev, ProfileInputTypes.location)
        }
    ];

    return <>
        <div id="profile-step-container" className="grid-items">


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
    </>
}


