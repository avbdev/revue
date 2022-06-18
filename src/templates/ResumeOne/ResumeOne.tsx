import React from "react";
import { sampleData } from "./data";
import "./ResumeOne.css"

const ResumeOne: React.FC = () => {
    const { city, state, zip, country } = sampleData.profile.location;

    const address = `${city}, ${state}, ${zip}, ${country}`
    return <div id="template-resume-one">



        <div id="resume-content">

            <div className="name">

                <div id="profile-name-section">
                    <div><h1>{sampleData.profile.preferredName}</h1></div>
                    <code>{sampleData.profile.role}</code>
                </div>

                <div id="profile-info-section">
                    <div className="phone-number">
                        <code>
                            {sampleData.profile.phone}
                        </code>
                    </div>

                    <div className="email">
                        <code>
                            {sampleData.profile.email}
                        </code>
                    </div>

                    <div className="address">
                        <code>
                            {address}
                        </code>
                    </div>


                </div>
            </div>

            <div className="work-experience">
                <div id="work-title-header">
                    Work Experience
                </div>

                {sampleData.workExperience.map((wex, index)=>{

                    return <div key={wex.wexId}>
                        <div key={`${wex.wexId}-company-details`}>
                            <p><strong>{wex.companyName}:</strong> {wex.role}, {wex.startDate} till {wex.endDate}</p>
                            
                        </div>

                        <div key={`${wex.wexId}-location-details`}>
                            <code>
                                {wex.location.city}, {wex.location.state}, {wex.location.country}
                            </code>
                        </div>
                    </div>
                })}
            </div>

            <div className="projects">
                Projects
            </div>

            <div className="activities">
                Activities
            </div>
        </div>

        <div id="resume-sidebar">


            <div className="intro">
                <blockquote>
                    <code>
                        {sampleData.introduction}
                    </code>
                </blockquote>
            </div>

            <div className="education">
                NWMSU
            </div>

            <div className="skills">
                React
            </div>
        </div>





    </div>

}

export default ResumeOne