/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */
import {UserSession} from "../../entities/UserSession";

const SESSION_KEY = 'SESSION';


export function getCurrentSession() {
    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}