

// write a mock login function that will be used in the LoginContext.tsx file
// the function should toggle the value of isLoggedIn in the LoginProvider
// the function should be called login
// the function should be exported
// it shall mock an api call

import AuthObj from "@/entities/AuthObj";

export const performLogin = async (userObj: AuthObj): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a successful API call
            if (userObj.validate() && userObj.username === "test" && userObj.password === "test") {
                resolve(true);
            } else {
                reject(new Error("Login failed"));
            }
        }, 1000); // Simulate a 1-second delay for the API call
    });
    }