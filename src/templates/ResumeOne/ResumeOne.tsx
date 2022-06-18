import React from "react";
import { sampleData } from "./data";
// import "./ResumeOne.css"

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
                            <a href={`tel:${sampleData.profile.phone}`}>{sampleData.profile.phone}</a>
                        </code>
                    </div>

                    <div className="email">
                        <code>
                            <a href={`mailto:${sampleData.profile.email}`}>
                                {sampleData.profile.email}
                            </a>
                        </code>
                    </div>

                    <div className="address">
                        <code>
                            <address>
                                {address}
                            </address>
                        </code>
                    </div>


                </div>
            </div>

            <div className="work-experience">
                <div id="work-title-header">
                    <h2> Work Experience</h2>
                </div>

                {sampleData.workExperience.map((wex, index) => {

                    return <div key={wex.wexId}>
                        <div key={`${wex.wexId}-company-details`}>
                            <p><strong>{wex.companyName}:</strong> {wex.role}, {wex.startDate} - {wex.endDate}</p>

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
                <div id="project-title-header">
                    <h2>Projects</h2>
                </div>
                {sampleData.projects.map((project, index) => {
                    return <div key={project.projectId}>
                        <div key={`${project.projectId}-project-name`}>
                            <p><strong>{project.projectName}</strong></p>

                        </div>

                        <div key={`${project.projectId}-project-role`}>
                            <code>
                                Role: {project.role}
                            </code>
                        </div>
                    </div>
                })
                }

            </div>

            <div className="activities">
                <div id="activities-title-header">
                    <h2>Activities</h2>
                </div>
                <ul>
                    {sampleData.primeActivities.map((primeActivity, index) => {
                        return <li><div key={primeActivity.activityId}>

                            <p key={`${primeActivity.activityId}`}>{primeActivity.activitiyDescription}</p>

                        </div>
                        </li>
                    })
                    }
                </ul>
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
                            <p key={`${eduDetail.objectId}-institute`}>{eduDetail.institute}, {eduDetail.location.city === "" ? eduDetail.location.country : eduDetail.location.city}</p>
                        </div>
                    </div>
                })}
            </div>

            <div className="skills">
                <div id="skills-title-header">
                    <h2>Technical Skills</h2>
                </div>

                {sampleData.skills.map((skill, index) => {
                    return <div key={skill.skillId}>
                        <div key={`${skill.skillId}-skill-category`}>
                            <p><strong>{skill.skillCategory}</strong></p>

                        </div>

                        <div key={`${skill.skillId}-skill-name`}>
                            <code>
                                {skill.customSkills.map((customSkill, index) => {

                                    return <p key={`${skill.skillId}-${index}}`}>{customSkill}</p>
                                })}
                            </code>
                        </div>
                    </div>
                })}
            </div>
        </div>





    </div>

}

export default ResumeOne