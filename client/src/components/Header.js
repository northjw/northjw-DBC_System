import React from "react";
import { Link } from 'react-router-dom';

import TopGlassCover from "../img/svg/top-glass-cover.svg";
import { SignIn } from "./SignIn";

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
