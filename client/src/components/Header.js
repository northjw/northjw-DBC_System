import React from "react";

import TopGlassCover from "../img/svg/top-glass-cover.svg";

export const Header = () => {
    return (
        <div className="top-container">
            <div className="top-glass-cover">
                <image src={TopGlassCover} />
            </div>
            <div className="header"></div>
            <div className="underline"></div>
        </div>
    );
};