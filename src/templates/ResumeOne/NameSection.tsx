import React from "react";
import { sampleData } from "./data";

export const NameSection: React.FC = () => {
    const { city, state, zip, country } = sampleData.profile.location;

    const address = `${city}, ${state}, ${zip}, ${country}`

    return <div className="name">

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
}