import React from "react";

export const SignIn = () => {
    return(
        <div className="signin">
            <h4>Sign In</h4>
            <label for="emaila">Email Address</label>
            <input type="email" name="email" />
            <label for="password">Password</label>
            <input type="password" name="password" />
            <input type="submit" value="Sign In" /><br />
            <input type="submit" value="Create an account" />
        </div>
    ) 
};
