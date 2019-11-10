import { UserSession } from './types';

const sessions: UserSession[] = [];

/** Remember a user so we can verify them later */
export function addUserSession(session: UserSession) {
  sessions.push(session);
}

export function getUserSession(token: string) {
  return sessions.find((s) => s.token === token);
}
