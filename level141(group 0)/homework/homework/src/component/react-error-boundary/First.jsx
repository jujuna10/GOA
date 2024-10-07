import React from "react";

function FallbackComponent({error,resetErrorBoundary}){
    return(
        <div>
            <p>fallback component</p>
            <button onClick={resetErrorBoundary}>reset</button>
        </div>
    )
}