import React from "react";
import UserImage from "../img/user-img.png"

export const SignIn = () => {
    return (
        <>
            <div className="left">
                <img src={UserImage} alt="user image"></img>
            </div>
            <div className="right">
                <div className="singinform">
                    <h4>Sign In</h4>
                    <label for="emaila">Email Address</label>
                    <input type="email" name="email" />
                    <label for="password">Password</label>
                    <input type="password" name="password" />
                    <div className="signinbutton">
                        <input type="submit" value="Sign In" /><br />
                    </div>
                    <div className="createbutton">
                        <input type="submit" value="Create an account" />
                    </div>
                </div>
            </div>

        </>
    )
};
