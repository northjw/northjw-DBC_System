import React from "react";
import { Header } from "../components/Header";

export const DeleteAccount = () => {
    return (
        <>
            <Header />
            <h4>Delete Account</h4>
            <input type="submit" value="Delete" />
        </>
    );
};
