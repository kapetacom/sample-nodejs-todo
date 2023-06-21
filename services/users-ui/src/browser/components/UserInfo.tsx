import React from 'react';
import {getCurrentSession} from "../auth/auth";
export const UserInfo = () => {
    const session = getCurrentSession()
    if (!session) {
        return <div>Not logged in</div>
    }
    return (
        <div>
            <h1>User Info</h1>
            <div>
                Your name: {session.name}
            </div>
        </div>
    )
}