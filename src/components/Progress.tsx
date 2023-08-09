import React from "react";

import State from "./State";

export default function Progress() {
    return (
        <div className="progress">
            <div className="flex relative -mx-[10px]">
                <div className="flex-1 px-[10px]">
                    <State number={1} active={true}>Request</State>
                </div>
                <div className="flex-1 px-[10px]">
                    <State number={2}>Generate Thumbnail</State>
                </div>
                <div className="flex-1 px-[10px]">
                    <State number={3}>Attach Invoice</State>
                </div>  
                <div className="flex-1 px-[10px]">
                    <State number={4}>Share</State>
                </div>
            </div>
        </div>
    )
}