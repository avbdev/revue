import React from "react";
import { sampleData } from "./data";

export const WorkSection: React.FC = () => {

    return <div className="work-experience">
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
}