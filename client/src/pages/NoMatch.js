import React from "react";

function NoMatch() {
    return (
        <>
           <div className="nomatch">
            <h2>Ooops! Page not found. </h2>
            <h1>404</h1>
            <h3>We can't find the page you're looking for.</h3>
            <button>Go Back</button>
           </div>
        </>
    );
}

export default NoMatch;
