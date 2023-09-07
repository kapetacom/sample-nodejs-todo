const SESSION_KEY = 'SESSION';

export interface UserSession {
    id: string;
    userId: string;
    name: string;
}

export function getCurrentSession() {
    const json = localStorage.getItem(SESSION_KEY);
    if (!json) {
        return null;
    }
    return JSON.parse(json) as UserSession;
}
