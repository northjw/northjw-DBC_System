import React, { Component } from "react";
import { Header } from "../components/Header";
import { DeleteAccount } from "../components/DeleteAccount";

export default class Settings extends Component {
    render() {
        return(
            <>
            <Header />
            <DeleteAccount />
            </>
        )
    }
}
