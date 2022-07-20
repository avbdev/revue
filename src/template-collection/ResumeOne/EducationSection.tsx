import React from "react";
import { IResumeTemplate } from ".";
// import { sampleData } from "./data";

export const EducationSection: React.FC<IResumeTemplate> = ({ data: sampleData }) => {

    return <div className="education">
        <div id="education-title-header">
            <h2>Education</h2>
        </div>

        {sampleData.educationDetails.map((eduDetail, index) => {

            return <div key={eduDetail.objectId}>
                <div key={`${eduDetail.objectId}-title-container`}>
                    <p key={`${eduDetail.objectId}-title`}><strong>{eduDetail.title}</strong></p>
                </div>

                <div key={`${eduDetail.objectId}-timeline-container`}>
                    <p key={`${eduDetail.objectId}-timeline`}><code>{eduDetail.startDate} - {eduDetail.endDate}</code></p>
                </div>

                <div key={`${eduDetail.objectId}-institute-container`}>
                    {/* <p key={`${eduDetail.objectId}-institute`}>{eduDetail.institute}, {eduDetail.location.city === "" ? eduDetail.location.country : eduDetail.location.city}</p> */}
                    <p key={`${eduDetail.objectId}-institute`}>{eduDetail.institute}, {eduDetail.location.country}</p>
                </div>
            </div>
        })}
    </div>
}