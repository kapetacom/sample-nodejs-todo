/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */
import {UserSession} from "../../.generated/entities/UserSession";
import {useMemo} from "react";
import {TasksClient} from "../.generated/clients/TasksClient";

const SESSION_KEY = 'SESSION';


export function getCurrentSession() {

    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}

export function useTaskClient() {
    const session = getCurrentSession();
    return useMemo(() => {
        return new TasksClient().withBearerToken(session?.token);
    }, [session?.token]);
}