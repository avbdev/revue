import React from "react";
import { IResumeTemplate } from ".";
// import { sampleData } from "./data";
import "./NameSection.css";

export const NameSection: React.FC<IResumeTemplate> = ({ data: sampleData }) => {
  const { city, state, zip, country } = sampleData.profile.location;
  const address = `${city}, ${state}, ${zip}, ${country}`;

  return (
    <div className="name">
      <div id="profile-name-section">
        <div className="profile-name-section">
          <strong>{sampleData.profile.preferredName}</strong>
        </div>
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
            <a href={`mailto:${sampleData.profile.email}`}>{sampleData.profile.email}</a>
          </code>
        </div>

        <div className="address">
          <code>
            <address>{address}</address>
          </code>
        </div>
      </div>
    </div>
  );
};
