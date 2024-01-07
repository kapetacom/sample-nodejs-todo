/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */
import {UserSession} from "../../.generated/entities/UserSession";
import {useCallback} from "react";
import {TasksClient, useTasksClient} from "../.generated/clients/TasksClient";

const SESSION_KEY = 'SESSION';


export function getCurrentSession() {

    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}

export function useAuthenticatedTaskClient() {
    const session = getCurrentSession();
    const withBearerWhenAvailable = useCallback((client:TasksClient) => {
        return session?.token ? client.$withBearerToken(session.token) : client;
    }, [session?.token]);

    return useTasksClient(withBearerWhenAvailable);
}