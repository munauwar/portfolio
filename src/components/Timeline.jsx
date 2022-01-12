import React from 'react'
import './Timeline.css'
import { Chrono } from "react-chrono";
import data from "./TimelineData";

function Timeline() {
    return (
        <div className="timeline-holder">
            <Chrono 
                items={ data } 
                mode="VERTICAL"
                scrollable={true}
                borderLessCards={true}
                cardHeight={20}
                useReadMore={false}
                hideControls={true}
                slideShow={true}
                theme={{
                    primary: "white",
                    secondary: "red",
                    cardBgColor: "rgb(33, 30, 30)",
                    cardForeColor: "red",
                    titleColor: "black"
                }}
            />
        </div>
    )
}

export default Timeline
