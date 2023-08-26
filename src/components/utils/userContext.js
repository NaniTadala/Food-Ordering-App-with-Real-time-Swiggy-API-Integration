import { createContext } from "react";

const userContext = createContext({
    user: {
        name: "Swiggy",
        email: "support@email.com"
    }
})

export default userContext;