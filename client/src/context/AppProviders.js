import React from 'react'
import { AuthProvider } from './UserContext'
// import { UserProvider } from './user-context'
function AppProviders({ children }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
export default AppProviders