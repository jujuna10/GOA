import React from "react";

function PersonInfo(props){
    return (
    <div>
        <p>{props.name}</p>
        <p>{props.lastName}</p>
        <p>{props.email}</p>
    </div>

    )


}

export default PersonInfo