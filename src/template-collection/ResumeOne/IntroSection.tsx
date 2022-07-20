import { Blockquote } from "@mantine/core";
import React from "react";
import { IResumeTemplate } from ".";
// import { sampleData } from "./data";

export const IntroSection: React.FC<IResumeTemplate> = ({ data: sampleData }) => {

    // return <div className="intro" style={{ display: "flex", flexWrap: "wrap" }}>
    //     {/* <code> */}
    //     {sampleData.introduction}
    //     {/* </code> */}
    // </div>

    return <div className="intro" style={{ display: "flex", flexWrap: "wrap" }}>
        <Blockquote style={{ fontSize: 12, fontWeight: 700 }}>
            {sampleData.introduction}
        </Blockquote>
    </div>
}