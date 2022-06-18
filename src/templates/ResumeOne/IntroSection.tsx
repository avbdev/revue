import React from "react";
import { sampleData } from "./data";

export const IntroSection: React.FC = () => {

    return <div className="intro">
        <blockquote>
            <code>
                {sampleData.introduction}
            </code>
        </blockquote>
    </div>
}