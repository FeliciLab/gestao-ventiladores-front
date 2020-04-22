import React from "react";

export default function TestHeader (props) {

    return(
        <div>
            <h2>
                TestHeader
                {props.subtitle}
            </h2>
        </div>
    )
}