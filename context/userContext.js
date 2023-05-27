import React from "react";

//step 1 create the user context
const userContext = React.createContext()

const UserProvider = userContext.Provider
const UserConsumer = userContext.Consumer

export { UserProvider, UserConsumer}