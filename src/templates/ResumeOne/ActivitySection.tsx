import React from "react";
import { sampleData } from "./data";

export const ActivitySection: React.FC = () => {
    return <div className="activities">
        <div id="activities-title-header">
            <h2>Activities</h2>
        </div>
        <ul>
            {sampleData.primeActivities.map((primeActivity, index) => {
                return <li key={`${primeActivity.activityId}-${index}`}>
                    <div key={primeActivity.activityId}>
                        <p key={`${primeActivity.activityId}`}>{primeActivity.activitiyDescription}</p>
                    </div>
                </li>
            })
            }
        </ul>
    </div>
}