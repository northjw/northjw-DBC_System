import React, { Component } from "react";

import { Header } from "../components/Header";
import { SignIn } from "../components/SignIn";

export default class Dashboard extends Component {
    render() {
        return (
            <>
                <Header />
                <SignIn />
            </>
        );
    }
}
