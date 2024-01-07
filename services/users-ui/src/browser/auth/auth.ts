/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */
import {UserSession} from "../../.generated/entities/UserSession";
import {useCallback, useMemo} from "react";
import {UsersClient, useUsersClient} from "../.generated/clients/UsersClient";

const SESSION_KEY = 'SESSION';


export function getCurrentSession() {
    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}

export function useAuthenticatedUsersClient() {
    const session = getCurrentSession();
    const withBearerWhenAvailable = useCallback((client:UsersClient) => {
        return session?.token ? client.$withBearerToken(session.token) : client;
    }, [session?.token]);

    return useUsersClient(withBearerWhenAvailable);
}