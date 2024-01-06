/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */
import {UserSession} from "../../.generated/entities/UserSession";
import {useMemo} from "react";
import {UsersClient} from "../.generated/clients/UsersClient";

const SESSION_KEY = 'SESSION';


export function getCurrentSession() {
    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}

export function useUsersClient() {
    const session = getCurrentSession();
    return useMemo(() => {
        return new UsersClient().$withBearerToken(session?.token);
    }, [session?.token]);
}