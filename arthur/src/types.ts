export interface UserSession {
  name: string;
  token: string;
}

declare global {
  namespace Express {
    interface User extends UserSession { }
  }
}

export class AuthError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, AuthError.prototype);
  }
}
