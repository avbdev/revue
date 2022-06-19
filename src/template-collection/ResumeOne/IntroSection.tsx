import { Blockquote } from "@mantine/core";
import React from "react";
import { sampleData } from "./data";

export const IntroSection: React.FC = () => {

    // return <div className="intro" style={{ display: "flex", flexWrap: "wrap" }}>
    //     {/* <code> */}
    //     {sampleData.introduction}
    //     {/* </code> */}
    // </div>

    return <div className="intro" style={{ display: "flex", flexWrap: "wrap" }}>
        <Blockquote>
            {sampleData.introduction}
        </Blockquote>
    </div>
}