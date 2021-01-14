import React from "react";

export const SignIn = () => {
    return(
        <div>
            <label for="emailaddress">Email Address</label>
            <input type="email" name="emailaddress" />
            <label for="password">Password</label>
            <input type="password" name="password" />
            <input type="submit" value="Sign In" />
        </div>
    ) 
};
